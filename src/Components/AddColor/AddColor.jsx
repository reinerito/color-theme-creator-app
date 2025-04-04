import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";
import "./AddColor.css";

export default function AddColor({ onAddColor }) {
  const [newColor, setNewColor] = useState({
    role: "some color",
    hex: "#000000",
    contrastText: "#FFFFFF",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newColor.role || !newColor.hex) return;

    const colorToAdd = {
      id: nanoid(),
      ...newColor,
    };

    onAddColor(colorToAdd);
    setNewColor({
      role: "some color",
      hex: "#000000",
      contrastText: "#FFFFFF",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewColor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="add-color-form">
      <div className="form-group">
        <label htmlFor="role">Color Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={newColor.role}
          onChange={handleChange}
          placeholder="e.g., accent main"
          required
        />
      </div>
      <ColorInput
        label="Color Hex:"
        name="hex"
        value={newColor.hex}
        onChange={handleChange}
      />
      <ColorInput
        label="Contrast Text Color:"
        name="contrastText"
        value={newColor.contrastText}
        onChange={handleChange}
      />
      <button type="submit" className="add-button">
        Add Color
      </button>
    </form>
  );
}
