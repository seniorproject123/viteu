import React from "react";
import ImgBlog from "../../assets/blog/blog-2.jpg";
import ProfilePicture from "../../assets/saaje-insta.jpg";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogRecent from "./BlogRecent";

function Blog() {
  return (
    <>
    <section className="h-full min-h-screen  bg-white dark:bg-gray-900">
    
    <Navbar />
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
  <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
            <div className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src={ProfilePicture} alt="Equipe SAAJE"/>
                    <div>
                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Équipe SAAJE</a>
                        <p className="text-base text-gray-500 dark:text-gray-400">Coach en séduction</p>
                        <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">15 fev. 2024</time></p>
                    </div>
                </div>
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Le rôle de la technologie dans les rencontres modernes</h1>
        </header>
        <figure className="mb-3"><img src={ImgBlog} alt=""/></figure>
        <h2 className="lead my-4 text-2xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white text-center">“Chaque profil, méticuleusement renseigné, devient ainsi une porte ouverte vers de nouvelles possibilités, augmentant vos chances de rencontrer l'âme sœur”</h2>        
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">À l'ère contemporaine, l'évolution technologique s'affirme comme un levier majeur dans l'exploration des liens amoureux. Les plateformes de rencontres en ligne incarnent cette fusion harmonieuse entre l'héritage romantique et la sophistication technologique, offrant ainsi un terrain fertile pour l'exploration des multiples facettes de l'amour et de la connexion humaine.</p>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">Au cœur de cette transformation réside la présence de systèmes algorithmiques sophistiqués, conçus pour sonder avec finesse les subtilités de vos préférences et aspirations. Ces algorithmes transcendent les méthodes traditionnelles de recherche de partenaires, nous orientant vers des profils potentiellement compatibles au-delà de vos espérances. Chaque profil, méticuleusement renseigné, devient ainsi une porte ouverte vers de nouvelles possibilités, augmentant vos chances de rencontrer l'âme sœur, peu importe notre lieu géographique.</p>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">La technologie ne se limite pas à la phase de recherche, elle redéfinit également les interactions humaines. Des fonctionnalités novatrices telles que la messagerie instantanée, les appels vidéo haute définition et même la réalité augmentée nous offrent des moyens inédits de découvrir et de partager nos univers respectifs. Ces outils facilitent des échanges profonds et authentiques, préservant l'essence même de l'émotion humaine au sein de cet environnement virtuel.</p>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">Dans le monde virtuel des rencontres en ligne, la sécurité demeure une préoccupation majeure. Pour vous protéger, il est essentiel de préserver la confidentialité de vos informations personnelles et de rester attentif aux signes de comportements suspects. Lorsque vous décidez de rencontrer quelqu'un en personne, optez toujours pour des lieux publics et assurez-vous de partager vos plans avec un proche. Ces précautions, bien que nécessaires, peuvent néanmoins susciter des inquiétudes quant à la sûreté de nos interactions en ligne.</p>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">Cependant, la technologie apporte des réponses tangibles à ces préoccupations, avec des dispositifs de cryptage sophistiqués assurant la confidentialité de nos échanges, et des mécanismes de signalement et de blocage permettant de nous prémunir contre d'éventuelles interactions indésirables. Ainsi, nous pouvons explorer les chemins de l'amour en ligne en toute sérénité, conscients d'être protégés à chaque étape de notre quête.</p>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 text-justify">En somme, la technologie élargit considérablement les horizons de la romance moderne. Elle nous dote des outils nécessaires pour découvrir l'amour authentique, gérer efficacement notre temps et éviter les rencontres superficielles.</p>
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
