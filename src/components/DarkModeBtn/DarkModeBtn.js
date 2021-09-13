import './DarkModeBtn.css'

function DarkModeBtn(props) {
  return (
    <div className="control-1_child">
      <button
        id="darkmode-btn"
        onClick={props.onClick}
      >
        <img src="/norinori-cat/image/sun.png" alt="sun" />
      </button>
    </div>
  );
}

export default DarkModeBtn;