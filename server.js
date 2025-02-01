const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

// Charger les variables d'environnement
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Pour éviter les erreurs CORS entre frontend et backend

const openaiApiKey = process.env.OPENAI_API_KEY; // Clé API OpenAI récupérée depuis .env

// Endpoint pour corriger le texte
app.post('/api/correct', async (req, res) => {
    const userInput = req.body.prompt;

    if (!userInput) {
        return res.status(400).json({ error: "Aucun texte fourni" });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions', // Nouvelle version API avec GPT-3.5 ou GPT-4
            {
                model: 'gpt-3.5-turbo', // Utilisation du modèle GPT-3.5, plus adapté
                messages: [{ role: 'user', content: `Corrigez le texte suivant : ${userInput}` }],
                max_tokens: 100,
                temperature: 0.5
            },
            {
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json({ text: response.data.choices[0].message.content.trim() });
    } catch (error) {
        console.error('Erreur lors de l’appel à OpenAI:', error);
        res.status(500).send('Erreur serveur');
    }
});

// Lancer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`✅ Serveur en écoute sur http://localhost:${port}`);
});
