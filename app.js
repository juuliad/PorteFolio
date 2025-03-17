const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Définir le dossier statique pour les fichiers publics
app.use(express.static(path.join(__dirname, 'public'), { 'extensions': ['html', 'png', 'jpg', 'css', 'php'] }));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    // Lire le fichier HTML depuis le dossier public
    const filePath = path.join(__dirname, 'public', 'HTML', 'index.html'); // Ajout du nom du fichier
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

console.log("Le code est en cours d'exécution");

