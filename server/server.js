// Importation des modules nécessaires
const express = require('express'); // Importation du module Express.js pour la création de l'application web
const mongoose = require('mongoose'); // Importation du module Mongoose pour la gestion de la base de données MongoDB
require('dotenv').config(); // Chargement des variables d'environnement depuis le fichier .env
const User = require('./models/User'); // Importation du modèle User défini dans le fichier User.js

const app = express(); // Création de l'application Express
const PORT = process.env.PORT || 3000; // Définition du port d'écoute du serveur, en utilisant la variable d'environnement PORT ou le port 3000 par défaut

// Middleware pour analyser les corps de requête au format JSON
app.use(express.json());

// Routes pour interagir avec les utilisateurs

// Route GET pour obtenir tous les utilisateurs
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Recherche de tous les utilisateurs dans la base de données
        res.json(users); // Renvoie la liste des utilisateurs au format JSON
    } catch (err) {
        res.status(500).json({ message: err.message }); // En cas d'erreur, renvoie un code d'erreur 500 avec un message JSON
    }
});

// // Route POST pour ajouter un nouvel utilisateur
// app.post('/users', async (req, res) => {
//     const user = new User({
//         username: req.body.username, // Récupère le nom d'utilisateur à partir du corps de la requête
//         email: req.body.email, // Récupère l'email à partir du corps de la requête
//         password: req.body.password // Récupère le mot de passe à partir du corps de la requête
//         // Ajoutez plus de champs si nécessaire
//     });

//     try {
//         const newUser = await user.save(); // Sauvegarde le nouvel utilisateur dans la base de données
//         res.status(201).json(newUser); // Renvoie le nouvel utilisateur ajouté avec un code de statut 201 et un objet JSON
//     } catch (err) {
//         res.status(400).json({ message: err.message }); // En cas d'erreur, renvoie un code d'erreur 400 avec un message JSON
//     }
// });

// // Route PUT pour mettre à jour un utilisateur par son nom d'utilisateur
// app.put('/users/:username', async (req, res) => {
//     try {
//         const updatedUser = await User.findOneAndUpdate(
//             { username: req.params.username }, // Recherche l'utilisateur par son nom d'utilisateur
//             req.body, // Données à mettre à jour
//             { new: true } // Renvoie l'utilisateur mis à jour
//         );
//         res.json(updatedUser); // Renvoie l'utilisateur mis à jour au format JSON
//     } catch (err) {
//         res.status(400).json({ message: err.message }); // En cas d'erreur, renvoie un code d'erreur 400 avec un message JSON
//     }
// });

// // Route DELETE pour supprimer un utilisateur par son nom d'utilisateur
// app.delete('/users/:username', async (req, res) => {
//     try {
//         await User.deleteOne({ username: req.params.username }); // Supprime l'utilisateur par son nom d'utilisateur
//         res.json({ message: 'Utilisateur supprimé' }); // Renvoie un message JSON indiquant que l'utilisateur a été supprimé
//     } catch (err) {
//         res.status(500).json({ message: err.message }); // En cas d'erreur, renvoie un code d'erreur 500 avec un message JSON
//     }
// });

// // Connexion à MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true, // Utilise le nouvel analyseur d'URL MongoDB
//     useUnifiedTopology: true // Utilise le moteur de surveillance de serveur unique
// });

// // Démarrage du serveur
// app.listen(PORT, () => {
//     console.log(`Serveur en cours d'exécution sur le port ${PORT}`); // Affiche un message dans la console indiquant le démarrage du serveur
// });
