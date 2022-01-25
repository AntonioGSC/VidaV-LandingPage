import React from 'react';
import Mockup from '../../assets/images/cellphone.png';

import './Footer.css'

function Footer() {
  return (
    <div className='footer-div'>
      <div className="div_container footer-container">
        <div className="footer-div_info">
          <p className="footer-info_main">Venha para o Vida V e tenha os melhores médicos disponíveis 24 horas para cuidar de você e da sua família!</p>
        </div>
        <div className="footer-div_image">
          <img src={Mockup} alt="" className="footer-image" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
