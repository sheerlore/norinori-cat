import './App.css';
import { useState } from 'react';
import Cat from '../components/Cat/Cat'
import BpmForm from './BpmForm/BpmForm';
import BpmRange from './BpmRange/BpmRange';
import DarkModeBtn from './DarkModeBtn/DarkModeBtn';
// import SwitchMode from './SwitchMode/SwitchMode';
// import './ClickField/ClickField.css'
// import ClickField from './ClickField/ClickField';

const posX = 0;
const posY = 0;
const width = 360;
const height = 550;
const bpmDefault = 120;
const bpmMin = 40;
const bpmMax = 218;


function App() {
  const [bpm, setBpm] = useState(120);
  const [mode, setMode] = useState('light');

  const changeBpmForm = () => {
    let bpmForm = document.getElementById("bpm-form");
    let bpmRange = document.getElementById("bpm-range");
    let v = bpmForm.value;
    if (String(v).match(/^\d+$/) && v > bpmMin && v < bpmMax && v !== null) {
      setBpm(Number(v));
      bpmRange.value = String(v);
    }
  }

  const changeBpmRange = () => {
    let bpmForm = document.getElementById("bpm-form");
    let bpmRange = document.getElementById("bpm-range");
    let v = bpmRange.value;
    if (v !== null) {
      setBpm(Number(v));
      bpmForm.value = String(v);
    }
  }

  const bpmToSecondsStr = (bpm, bar = 4) => {
    let b = Math.floor(bar / 4); // 拍数を計算する
    return (60 / bpm / b).toFixed(2);
  }

  const switchDarkMode = () => {
    const body = document.body;
    const darkBtn = document.getElementById('darkmode-btn');
    const catBodyLine = document.getElementById('body-line');
    const catEyeR = document.getElementById('right-eye');
    const catEyeL = document.getElementById('left-eye');
    const catMou = document.getElementById('cat-mouth');

    if(mode === 'light') {
      // ボタン
      darkBtn.textContent = '☽';
      darkBtn.style.backgroundColor = "#283033";
      // 全体
      body.style.backgroundColor = "#121121";
      body.style.color = "#fefefe";

      // 猫周り
      catBodyLine.setAttribute('fill', '#121211');
      catBodyLine.setAttribute('stroke', '#333333');
      catEyeR.setAttribute('fill', '#fffc2e');
      catEyeL.setAttribute('fill', '#fffc2e');
      catMou.style.display = "inherit";
      setMode('dark');
    } else if (mode === 'dark') {
      // ボタン
      darkBtn.textContent = '☀';
      darkBtn.style.backgroundColor = "#95e1ff";
      // 全体
      body.style.backgroundColor = "#fefefe";
      body.style.color = "#121121";
      // 猫周り
      catBodyLine.setAttribute('fill', '#ffffff');
      catBodyLine.setAttribute('stroke', '#000000');
      catEyeR.setAttribute('fill', '#000000');
      catEyeL.setAttribute('fill', '#000000');
      catMou.style.display = "none";
      setMode('light');
    }
  }


  return (
    <div className="App">
      <Cat
        width={width} height={height}
        posX={posX} posY={posY}
        speed={bpmToSecondsStr(bpm, 4)}
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
      <DarkModeBtn onClick={switchDarkMode} />
    </div>
  );
}

export default App;
