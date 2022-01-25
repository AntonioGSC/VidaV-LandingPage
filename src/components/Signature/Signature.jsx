import React from 'react';
import SignatureCard from '../SignatureCard/SignatureCard';

import './Signature.css';

function Signature() {
  return (
    <div className='signature-div' id='signature'>
      <div className="div_container signature-container">
        <h4 className="signature-title">Assinaturas</h4>
        <div className="care_cards">
          <SignatureCard color='#BB74F2' price='R$39,90/mês' title='Individual - Mensal' text='2 teleconsultas mensais com clínico geral Desconto em farmácias Pré avaliação de sintomas Prescrições, atestados e solicitações de exames diretamente no app'/>
          <SignatureCard color='#7ECF17' price='R$29,90/mês' title='Individual - Anual' text='Uso por 12 meses 2 teleconsultas mensais com clínico geral Desconto em farmácias Pré avaliação de sintomas Prescrições, atestados e solicitações de exames diretamente no app'/>
          <SignatureCard color='#BB74F2' price='R$69,90/mês' title='Família - Mensal' text='4 teleconsultas mensais com clínico geral 2 consultas anuais com pediatra Até 3 dependentes adicionais Desconto em farmácias Pré avaliação de sintomas Prescrições, atestados e solicitações de exames diretamente no app'/>
          <SignatureCard color='#7ECF17' price='R$59,90/mês' title='Família - Anual' text='Uso por 12 meses 4 teleconsultas mensais com clínico geral 2 consultas anuais com pediatra Até 3 dependentes adicionais Desconto em farmácias Pré avaliação de sintomas Prescrições, atestados e solicitações de exames diretamente no app'/>
        </div>
      </div>
    </div>
  );
}

export default Signature;
