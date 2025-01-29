// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
app.use(express.json());

// Récupérer la clé API de OpenAI depuis le fichier .env
const openaiApiKey = process.env.OPENAI_API_KEY;

// Endpoint qui reçoit la requête de traduction
app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    // Appel à l'API OpenAI pour générer une réponse
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',  // Utiliser le modèle GPT-3 ou GPT-4
        prompt: prompt,
        max_tokens: 100,  // Limite de mots dans la réponse
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Envoyer la réponse générée par l'API à l'utilisateur
    res.json({ text: response.data.choices[0].text });
  } catch (error) {
    console.error('Erreur lors de l’appel à l’API OpenAI:', error);
    res.status(500).send('Erreur serveur');
  }
});

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
