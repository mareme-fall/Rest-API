// models/User.js
const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Nom d'utilisateur, obligatoire et unique
    email: { type: String, required: true, unique: true },    // Adresse e-mail, obligatoire et unique
    password: { type: String, required: true },               // Mot de passe, obligatoire
    // Ajoutez plus de champs si nécessaire
});

// Création du modèle User à partir du schéma défini
const User = mongoose.model('User', userSchema);

module.exports = User; // Export du modèle User
