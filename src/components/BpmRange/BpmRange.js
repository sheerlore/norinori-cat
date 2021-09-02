import './BpmRange.css'

function BpmRange(props) {


  return (
    <div className="app-ele">
      <input
        id="bpm-range"
        type="range"
        name="bpm"
        onChange={props.onChange}
        min={props.min} max={props.max} step="1"
        defaultValue={props.defaultValue} />
    </div>
  );
}

export default BpmRange;