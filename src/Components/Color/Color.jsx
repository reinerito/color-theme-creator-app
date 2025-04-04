import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import "./Color.css";

export default function Color({ color, onDelete, onEdit }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedColor, setEditedColor] = useState(color);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (updatedColor) => {
    onEdit(updatedColor);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedColor(color);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          color={editedColor}
          onSubmit={handleEditSubmit}
          onCancel={handleEditCancel}
          submitButtonText="Save Changes"
        />
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <CopyToClipboard hexCode={color.hex} />
          <div className="card-buttons">
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
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
        </>
      )}
    </div>
  );
}
