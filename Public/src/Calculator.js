import React, { useState } from 'react';
export default function Calculator(){
  const [gross, setGross] = useState('98000');
  const [mortInt, setMortInt] = useState('4200');
  const [pensionExtra, setPensionExtra] = useState('6000');
  const calc = () => {
    const g = Number(gross)||0;
    const mi = Number(mortInt)||0;
    const pe = Number(pensionExtra)||0;
    // simplified tax brackets 2025
    let taxable = Math.max(0, g - pe - mi);
    let tax = 0;
    if (taxable <= 75518) tax = taxable * 0.3707;
    else tax = 75518 * 0.3707 + (taxable - 75518) * 0.495;
    const credits = 3362; // simplified general tax credit
    const net = g - tax + credits;
    return { taxable, tax, credits, net };
  };
  const r = calc();
  return (
    <div>
      <label>Gross annual salary (€)</label>
      <input type='number' value={gross} onChange={e=>setGross(e.target.value)} />
      <label>Mortgage interest (deductible) (€)</label>
      <input type='number' value={mortInt} onChange={e=>setMortInt(e.target.value)} />
      <label>Extra pension contributions (€)</label>
      <input type='number' value={pensionExtra} onChange={e=>setPensionExtra(e.target.value)} />
      <div style={{marginTop:12}}>
        <p>Taxable income (approx): €{Math.round(r.taxable).toLocaleString()}</p>
        <p>Estimated income tax (approx): €{Math.round(r.tax).toLocaleString()}</p>
        <p>Estimated credits applied: €{Math.round(r.credits).toLocaleString()}</p>
        <p style={{fontWeight:700}}>Estimated take-home (approx): €{Math.round(r.net).toLocaleString()}</p>
        <p className='muted' style={{marginTop:8}}>This is a simplified estimator for guidance only.</p>
      </div>
    </div>
  );
}
