const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/receive_data', (req, res) => {
  const dataFromArduino = req.body;
  console.log('Données reçues de l\'Arduino :', dataFromArduino);
  res.send('Données reçues avec succès !');

  
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
