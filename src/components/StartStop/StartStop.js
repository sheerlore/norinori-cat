import './StartStop.css'


function StartStop(props) {
  return (
    <div className="control-1_child">
      <button
        id="startstop-btn"
        onClick={props.onClick}
      >
        <img src="./image/play.png" alt="play" />
      </button>
    </div>
  );
}

export default StartStop;