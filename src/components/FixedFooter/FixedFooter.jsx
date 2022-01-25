import React from 'react';
import Google from '../../assets/images/google-play.png';
import Apple from '../../assets/images/apple.png';

import './FixedFooter.css'

function FixedFooter() {
  return (
    <div className='fixedFooter-div'>
      <div className="fixedFooter-div_container">
        <div>
          <p className="fixedFooter-text">Baixe agora mesmo o Vida V</p>
        </div>
        <div className='fixedFooter-links'>
          <a href="https://play.google.com/store/apps/details?id=com.teladoc.vivo.vidav&_ga=2.142158001.264395086.1642885400-1768601523.1642795657" target="_blank" className="main-link"><img src={Google} alt="Google Play" className="main-link_image" /></a>
          <a href="https://apps.apple.com/us/app/vida-v/id1562187397" target="_blank" className="main-link apple-image"><img src={Apple} alt="Apple Store" className="main-link_image" /></a>
        </div>
      </div>
    </div>
  );
}

export default FixedFooter;
