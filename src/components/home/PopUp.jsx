// src/components/Popup.jsx
import React from "react";
import ImagePopUp from "/images/ImagePopUp.jpg";
import "../../index.css"; // Assure-toi que ce chemin est correct

const Popup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="popup-image">
        <img src={ImagePopUp} alt="SAAJE app" />
      </div>
      <div className="popup-text">
        <h2 className="popup-title">SURPRISE 👀</h2>
        <p className="popup-message">
          SAAJE sera bientôt disponible en application sur votre mobile. Restez
          connecté pour ne rien manquer !
        </p>
      </div>
    </div>
  </div>
);

export default Popup;
