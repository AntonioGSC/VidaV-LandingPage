import React from 'react';
import Card from '../Card/Card';

import Clock from '../../assets/images/query_builder.png';
import Accessibility from '../../assets/images/accessibility.png';
import Verified from '../../assets/images/verified.png';

import './Pillars.css'

function Pillars() {
  return (
    <div className='pillars-div'>
      <div className="div_container pillars-container">
        <h2 className="pillars-pillars">Nossos Pilares</h2>
        <div className="pillars_cards">
          <Card logo={Clock} title='Agilidade' text='Fale com o médico em até 15 minutos, sem sair de casa, usando seu celular'/>
          <Card logo={Accessibility} title='Acessibilidade' text='24h por dia, 7 dias na semana, consultas avulsas, pacote familiar e assinaturas, com preços atrativos.'/>
          <Card logo={Verified} title='Qualidade' text='Médicos confiáveis, que atendem também em hospitais renomados. Capacitados no pronto atendimento, médico da família e em diversas outras especialidades.'/>
        </div>
      </div>
    </div>
  );
}

export default Pillars;
