import React from 'react';
import About from '../../components/About/About';
import Discount from '../../components/Discount/Discount';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main'
import Pillars from '../../components/Pillars/Pillars';
import './Home.css'

function Home() {
  return (
    <div className='home-div'>
      <Header />
      <Main />
      <About />
      <Pillars />
      <Discount />
    </div>
  );
}

export default Home;
