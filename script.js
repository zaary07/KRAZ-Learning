// API keys
const openaiAPIKey = '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';

// Fonction de reconnaissance vocale avec Web Speech API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "fr-FR"; // Langue pour la reconnaissance vocale
recognition.continuous = false;

recognition.onstart = function () {
    console.log("Reconnaissance vocale commencée...");
};

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript; // Texte transcrit
    console.log("Texte transcrit : " + transcript);
    
    // Envoi du texte transcrit à l'API OpenAI pour correction
    correctText(transcript);
};

recognition.onerror = function (event) {
    console.error("Erreur dans la reconnaissance vocale : " + event.error);
};

// Fonction pour démarrer la reconnaissance vocale
function startRecognition() {
    recognition.start();
}

// Fonction de correction du texte avec OpenAI
function correctText(inputText) {
    if (inputText === "") {
        alert("Veuillez entrer un texte à corriger");
        return;
    }

    const prompt = `Corrigez le texte suivant : ${inputText}`;
    
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiAPIKey}`  // Remplace par ta clé API OpenAI
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.5
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('correctedText').textContent = 'Correction : ' + data.choices[0].text.trim();
    })
    .catch(error => console.error("Erreur de correction : ", error));
}

// Fonction pour afficher l'interface de correction orale (via Google Speech-to-Text)
function checkPronunciation() {
    const inputText = document.getElementById('inputText').value;

    if (inputText === "") {
        alert("Veuillez entrer un texte pour vérifier la prononciation");
        return;
    }

    // Simulé pour l'exemple : La fonctionnalité sera ajoutée une fois que la reconnaissance vocale est effectuée
    document.getElementById('pronunciationFeedback').textContent = "Prononciation : Fonctionnalité de reconnaissance vocale en cours.";
}

// Fonction pour démarrer la reconnaissance vocale et corriger le texte transcrit
function startVoiceCorrection() {
    startRecognition();  // Lance la reconnaissance vocale
}

// Appel à la fonction de correction textuelle
document.getElementById('correctButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    correctText(inputText);
});

// Appel à la fonction de vérification de prononciation
document.getElementById('voiceCorrectionButton').addEventListener('click', startVoiceCorrection);
