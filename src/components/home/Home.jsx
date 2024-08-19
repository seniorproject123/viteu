import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Coach from "./Coach";
import Footer from "./Footer";
import Gain from "./Gain";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Preinscription from "./Preinscription";
import PopUp from "./PopUp";
import "../../index.css"; // Ajustez le chemin pour importer index.css depuis src

const Home = () => {
  // Initialisation de l'état de la pop-up en utilisant localStorage
  const [showPopUp, setShowPopUp] = useState(() => {
    return localStorage.getItem("showPopUp") !== "false";
  });

  const handleClosePopUp = () => {
    setShowPopUp(false);
    localStorage.setItem("showPopUp", "false"); // Enregistrer dans localStorage
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {showPopUp && <PopUp onClose={handleClosePopUp} />}
      <Navbar navColor="text-white" />
      <Hero />
      <Preinscription />
      <Gain />
      <Coach />
      <Cards />
      <Footer />
      <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl"></h1>
      {/* Ajoutez ici le contenu de votre page d'accueil */}
    </div>
  );
};

export default Home;
