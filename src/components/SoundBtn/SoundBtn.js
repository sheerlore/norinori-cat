import './SoundBtn.css'

function SoundBtn(props) {

  return (
    <div className="control-1_child">
      <button id="sound-btn" onClick={props.onClick} >
        <img src="/norinori-cat/image/soundx.png" alt="ts" />
      </button>
    </div>
  );
}

export default SoundBtn;