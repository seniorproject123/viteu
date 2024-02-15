import React from "react";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

const Faq = () => {
  return (
    <>
    <section className="h-full min-h-screen  bg-white dark:bg-gray-900">
    <Navbar />
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">FAQ</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Est-ce que SAAJE est seulement ouvert aux hétérosexuels ?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Chez SAAJE, nous sommes fiers de créer un environnement inclusif et accueillant pour tous, y compris les membres de la communauté LGBTQ+. Nous croyons fermement en l'égalité, le respect et la diversité, et nous nous engageons à soutenir et à célébrer chaque individu tel qu'il est. Que vous soyez lesbienne, gay, bisexuel, transgenre, queer, ou en questionnement, vous êtes les bienvenus.</p>
              </div>
              <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Est-ce que les profils sur SAAJE sont authentiques ?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Tous les profils de SAAJE sont minutieusement vérifiés par notre équipe afin de garantir l'authenticité des informations fournies. Cette procédure nous permet de vous assurer que la personne avec qui vous interagissez est bien celle présente sur ses photos et qu'elle exerce la profession mentionnée sur son profil.</p>
              </div>
              <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Quelle photo utiliser sur l'application SAAJE ? 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Téléchargez des photos qui reflètent votre personnalité ! Privilégiez les photos où vous êtes seul(e) afin que les autres membres puissent vous découvrir pleinement. Optez pour des images nettes et évitez les lunettes de soleil qui dissimulent votre visage. Un sourire sincère peut véritablement faire la différence.</p> 
                  <p className="text-gray-500 dark:text-gray-400">Vous pouvez également bénéficier de nos services de conseils et de coaching personnalisés chez SAAJE. Notre équipe d'experts vous guidera dans le choix optimal de vos photos afin de mettre en valeur votre profil et d'augmenter vos chances de trouver des correspondances idéales.</p>
              </div>
              <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Puis-je résilier mon abonnement SAAJE ?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Une fois l'abonnement payé, veuillez noter qu'il n'est pas possible de résilier celui-ci avant la fin de la période choisie (1 mois, 3 mois ou 6 mois), ni de demander un remboursement. Pour annuler votre abonnement à la fin de la période sélectionnée, veuillez nous contacter par e-mail à l'adresse suivante : <a href="" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" onClick={() => window.location = 'mailto:contact@saaje.app'}>contact@saaje.app</a>.</p>
              </div>
          </div>
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Pourquoi mon profil n'a pas été validé ? 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">L'équipe de SAAJE effectue une sélection minutieuse des profils, en accordant une attention particulière aux critères professionnels qui correspondent aux aspirations des membres de notre communauté. Chez SAAJE, nous nous engageons à maintenir des standards élevés, garantissant ainsi une expérience de qualité à nos utilisateurs.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Pourquoi me demande-t-on une vérification par selfie ? 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Dans le souci de garantir la sécurité de nos membres, il se peut que nous vous demandions de confirmer votre identité en nous envoyant un selfie. Nous tenons à vous assurer que la photo requise pour ce selfie ne sera pas conservée au-delà de la vérification de votre identité. Votre confidentialité reste notre priorité absolue.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Peut-on réellement trouver des connexions entre des personnes partageant les mêmes aspirations professionnelles sur SAAJE ?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Si vous cherchez à établir des liens avec des individus partageant vos ambitions et vos passions, vous êtes au bon endroit. Sur SAAJE, nous favorisons les rencontres privilégiées.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Puis-je supprimer mon compte SAAJE ?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Vous avez la possibilité de supprimer votre compte SAAJE à tout moment en nous contactant par e-mail à <a href="" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" onClick={() => window.location = 'mailto:contact@saaje.app'}>contact@saaje.app</a>. Cette suppression garantit la disparition complète de vos données, photos et échanges, préservant ainsi votre confidentialité. En cas de réinscription ultérieure, veuillez noter que vous devrez à nouveau faire valider votre profil.</p>
              </div>
          </div>
      </div>
  </div>
</section>
<Footer />
</>
  );
};

export default Faq;
