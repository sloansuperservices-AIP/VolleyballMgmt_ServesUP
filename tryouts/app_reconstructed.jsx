function TryoutApp() {
  const [user, setUser] = useState(null); // {role, label, station}
  const [athletes, setAthletes] = useState(() => initAthletes(RAW_ATHLETES));
  const [activeAge, setActiveAge] = useState("12");
  const [view, setView] = useState("depth");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [emailPlayer, setEmailPlayer] = useState(null);
  const [emailTeam, setEmailTeam] = useState("");
  const [hidePlayer, setHidePlayer] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [search, setSearch] = useState("");

  const updateAthlete = useCallback((id, updates) => {
    setAthletes(prev => prev.map(a => a.id === id ? {...a,...updates} : a));
    setSelectedPlayer(p => p?.id === id ? {...p,...updates} : p);
  }, []);
  const updateMetric = useCallback((id, stationKey, values) => {
    setAthletes(prev => prev.map(a => a.id === id ? {...a, metrics:{...a.metrics, [stationKey]:values}} : a));
    setSelectedPlayer(p => p?.id === id ? {...p, metrics:{...p.metrics, [stationKey]:values}} : p);
  }, []);
  const hideAthlete = useCallback((id, reason, note) => updateAthlete(id, {hidden:true, hideReason:reason, hideNote:note, teamAssignment:null}), [updateAthlete]);
  const unhideAthlete = useCallback((id) => updateAthlete(id, {hidden:false, hideReason:"", hideNote:""}), [updateAthlete]);
  const importAthletes = useCallback((newRaw) => setAthletes(prev => [...prev, ...initAthletes(newRaw)]), []);
  const handleSendEmail = useCallback((athlete, body) => {
    updateAthlete(athlete.id, {status: athlete.status==="pending"?"contacted":athlete.status});
    if (athlete.email) { window.open(`mailto:${athlete.email}?subject=${encodeURIComponent(`Mid TN VBC - Offer for ${athlete.first} ${athlete.last}`)}&body=${encodeURIComponent(body)}`, "_blank"); }
    else { navigator.clipboard?.writeText(body); }
  }, [updateAthlete]);

  // If not logged in, show login
  if (!user) return <LoginScreen onLogin={setUser} />;

  // If station user, show station entry view
  if (user.role === "station") {
    return <StationEntryView station={user.station} athletes={athletes} updateMetric={updateMetric} onLogout={()=>setUser(null)} />;
  }

  // Head Coach view below
  const ageAthletes = athletes.filter(a => a.ageGroup === activeAge && !a.hidden);
  const grouped = {setter:[],middle:[],outside:[],defense:[],unsorted:[]};
  ageAthletes.forEach(a => { if (!a.teamAssignment) (grouped[a.posCategory]||grouped.unsorted).push(a); });
  const teamRosters = {};
  SKILL_LEVELS.forEach(lvl => { teamRosters[`${activeAge}-${lvl}`] = ageAthletes.filter(a => a.teamAssignment === `${activeAge}-${lvl}`); });
  const filteredAll = (() => {
    let list = athletes.filter(a => a.division && !a.hidden);
    if (search) { const s = search.toLowerCase(); list = list.filter(a => a.first.toLowerCase().includes(s)||a.last.toLowerCase().includes(s)||a.to.includes(s)||a.division.toLowerCase().includes(s)||a.primaryPos.toLowerCase().includes(s)); }
    return list;
  })();
  const allTeamsData = {};
  AGE_GROUPS.forEach(age => { allTeamsData[age] = {}; SKILL_LEVELS.forEach(lvl => { allTeamsData[age][lvl] = athletes.filter(a => a.teamAssignment===`${age}-${lvl}` && !a.hidden); }); });
  const totalReg = athletes.filter(a=>a.division&&!a.hidden).length;
  const totalAssigned = athletes.filter(a=>a.teamAssignment&&!a.hidden).length;
  const totalAccepted = athletes.filter(a=>a.status==="accepted"&&!a.hidden).length;
  const totalHidden = athletes.filter(a=>a.hidden).length;
  const showAgeNav = ["depth","teams","tryout"].includes(view);

  return (
    <div style={{fontFamily:"'Inter',-apple-system,sans-serif",background:"#0d1017",color:"#e8eaed",minHeight:"100vh"}}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{background:"linear-gradient(135deg,#0d1017,#1a1d24)",borderBottom:"1px solid #1e222b",padding:"16px 24px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div>
            <h1 style={{margin:0,fontSize:22,fontWeight:800,letterSpacing:-.5}}>
              <span style={{color:"#4fc3f7"}}>MID TN</span> <span style={{color:"#78909c"}}>VBC</span> Tryout Manager
            </h1>
            <div style={{fontSize:12,color:"#546e7a",marginTop:2}}>Head Coach View | 2026-2027</div>
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
            {[{l:`${totalReg} Reg`,c:"#4fc3f7"},{l:`${totalAssigned} Assigned`,c:"#66bb6a"},{l:`${totalAccepted} Accepted`,c:"#ab47bc"},{l:`${totalHidden} Hidden`,c:"#ffa726"}].map(s=><Badge key={s.l} color={s.c}>{s.l}</Badge>)}
            <Btn small onClick={()=>setShowImport(true)} color="#66bb6a">+ Import CSV</Btn>
            <Btn small onClick={()=>setUser(null)} color="#ef5350" outline>Log Out</Btn>
          </div>
        </div>
        <div style={{display:"flex",gap:6,marginTop:14,flexWrap:"wrap",alignItems:"center"}}>
          {[{key:"allreg",label:"All Reg"},{key:"depth",label:"Depth Charts"},{key:"tryout",label:"Tryout Results"},{key:"teams",label:"Team Builder"},{key:"allteams",label:"All Teams"},{key:"hidden",label:`Hidden (${totalHidden})`}].map(n=>(
            <button key={n.key} onClick={()=>setView(n.key)} style={{padding:"7px 16px",borderRadius:6,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,background:view===n.key?"#1565c0":"#1a1d24",color:view===n.key?"#fff":"#78909c"}}>{n.label}</button>
          ))}
          <div style={{flex:1}} />
          {showAgeNav && <div style={{display:"flex",gap:3,background:"#12151c",borderRadius:6,padding:2}}>
            {AGE_GROUPS.map(ag=><button key={ag} onClick={()=>setActiveAge(ag)} style={{padding:"5px 14px",borderRadius:4,border:"none",cursor:"pointer",fontSize:13,fontWeight:700,background:activeAge===ag?"#4fc3f7":"transparent",color:activeAge===ag?"#0d1017":"#546e7a"}}>{ag}s</button>)}
          </div>}
        </div>
      </div>

      <div style={{padding:"20px 24px"}}>
        {/* ALL REG */}
        {view === "allreg" && <div>
          <div style={{display:"flex",gap:12,marginBottom:16,alignItems:"center"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, TO#, position, division..." style={{flex:1,maxWidth:400,padding:"8px 14px",background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:8,color:"#e8eaed",fontSize:13}} />
            <span style={{color:"#546e7a",fontSize:13}}>{filteredAll.length} athletes</span>
          </div>
          <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead><tr style={{borderBottom:"1px solid #2a2e38"}}>{["TO#","First","Last","Div","POS","Alt","Phone","Email","Score","Status",""].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",color:"#78909c",fontSize:11,fontWeight:600,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{filteredAll.map(a => {const sc=getTotalScore(a.metrics); return (
              <tr key={a.id} onClick={()=>setSelectedPlayer(a)} style={{borderBottom:"1px solid #1a1d24",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background="#1a1d24"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"8px 10px",fontFamily:"monospace",color:"#4fc3f7"}}>{a.to}</td><td style={{padding:"8px 10px"}}>{a.first}</td><td style={{padding:"8px 10px"}}>{a.last}</td>
                <td style={{padding:"8px 10px"}}><Badge color="#78909c">{a.ageGroup}s</Badge></td><td style={{padding:"8px 10px"}}><Badge color="#4fc3f7">{posAbbr(a.primaryPos)}</Badge></td>
                <td style={{padding:"8px 10px",color:"#78909c"}}>{posAbbr(a.altPos)}</td><td style={{padding:"8px 10px",color:"#78909c",fontSize:12}}>{a.phone}</td>
                <td style={{padding:"8px 10px",color:"#78909c",fontSize:12,maxWidth:180,overflow:"hidden",textOverflow:"ellipsis"}}>{a.email}</td>
                <td style={{padding:"8px 10px"}}>{sc?<Badge color="#66bb6a">{sc}</Badge>:<span style={{color:"#333"}}>---</span>}</td>
                <td style={{padding:"8px 10px"}}><StatusBadge status={a.status}/></td>
                <td style={{padding:"8px 10px"}}><Btn small onClick={e=>{e.stopPropagation();setHidePlayer(a);}} color="#ef5350" outline>Hide</Btn></td>
              </tr>);})}</tbody>
          </table></div>
        </div>}

        {/* DEPTH CHART */}
        {view === "depth" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px"}}>{activeAge}'s Depth Chart</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16}}>
            {POS_CATEGORIES.map(cat => (
              <div key={cat.key} style={{background:"#12151c",borderRadius:12,border:"1px solid #1e222b",overflow:"hidden"}}>
                <div style={{padding:"12px 16px",background:"#1a1d24",borderBottom:"1px solid #1e222b",display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontWeight:700,fontSize:14,color:"#4fc3f7"}}>{cat.label}</span>
                  <span style={{fontSize:12,color:"#546e7a"}}>{grouped[cat.key]?.length||0}</span>
                </div>
                <div style={{padding:10,maxHeight:500,overflowY:"auto"}}>
                  {(grouped[cat.key]||[]).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} showScore />)}
                  {(grouped[cat.key]||[]).length===0&&<div style={{padding:20,textAlign:"center",color:"#333",fontSize:12}}>No players</div>}
                </div>
              </div>
            ))}
            {grouped.unsorted.length>0&&<div style={{background:"#12151c",borderRadius:12,border:"1px solid #1e222b",overflow:"hidden"}}>
              <div style={{padding:"12px 16px",background:"#1a1d24",borderBottom:"1px solid #1e222b",display:"flex",justifyContent:"space-between"}}>
                <span style={{fontWeight:700,fontSize:14,color:"#ffa726"}}>Unsorted / Unsure</span><span style={{fontSize:12,color:"#546e7a"}}>{grouped.unsorted.length}</span>
              </div>
              <div style={{padding:10,maxHeight:500,overflowY:"auto"}}>{grouped.unsorted.map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} showScore />)}</div>
            </div>}
          </div>
        </div>}

        {/* TRYOUT RESULTS */}
        {view === "tryout" && <TryoutResultsView athletes={athletes} activeAge={activeAge} onSelectPlayer={setSelectedPlayer} updateMetric={updateMetric} />}

        {/* TEAM BUILDER */}
        {view === "teams" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>{activeAge}'s Team Builder</h2>
          <p style={{color:"#546e7a",fontSize:13,margin:"0 0 16px"}}>Drag players from the pool into team rosters. Click any player for details, metrics, and offers.</p>
          <div style={{marginBottom:24}}>
            <div style={{fontSize:13,fontWeight:700,color:"#78909c",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Available Pool ({ageAthletes.filter(a=>!a.teamAssignment).length})</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:8}}>
              {POS_CATEGORIES.map(cat => {const l=grouped[cat.key]||[];if(!l.length)return null;return(
                <div key={cat.key}><div style={{fontSize:11,color:"#4fc3f7",fontWeight:700,marginBottom:4,textTransform:"uppercase"}}>{cat.label} ({l.length})</div>
                  {l.slice(0,6).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} compact showScore />)}
                  {l.length>6&&<div style={{fontSize:11,color:"#546e7a",padding:4,textAlign:"center"}}>+{l.length-6} more</div>}
                </div>);})}
              {grouped.unsorted.length>0&&<div><div style={{fontSize:11,color:"#ffa726",fontWeight:700,marginBottom:4,textTransform:"uppercase"}}>Unsorted ({grouped.unsorted.length})</div>
                {grouped.unsorted.slice(0,4).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} compact showScore />)}</div>}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16}}>
            {SKILL_LEVELS.map(lvl => {const key=`${activeAge}-${lvl}`;const roster=teamRosters[key]||[];const color=TEAM_COLORS[lvl];
              const declined=roster.filter(a=>a.status==="declined");const active=roster.filter(a=>a.status!=="declined");
              return(<div key={lvl} style={{background:TEAM_BG[lvl],borderRadius:12,border:`1px solid ${color}55`,overflow:"hidden"}}>
                <div style={{padding:"12px 16px",background:color,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontWeight:800,fontSize:15,color:"#fff"}}>{activeAge} {lvl}</span>
                  <span style={{fontSize:12,color:"#fff9",background:"#fff2",padding:"2px 8px",borderRadius:10}}>{roster.length}/12</span>
                </div>
                <div onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();updateAthlete(e.dataTransfer.getData("text/plain"),{teamAssignment:key});}} style={{padding:12,minHeight:150}}>
                  {active.length===0&&declined.length===0&&<div style={{padding:30,textAlign:"center",color:"#555",fontSize:13,border:"2px dashed #333",borderRadius:8}}>Drop players here</div>}
                  {active.map(a=><div key={a.id} style={{position:"relative"}}><PlayerCard athlete={a} onClick={setSelectedPlayer} compact showScore />
                    <button onClick={()=>updateAthlete(a.id,{teamAssignment:null})} title="Remove" style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:"#ef535033",border:"none",borderRadius:4,color:"#ef5350",cursor:"pointer",fontSize:12,padding:"2px 6px"}}>x</button></div>)}
                  {declined.length>0&&<div style={{marginTop:12,borderTop:"1px solid #333",paddingTop:8}}>
                    <div style={{fontSize:11,color:"#ef5350",fontWeight:700,marginBottom:4}}>DECLINED</div>
                    {declined.map(a=><div key={a.id} style={{position:"relative"}}><PlayerCard athlete={a} onClick={setSelectedPlayer} compact />
                      <button onClick={()=>updateAthlete(a.id,{teamAssignment:null})} style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:12}}>x</button></div>)}
                  </div>}
                </div>
                <div style={{padding:"8px 12px",borderTop:`1px solid ${color}33`}}>
                  <Btn small onClick={()=>{if(roster.length){roster.forEach(a=>updateAthlete(a.id,{status:a.status==="pending"?"offered":a.status}));setEmailPlayer(roster[0]);setEmailTeam(`${activeAge} ${lvl}`);}}} color={color} style={{width:"100%"}}>Send Offers ({roster.length})</Btn>
                </div>
              </div>);})}
          </div>
        </div>}

        {/* ALL TEAMS */}
        {view === "allteams" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px"}}>All Teams Overview</h2>
          {AGE_GROUPS.map(age => {const has=SKILL_LEVELS.some(l=>(allTeamsData[age]?.[l]||[]).length>0);if(!has)return null;
            return(<div key={age} style={{marginBottom:24}}>
              <h3 style={{fontSize:16,fontWeight:700,color:"#4fc3f7",margin:"0 0 12px",borderBottom:"1px solid #1e222b",paddingBottom:6}}>{age}'s</h3>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${SKILL_LEVELS.length}, 1fr)`,gap:12}}>
                {SKILL_LEVELS.map(lvl => {const roster=allTeamsData[age]?.[lvl]||[];const cl=TEAM_COLORS[lvl];
                  return(<div key={lvl} style={{background:"#12151c",borderRadius:10,border:`1px solid ${cl}44`,overflow:"hidden"}}>
                    <div style={{padding:"8px 12px",background:cl,textAlign:"center"}}><span style={{fontWeight:800,fontSize:13,color:"#fff"}}>{age} {lvl}</span></div>
                    <div style={{padding:8}}>{roster.length===0?<div style={{padding:16,textAlign:"center",color:"#444",fontSize:11}}>Empty</div>:
                      roster.map(a=><div key={a.id} style={{padding:"4px 8px",fontSize:12,display:"flex",gap:6,alignItems:"center",borderBottom:"1px solid #1a1d2488",cursor:"pointer"}} onClick={()=>setSelectedPlayer(a)}>
                        <span style={{color:"#4fc3f7",fontFamily:"monospace",fontSize:10,minWidth:24}}>{a.to}</span>
                        <span style={{flex:1}}>{a.first} {a.last}</span>
                        <Badge color="#78909c">{a.coachPos||posAbbr(a.primaryPos)}</Badge>
                        <StatusBadge status={a.status}/></div>)}</div>
                  </div>);})}
              </div></div>);})}
          {!AGE_GROUPS.some(age=>SKILL_LEVELS.some(l=>(allTeamsData[age]?.[l]||[]).length>0))&&
            <div style={{padding:60,textAlign:"center",color:"#444"}}><div style={{fontSize:15}}>No teams assembled yet. Use Team Builder to drag players into rosters.</div></div>}
        </div>}

        {view === "hidden" && <HiddenView athletes={athletes} onUnhide={unhideAthlete} onSelect={setSelectedPlayer} />}
      </div>

      <PlayerDetail athlete={selectedPlayer} onClose={()=>setSelectedPlayer(null)} canEditAll={true}
        onStatusChange={(id,s)=>updateAthlete(id,{status:s})} onCoachPos={(id,p)=>updateAthlete(id,{coachPos:p})}
        onEmail={a=>{setSelectedPlayer(null);setEmailPlayer(a);}} onHide={a=>{setSelectedPlayer(null);setHidePlayer(a);}}
        onUnhide={unhideAthlete} onMetricChange={updateMetric} />
      <EmailModal athlete={emailPlayer} team={emailTeam} onClose={()=>{setEmailPlayer(null);setEmailTeam("");}} onSend={handleSendEmail} />
      <HideModal athlete={hidePlayer} onClose={()=>setHidePlayer(null)} onHide={hideAthlete} />
      {showImport && <CSVImportModal onClose={()=>setShowImport(false)} onImport={importAthletes} />}
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<TryoutApp />);
document.getElementById('loading').style.display = 'none';
</script>
</body>
</html>
