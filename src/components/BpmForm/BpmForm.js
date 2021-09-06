import './BpmForm.css'

function BpmForm(props) {
  return (
      <div className="app-ele">
        <label for="bpmtext">BPM</label>
        <input
          id="bpm-form"
          type="text"
          inputMode="numeric"
          pattern='\d*'
          name="bpmtext"
          onChange={props.onChange}
          min={props.min} max={props.max} step="1"
          maxLength="3"
          defaultValue={props.defaultValue}
        />
      </div>
  );
}

export default BpmForm;