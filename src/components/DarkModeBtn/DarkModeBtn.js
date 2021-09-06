import './DarkModeBtn.css'

function DarkModeBtn(props) {
  return (
    <div className="app-ele">
      <button
        id="darkmode-btn"
        onClick={props.onClick}
      >☀</button>
    </div>
  );
}

export default DarkModeBtn;