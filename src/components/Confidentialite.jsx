import React from "react";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
function Blog() {
    return (
      <>
      <section className="h-full min-h-screen  bg-white dark:bg-gray-900">
      
      <Navbar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Confidentialité des données</h1>
        <div className="container mx-auto px-4 py-8 dark:text-white">
          <p className="mb-4">Chez Saaje, nous accordons une priorité absolue à la protection et à la confidentialité de vos données. Cette préoccupation guide notre travail à chaque étape, de la conception initiale jusqu'au développement final de nos services.</p>
          <p className="mb-4">Afin de garantir une compréhension approfondie de vos droits et de nos engagements, nous vous recommandons de lire attentivement cette politique en parallèle avec nos Conditions Générales d'Utilisation.</p>
  
          <h2 className="text-2xl font-bold mb-2">Collecte d'informations</h2>
          <h3 className="text-xl font-bold mb-2">Ce que nous collectons</h3>
          <p className="mb-4">
          Lors de votre inscription, nous sommes susceptibles de collecter certaines informations à votre sujet, telles que :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Nom, Prénom;</li>
            <li>Nom d'utilisateur;</li>
            <li>Adresse e-mail;</li>
            <li>Numéro de portable;</li>
            <li>Identité de genre;</li>
            <li>Date, lieu de naissance;</li>
            <li>Préférence sexuelle;</li>
            <li>Photographies;</li>
            <li>Emplacement;</li>
            <li>Informations de connexion pour les comptes de réseaux sociaux que vous connectez à votre compte Saaje (par exemple, vos comptes Facebook et Instagram).</li>
          </ul>
          <p className="mb-4">Après votre inscription, vous pouvez consulter et modifier vos informations personnelles à tout moment en vous connectant à votre compte Saaje. Cependant, veuillez noter que votre date de naissance et votre emplacement, si vous avez autorisé l'accès à ces données, sont automatiquement mis à jour en fonction des paramètres de votre appareil.</p>
          <p className="mb-4">Il est de votre responsabilité de maintenir à jour les détails de votre compte, notamment en cas de changement de numéro de téléphone.
          </p>
          <p className="mb-4">Les données que nous recueillons sont essentielles pour l'amélioration continue de notre application et la vérification de l'authenticité de nos utilisateurs, dans le but d'éviter la présence de comptes automatisés ou de “robots”. Certaines informations d'inscription, telles que votre orientation sexuelle, votre nom et votre nom d'utilisateur, peuvent être visibles par les autres utilisateurs consultant votre page de profil.
          </p>
  
          <h3 className="text-xl font-bold mb-2">Ce à quoi vous devez prêter attention</h3>
          <p className="mb-4">Il est crucial de faire preuve de vigilance quant aux informations que vous choisissez de partager avec d'autres utilisateurs pour protéger votre vie privée. Nous vous déconseillons d'inclure des informations sensibles telles que des adresses e-mail, des numéros de téléphone, des adresses ou d'autres données confidentielles sur votre profil, afin d'éviter tout usage malveillant.
          </p>

          <h2 className="text-3xl font-bold mb-4"> </h2>
          <h3 className="text-xl font-bold mb-2"></h3>
          <p className="mb-4">
          </p>
          <p className="mb-4">
          </p>
          <p className="mb-4">
          </p>

          <h2 className="text-3xl font-bold mb-4">Informations sur les achats au sein de l'application</h2>
          <p className="mb-4">En cas de souscription à nos services payants, vos informations de paiement seront traitées et stockées en toute sécurité pour prévenir la fraude et se conformer aux exigences fiscales et d'audit.</p>
          <p className="mb-4">Saaje utilise des décisions automatisées pour détecter les transactions de paiement frauduleuses, bloquant automatiquement celles qui enfreignent nos Conditions d'utilisation. Les utilisateurs concernés peuvent contacter Saaje pour contester la décision.</p>

          <h2 className="text-3xl font-bold mb-4">Informations sur la géolocalisation</h2>
          <p className="mb-4">Si vous avez autorisé Saaje à accéder à votre position, nous collecterons des informations sur les points d'accès WiFi et d'autres données de localisation. Ces informations nous permettent de personnaliser l'application en affichant des informations générales sur votre emplacement et en vous montrant les profils d'autres utilisateurs près de chez vous. Vous pouvez désactiver les services de localisation dans les paramètres de votre appareil.</p>

          <h2 className="text-3xl font-bold mb-4">Information sur l'appareil et les photos</h2>
          <p className="mb-4">Nous pouvons collecter des informations sur votre appareil, y compris l'identifiant unique de l'appareil, le modèle et le système d'exploitation, ainsi que des autorisations pour accéder au carnet d'adresses à des fins spécifiques. Nous utilisons ces données pour analyser l'interaction des utilisateurs avec les photos, vous aidant à optimiser votre profil. Vous avez la possibilité de désactiver cette fonctionnalité via les paramètres de l'application.</p>

          <h2 className="text-3xl font-bold mb-4">Liens externes</h2>
          <p className="mb-4">Nous suivons vos interactions avec les liens sur notre application, y compris ceux redirigeant vers des services tiers, pour comprendre vos préférences et améliorer votre expérience utilisateur. Des statistiques agrégées sur les clics peuvent être partagées, telles que le nombre de clics sur un lien particulier.
          </p>

          <h2 className="text-3xl font-bold mb-4">Sondages et autres requêtes</h2>
          <p className="mb-4">De temps en temps, nous effectuons des sondages à des fins de recherche et pouvons vous contacter pour obtenir votre avis ou participer à des campagnes de marketing. Ces activités sont facultatives, et vous pouvez choisir de ne pas y participer en contactant notre service d'aide via notre page Contact.
          </p>

          <h2 className="text-3xl font-bold mb-4">Cookies et technologies similaires de collecte de données</h2>
          <p className="mb-4">Lors de vos visites sur nos sites ou l'utilisation de notre application, nous pouvons collecter automatiquement des données personnelles à l'aide de cookies ou de technologies similaires. Pour en savoir plus sur l'utilisation des cookies, veuillez consulter notre Politique relative aux cookies.
          </p>

          <h2 className="text-3xl font-bold mb-4">Comment nous utilisons vos informations</h2>
          <h3 className="text-xl font-bold mb-2">Ce que nous faisons</h3>
          <p className="mb-4">Nous utilisons vos informations pour :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Nom, Prénom;</li>
            <li>Nom d'utilisateur;</li>
            <li>Adresse e-mail;</li>
            <li>Numéro de portable;</li>
            <li>Identité de genre;</li>
            <li>Date, lieu de naissance;</li>
            <li>Préférence sexuelle;</li>
            <li>Photographies;</li>
            <li>Emplacement;</li>
            <li>Informations de connexion pour les comptes de réseaux sociaux que vous connectez à votre compte Saaje (par exemple, vos comptes Facebook et Instagram).</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4">Comment nous partageons vos informations</h2>
          <h3 className="text-xl font-bold mb-2">Fournisseurs de services</h3>
          <p className="mb-4">Nous collaborons avec des tiers de confiance, nos "Fournisseurs de services", pour exécuter diverses fonctions et fournir des services à nos utilisateurs, selon les produits utilisés (tels que l'Application, les Sites et les Services). Ces services incluent, par exemple :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Services de facturation : Permettent aux utilisateurs d'acheter des fonctionnalités payantes, par exemple via Google Play.</li>
            <li>Services d'authentification : Permettent aux utilisateurs d'authentifier leur compte.</li>
            <li>Amélioration des produits et études de marché : Utilisation de plateformes tierces telles que Typeform pour des enquêtes et des études de marché.</li>
            <li>Services informatiques : Certains fournisseurs de logiciels tiers, comme Khoros, traitent les données personnelles des utilisateurs, notamment les demandes d'assistance.</li>
          </ul>


          <h3 className="text-xl font-bold mb-2">Fournisseurs de services marketing</h3>
          <p className="mb-4">Nous collaborons également avec des fournisseurs de services marketing, tels que Facebook, pour promouvoir notre Application et mesurer l'efficacité des campagnes publicitaires. Les pratiques incluent l'exclusion des utilisateurs existants des campagnes publicitaires, la diffusion d'annonces aux utilisateurs ayant visité l'application, et la création d'audiences similaires et personnalisées. Nous partageons une quantité limitée de données, notamment l'identifiant publicitaire, la position estimée, l'âge, le genre, les actions effectuées sur nos sites et applications, ainsi qu'une version hachée de l'adresse e-mail.
          </p>
          <p className="mb-4">Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre Politique relative aux cookies.
          </p>

          <h3 className="text-xl font-bold mb-2">Utilisation par des tiers</h3>
          <p className="mb-4">Ces tiers peuvent utiliser les données à leurs propres fins, notamment l'agrégation de données pour des services publicitaires.
          </p>

          <h2 className="text-3xl font-bold mb-4">Politique sur l'âge des Utilisateurs</h2>
          <p className="mb-4">Bien que nous souhaitions inclure un large public, l'utilisation de Saaje est réservée aux personnes âgées d'au moins 18 ans. Nous ne collectons pas délibérément d'informations sur les enfants ou mineurs et ne sollicitons pas leur participation. Si un enfant ou mineur s'inscrit et fournit des informations, nous fermerons le compte.
          </p>

          <h2 className="text-3xl font-bold mb-4">Sécurisation de vos données</h2>
          <p className="mb-4">Saaje prend des mesures de sécurité pour protéger les données contre la perte, l'abus et l'accès non autorisé. Cependant, aucune méthode n'est infaillible. Quelques conseils pour renforcer la sécurité :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Utilisez un mot de passe robuste et changez-le régulièrement;</li>
            <li>Déconnectez-vous après utilisation;</li>
            <li>Suivez les étapes en cas de suspicion d'accès non autorisé.</li>
          </ul>
          <p className="mb-4">La sécurité des données lors de la transmission n'est pas garantie à 100%, et toute transmission est à vos risques.
          </p>

          <h2 className="text-3xl font-bold mb-4">Vos droits</h2>
          <p className="mb-4">Les lois sur la confidentialité dans votre pays peuvent vous conférer les droits suivants :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Droit d'être informé(e) : Nous vous fournissons des informations sur les données traitées dans cette Politique de Confidentialité;</li>
            <li>Droit d'accès : Demandez une copie de vos données;</li>
            <li>Droit de rectification : Correction des données inexactes;</li>
            <li>Droit d'effacement : Suppression de vos données dans certaines circonstances;</li>
            <li>Droit de restreindre le traitement : Arrêt du traitement avec conservation des données dans certaines situations;</li>
            <li>Droit à la portabilité des données : Obtenez certaines données dans un format transférable;</li>
            <li>Droit d'opposition : Opposition au traitement dans certaines circonstances;</li>
            <li>Droits liés à la prise de décision automatisée : Intervenez dans les décisions automatisées ayant des effets significatifs.</li>
          </ul>
          <p className="mb-4">Les droits spécifiques peuvent varier selon le pays. Informez-vous sur vos droits en vertu des lois de confidentialité de votre pays.
          </p>
          <p className="mb-4">Pour exercer ces droits, visitez notre page de contact ou envoyez un e-mail à notre délégué à la protection des données à contact@saaje.app. Nous pourrions vous demander des informations spécifiques pour confirmer votre identité.
          </p>
          <p className="mb-4">Si vous avez des doutes, contactez-nous en premier lieu. Résidents de l'UE, si le problème persiste, vous pouvez déposer une plainte auprès des autorités de protection des données.</p>

          <h2 className="text-3xl font-bold mb-4">Délai de conservation et suppression des données</h2>
          <p className="mb-4">Nous conservons vos données aussi longtemps que nécessaire en fonction de la base légale invoquée et de la loi. Après la suppression du compte, une période de réactivation de 28 jours est offerte. Au-delà, la suppression débute, sauf si nécessaire pour la loi, la preuve de conformité, ou des intérêts légitimes.
          </p>
          <p className="mb-4">Avertissement : Même après suppression, des copies peuvent subsister chez d'autres utilisateurs ou services tiers. Nous ne contrôlons pas cela.
          </p>
          
          <h2 className="text-3xl font-bold mb-4">Emplacement de vos données</h2>
          <p className="mb-4">Nous utilisons un réseau français de serveurs. 
          Pour plus d'informations, contactez-nous à contact@saaje.app.
          </p>

        
          <h2 className="text-3xl font-bold mb-4">Modification de cette Politique de confidentialité</h2>
          <p className="mb-20">Cette Politique est sujette à révision. Vous serez informé(e) des modifications, et l'utilisation continue après leur entrée en vigueur constitue votre acceptation.
          </p>

          <p className="">Date d'entrée en vigueur : 21 février 2024.</p>
        </div>
      </div>
      </section>
      <Footer />
      </>
      );
  }
  
  export default Blog;
  