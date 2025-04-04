import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  color,
  onSubmit,
  onCancel,
  submitButtonText = "Add Color",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(color);
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <div className="form-group">
        <label htmlFor="role">Color Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={color.role}
          onChange={(e) => onSubmit({ ...color, role: e.target.value })}
          placeholder="e.g., accent main"
          required
        />
      </div>
      <ColorInput
        label="Color Hex:"
        name="hex"
        value={color.hex}
        onChange={(e) => onSubmit({ ...color, hex: e.target.value })}
      />
      <ColorInput
        label="Contrast Text Color:"
        name="contrastText"
        value={color.contrastText}
        onChange={(e) => onSubmit({ ...color, contrastText: e.target.value })}
      />
      <div className="form-buttons">
        <button type="submit" className="submit-button">
          {submitButtonText}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
