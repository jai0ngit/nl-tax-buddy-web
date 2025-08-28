import React from 'react';
export default function LandingPage({ onStart }){
  return (
    <div className='container'>
      <div className='card' style={{textAlign:'center'}}>
        <h1 style={{margin:0}}>NL Tax Buddy 🇳🇱</h1>
        <p className='muted'>A friendly tax helper for expats — plain English guidance, calculators and checklists.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:14}}>
          <button className='btn' onClick={onStart}>Start Now</button>
        </div>
      </div>
      <div className='card'>
        <h2>Why this helps</h2>
        <ul>
          <li>Step-by-step filing guidance</li>
          <li>Calculator for rough net income</li>
          <li>Glossary of Dutch tax terms in English</li>
          <li>Checklist of documents</li>
        </ul>
      </div>
      <div className='card'>
        <h3>Quick links</h3>
        <p className='muted'><a href='https://www.belastingdienst.nl' target='_blank' rel='noreferrer'>Belastingdienst</a> &middot; <a href='https://www.digid.nl' target='_blank' rel='noreferrer'>DigiD</a></p>
      </div>
    </div>
  );
}
