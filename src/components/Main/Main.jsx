import React from 'react';
import Mockup from '../../assets/images/mockup-medium.png';
import Google from '../../assets/images/google-play.png';

import './Main.css'

function Main() {
  return (
    <div className='main-div'>
      <div className="div_container">
        <div className="main-div_info">
          <p className="main-info_main">Consulte um médico a qualquer hora, do seu celular</p>
          <p className="main-info_subtitle">Atendimento médico na palma da sua mão sempre que precisar! 24h por dia, 7 dias da semana. Planos a partir de R$ 29,90 mensais</p>
          <div className="main-div_button">
            <button className="main-button_assign">Assine já</button>
            <a href="https://play.google.com/store/apps/details?id=com.teladoc.vivo.vidav&_ga=2.142158001.264395086.1642885400-1768601523.1642795657" target="_blank" className="main-link"><img src={Google} alt="Google Play" className="main-link_image" /></a>
          </div>
        </div>
        <div className="main-div_image">
          <img src={Mockup} alt="Vida V" className="main-image" />
        </div>
      </div>
    </div>
  );
}

export default Main;
