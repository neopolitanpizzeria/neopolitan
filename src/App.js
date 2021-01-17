import React, { useEffect } from 'react';

import Menu from './components/Menu';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Gallery from './components/Gallery';
import ProgressBar from './components/ProgressBar';



import './styles/style.css';




const App = () => {

  function disableScroll() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }

  useEffect(() => {
    disableScroll();
    window.addEventListener('load', function () {
      window.onscroll = function () {
      }

    })
  }, [])


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
