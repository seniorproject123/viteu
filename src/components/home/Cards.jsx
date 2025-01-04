import React, { useEffect, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import rivAnim from "../../assets/let_me_tell_your_futures3.riv";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const SubscriptionInfo = ({ title, price, features, prices, isPopular }) => {
  const [selectedDuration, setSelectedDuration] = useState("1 mois");

  return (
    <div className="flex h-full flex-col rounded-xl bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/70 sm:p-6 md:p-8">
      <div className="flex h-full flex-col transition-all duration-500 ease-in-out">
        {/* En-tête fixe */}
        <div className="mb-4 sm:mb-8">
          <h3 className="mb-2 text-2xl font-bold text-purple-300 sm:mb-4 sm:text-3xl">
            Nos Abonnements
          </h3>
          <p className="mb-4 text-base text-gray-400 sm:mb-6 sm:text-xl">
            Découvrez nos 3 formules d'abonnement et choisissez celle qui vous
            correspond le mieux
          </p>
          <div className="h-1 w-24 rounded-full bg-purple-400/30"></div>
        </div>

        {title ? (
          <>
            <div className="relative mb-6">
              {isPopular && (
                <div className="absolute -top-6 right-0 animate-pulse rounded-full bg-purple-500 px-4 py-1 text-sm font-semibold text-white sm:-top-4">
                  Le plus populaire
                </div>
              )}
              <h4 className="animate-crossfade mb-6 text-2xl font-bold text-white">
                {title}
              </h4>

              {/* Sélecteur de durée */}
              <div className="mb-4 grid grid-cols-3 gap-1 sm:mb-6 sm:gap-3">
                {prices?.map((priceOption, index) => (
                  <div key={priceOption.duration} className="relative">
                    <button
                      onClick={() => setSelectedDuration(priceOption.duration)}
                      className={`w-full rounded-lg p-2 text-sm transition-all duration-300 sm:p-3 sm:text-base ${
                        selectedDuration === priceOption.duration
                          ? "border-2 border-purple-500/30 bg-purple-500/20 text-purple-300"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {priceOption.duration}
                    </button>
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
                        <span className="rounded-full border border-purple-400 bg-purple-600 px-2 py-1 text-xs font-semibold text-white">
                          RECOMMANDÉ
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Affichage du prix */}
              <div className="mb-4 text-center sm:mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-300 sm:text-4xl">
                    {prices
                      .find((p) => p.duration === selectedDuration)
                      ?.price.toFixed(2)}
                    €
                  </span>
                  <span className="ml-2 text-sm text-purple-200 sm:text-base">
                    /mois
                  </span>
                </div>
              </div>

              {/* Liste des fonctionnalités */}
              <div className="flex-grow">
                <h5 className="mb-2 text-base font-semibold text-gray-300 sm:mb-4 sm:text-lg">
                  Avantages inclus :
                </h5>
                <ul className="custom-scrollbar space-y-2 overflow-y-auto pr-4 sm:space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="animate-crossfade flex items-start text-sm text-gray-300 sm:text-base"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <svg
                        className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-400 sm:mr-3 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton */}
              <div className="mt-4 sm:mt-8">
                <button
                  className="w-full rounded-lg border-2 border-purple-500/30 bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 transition-all duration-300 hover:scale-[1.02] hover:bg-purple-500/30 sm:py-3 sm:text-base"
                  onClick={() => window.open("https://google.com", "_blank")}
                >
                  CHOISIR CETTE OFFRE
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-grow items-center justify-center text-center">
            <div className="animate-pulse space-y-6">
              <svg
                className="mx-auto mb-4 h-20 w-20 text-purple-400/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="max-w-sm text-lg text-gray-400/70">
                Cliquez sur une carte pour découvrir les détails de l'abonnement
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Cards = () => {
  const [activeSubscription, setActiveSubscription] = React.useState(null);
  const [isChanging, setIsChanging] = React.useState(false);

  const { rive, RiveComponent } = useRive({
    src: rivAnim,
    stateMachines: "default",
    autoplay: true,
    artboard: "main artboard",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (rive) {
      rive.on("statechange", (event) => {
        const stateName = event.data[0];

        if (
          stateName === "lovers click" ||
          stateName === "sun click" ||
          stateName === "death click"
        ) {
          setIsChanging(true);
          setTimeout(() => {
            if (stateName === "lovers click") {
              setActiveSubscription("EXPLORER");
            } else if (stateName === "sun click") {
              setActiveSubscription("PRIVILÈGE");
            } else if (stateName === "death click") {
              setActiveSubscription("ÉLITE");
            }
            setTimeout(() => {
              setIsChanging(false);
            }, 300);
          }, 300);
        }
      });
    }
  }, [rive]);

  const subscriptions = {
    EXPLORER: {
      title: "SAAJE EXPLORER",
      price: 39,
      features: ["Likes illimités", "3 Retours en arrière"],
      prices: [
        { duration: "1 mois", price: 39 },
        { duration: "3 mois", price: 25.59 },
        { duration: "6 mois", price: 19.5 },
      ],
    },
    PRIVILÈGE: {
      title: "SAAJE PRIVILÈGE",
      price: 49,
      features: [
        "Fonctionnalités SAAJE EXPLORER",
        "Savoir qui a liké votre profil",
        "3 Superlikes par semaine",
        "1 Boost de profil offert chaque mois",
      ],
      prices: [
        { duration: "1 mois", price: 49 },
        { duration: "3 mois", price: 32.66 },
        { duration: "6 mois", price: 24.5 },
      ],
      isPopular: true,
    },
    ÉLITE: {
      title: "SAAJE ÉLITE",
      price: 59,
      features: [
        "Fonctionnalités SAAJE PRIVILÈGE",
        "Voir les Likes que vous avez envoyés au cours des 7 derniers jours",
        "Envoyer un message avant de matcher",
      ],
      prices: [
        { duration: "1 mois", price: 59 },
        { duration: "3 mois", price: 42.29 },
        { duration: "6 mois", price: 32.45 },
      ],
    },
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-2xl font-extrabold text-gray-100 sm:mb-6 sm:text-3xl md:text-4xl">
          Abonnements à l'application SAAJE
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-xs text-gray-400 sm:text-sm md:text-base">
          <em>
            Les abonnements ne couvrent pas les frais de participation aux
            soirées. Vous devrez payer séparément pour assister aux événements.
          </em>
        </p>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row">
          {/* Colonne de gauche - Abonnement actif */}
          <div className="flex h-[600px] w-full lg:h-[600px] lg:w-1/2">
            <div
              className={`h-full w-full transform transition-all duration-300 ease-in-out ${
                isChanging ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <SubscriptionInfo
                title={subscriptions[activeSubscription]?.title || ""}
                price={subscriptions[activeSubscription]?.price || 0}
                features={subscriptions[activeSubscription]?.features || []}
                prices={subscriptions[activeSubscription]?.prices || []}
                isPopular={
                  subscriptions[activeSubscription]?.isPopular || false
                }
              />
            </div>
          </div>

          {/* Colonne de droite - Animation Rive */}
          <div className="relative h-[600px] w-full lg:h-[600px] lg:w-1/2">
            <RiveComponent
              className="h-full w-full"
              style={{
                background: "transparent",
                transition: "height 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
