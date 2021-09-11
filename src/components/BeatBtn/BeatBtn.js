import './BeatBtn.css'


function BeatBtn(props) {
  return (
    <div id="radioArea" className="app-ele">
      <p>BEAT(Cat Only)</p>
      <input
        id="r1"
        type="radio"
        value="4"
        onChange={props.onChange}
        checked={props.value === '4'}
      />
      <label htmlFor="r1" className="radio-first">4</label>

      <input
        id="r2"
        type="radio"
        value="8"
        onChange={props.onChange}
        checked={props.value === '8'}
      />
      <label htmlFor="r2">8</label>

      <input
        id="r3"
        type="radio"
        value="16"
        onChange={props.onChange}
        checked={props.value === '16'}
      />
      <label htmlFor="r3" className="radio-last">16</label>
    </div>
  );
}

export default BeatBtn;