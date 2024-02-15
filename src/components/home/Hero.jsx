import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-cover bg-[url('src/assets/bg-dark.jpg')]">
      <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-cinzel">
          SAAJE
        </h1>
        <p className=" mt-4 w-[90vw] text-2xl font-semibold md:text-4xl italic">
        Votre rencontre privilégiée
        </p>
      </div>
    </div>
  );
};

export default Hero;
