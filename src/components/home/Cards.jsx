import React from "react";
import GroupAccountImage from "../../assets/group_account.png";
import PartnershipImage from "../../assets/partnership.png";
import SingleUserImage from "../../assets/single_user.png";

class CardInfo {
  constructor(
    imageSource,
    title,
    price,
    fonction1,
    fonction2,
    fonction3,
    fonction4,
  ) {
    this.imageSource = imageSource;
    this.title = title;
    this.price = price + "€/mois";
    this.fonction1 = fonction1;
    this.fonction2 = fonction2;
    this.fonction3 = fonction3;
    this.fonction4 = fonction4;
  }
}

const Card = ({ cardInfo, index }) => {
  const titleColors = ["text-[#DF07F8]", "text-[#F80798]", "text-[#6707F8]"];
  const color = titleColors[index % titleColors.length]; // Get color based on index
  const badges = ["1 mois", "3 mois", "6 mois"];
  const badge = badges[index % badges.length];

  return (
    <div className="my-4 w-full rounded-xl p-8 shadow-2xl duration-300 hover:scale-105">
      {/* <img src={cardInfo.imageSource} alt="" className="mx-auto w-20" /> */}
      <span className="rounded-full bg-[#45064F] px-4 py-1 text-sm font-semibold text-white">
        {badge}
      </span>
      <h2 className={`py-8 text-center text-2xl font-bold ${color}`}>
        {cardInfo.title}
      </h2>
      <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
      <div className="mt-8 font-medium">
        <ol className="list-disc pl-4">
          <li>{cardInfo.fonction1}</li>
          {cardInfo.fonction2 && <li>{cardInfo.fonction2}</li>}
          {cardInfo.fonction3 && <li>{cardInfo.fonction3}</li>}
          {cardInfo.fonction4 && <li>{cardInfo.fonction4}</li>}
        </ol>
        {/* <TextButton text="Essai" type="secondary" /> */}
      </div>
    </div>
  );
};

const Cards = () => {
  const cardDataArray = [
    new CardInfo(
      GroupAccountImage,
      "SAAJE EXPLORER",
      49,
      "Likes illimités",
      "Retours en arrière illimités",
    ),
    new CardInfo(
      PartnershipImage,
      "SAAJE PRIVILÈGE",
      39,
      "Fonctionnalités SAAJE EXPLORER",
      "Savoir qui a liké votre profil",
      "3 Superlikes par semaine",
      "1 Boost de profil offert chaque mois",
    ),
    new CardInfo(
      SingleUserImage,
      "SAAJE ÉLITE",
      29,
      "Fonctionnalités SAAJE PRIVILÈGE",
      "Voir les Likes que vous avez envoyé au cours des 7 derniers jours",
      "Envoyez un message avant de matcher",
    ),
  ];

  return (
    <div className="w-full bg-white px-4 py-10">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-3">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardInfo={cardData} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
