import React from "react";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

function ConditionUtilisation() {
  return (
    <>
      <section className="h-full min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 className="mb-2 text-left text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Conditions d'utilisation
          </h2>
          <div className="container mx-auto px-4 py-4 text-left text-gray-900 dark:text-white">
            <p className="mb-2">
              Bienvenue dans les conditions d’utilisation de Saaje. En utilisant
              notre service, vous acceptez les conditions ci-dessous, visant à
              protéger les utilisateurs et à garantir une expérience positive
              pour tous. Nous vous invitons à lire ces règles et à les
              respecter.
            </p>
            <h2 className="mb-2 text-2xl font-bold">1. Admissibilité</h2>
            <p className="mb-4">
              Vous êtes autorisé(e) à créer un compte, à accéder ou utiliser le
              Service que si :<li>Vous avez au moins 18 ans ;</li>
              <li>
                Vous n'êtes pas condamné, en vertu des lois françaises ou de
                toute autre juridiction applicable ;
              </li>
              <li>
                Vous n'avez jamais été condamné(e) pour un crime ou un délit
                passible de poursuites (ou un crime de gravité similaire), un
                crime à caractère sexuel ou impliquant de la violence, et n'êtes
                pas tenu(e) de vous déclarer en tant que délinquant(e)
                sexuel(le) auprès de tout registre des délinquants sexuels au
                niveau étatique, fédéral ou local.
              </li>
              <li>
                Votre compte devient opérationnel uniquement après que notre
                équipe a validé l'exactitude de vos informations personnelles.
              </li>
            </p>
            <p className="mb-4">
              Pour garantir un environnement de confiance au sein de la
              communauté Saaje, l'identité de chaque utilisateur est vérifiée à
              l'aide de techniques d’OSINT (Open Source Intelligence), incluant
              notamment la vérification de la profession indiquée sur votre
              profil LinkedIn. Si un doute persiste concernant l'exactitude des
              informations fournies lors du processus de pré-inscription, Saaje
              se réserve le droit de vous contacter par email pour obtenir des
              précisions supplémentaires. Ces informations supplémentaires sont
              strictement utilisées pour vérifier votre identité et ne seront
              jamais partagées avec d’autres membres ou exploitées à d’autres
              fins.
            </p>

            <h2 className="mb-2 text-2xl font-bold">
              2. Utilisation de vos données
            </h2>
            <p className="mb-4">
              Saaje peut accéder, stocker et divulguer les informations et le
              Contenu de votre compte si nous sommes tenus de le faire en vertu
              de la loi, dans le cadre du présent Accord, ou si nous croyons de
              bonne foi que lesdits accès, stockage ou divulgation constituent
              un intérêt légitime, afin de : respecter une procédure judiciaire
              ;
            </p>

            <ul className="mb-4 list-inside list-disc">
              <li>
                Votre prénom est visible sur l’application, en revanche votre
                nom de famille n’apparaît pas aux autres membres ;
              </li>
              <li>
                Nous fonctionnons sur un principe d’authenticité, ce qui fait
                que nous n’utilisons pas de pseudonymes;
              </li>
              <li>
                Vous n'êtes pas une personne à qui il est interdit d'utiliser le
                Service en vertu des lois françaises ou de toute autre
                juridiction applicable (par exemple, que vous n'apparaissez pas
                sur une liste de personnes spécifiquement désignées par une
                autorité compétente ni ne faites l'objet d'une interdiction
                similaire) ;
              </li>
              <li>Faire appliquer le présent Accord</li>
              <li>
                répondre à toutes réclamations selon lesquelles tout Contenu
                violerait les droits de tiers
              </li>
              <li>répondre à vos demandes au service client ;</li>
              <li>
                protéger les droits, la propriété ou la sûreté personnelle de la
                Société ou de toute autre personne.
              </li>

              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et
                organisationnelles pour protéger vos données contre tout accès
                non autorisé, toute perte, toute destruction ou toute
                altération. Ces mesures incluent, mais ne sont pas limitées à,
                le cryptage des données, la surveillance continue des systèmes
                et la formation régulière de notre personnel.
              </p>

              <p>
                Nous pouvons partager vos données avec des tiers, y compris des
                partenaires commerciaux et des fournisseurs de services,
                uniquement dans la mesure nécessaire pour fournir nos services
                et conformément aux lois applicables. Tout partage de données
                sera effectué de manière sécurisée et en respectant les normes
                de confidentialité.
              </p>
              <p>
                Nous conservons vos données aussi longtemps que nécessaire pour
                fournir nos services et conformément aux exigences légales. Les
                données seront supprimées ou anonymisées lorsqu'elles ne sont
                plus nécessaires, sauf si leur conservation est requise par la
                loi.Nous nous engageons à respecter toutes les lois et
                réglementations applicables en matière de protection des
                données, y compris le Règlement Général sur la Protection des
                Données (RGPD).
              </p>
            </ul>
            <h2 className="mb-4 text-3xl font-bold">
              3. Votre compte et vos droits
            </h2>
            <p className="mb-4">
              Pour utiliser Saaje, vous pouvez vous connecter de différentes
              manières, notamment en utilisant votre identifiant Facebook. En
              choisissant d’utiliser votre identifiant Facebook, vous nous
              autorisez à accéder à certaines informations de votre compte
              Facebook et à les utiliser, notamment votre profil public
              Facebook. Pour plus d'informations concernant les informations que
              nous collectons auprès de vous et la façon dont nous les
              utilisons, veuillez consulter notre Politique de confidentialité.
              Vous êtes responsable de maintenir la confidentialité des
              identifiants de connexion que vous utilisez pour vous inscrire sur
              Saaje, et vous êtes seul(e) responsable(e) de toutes les activités
              survenant sous ces identifiants. Si vous pensez que quelqu'un a eu
              accès à votre compte, veuillez nous contacter immédiatement à
              l’adresse contact@saaje.app.
            </p>
            <p className="mb-4">
              Saaje vous octroie une licence personnelle, mondiale, libre de
              redevance, incessible, non-exclusive, révocable et ne pouvant
              faire l'objet d'une sous-licence afin d'accéder au Service et de
              l'utiliser. Cette licence, ainsi que toute autorisation d'accéder
              au Service, sera automatiquement révoquée si vous vous engagez
              dans l'une des actions suivantes :
            </p>
            <li>Usurper l’identité d’autrui</li>
            <li>
              Utiliser le Service ou tout contenu du Service à des fins
              commerciales sans notre consentement écrit;{" "}
            </li>
            <li>
              Copier, modifier, transmettre, créer toute œuvre dérivée, utiliser
              ou reproduire de quelque manière que ce soit tout support
              assujetti à un droit d'auteur, toute image, marque commerciale,
              dénomination commerciale, marque de service ou tout autre élément
              de propriété intellectuelle, contenu ou information exclusive
              accessibles à travers le Service sans le consentement écrit
              préalable de Saaje;{" "}
            </li>
            <li>
              Utiliser toute méthode ou processus visant à accéder, extraire,
              indexer, fouiller les données, ou reproduire ou éluder de quelque
              manière que ce soit la structure de navigation ou la présentation
              du Service ou de ses contenus;
            </li>
            <li>
              Utiliser le Service d'une manière pouvant interférer avec ledit
              Service, les serveurs ou les réseaux connectés audit Service, les
              interrompre ou leur nuire;
            </li>
            <li>
              Télécharger des virus ou autres codes malveillants ou compromettre
              autrement la sécurité du Service;
            </li>
            <li>
              Copier ou reproduire toute partie du Service sans l'autorisation
              préalable écrite de Saaje;
            </li>
            <li>
              Utiliser des métabalises, un code, ou d'autres appareils contenant
              toute référence à Saaje ou au Service (ou toute marque,
              dénomination commerciale, marque de service, logo ou slogan de
              Saaje) pour diriger toute personne vers un autre site Web à
              quelque fin que ce soit;
            </li>
            <li>
              Utiliser ou développer toutes applications qui interagissent avec
              le Service, le Contenu ou les informations d'autres membres sans
              notre consentement écrit{" "}
            </li>
            <li>
              Sonder, analyser, ou tester la vulnérabilité de notre Service ou
              de tout système ou réseau
            </li>
            <p className="mb-4">
              Saaje se réserve le droit d'enquêter et de prendre toute action en
              justice disponible en réponse à toute utilisation illégale et/ou
              non autorisée du Service, y compris la résiliation de votre
              compte. Tout logiciel que nous vous fournissons peut
              automatiquement télécharger et installer des améliorations, des
              mises à jour, ou d'autres nouvelles fonctionnalités. Vous pouvez
              ajuster ces téléchargements automatiques dans les paramètres de
              votre appareil.
            </p>

            <h2 className="mb-4 text-3xl font-bold">4. Les droits de Saaje</h2>
            <p className="mb-4">
              Notre licence sur votre Contenu est régie par vos droits
              conformément aux lois en vigueur (par exemple, les lois sur la
              protection des données personnelles dans la mesure où le Contenu
              contient des informations personnelles telles que définies par ces
              lois) et n'existe que dans le but limité de développer, fournir,
              gérer et améliorer le Service, ainsi que pour la recherche et le
              développement d'autres services.{" "}
            </p>
            <p className="mb-4">
              Vous acceptez que tout Contenu que vous placez ou que vous nous
              autorisez à placer sur le Service puisse être vu par d'autres
              membres ainsi que par toute personne qui consulte ou qui participe
              au Service (comme des personnes qui peuvent recevoir du Contenu
              partagé par d'autres membres de Saaje). Vous convenez que toutes
              les informations que vous soumettez lors de la création de votre
              compte, y compris les informations soumises à partir de votre
              compte Facebook, sont exactes et véridiques, et que vous avez le
              droit de publier le Contenu sur le Service et d'accorder à Saaje
              la licence susmentionnée.
            </p>
            <p className="mb-4">
              Vous comprenez et acceptez que nous puissions surveiller ou
              examiner tout Contenu que vous publiez dans le cadre du Service.
              Nous pouvons supprimer tout Contenu, en tout ou en partie, si,
              selon notre seul jugement, il viole le présent Accord ou est
              susceptible de nuire à la réputation du Service.
            </p>
            <p className="mb-4">
              Lors de toute communication avec nos représentants du service
              client, vous acceptez d'être respectueux et aimable. Si nous
              considérons que votre comportement envers l'un de nos
              représentants du service client ou autres employés est à tout
              moment menaçant, harcelant ou injurieux, nous nous réservons le
              droit de clôturer immédiatement votre compte.
            </p>
            <p className="mb-4">
              En contrepartie de l'autorisation que Saaje vous accorde
              d'utiliser le Service, vous acceptez que nous, nos affiliés et nos
              partenaires tiers puissent placer des annonces sur le Service. En
              soumettant des suggestions ou des commentaires à Saaje à propos de
              nos Services, vous acceptez que Saaje puisse utiliser et partager
              ce retour, à toute fin que ce soit, sans vous offrir de
              compensation.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              5. Utilisation appropriée de Saaje
            </h2>
            <p className="mb-4">En utilisant Saaje, vous vous engagez à :</p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                Ne pas utiliser Saaje à des fins illégales ou malveillantes.
              </li>
              <li>
                Ne pas usurper l’identité d’autrui ni partager ses informations
                personnelles sans autorisation.
              </li>
              <li>
                Ne pas harceler, intimider, ou envoyer des messages inappropriés
                aux autres utilisateurs.
              </li>
              <li>
                Ne pas publier de contenu violent, haineux, sexuellement
                explicite, ou incitant à la violence.
              </li>
              <li>
                Ne pas envoyer du courrier indésirable, de demander de l'argent
                aux membres ou de les escroquer.
              </li>
              <li>
                Ne pas publier tout Contenu constituant un discours haineux,
                menaçant, sexuellement explicite ou pornographique.
              </li>
              <li>
                Ne pas demander des mots de passe à quelque fin que ce soit, ou
                des informations permettant une identification personnelle à des
                fins commerciales ou illégales auprès d'autres membres ou de
                diffuser les informations personnelles d'une autre personne sans
                sa permission.
              </li>
              <li>
                Ne pas utiliser le compte d'un autre membre, partager un compte
                avec un autre membre ou posséder plus d'un compte.
              </li>
            </ul>

            <h2 className="mb-4 text-3xl font-bold">
              6. Notifications Push et Géolocalisation
            </h2>
            <p className="mb-4">
              Nous pouvons vous envoyer des e-mails, SMS, notifications push,
              alertes et d'autres messages liés à l'Application et/ou aux
              services Saaje, tels que les améliorations, offres, produits,
              événements et autres promotions. Quand vous aurez téléchargé
              l'Application, il vous sera demandé d'accepter ou de refuser de
              recevoir des notifications push/alertes.
            </p>
            <p className="mb-4">
              Si vous ne souhaitez plus recevoir de notifications push/alertes
              de l'Application, vous pouvez les désactiver en modifiant les
              paramètres de notification sur votre téléphone mobile. Vous pouvez
              vous désinscrire ou vous désabonner des autres types de messages
              en nous envoyant votre demande par e-mail à l'adresse
              contact@saaje.app.
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              7. Achats et abonnements et modifications{" "}
            </h2>
            <p className="mb-4">
              Saaje propose des services payants, facturés via l’App Store,
              Google Play ou d'autres options autorisées. Vous pouvez résilier
              votre abonnement à tout moment depuis les paramètres de votre
              compte. Tout mois commencé est dû. Votre abonnement se
              renouvellera automatiquement pour une durée indéfinie, au tarif
              que vous avez approuvé lors de la souscription, sauf si vous
              annulez avant la date de renouvellement. Les informations de votre
              carte bancaire seront sauvegardées et utilisées ultérieurement
              pour les paiements automatiques par carte, conformément au présent
              Accord.
            </p>
            <p className="mb-4">
              Pour éviter le renouvellement automatique, assurez-vous d’annuler
              avant la fin de votre période d’abonnement.
            </p>
            <p className="mb-4">
              Saaje s'engage à améliorer constamment le Service en y ajoutant
              des fonctionnalités supplémentaires qui pourraient vous
              intéresser. Cela signifie que de nouvelles fonctionnalités ou
              améliorations peuvent être introduites à tout moment, tandis que
              certaines fonctionnalités existantes pourraient être supprimées.
              Si ces actions n'affectent pas substantiellement vos droits ou
              obligations, il est possible que nous ne vous avertissions pas à
              l'avance. Dans certaines circonstances atténuantes, comme des
              problèmes de sûreté ou de sécurité, nous pourrions suspendre
              temporairement ou résilier définitivement le Service, et nous vous
              informerions à l'avance.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              8. Politique de remboursement
            </h2>
            <p className="mb-4">
              Pour les achats via l'App Store, les remboursements sont traités
              par Apple. Pour en faire la demande, rendez-vous dans l'App Store
            </p>
            <p className="mb-4">
              Pour les achats via Google Play, les remboursements sont traités
              par Google.{" "}
            </p>
            <p className="mb-4">
              Saaje rembourse uniquement les apéros annulés par son propre fait.
              Aucun remboursement ne sera effectué si vous ne prévenez pas notre
              équipe par tout moyen, que vous ne pouvez pas participer à
              l’évènement, au moins 24 heures avant la date de la soirée.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              9. Suspension et résiliation
            </h2>
            <p className="mb-4">
              Saaje peut suspendre ou résilier un compte sans remboursement en
              cas de non-respect de ces conditions d’utilisation.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              10. Sécurité et Comportement responsable
            </h2>
            <p className="mb-4">
              Saaje encourage une expérience respectueuse entre ses membres, en
              facilitant les interactions uniquement lorsque les deux parties
              ont manifesté leur intérêt. Les rencontres physiques effectuées
              entre les utilisateurs se font sous leur propre responsabilité, et
              que Saaje n'est pas responsable de tout dommage ou préjudice
              découlant de telles rencontres.
            </p>
            <p className="mb-4">
              Vous pouvez signaler tout comportement inapproprié d’un autre
              utilisateur directement sur l’application, soit en nous contactant
              : contact@saaje.app.. Saaje se réserve le droit de suspendre ou de
              bannir les utilisateurs ne respectant pas ces règles.{" "}
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              11. Propriété intellectuelle
            </h2>
            <p className="mb-4">
              Saaje et son contenu sont protégés par les droits d'auteur et
              d'autres lois. Vous ne pouvez pas copier, distribuer ou modifier
              le contenu de Saaje sans notre consentement écrit.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              12. Modifications et mises à jour
            </h2>
            <p className="mb-4">
              Nous effectuons des mises à jour régulières pour améliorer
              l'expérience utilisateur. Certaines fonctionnalités peuvent être
              ajoutées, supprimées ou modifiées sans préavis. Vous serez informé
              de chaque mise à jour par mail.
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              13. Litiges et arbitrage
            </h2>
            <p className="mb-4">
              Pour résoudre tout différend, Saaje propose une procédure
              d’arbitrage, excepté pour les utilisateurs résidant dans des zones
              où cela est interdit. En acceptant ces conditions, vous renoncez à
              tout recours collectif.
            </p>

            <p className=""> Dernière révision, 1er novembre 2024. </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConditionUtilisation;
