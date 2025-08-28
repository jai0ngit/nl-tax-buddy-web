import React from 'react';
export default function Glossary(){
  const terms = [
    {k:'Belastingdienst', v:'Dutch Tax Administration (tax office).'},
    {k:'DigiD', v:'Digital ID used to log in to Dutch government services.'},
    {k:'Eigenwoningforfait', v:'Imputed rental value of your main home added to Box 1.'},
    {k:'Jaarruimte', v:'Your available annual room to contribute extra to pension (lijfrente).'},
    {k:'Toeslagen', v:'Government allowances (child-related, rent, healthcare) managed separately.'},
  ];
  return (
    <div>
      <h3>Glossary</h3>
      <ul>
        {terms.map(t=>(<li key={t.k}><strong>{t.k}:</strong> {t.v}</li>))}
      </ul>
    </div>
  );
}
