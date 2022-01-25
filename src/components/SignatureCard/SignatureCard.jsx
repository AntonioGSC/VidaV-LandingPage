import React from 'react';

import './SignatureCard.css'

function SignatureCard({color, price, title, text}) {
  return (
    <div className='signatureCard-div'>
      <div className='signatureCard-div-content'>
        <p className='signatureCard-title'>{title}</p>
        <p className='signatureCard-text'>{text}</p>
      </div>
      <div className="signatureCard-footer" style={{background: color}}>
        <p className="signatureCard-price">{price}</p>
      </div>
    </div>
  );
}

export default SignatureCard;
