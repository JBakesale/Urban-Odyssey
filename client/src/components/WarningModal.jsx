import React from "react";
import '../styles/WarningModal.scss'

function WarningModal({ message, onClose }) {
  return (
    <div className="warning-modal">
      <div className="warning-modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default WarningModal;
