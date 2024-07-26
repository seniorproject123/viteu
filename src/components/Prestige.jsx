import React from "react";
import Conseilimg from "../assets/conseil.jpg";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

function Prestige() {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-900">
        <Navbar />

        <div className="mx-auto grid max-w-screen-xl gap-6 pb-16 pt-4 md:grid-cols-2 lg:place-items-center lg:gap-8 lg:pb-24 lg:pt-8">
          <img className="mx-auto my-4 w-[600px] " src={Conseilimg} alt="/" />
          <div className="flex flex-col items-start justify-center">
            <p className="font-bold  text-purple-950 dark:text-purple-200">
              Notre savoir-faire
            </p>
            <h1 className="mb-6 mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-6xl dark:text-white">
              Apéros privilège
            </h1>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              SAAJE ne se limite pas à être une simple application de rencontre.
              Nous aspirons à favoriser de véritables connexions humaines en
              personne. C'est pourquoi nous organisons régulièrement des
              événements privilégiés, accessibles aux membres ainsi qu'à toute
              personne dont le profil a été validé par notre équipe.
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Pour participer, rien de plus simple : remplissez le formulaire
              disponible sur notre site internet, attendez la validation de
              votre profil, et vous recevrez en exclusivité l'adresse du
              prochain rendez-vous.{" "}
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Nous accordons une attention particulière au choix des lieux,
              privilégiant des endroits prestigieux, secrets et élégants à Paris
              ou à Lyon. Nos événements comprennent une variété d'activités
              telles que des apéros, des dégustations œnologiques ou de whisky,
              et bien d'autres encore.
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Les prix de nos évènements varient en fonction du lieu et de
              l'activité prévue.
            </p>
            <p className="mt-2 text-justify text-gray-500 dark:text-gray-400">
              Voici les prochaines dates à retenir :
            </p>
            <table className="mt-4 table-auto border-collapse  shadow-lg">
              <thead>
                <tr className="bg-[#45064F] text-white">
                  <th className="border px-8 py-4 text-left">Évènements</th>
                  <th className="border px-8 py-4 text-left">Dates</th>
                </tr>
              </thead>
              <tbody className="text-gray-900 dark:text-white">
                <tr>
                  <td className="border px-8 py-4">Apéro privilège </td>
                  <td className="border px-8 py-4"> 14 mai 2024</td>
                </tr>
                <td className="border px-8 py-4">
                  Apéro cocktails & rencontres{" "}
                </td>
                <td className="border px-8 py-4"> 11 juin 2024</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Prestige;
