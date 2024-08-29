import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Preinscription = () => {
  const form = useRef();
  const [formSent, setFormSent] = useState(false);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;

    //Name
    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Ne peut être vide";
    }

    if (typeof formFields["name"] !== "undefined") {
      if (!formFields["name"].match(/^[-A-zÀ-ÖØ-öø-ÿ_ ]*$/)) {
        formIsValid = false;
        formErrors["name"] = "Juste des lettres";
      }
    }
    //Prenom
    if (!formFields["prenom"]) {
      formIsValid = false;
      formErrors["prenom"] = "Ne peut être vide";
    }

    if (typeof formFields["prenom"] !== "undefined") {
      if (!formFields["prenom"].match(/^[-A-zÀ-ÖØ-öø-ÿ_ ]*$/)) {
        formIsValid = false;
        formErrors["prenom"] = "Juste des lettres";
      }
    }

    //Profession
    if (!formFields["profession"]) {
      formIsValid = false;
      formErrors["profession"] = "Ne peut être vide";
    }

    if (typeof formFields["profession"] !== "undefined") {
      if (!formFields["profession"].match(/^[-A-zÀ-ÖØ-öø-ÿ_ ]*$/)) {
        formIsValid = false;
        formErrors["profession"] = "Juste des lettres";
      }
    }

    //Ville
    if (!formFields["ville"]) {
      formIsValid = false;
      formErrors["ville"] = "Ne peut être vide";
    }
    if (typeof formFields["ville"] !== "undefined") {
      if (!formFields["ville"].match(/^[-A-zÀ-ÖØ-öø-ÿ_ ]*$/)) {
        formIsValid = false;
        formErrors["ville"] = "Juste des lettres";
      }
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Ne peut être vide";
    }

    if (typeof formFields["email"] !== "undefined") {
      let lastAtPos = formFields["email"].lastIndexOf("@");
      let lastDotPos = formFields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formFields["email"] = "Email non valide";
      }
    }

    //Société
    if (!formFields["society"]) {
      formIsValid = false;
      formErrors["society"] = "Ne peut être vide";
    }

    //Comment nous avez-vous connu
    if (!formFields["known"]) {
      formIsValid = false;
      formErrors["known"] = "Ne peut être vide";
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setFormSent(true);
      e.preventDefault();

      emailjs
        .sendForm("service_x0jtanh", "template_bna2kty", form.current, {
          publicKey: "UbOrjNNKGp0qo27UD",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
      window.scroll({ top: 500, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-opacity-96 w-full bg-[#45064F] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-screen-xl gap-6 lg:grid-cols-5">
        <div className="mx-auto my-4 lg:col-span-3 ">
          <h1 className="py-2 text-3xl font-bold sm:text-xl md:text-2xl">
            Pour participer aux évènements
          </h1>
          <p className="pb-3.5 text-5xl font-bold sm:text-4xl md:text-5xl">
            Remplissez le formulaire d'inscription !
          </p>
          <div className="mt-6 max-w-screen-sm space-y-3 pt-3.5">
            <p>
              C'est simple, remplissez vos{" "}
              <b>informations personnelles et professionnelles</b> dans le{" "}
              <b>formulaire d'inscription.</b>
            </p>
            <p>Attendez la validation de votre profil.</p>
            <p>
              Vous receverez également en exclusivité une <b>invitation</b> pour
              le lancement de l'application.
            </p>
            <p>N'oubliez pas de nous suivre sur les réseaux sociaux ! </p>
            {/* <p><b>Connectez-vous</b> dès l'ouverture de l'application et faites partie des 100 premiers inscrits pour bénéficier d'un mois gratuit ! </p> */}
          </div>
        </div>
        <div className="mx-auto my-4 lg:col-span-2">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            {!formSent ? (
              <form
                name="form"
                ref={form}
                id="form"
                onSubmit={(e) => contactSubmit(e)}
              >
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium leading-6"
                      >
                        Nom
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="nom"
                          placeholder=""
                          id="nom"
                          autoComplete="given-name"
                          onChange={(e) => handleChange("name", e.target.value)}
                          value={fields["name"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {/* <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green"> */}
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["name"]}
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium leading-6"
                      >
                        Prénom
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="prenom"
                          placeholder=""
                          id="prenom"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("prenom", e.target.value)
                          }
                          value={fields["prenom"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["prenom"]}
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="Date"
                        className="block text-sm font-medium leading-6"
                      >
                        Date de naissance
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="birthdate"
                          placeholder="jj/mm/aaaa"
                          id="birthdate"
                          autoComplete="family-name"
                          inputMode="numeric"
                          pattern="\d{2}/\d{2}/\d{4}"
                          maxLength="10"
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="ville"
                        className="block text-sm font-medium leading-6"
                      >
                        Ville
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="ville"
                          id="ville"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("ville", e.target.value)
                          }
                          value={fields["ville"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="profession"
                        className="block text-sm font-medium leading-6"
                      >
                        Profession
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="profession"
                          placeholder=""
                          id="profession"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("profession", e.target.value)
                          }
                          value={fields["profession"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["profession"]}
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="Société"
                        className="inline-block text-sm font-medium leading-6"
                      >
                        Société{" "}
                        <p className="inline-block font-light italic">
                          (si aucune, le préciser)
                        </p>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="society"
                          placeholder=""
                          id="society"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("society", e.target.value)
                          }
                          value={fields["society"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["society"]}
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6"
                      >
                        Adresse mail
                      </label>
                      <div className="mt-2">
                        <input
                          id="mail"
                          name="mail"
                          type="email"
                          autoComplete="email"
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          value={fields["email"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["email"]}
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="LookingFor"
                        className="block text-sm font-medium leading-6"
                      >
                        Que recherchez vous chez SAAJE ?
                      </label>
                      <div className="mt-2">
                        <select
                          name="lookingfor"
                          id="lookingfor"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("lookingfor", e.target.value)
                          }
                          value={fields["lookingfor"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="Une relation amoureuse">
                            Une relation amoureuse
                          </option>
                          <option value="Se faire du réseau">
                            Se faire du réseau
                          </option>
                        </select>
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["lookingfor"]}
                        </span>
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="known"
                        className="block text-sm font-medium leading-6"
                      >
                        Comment nous avez-vous connu ?
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="known"
                          placeholder="Instagram, Facebook, LinkedIn, Site internet"
                          id="known"
                          autoComplete="family-name"
                          onChange={(e) =>
                            handleChange("known", e.target.value)
                          }
                          value={fields["known"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-[14px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="error mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors["known"]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mb-6 w-[200px] rounded-xl bg-white px-6 py-3 font-bold text-black 
                        transition  ease-in-out hover:scale-105"
                >
                  Envoyer
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-xl font-bold text-green-500">
                  Votre formulaire a bien été envoyé
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="mx-auto p-6 text-xs font-extralight">
        En soumettant vos informations, vous acceptez notre politique de
        confidentialité.
      </span>
    </div>
  );
};

export default Preinscription;
