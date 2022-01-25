import React from 'react';
import About from '../../components/About/About';
import Care from '../../components/Care/Care';
import Discount from '../../components/Discount/Discount';
import FixedFooter from '../../components/FixedFooter/FixedFooter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main'
import Pillars from '../../components/Pillars/Pillars';
import Signature from '../../components/Signature/Signature';
import './Home.css'

function Home() {
  return (
    <div className='home-div'>
      <Header />
      <Main />
      <About />
      <Pillars />
      <Discount />
      <Signature />
      <Care />
      <Footer />
      <FixedFooter />
    </div>
  );
}

export default Home;
