import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { Membre } from "./database.js"; // Import de database.js avec syntaxe ES modules

async function generateQRCodes() {
  try {
    // Synchroniser la base de données avant de commencer
    await Membre.sync();

    const membres = [
      { prenom: "Jean", nom: "Dupont", code: "ABC123" },
      { prenom: "Marie", nom: "Durand", code: "DEF456" },
      // Ajoute ici les autres membres
    ];

    // Vérifier si le dossier qrCodes existe, sinon le créer
    console.log(`Chemin complet du répertoire des QR Codes: ${qrCodesDir}`);
    const qrCodesDir = path.resolve("public", "qrCodes");
    console.log(`Chemin complet : ${qrCodesDir}`);
    if (!fs.existsSync(qrCodesDir)) {
      fs.mkdirSync(qrCodesDir, { recursive: true });
      console.log(`Dossier ${qrCodesDir} créé.`);
    } else {
      console.log(`Le répertoire ${qrCodesDir} existe déjà.`);
    }

    console.log(`Vérification de l'existence du répertoire: ${qrCodesDir}`);
    for (const membre of membres) {
      // Vérifier si le membre existe déjà dans la base de données
      const existingMembre = await Membre.findOne({
        where: { code: membre.code },
      });
      if (existingMembre) {
        console.log(`Le membre avec le code ${membre.code} existe déjà.`);

        // Générer un QR code pour le membre existant
        const qrCodeData = `https://localhost:3000/verify?code=${existingMembre.code}`;
        const qrCodePath = path.join(
          qrCodesDir,
          `${existingMembre.prenom}_${existingMembre.nom}.png`,
        );

        // Gestion de l'erreur lors de la création du QR code
        try {
          await QRCode.toFile(qrCodePath, qrCodeData);
          console.log(
            `QR Code généré pour ${existingMembre.prenom} ${existingMembre.nom}: ${qrCodePath}`,
          );
        } catch (qrError) {
          console.error(
            `Erreur lors de la génération du QR code pour ${existingMembre.prenom} ${existingMembre.nom}:`,
            qrError,
          );
        }
      } else {
        // Si le membre n'existe pas, l'ajouter à la base de données
        const membreCreated = await Membre.create(membre);

        // Générer un QR code pour chaque nouveau membre
        const qrCodeData = `https://localhost:3000/verify?code=${membreCreated.code}`;
        const qrCodePath = path.join(
          qrCodesDir,
          `${membreCreated.prenom}_${membreCreated.nom}.png`,
        );

        // Gestion de l'erreur lors de la création du QR code
        try {
          await QRCode.toFile(qrCodePath, qrCodeData);
          console.log(
            `QR Code généré pour ${membreCreated.prenom} ${membreCreated.nom}: ${qrCodePath}`,
          );
        } catch (qrError) {
          console.error(
            `Erreur lors de la génération du QR code pour ${membreCreated.prenom} ${membreCreated.nom}:`,
            qrError,
          );
        }
      }
    }
  } catch (error) {
    console.error("Erreur lors de la génération du QR code :", error);
  }
}

generateQRCodes();
