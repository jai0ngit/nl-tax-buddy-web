import React, { useState } from 'react';
import Calculator from './Calculator';
import Glossary from './Glossary';
import Checklists from './Checklists';

export default function MainApp(){
  const [view, setView] = useState('wizard');
  return (
    <div className='container'>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
        <h2 style={{margin:0}}>NL Tax Buddy</h2>
        <nav style={{display:'flex', gap:8}}>
          <button onClick={()=>setView('wizard')} className='btn' style={{background:'#10b981'}}>Wizard</button>
          <button onClick={()=>setView('calculator')} className='btn'>Calculator</button>
          <button onClick={()=>setView('glossary')} className='btn' style={{background:'#64748b'}}>Glossary</button>
          <button onClick={()=>setView('checklist')} className='btn' style={{background:'#f59e0b'}}>Checklist</button>
        </nav>
      </header>

      {view==='wizard' && (
        <div className='card'>
          <h3>Residency & Filing Wizard</h3>
          <p className='muted'>Answer a few simple questions — this wizard helps you determine filing type and documents you need.</p>
          <Wizard />
        </div>
      )}

      {view==='calculator' && <div className='card'><Calculator /></div>}
      {view==='glossary' && <div className='card'><Glossary /></div>}
      {view==='checklist' && <div className='card'><Checklists /></div>}
    </div>
  );
}

function Wizard(){
  const [yearArrived, setYearArrived] = useState('');
  const [partner, setPartner] = useState('no');
  const [kids, setKids] = useState('0');
  return (
    <div>
      <label>Year you arrived (if applicable)</label>
      <input type='number' value={yearArrived} onChange={e=>setYearArrived(e.target.value)} placeholder='e.g. 2023' />
      <label style={{marginTop:8}}>Do you have a fiscal partner? (yes/no)</label>
      <input type='text' value={partner} onChange={e=>setPartner(e.target.value)} />
      <label style={{marginTop:8}}>Children (count)</label>
      <input type='number' value={kids} onChange={e=>setKids(e.target.value)} />
      <div style={{marginTop:12}}>
        <p className='muted'>If you moved during the year you may need a migration return (M-form). If not, regular return applies.</p>
      </div>
    </div>
  );
        }
        
