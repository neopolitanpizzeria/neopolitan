import React, { useEffect, useState } from 'react';

import Menu from './components/Menu';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Gallery from './components/Gallery';
import ProgressBar from './components/ProgressBar';



import './styles/style.css';



// error in iframe 269

const App = () => {
  return (
    <div className="App" dir='rtl'>
      <Overlay />
      <a href="https://order.plweb.online/wl/618613#!/rest/618613/menu"
        target="_blank" className='redirect'>להזמנות ומשלוחים</a>
      <Header />
      <section className="hero"></section>
      <About />
      <Menu />
      <Gallery />

      {/* <!-- <div className="banner info" id="contact"></div> --> */}
      <Banner />
      <footer></footer>

      <ProgressBar />
    </div>
  );
}

export default App;
