import './InputForText.css';

function InputForText({ inputType, label, value, setValue, mandatory }) {
  return (
    <div className="custom-input-wrapper">
      <input
        type={inputType}
        id="exampleFormControlInput1"
        className="custom-input"
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor="exampleFormControlInput1" className="custom-label">
        <div className="custom-label-text-container">
          {label}
          {mandatory && (
            <span
              style={{
                color: '#D13F97',
                marginLeft: '2px',
              }}
            >
              *
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

export default InputForText;
