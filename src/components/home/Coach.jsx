import React from "react";
import Meet from "../../assets/meet.jpg";

const Coach = () => {
  return (
    <div className="w-full bg-white px-4 md:pb-8 lg:pb-12">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 gap-6">
        <img className="mx-auto my-4 w-[500px]" src={Meet} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold  text-purple-950">
            Notre savoir-faire
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-6xl">
            Nous sommes coach en séduction.
          </h1>
          <p className="mt-2 text-black">
            Profitez de conseils personnalisés et de séances de coaching pour enrichir votre parcours. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coach;
