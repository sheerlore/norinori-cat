import './App.css';
import { useState } from 'react';
import Cat from '../components/Cat/Cat'
import BpmForm from './BpmForm/BpmForm';
import BpmRange from './BpmRange/BpmRange';
// import SwitchMode from './SwitchMode/SwitchMode';
// import './ClickField/ClickField.css'
// import ClickField from './ClickField/ClickField';

const posX = 0;
const posY = 0;
const width = 360;
const height = 600;
const bpmDefault = 120;
const bpmMin = 40;
const bpmMax = 218;


function App() {
  const [bpm, setBpm] = useState(120);

  const changeBpmForm = () => {
    let bpmForm = document.getElementById("bpm-form");
    let bpmRange = document.getElementById("bpm-range");
    let v = bpmForm.value;
    if (v < bpmMin || v > bpmMax || v === null) return;
    setBpm(Number(v));
    bpmRange.value = String(v);
  }

  const changeBpmRange = () => {
    let bpmForm = document.getElementById("bpm-form");
    let bpmRange = document.getElementById("bpm-range");
    let v = bpmRange.value;
    if (v === null) return;
    setBpm(Number(v));
    bpmForm.value = String(v);
  }

  const bpmToSecondsStr = (bpm, bar = 4) => {
    let b = Math.floor(bar / 4); // 拍数を計算する
    return (60 / bpm / b).toFixed(2);
  }


  return (
    <div className="App">
      <Cat
        width={width} height={height}
        posX={posX} posY={posY}
        speed={bpmToSecondsStr(bpm)}
      />
      {/* <ClickField id="click-field" onClick={changeSVG} /> */}
      <BpmForm
        min={bpmMin} max={bpmMax} defaultValue={bpmDefault}
        onChange={changeBpmForm}
      />
      <BpmRange
        min={bpmMin} max={bpmMax} defaultValue={bpmDefault}
        onChange={changeBpmRange}
      />
    </div>
  );
}

export default App;
