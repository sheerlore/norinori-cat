import './App.css';
import Cat from '../components/Cat/Cat'
import './ClickField/ClickField.css'
import { useState } from 'react';
import ClickField from './ClickField/ClickField';

let posX = 0;
let posY = 0;
let width = 380;
let height = 400;

function App() {
  console.log('render <App />');
  const [tickFlag, setTickFlag] = useState(1);
  const [speed, setSpeed] = useState("5");

  const changeSVG = () => {
    if (tickFlag === 0) {
      posX = 0;
      posY = 0;
      setTickFlag(1);
    } else if (tickFlag === 1) {
      posX = 0;
      posY = height / 2;
      setTickFlag(0);
    }
  }

  const returnSpeed = () => {
    let range = document.getElementById('speed-range');
    setSpeed(String(10 - range.value));
  }


  return (
    <div className="App">
      <div>
        <p>ニャーン meow mew</p>
      </div>
      <Cat width={width} height={height} posX={posX} posY={posY} speed={speed} />
      <ClickField id="click-field" onClick={changeSVG} />
      <input onChange={returnSpeed} id="speed-range" type="range" name="speed" min="1" max="9"step="1"/>
    </div>
  );
}

export default App;
