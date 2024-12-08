import React from "react";
import ImgBlog3 from "../../assets/blog/blog-3.jpg";
import ProfilePicture from "../../assets/saaje-insta.jpg";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogRecent from "./BlogRecent";

function Blog() {
  return (
    <>
      <section className="h-full min-h-screen  bg-white dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <main className="bg-white pb-16 pt-4 antialiased lg:pb-24 lg:pt-8 dark:bg-gray-900">
            <div className="left-between mx-auto flex max-w-screen-xl px-4 ">
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
                        {/* <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">15 fev. 2024</time></p> */}
                      </div>
                    </div>
                  </div>
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    Le secret des rencontres estivales
                  </h1>
                </header>
                <figure className="mb-3">
                  <img src={ImgBlog3} alt="Image 3" width="100%" />
                </figure>
                <h2 className="lead my-4 text-center text-2xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
                  “Une personne épanouie et confiante attire naturellement les
                  autres.”
                </h2>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  Cet été, faites des rencontres qui vous correspondent.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  L'été bat son plein. Cette période estivale offre de
                  nombreuses opportunités pour sortir de sa zone de confort et
                  explorer de nouvelles possibilités. Voici quelques conseils
                  pour maximiser vos chances de trouver l'amour.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>1. Participez à des événements exclusifs.</strong> Les
                  événements exclusifs, comme les galas de charité, les soirées
                  de networking ou les expositions d'art, sont des lieux
                  parfaits pour rencontrer des personnes partageant vos
                  intérêts. Ces événements offrent un cadre élégant et
                  sophistiqué, propice aux rencontres de qualité.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>2. Rejoignez des Clubs et Associations.</strong> Les
                  clubs de sport, les associations professionnelles ou les
                  groupes de passionnés sont d'excellents moyens de rencontrer
                  des personnes ayant des aspirations et des valeurs similaires
                  aux vôtres. Participer à des activités communes permet de
                  créer des liens authentiques et durables.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>
                    3. Utilisez des Applications de Rencontre Sélectives.
                  </strong>{" "}
                  Certaines applications de rencontre sont spécialement conçues
                  pour les célibataires exigeants. Elles offrent des
                  fonctionnalités avancées et des critères de sélection
                  rigoureux pour vous assurer de rencontrer des personnes qui
                  correspondent à vos attentes.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>4. Voyagez et Explorez de Nouveaux Horizons.</strong>{" "}
                  Le mois d'août est la saison idéale pour voyager. Les journées
                  sont longues et ensoleillées. Que ce soit pour des vacances
                  farniente ou des escapades culturelles, voyager vous permet de
                  rencontrer des personnes du monde entier et d'élargir votre
                  cercle social. Pour faciliter ces rencontres, participez à des
                  activités de groupe comme des visites guidées ou des cours de
                  cuisine locale. Utilisez des applications de voyage pour
                  trouver des événements locaux.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>5. Prenez Soin de Vous.</strong> L'été est également
                  le moment idéal pour prendre soin de vous. Adoptez une routine
                  de bien-être, faites du sport, et prenez le temps de vous
                  détendre. Une personne épanouie et confiante attire
                  naturellement les autres.
                </p>
                <p className="mb-3 text-left text-gray-500 dark:text-gray-400">
                  <strong>6. Soyez Ouvert et Authentique.</strong>{" "}
                  L'authenticité est la clé des rencontres réussies. Soyez
                  vous-même et ouvert aux nouvelles expériences. L'été est une
                  période de légèreté et de spontanéité, alors laissez-vous
                  porter par les opportunités qui se présentent à vous...
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
