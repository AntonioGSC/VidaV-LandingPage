import React from 'react';
import Card from '../Card/Card';

import Webcam from '../../assets/images/webcam.png';
import Family from '../../assets/images/family.png';
import Cellphone from '../../assets/images/cellphoneLogo.png';
import Case from '../../assets/images/case.png';
import Medicine from '../../assets/images/medicine.png';
import Contact from '../../assets/images/contact.png';

import './Care.css';

function Care() {
  return (
    <div className='care-div' id='care'>
      <div className="div_container care-container">
        <h5 className="care-title">Tudo para o cuidado da sua saúde na palma da mão</h5>
        <div className="care_cards">
          <Card logo={Webcam} title='Consultas por vídeo chamada' text='Atendimento médico imediato, com 15min de antecedência* e agendado de acordo com sua conveniência. 24h por dia, 7 dias por semana.'/>
          <Card logo={Family} title='Atendimento infantil' text='Médicos pediatras especializados em atenção à saúde infantil.'/>
          <Card logo={Cellphone} title='Documentos digitais' text='Receba suas prescrições, pedidos de exames, atestados diretamente no app.'/>
          <Card logo={Case} title='Medicina humanizada' text='O serviço é a distância, com médicos preparados para um consulta personalizada e próxima.'/>
          <Card logo={Medicine} title='Desconto em Medicamento' text='Mais de 27 mil farmácias espalhadas pelo Brasil com desconto de até 70% em remédios.'/>
          <Card logo={Contact} title='Pré-avaliação de sintomas' text='Com o auxílio de uma inteligência artificial, avalie sua saúde antes de agendar a consulta.'/>
        </div>
      </div>
    </div>
  );
}

export default Care;
