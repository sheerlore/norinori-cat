import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import * as Tone from 'tone';


window.addEventListener('load', () => {
  const soundBtn = document.getElementById('sound-btn');
  soundBtn.onclick = async () => {
    await Tone.start();
    // Tone.Transport.start();
  }
});


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);