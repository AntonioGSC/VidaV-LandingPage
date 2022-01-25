import React from 'react';
import Partner from '../../assets/images/partner.png'

import './Discount.css'

function Discount() {
  return (
    <div className='discount-div'>
      <div className="div_container discount-container">
        <h3 className="discount-title">Até 70% de desconto em medicamentos</h3>
        <p className="discount-subtitle">Rede de descontos em mais de 27 mil farmácias, espalhadas em mais de 3 mil municípios com farmácias parceiras</p>
        <div className="discount-partners">
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
          <div className="discount-partner_div">
            <img src={Partner} alt="" className="discount-img_partner" />
            <p className="discount-text_partner">Drogaria Araujo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
