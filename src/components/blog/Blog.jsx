import React from "react";
import Seduction from "../../assets/blog/blog-1.jpg";
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

  <main className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
            <div className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src={ProfilePicture} alt="Equipe SAAJE"/>
                    <div>
                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Équipe SAAJE</a>
                        <p className="text-base text-gray-500 dark:text-gray-400">Coach en séduction</p>
                        {/* <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">15 fev. 2024</time></p> */}
                    </div>
                </div>
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Les règles de l'art du dating</h1>
        </header>
        <figure className="mb-3"><img src={Seduction} alt=""/></figure>
        <h2 className="lead my-4 text-2xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white text-center">“Pour votre première escapade romantique, osez sortir des sentiers battus !”</h2>        
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">Dans la complexité des rencontres, avancer avec assurance peut sembler être un véritable défi. Les codes du dating sont aussi énigmatiques que les méandres du cœur humain. Cependant, ne vous découragez pas. Même sans accéder aux pensées secrètes de vos prétendants ou prétendantes, vous pouvez vous aventurer dans cet univers captivant en gardant à l'esprit quelques principes simples.</p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">En France, le terme "date" évoque généralement un rendez-vous romantique, une opportunité pour deux personnes de se découvrir davantage sur le plan sentimental. Que ce soit autour d'un dîner aux chandelles, d'une balade en ville ou d'une activité insolite, l'objectif reste le même : créer une connexion, explorer des affinités, et peut-être même étinceler de passion.</p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">Pour votre première escapade romantique, osez sortir des sentiers battus ! Optez pour un apéro dans un bar à thème ou une activité hors du commun pour briser la glace. Mais surtout, écoutez votre intuition et adaptez-vous à votre ressenti. Rappelez-vous, le premier rendez-vous ne vous engage à rien. N'hésitez donc pas à multiplier les rencontres de manière raisonnable. Au cours de ces échanges, vous découvrirez rapidement si le courant passe. Et si ce n'est pas le cas, ne craignez pas de mettre fin à la soirée poliment mais fermement.</p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">Pour les plus timides ou ceux qui préfèrent un coup de pouce supplémentaire, envisagez de faire appel à un intermédiaire de confiance. Un ami bienveillant ou un coach spécialisé comme SAAJE peuvent vous aider à organiser votre rencontre, vous prodiguer des conseils utiles, voire vous accompagner lors de ce premier pas vers une potentielle histoire d'amour. Parfois, une petite assistance peut faire toute la différence !</p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">En fin de compte, rappelez-vous que le dating est avant tout une aventure. Gardez l'esprit ouvert, restez authentique et surtout, profitez du voyage. Qui sait quelles merveilles vous réserve le prochain rendez-vous ?</p>
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
