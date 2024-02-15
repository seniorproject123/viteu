import React from "react";
import { Link } from "react-router-dom";
import TextButton from "./TextButton";

const Gain = () => {
  return (
    <div className="w-full mx-auto bg-white px-4 py-2 md:py-4 lg:py-6">
      <div className="mx-auto  my-4 p-4 grid gap-4 sm:grid-cols-6 auto-cols-fr">
        <div className="mx-auto my-4 w-[500px] col-start-1 col-span-4 ">
         <p className="font-bold text-[#67295F]">
            Notre Approche
          </p>
          <h1 className="my-2 text-2xl font-bold text-black sm:text-5xl md:text-6xl">
            Vous faire gagner du temps.
          </h1>
        </div>
        <div className="flex flex-col items-end justify-center max-w-lg mt-14 col-start-4 col-end-7">
          <p className="my-2 text-black">
          Chaque profil est attentivement choisi, vous offrant ainsi l'opportunité 
          de sélectionner par professions et de participer à des rencontres prestigieuses, 
          que ce soit en ligne ou en personne.
          </p>
          <div className="self-start">
            <Link  to="/plus"><TextButton text="En savoir plus" type="primary" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;
