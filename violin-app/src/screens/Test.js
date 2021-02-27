import React, { useRef, useEffect } from "react";
import Rellax from "rellax";

import  mainPhotoCover from '../photos/mainPhotoCover.jpg';
import '../css/mainPage.css';
import Iframe from 'react-iframe';

export default function App() {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef.current, { // <---- Via useRef element
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

  return (
    <div className="App">
      <div ref={rellaxRef} className="coverPhoto">
        <img className="mainPhoto" src={mainPhotoCover} alt="cover-photo" />
      </div>
      <div className="animate" className="coverIframe">
        <p className="coverText">TinaViolin B.</p>
        <Iframe 
          url='https://www.youtube.com/embed/0WOcmbezyjg?autoplay=1&mute=1'
          width="550px"
          height="350px"
          frameBorder="1px"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}