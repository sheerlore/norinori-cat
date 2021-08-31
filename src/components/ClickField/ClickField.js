import './ClickField.css'

const ClickField = ({onClick}) => {
  return (
    <div id="click-field" onClick={onClick}>Click</div>
  );
}

export default ClickField;