import React, { useState } from "react";
import "../styles/WarningModal.scss";

function WarningModal({ message, onClose, onDone }) {
  const [showWarning, setShowWarning] = useState(true);

  const handleDone = () => {
    setShowWarning(false);
    onDone();
  };

  const handleBack = () => {
    setShowWarning(false);
    onClose();
  };

  return (
    showWarning && (
      <div className="warning-modal">
        <div className="warning-modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button onClick={handleBack}>Back</button>{" "}
            <button onClick={handleDone}>Done</button>
          </div>
        </div>
      </div>
    )
  );
}

export default WarningModal;
