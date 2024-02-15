import React from "react";
import Feet from "../assets/feet.jpg";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

function Conseil() {
  return (
    <>
    <Navbar navColor="text-[#45064F]"/>
    <div className="w-full bg-white px-4 md:pb-8 lg:pb-12">
    <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 gap-6 lg:gap-10 lg:place-items-center">
        <img className="mx-auto my-4 w-[600px]" src={Feet} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold  text-purple-950">
            Notre savoir-faire
          </p>
          <h1 className="mt-2 mb-6 text-2xl font-bold text-black sm:text-3xl md:text-6xl">
            Nous sommes coach en séduction
          </h1>
          <p className="mt-2 text-black text-justify">
          Bénéficiant de notre savoir-faire avéré dans le domaine des relations amoureuses, nous vous dévoilons nos services visant à perfectionner votre art de la séduction.</p>
          <p className="mt-2 text-justify"> Que vous préfériez des séances en personne ou à distance, notre programme a été méticuleusement conçu pour répondre à vos besoins individuels.</p>
          <p className="mt-2 text-justify">Découvrez notre programme de coaching en séduction : une approche créative et dynamique conçue pour renforcer votre pouvoir de séduction et mettre en valeur vos atouts. Accessible à tous, hommes et femmes, notre service vise à :</p>
          <ul className="pl-4 list-disc">
            <li className="text-justify">Renforcer votre confiance en vous et votre image personnelle.</li>
            <li className="text-justify">Développer votre charisme, vos compétences relationnelles et votre leadership.</li>
            <li className="text-justify">Améliorer vos interactions sociales pour des rencontres harmonieuses.</li>
            <li className="text-justify">Maîtriser l'art de l'engagement et du charme dans les conversations.</li>
            <li className="text-justify">Augmenter votre attractivité et votre présence personnelle.</li>
          </ul>
          <p className="mt-2 text-justify">Nos coaches expérimentés sont là pour vous accompagner vers une meilleure version de vous-même, prêts à vous aider à atteindre vos objectifs en matière de séduction.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
    );
}

export default Conseil;
