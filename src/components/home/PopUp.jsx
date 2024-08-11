// src/components/Popup.js
import React from "react";
import "../../index.css";

const Popup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <p>
        SAAJE sera bientôt disponible en application téléchargeable sur votre
        mobile
      </p>
      {coucou}
    </div>
  </div>
);

export default PopUp;
