import React from 'react';

import './Card.css'

function Card({logo, title, text}) {
  return (
    <div className='card-div'>
      <img src={logo} alt="Logo" className="card-img" />
      <p className='card-title'>{title}</p>
      <p className='card-text'>{text}</p>
    </div>
  );
}

export default Card;
