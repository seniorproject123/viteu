import React from "react";
import Conseilimg from "../assets/conseil.jpg";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

function Prestige() {
  return (
    <>
    <Navbar navColor="text-[#45064F]"/>
    <div className="w-full bg-white px-4 md:pb-8 lg:pb-12">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 gap-6 lg:gap-8 lg:place-items-center">
        <img className="mx-auto my-4 w-[600px] " src={Conseilimg} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold  text-purple-950">
            Notre savoir-faire
          </p>
          <h1 className="mt-2 mb-6 text-2xl font-bold text-black sm:text-3xl md:text-6xl">
          Apéros prestige 
          </h1>
          <p className="mt-2 text-justify text-black">SAAJE ne se limite pas à être une simple application de rencontre. Nous aspirons à favoriser de véritables connexions humaines en personne. C'est pourquoi nous organisons régulièrement des événements privilégiés, accessibles aux membres ainsi qu'à toute personne dont le profil a été validé par notre équipe.</p>
          <p className="mt-2 text-justify">Pour participer, rien de plus simple : remplissez le formulaire disponible sur notre site internet, attendez la validation de votre profil, et vous recevrez en exclusivité l'adresse du prochain rendez-vous. </p>
          <p className="mt-2 text-justify">Nous accordons une attention particulière au choix des lieux, privilégiant des endroits prestigieux, secrets et élégants à Paris ou à Lyon. Nos événements comprennent une variété d'activités telles que des apéros, des dégustations œnologiques ou de whisky, et bien d'autres encore.</p>
          <p className="mt-2 text-justify">Les prix de nos évènements varient en fonction du lieu et de l'activité prévue.</p>
          <p className="mt-2 text-justify">Voici les prochaines dates à retenir :</p>
          <table className="mt-4 table-auto shadow-lg  border-collapse">
            <thead>
              <tr className="bg-[#45064F] text-white">
                <th className="text-left px-8 py-4 border">Dates</th>
                <th className="text-left px-8 py-4 border">Évènements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-4">Soirée de Lancement</td>
                <td className="border px-8 py-4">mars 2024</td>
              </tr>
              <tr>
                <td className="border px-8 py-4">Apéro privilège </td>
                <td className="border px-8 py-4">avril 2024</td>
              </tr>
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
