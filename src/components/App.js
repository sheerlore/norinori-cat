import './App.css';
import Cat from '../components/Cat/Cat'
import './ClickField/ClickField.css'
import { useState } from 'react';
import ClickField from './ClickField/ClickField';

let posX = 0;
let posY = 0;
let width = 300;
let height = 400;

function App() {
  console.log('render <App />');
  const [tickFlag, setTickFlag] = useState(1);
  const [bpm, setBpm] = useState(120);

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
    let range = document.getElementById('bpm-range');
    setBpm(range.value);
  }

  const bpmToSecondsStr = (bpm) => {
    return (60 / bpm / 2 ).toFixed(2);
  }


  return (
    <div className="App">
      <Cat width={width} height={height} posX={posX} posY={posY} speed={bpmToSecondsStr(bpm)} />
      <ClickField id="click-field" onClick={changeSVG} />
      <h1>{bpm}</h1>
      <input 
        id="bpm-range" 
        onChange={returnSpeed} 
        type="range" 
        name="bpm" 
        min="40" max="218"step="1" 
        defaultValue="120"/>
    </div>
  );
}

export default App;
