import React from "react";
import Feet from "../assets/feet.jpg";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

function Conseil() {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-900">
        <Navbar />

        <div className="mx-auto grid max-w-screen-xl gap-6 pb-16 pt-4 text-gray-500 md:grid-cols-2 lg:place-items-center lg:gap-10 lg:pb-24 lg:pt-8 dark:text-gray-400">
          <img className="mx-auto my-4 w-[600px]" src={Feet} alt="/" />
          <div className="flex flex-col items-start justify-center">
            <p className="font-bold  text-purple-950 dark:text-purple-200">
              Notre savoir-faire
            </p>
            <h1 className="mb-6 mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-6xl dark:text-white">
              Nous sommes coachs en séduction
            </h1>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Bénéficiant de notre savoir-faire avéré dans le domaine des
              relations amoureuses, nous vous dévoilons nos services visant à
              perfectionner votre art de la séduction.
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              {" "}
              Que vous préfériez des séances en personne ou à distance, notre
              programme a été méticuleusement conçu pour répondre à vos besoins
              individuels.
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Découvrez notre programme de coaching en séduction : une approche
              créative et dynamique conçue pour renforcer votre pouvoir de
              séduction et mettre en valeur vos atouts. Accessible à tous,
              hommes et femmes, notre service vise à :
            </p>
            <ul className="mt-4 list-disc pl-4">
              <li className="text-justify text-gray-500 dark:text-gray-400">
                Renforcer votre confiance en vous et votre image personnelle.
              </li>
              <li className="text-justify text-gray-500 dark:text-gray-400">
                Développer votre charisme, vos compétences relationnelles et
                votre leadership.
              </li>
              <li className="text-justify text-gray-500 dark:text-gray-400">
                Améliorer vos interactions sociales pour des rencontres
                harmonieuses.
              </li>
              <li className="text-justify text-gray-500 dark:text-gray-400">
                Maîtriser l'art de l'engagement et du charme dans les
                conversations.
              </li>
              <li className="text-justify text-gray-500 dark:text-gray-400">
                Augmenter votre attractivité et votre présence personnelle.
              </li>
            </ul>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Nos coachs expérimentés sont là pour vous accompagner vers une
              meilleure version de vous-même, prêts à vous aider à atteindre vos
              objectifs en matière de séduction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Conseil;
