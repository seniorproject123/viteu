import React from "react";
import ImgBlog4 from "../../assets/blog/blog-4.jpg"; // Assurez-vous d'importer l'image correcte
import ProfilePicture from "../../assets/saaje-insta.jpg";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogRecent from "./BlogRecent";

function Blog() {
  return (
    <>
      <section className="h-full min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <main className="bg-white pb-16 pt-4 antialiased lg:pb-24 lg:pt-8 dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl justify-between px-4">
              <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl">
                <header className="not-format mb-4 lg:mb-6">
                  <div className="mb-6 flex items-center not-italic">
                    <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-4 h-16 w-16 rounded-full"
                        src={ProfilePicture}
                        alt="Equipe SAAJE"
                      />
                      <div>
                        <a
                          href="#"
                          rel="author"
                          className="text-xl font-bold text-gray-900 dark:text-white"
                        >
                          Équipe SAAJE
                        </a>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          Coach en séduction
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    Nos conseils d’experts pour un rendez-vous amoureux réussi
                  </h1>
                </header>
                {/* Remplacer ImgBlog3 par ImgBlog4 */}
                <figure className="mb-3">
                  <img src={ImgBlog4} alt="Image 4" width="100%" />
                </figure>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Arrivez à l’heure </strong>: La ponctualité est un
                  signe de respect et de considération. Si un imprévu survient,
                  un message suffit pour éviter tout malentendu.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Soigner son apparence </strong>: Choisissez une tenue
                  élégante et confortable. Une hygiène irréprochable et quelques
                  touches bien pensées feront toute la différence.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Savoir écouter</strong> : Posez des questions
                  ouvertes, écoutez activement et montrez-vous curieux et
                  sincèrement intéressé.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Choisir un lieu propice aux échanges</strong> : Évitez
                  les lieux routiniers. Emmenez la personne dans votre lieu
                  préféré ou explorez ensemble un endroit nouveau. Un bar caché
                  ou un espace cosy peut ajouter une touche d'originalité.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Partager une activité ensemble</strong>: Un
                  rendez-vous autour d'une activité culturelle, sportive ou
                  artistique permet de créer des souvenirs uniques. Voici
                  quelques idées : spectacle de stand-up, théâtre, galerie
                  d'art, Atelier des Lumières, escalade, balade en bateau,
                  atelier de peinture, cours de tango ou de salsa. Terminez par
                  un verre pour échanger davantage.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Rester naturel</strong> : Ne cherchez pas à surjouer
                  ni à impressionner à tout prix. Gardez à l’esprit le jeu de la
                  séduction : un sourire, un regard, un compliment subtil.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>
                    Avoir quelques sujets de conversation sous le coude{" "}
                  </strong>
                  : Préparez des sujets variés comme la culture, l’actualité, ou
                  des questions de fond. Parler d’art, de voyages ou de
                  philosophie peut révéler des facettes intéressantes de votre
                  personnalité.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>Être attentif au langage corporel</strong> : Soyez
                  attentif aux signaux de votre partenaire pour ajuster votre
                  approche. Un sourire, un regard franc, ou un léger
                  rapprochement sont souvent des signes positifs.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>
                    {" "}
                    Se montrer enthousiaste pour un deuxième rendez-vous, mais
                    sans pression{" "}
                  </strong>
                  : Si le moment passé ensemble a été agréable, exprimez votre
                  envie de vous revoir de manière décontractée. Un simple "J’ai
                  passé un très bon moment, et toi ?" suffit pour laisser la
                  porte ouverte, sans pression ni attentes.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>
                    {" "}
                    Attention : restez vigilant et faites confiance à votre
                    intuition. Votre sécurité et votre confort sont la priorité
                    !
                  </strong>
                </p>
              </article>
            </div>
          </main>
          <BlogRecent />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
