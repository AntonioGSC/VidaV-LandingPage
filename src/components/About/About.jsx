import React from 'react';

import Graphic from '../../assets/images/graphic.png'

import './About.css'

function About() {
  return (
    <div className='about-div'>
      <div className="div_container about-container">
        <h1 className="about-aboutUs">Sobre nós</h1>
        <div className="about-div_content">
          <div className="about-div_content_text">
            <p className="about-text">Somos uma plataforma de cuidados com a saúde digital, que torna acesso a saúde de alta qualidade uma realidade. Em parceria com a Teladoc health, líder mundial em telemedicina.</p>
            <p className="about-text">Basta baixar um aplicativo de celular e você tem acesso imediato a médicos e também pode agendar consultas com especialistas, no dia e horário da sua preferência, sem precisar sair de casa. Além de programas de bem-estar e benefícios de descontos em farmácias.</p>
          </div>
          <div className="about-div_content_image">
            <img src={Graphic} alt="" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
