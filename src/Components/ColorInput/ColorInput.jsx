import "./ColorInput.css";

export default function ColorInput({ label, value, onChange, name }) {
  const handleTextChange = (e) => {
    const newValue = e.target.value;
    if (newValue.match(/^#[0-9A-Fa-f]{6}$/)) {
      onChange({ target: { name, value: newValue } });
    }
  };

  const handleColorChange = (e) => {
    onChange(e);
  };

  return (
    <div className="color-input-group">
      <label htmlFor={name}>{label}</label>
      <div className="color-input-container">
        <input
          type="color"
          id={`${name}-color`}
          name={name}
          value={value}
          onChange={handleColorChange}
        />
        <input
          type="text"
          id={`${name}-text`}
          value={value}
          onChange={handleTextChange}
          placeholder="#000000"
          pattern="^#[0-9A-Fa-f]{6}$"
        />
      </div>
    </div>
  );
}
