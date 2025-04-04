import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    onDelete(color.id);
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {showConfirmation ? (
        <div className="confirmation-dialog">
          <p className="color-card-highlight">
            Are you sure you want to delete this color?
          </p>
          <div className="confirmation-buttons">
            <button onClick={handleConfirm} className="confirm-button">
              Yes
            </button>
            <button onClick={handleCancel} className="cancel-button">
              No
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      )}
    </div>
  );
}
