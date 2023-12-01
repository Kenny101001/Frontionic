const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Configurer CORS
app.use(cors());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'votre_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'votre_base_de_donnees',
});

// Tester la connexion à la base de données
db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données');
  }
});

// Exemple de route pour récupérer des données depuis la base de données
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM votre_table', (err, result) => {
    if (err) {
      console.error('Erreur lors de la requête :', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.json(result);
    }
  });
});

// Port d'écoute du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
