import React from "react";
import savoir_plus from "../../assets/savoir_plus.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Plus = () => {
  return (
    <>
    <Navbar navColor="text-[#45064F]" />

    <div className="w-full bg-white px-4 py-6 ">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 gap-6">
        <img className="mx-auto my-4 w-[500px]" src={savoir_plus} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-purple-950">
            Notre savoir-faire
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          Pourquoi choisir en fonction des professions ? 
          </h1>
          <p className="mt-2 text-black">
          Nous comprenons l'importance de rencontrer des individus qui correspondent à vos critères et qui partagent vos objectifs. Que vous préfériez interagir <b>en ligne ou en personne</b>, notre application vous offre l'accès à des rencontres prestigieuses. Ces rencontres peuvent prendre diverses formes, allant de discussions en ligne et d'échanges enrichissants à des <b>événements physiques exclusifs.</b></p>
          <p className="mt-2">En mettant l'accent sur la <b>qualité</b> des profils, nous visons à créer un environnement où les membres peuvent établir des <b>connexions significatives.</b> Que vous soyez intéressé par des relations personnelles, des opportunités professionnelles ou des collaborations, notre application offre une expérience soigneusement élaborée pour répondre à vos besoins et vous offrir des <b>rencontres prestigieuses</b> à chaque étape de votre parcours. </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
);
};

export default Plus;
