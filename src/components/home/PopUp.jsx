import React from "react";
import ImagePopUp from "/images/ImagePopUp.jpg";
import "../../index.css"; // Assurez-vous que ce chemin est correct

const Popup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-md">
    <div className="relative mx-auto flex max-w-3xl overflow-hidden shadow-lg">
      <div className="flex w-1/2 flex-col justify-center gap-6 bg-white p-6">
        <div>
          {/* Texte au-dessus du titre */}
          <p className="mb-4 text-center font-bold text-black">
            Rejoignez notre club Select
          </p>
          {/* Titre centré avec police Georgia */}
          <h2
            className="mb-6 text-center text-4xl font-bold text-gray-700"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Surprise 👀
          </h2>
          {/* Paragraphe avec police Georgia */}
          <p
            className="mb-6 text-center text-xl text-gray-700"
            style={{ fontFamily: "Georgia, serif" }}
          >
            SAAJE sera bientôt disponible en application sur votre mobile.
            Restez connecté pour ne rien manquer !
          </p>
        </div>
        <a
          target="_blank"
          href="https://instagram.com/saaje.app"
          className="mt-4 bg-yellow-950 py-4 text-center font-semibold text-white transition hover:bg-zinc-950"
        >
          RESTEZ INFORMÉ
        </a>
      </div>
      <div className="relative flex w-1/2 items-center justify-center">
        <img
          src={ImagePopUp}
          alt="SAAJE app"
          className="h-full w-full object-cover"
        />
        <button
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-black hover:text-gray-300 focus:outline-none"
          onClick={onClose}
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Popup;
