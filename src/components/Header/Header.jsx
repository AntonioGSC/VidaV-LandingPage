import React from 'react';
import Logo from '../../assets/images/logo.png'

import './Header.css'

function Header() {
  return (
    <div className='header-div'>
      <div className="header-div_container">
        <div className="header-div_logo">
          <img src={Logo} alt="Vida-V Logo" className="header-logo" />
        </div>
        <div className="header-div_nav">
          <a href="" className="header-nav_option">Sobre nós</a>
          <a href="" className="header-nav_option">Assinaturas</a>
          <a href="" className="header-nav_option">Farmácias Parceiras</a>
          <a href="" className="header-nav_option">Como funciona</a>
          <button className="main-button_assign">Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
