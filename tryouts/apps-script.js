// =============================================================
// MID TN VOLLEYBALL — Google Apps Script Middleware
// Deploy as: Extensions > Apps Script > Deploy > Web App
//   - Execute as: Me
//   - Who has access: Anyone
// Copy the Web App URL into tryouts/index.html settings
// =============================================================

const SHEET_NAME = "Athletes";
const META_SHEET = "Meta";

// ------------------------------------------------------------
// GET  →  load athlete data
// ------------------------------------------------------------
function doGet(e) {
  try {
    const action = e.parameter.action || "getAthletes";

    if (action === "getAthletes") {
      return respond({ ok: true, athletes: loadAthletes() });
    }

    if (action === "ping") {
      return respond({ ok: true, message: "Mid TN VBC Tryout API v1.0", timestamp: new Date().toISOString() });
    }

    return respond({ ok: false, error: "Unknown action" });

  } catch (err) {
    return respond({ ok: false, error: err.message });
  }
}

// ------------------------------------------------------------
// POST  →  save athlete data / update single athlete
// ------------------------------------------------------------
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;

    if (action === "saveAthletes") {
      saveAthletes(body.athletes);
      logMeta("Last sync: " + new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
      return respond({ ok: true, saved: body.athletes.length });
    }

    if (action === "updateAthlete") {
      updateSingleAthlete(body.athlete);
      return respond({ ok: true, updated: body.athlete.id });
    }

    if (action === "clearAll") {
      clearAthletes();
      return respond({ ok: true, message: "All data cleared" });
    }

    return respond({ ok: false, error: "Unknown action" });

  } catch (err) {
    return respond({ ok: false, error: err.message });
  }
}

// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

const HEADERS = [
  "id","to","first","last","dob","division","ageGroup",
  "primaryPos","altPos","phone","email",
  "posCategory","status","teamAssignment","coachPos",
  "hidden","hideReason","hideNote",
  // metrics stored as JSON string
  "metrics_station1","metrics_station2","metrics_station3",
  "metrics_station4","metrics_station5",
  "totalScore","lastUpdated"
];

function saveAthletes(athletes) {
  const sheet = getOrCreateSheet(SHEET_NAME);
  sheet.clearContents();

  // Write headers
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold")
    .setBackground("#1a1d24").setFontColor("#4fc3f7");

  if (!athletes || athletes.length === 0) return;

  const rows = athletes.map(a => {
    const m = a.metrics || {};
    const score = calcTotalScore(m);
    return [
      a.id || "",
      a.to || "",
      a.first || "",
      a.last || "",
      a.dob || "",
      a.division || "",
      a.ageGroup || "",
      a.primaryPos || "",
      a.altPos || "",
      a.phone || "",
      a.email || "",
      a.posCategory || "",
      a.status || "pending",
      a.teamAssignment || "",
      a.coachPos || "",
      a.hidden ? "TRUE" : "FALSE",
      a.hideReason || "",
      a.hideNote || "",
      JSON.stringify(m.station1 || []),
      JSON.stringify(m.station2 || []),
      JSON.stringify(m.station3 || []),
      JSON.stringify(m.station4 || []),
      JSON.stringify(m.station5 || []),
      score || "",
      new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
    ];
  });

  sheet.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);

  // Auto-resize columns
  sheet.autoResizeColumns(1, HEADERS.length);
}

function loadAthletes() {
  const sheet = getOrCreateSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  if (data.length < 2) return []; // no data beyond headers

  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });

    // Parse metrics back from JSON strings
    const metrics = {};
    ["station1","station2","station3","station4","station5"].forEach(sk => {
      const raw = obj["metrics_" + sk];
      try { metrics[sk] = JSON.parse(raw || "[]"); } catch(e) { metrics[sk] = []; }
      delete obj["metrics_" + sk];
    });

    return {
      ...obj,
      hidden: obj.hidden === "TRUE" || obj.hidden === true,
      metrics,
    };
  }).filter(a => a.first || a.last);
}

function updateSingleAthlete(athlete) {
  const sheet = getOrCreateSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return;

  const idIdx = data[0].indexOf("id");
  for (let i = 1; i < data.length; i++) {
    if (data[i][idIdx] === athlete.id) {
      const m = athlete.metrics || {};
      const score = calcTotalScore(m);
      const rowData = [
        athlete.id || "", athlete.to || "", athlete.first || "", athlete.last || "",
        athlete.dob || "", athlete.division || "", athlete.ageGroup || "",
        athlete.primaryPos || "", athlete.altPos || "", athlete.phone || "", athlete.email || "",
        athlete.posCategory || "", athlete.status || "pending",
        athlete.teamAssignment || "", athlete.coachPos || "",
        athlete.hidden ? "TRUE" : "FALSE", athlete.hideReason || "", athlete.hideNote || "",
        JSON.stringify(m.station1 || []), JSON.stringify(m.station2 || []),
        JSON.stringify(m.station3 || []), JSON.stringify(m.station4 || []),
        JSON.stringify(m.station5 || []),
        score || "",
        new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
      ];
      sheet.getRange(i + 1, 1, 1, rowData.length).setValues([rowData]);
      return;
    }
  }
}

function clearAthletes() {
  const sheet = getOrCreateSheet(SHEET_NAME);
  sheet.clearContents();
}

function logMeta(message) {
  try {
    const sheet = getOrCreateSheet(META_SHEET);
    sheet.appendRow([new Date(), message]);
  } catch(e) {}
}

function calcTotalScore(metrics) {
  if (!metrics) return null;
  const keys = ["station1","station2","station3","station4","station5"];
  let sum = 0, count = 0;
  keys.forEach(k => {
    const vals = (metrics[k] || []).filter(v => v !== "" && v !== null && !isNaN(Number(v))).map(Number);
    if (vals.length > 0) {
      sum += vals.reduce((a,b) => a + b, 0) / vals.length;
      count++;
    }
  });
  return count > 0 ? (sum / count).toFixed(1) : null;
}

// =============================================================
// SETUP: Run this once to initialize the spreadsheet
// =============================================================
function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Athletes sheet
  const athleteSheet = getOrCreateSheet(SHEET_NAME);
  if (athleteSheet.getLastRow() === 0) {
    athleteSheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    athleteSheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold").setBackground("#1a1d24").setFontColor("#4fc3f7");
  }

  // Meta sheet
  const metaSheet = getOrCreateSheet(META_SHEET);
  if (metaSheet.getLastRow() === 0) {
    metaSheet.appendRow(["Timestamp", "Event"]);
    metaSheet.appendRow([new Date(), "Spreadsheet initialized"]);
  }

  SpreadsheetApp.getUi().alert("Mid TN VBC Tryout Sheet setup complete!");
}
