import './App.css';
import { useState } from 'react';
import Cat from '../components/Cat/Cat'
import BpmForm from './BpmForm/BpmForm';
import BpmRange from './BpmRange/BpmRange';
import DarkModeBtn from './DarkModeBtn/DarkModeBtn';
import StartStop from './StartStop/StartStop'
import BeatBtn from './BeatBtn/BeatBtn';
import {useKey, useKeyPressEvent } from 'react-use';
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
  const [bpm, setBpm] = useState({"now": 0.01, "pre": bpmDefault});
  const [mode, setMode] = useState('light');
  const [control, setControl] = useState('stop');
  const [beat, setBeat] = useState('4');

  const changeBpmForm = () => {
    const bpmForm = document.getElementById("bpm-form");
    const bpmRange = document.getElementById("bpm-range");
    let prebpm = bpm["now"];
    let v = bpmForm.value;
    if (String(v).match(/^\d+$/) && v > bpmMin && v < bpmMax && v !== null && control !== 'stop') {
      setBpm(
        {
          "pre": prebpm,
          "now": Number(v)
        }
      );
    }
    bpmRange.value = String(v);
  }

  const changeBpmRange = () => {
    const bpmForm = document.getElementById("bpm-form");
    const bpmRange = document.getElementById("bpm-range");
    let prebpm = bpm["now"];
    let v = bpmRange.value;
    if (v !== null && control !== 'stop') {
      setBpm(
        {
          "pre": prebpm,
          "now": Number(v)
        }
      );
    }
    bpmForm.value = String(v);
  }

  const bpmToSecondsStr = (bpm, beat = 4, note = 4) => {
    let b = beat / note; // 拍数を計算する ? / 4
    return ((60 / bpm) / b).toFixed(2);
  }

  const switchPlay = () => {
    const playBtn = document.getElementById('startstop-btn');
    const bpmForm = document.getElementById("bpm-form");
    let vf = bpmForm.value;
    let nowbpm = bpm.now;

    if (control === 'play') {
      playBtn.innerHTML = '<img src="./play.png" alt="play" />';
      setControl('stop');
      setBpm(
        {
          "pre": nowbpm,
          "now": 0.01 
        }
      );
    } else if (control === 'stop') {
      playBtn.innerHTML = '<img src="./stop.png" alt="stop" />';
      setControl('play');
      setBpm(
        {
          "pre": 0.01,
          "now": vf,
        }
      );
    }
  }

  const switchDarkMode = () => {
    const body = document.body;
    const darkBtn = document.getElementById('darkmode-btn');
    const playBtn = document.getElementById('startstop-btn');
    const bpmRange = document.getElementById("bpm-range");
    const catBodyLine = document.getElementById('body-line');
    const catEyeR = document.getElementById('right-eye');
    const catEyeL = document.getElementById('left-eye');
    const catMou = document.getElementById('cat-mouth');

    if (mode === 'light') {
      // ボタン
      darkBtn.textContent = '☽';
      darkBtn.style.backgroundColor = "#283033";
      playBtn.style.backgroundColor = "#afafaf"
      bpmRange.style.color = '#fefefe';

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
      playBtn.style.backgroundColor = "#fefefe"
      bpmRange.style.color = '#000000';
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

  const changeBeat = e => setBeat(e.target.value);
  // KeyPress Event
  // Block default Key Event
  window.addEventListener(
    'keydown',
    e => {
      let code = e.code;
      switch(code) {
        case 'Space':
        case 'KeyV':
        case 'KeyB':
        case 'KeyN':
        case 'KeyM':
          e.preventDefault();
          break;
        default:
      }
    },
    true
  )
  useKey('v', () => {
    const bpmForm = document.getElementById("bpm-form");
    const bpmRange = document.getElementById("bpm-range");
    let prebpm = bpm["now"];
    if (bpmForm.value > bpmMin && bpmForm.value !== null) {
      bpmForm.value = String(Number(bpmForm.value) - 1);
      bpmRange.value = String(Number(bpmRange.value) - 1);
      setBpm(
        {
          "pre": prebpm,
          "now": Number(bpmForm.value)
        }
      );
    }
  });
  useKey('m', () => {
    const bpmForm = document.getElementById("bpm-form");
    const bpmRange = document.getElementById("bpm-range");
    let prebpm = bpm["now"];
    if (bpmForm.value < bpmMax) {
      bpmForm.value = String(Number(bpmForm.value) + 1);
      bpmRange.value = String(Number(bpmRange.value) + 1);
      setBpm(
        {
          "pre": prebpm,
          "now": Number(bpmForm.value)
        }
      );
    }

  });
  useKeyPressEvent('n', switchDarkMode);
  useKeyPressEvent(' ', switchPlay);

  return (
    <div className="App">
      <Cat
        width={width} height={height}
        posX={posX} posY={posY}
        speed={bpmToSecondsStr(bpm.now, Number(beat))}
      />
      {/* <ClickField id="click-field" /> */}
      <BpmForm
        min={bpmMin} max={bpmMax} defaultValue={bpmDefault}
        onChange={changeBpmForm}
      />
      <BeatBtn
        value={beat}
        onChange={changeBeat}
      />

      <BpmRange
        min={bpmMin} max={bpmMax} defaultValue={bpmDefault}
        onChange={changeBpmRange}
      />
      <div className="app-ele control-1">
        <StartStop onClick={switchPlay} type={control} />
        <DarkModeBtn onClick={switchDarkMode} mode={mode} />
      </div>
    </div>
  );
}

export default App;
