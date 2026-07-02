function HideModal({athlete, onClose, onHide}) {
  const [reason, setReason] = useState("Athlete Declined");
  const [note, setNote] = useState("");
  if (!athlete) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:420}}>
        <h3 style={{margin:"0 0 12px",color:"#e8eaed",fontSize:18}}>Hide Athlete</h3>
        <p style={{color:"#78909c",fontSize:13,margin:"0 0 16px"}}>{athlete.first} {athlete.last} (TO# {athlete.to})</p>
        <div style={{marginBottom:12}}>
          <label style={{color:"#aaa",fontSize:12,display:"block",marginBottom:6}}>Reason</label>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {HIDE_REASONS.map(r => <Btn key={r} sm outline={reason!==r} color={reason===r?"#ffa726":"#546e7a"} onClick={()=>setReason(r)}>{r}</Btn>)}
          </div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={{color:"#aaa",fontSize:12,display:"block",marginBottom:4}}>Note (optional)</label>
          <textarea value={note} onChange={e=>setNote(e.target.value)} rows={3} placeholder="Add any notes..."
            style={{width:"100%",padding:"8px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}} />
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} color="#2a2e38">Cancel</Btn>
          <Btn onClick={()=>{onHide(athlete.id,reason,note);onClose();}} color="#ef5350">Hide Athlete</Btn>
        </div>
      </div>
    </div>
  );
}

function CSVImportModal({onClose, onImport}) {
  const [csvText, setCsvText] = useState("");
  const [preview, setPreview] = useState([]);
  const fileRef = useRef();
  const handleFile = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => { const t = ev.target.result; setCsvText(t); setPreview(parseCSV(t).slice(0,5)); };
    reader.readAsText(file);
  };
  const handlePaste = t => { setCsvText(t); setPreview(parseCSV(t).slice(0,5)); };
  const total = csvText ? parseCSV(csvText).length : 0;
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:640,maxHeight:"85vh",overflow:"auto"}}>
        <h3 style={{margin:"0 0 4px",color:"#e8eaed",fontSize:18}}>Import Athletes from CSV</h3>
        <p style={{color:"#78909c",fontSize:13,margin:"0 0 16px"}}>Upload a CSV file or paste data. Columns: First Name, Last Name, Division, Primary Position, Alt Position, Phone, Email</p>
        <div style={{display:"flex",gap:12,marginBottom:16}}>
          <input type="file" accept=".csv,.txt" ref={fileRef} onChange={handleFile} style={{display:"none"}} />
          <Btn onClick={()=>fileRef.current?.click()}>Choose CSV File</Btn>
          <span style={{color:"#546e7a",fontSize:13,alignSelf:"center"}}>or paste below</span>
        </div>
        <textarea value={csvText} onChange={e=>handlePaste(e.target.value)} rows={6}
          placeholder="first_name,last_name,division,primary_position,alt_position,phone,email"
          style={{width:"100%",padding:"10px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:12,fontFamily:"monospace",resize:"vertical",boxSizing:"border-box",marginBottom:12}} />
        {preview.length > 0 && (
          <div style={{marginBottom:16}}>
            <div style={{fontSize:12,color:"#66bb6a",fontWeight:700,marginBottom:6}}>Preview ({total} athletes found):</div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",fontSize:12,borderCollapse:"collapse"}}>
                <thead><tr style={{borderBottom:"1px solid #2a2e38"}}>{["First","Last","Division","Pos"].map(h=><th key={h} style={{padding:"4px 8px",color:"#78909c",textAlign:"left",fontSize:11}}>{h}</th>)}</tr></thead>
                <tbody>{preview.map((p,i)=><tr key={i} style={{borderBottom:"1px solid #1e222b"}}><td style={{padding:"4px 8px",color:"#e8eaed"}}>{p.first}</td><td style={{padding:"4px 8px",color:"#e8eaed"}}>{p.last}</td><td style={{padding:"4px 8px"}}>{p.division}</td><td style={{padding:"4px 8px",color:"#aaa"}}>{p.primaryPos}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        )}
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} color="#2a2e38">Cancel</Btn>
          <Btn onClick={()=>{if(total>0){onImport(parseCSV(csvText));onClose();}}} color="#66bb6a" disabled={total===0}>Import {total} Athletes</Btn>
        </div>
      </div>
    </div>
  );
}

function HiddenView({athletes, onUnhide, onSelect}) {
  const hidden = athletes.filter(a => a.hidden);
  const grouped = {};
  hidden.forEach(a => { const r = a.hideReason||"Other"; if (!grouped[r]) grouped[r]=[]; grouped[r].push(a); });
  return (
    <div>
      <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px",color:"#e8eaed"}}>Hidden Athletes ({hidden.length})</h2>
      {hidden.length === 0 && <div style={{padding:40,textAlign:"center",color:"#444"}}>No hidden athletes</div>}
      {Object.entries(grouped).map(([reason, list]) => (
        <div key={reason} style={{marginBottom:20}}>
          <div style={{fontSize:13,fontWeight:700,color:"#ffa726",marginBottom:8}}>{reason} ({list.length})</div>
          {list.map(a => (
            <div key={a.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#1a1a10",border:"1px solid #ffa72622",borderRadius:8,marginBottom:4}}>
              <span style={{fontFamily:"monospace",fontSize:11,color:"#4fc3f7"}}>#{a.to}</span>
              <span style={{fontWeight:600,fontSize:13,color:"#e8eaed",flex:1,cursor:"pointer"}} onClick={()=>onSelect(a)}>{a.first} {a.last}</span>
              <Badge c="#78909c">{a.ageGroup}s</Badge>
              {a.hideNote && <span style={{fontSize:11,color:"#888",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{a.hideNote}</span>}
              <Btn sm onClick={()=>onUnhide(a.id)} color="#66bb6a">Unhide</Btn>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
