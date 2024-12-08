import { Sequelize, DataTypes } from "sequelize"; // Utilisation d'import au lieu de require

// Initialisation de la base de données SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database.sqlite", // chemin vers la base de données
});

// Définir le modèle Membre
const Membre = sequelize.define("Membre", {
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

// Synchroniser la base de données (crée les tables si elles n'existent pas)
sequelize.sync();

// Exporter le modèle Membre pour qu'il soit utilisable ailleurs dans l'application
export { Membre };
