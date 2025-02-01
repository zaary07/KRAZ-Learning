// Fonction de reconnaissance vocale avec Web Speech API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "fr-FR";
recognition.continuous = false;

recognition.onstart = function () {
    console.log("Reconnaissance vocale commencée...");
};

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript; // Texte transcrit
    console.log("Texte transcrit : " + transcript);
    
    // Envoyer le texte transcrit au backend pour correction
    correctText(transcript);
};

recognition.onerror = function (event) {
    console.error("Erreur dans la reconnaissance vocale : " + event.error);
};

// Fonction pour démarrer la reconnaissance vocale
function startRecognition() {
    recognition.start();
}

// Fonction de correction du texte avec OpenAI via le serveur backend
function correctText(inputText) {
    if (inputText === "") {
        alert("Veuillez entrer un texte à corriger");
        return;
    }

    fetch('http://localhost:3000/api/correct', {  // Appel au backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputText })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Ajout du log pour vérifier la réponse
        document.getElementById('correctedText').textContent = 'Correction : ' + data.text;
    })
    .catch(error => {
        console.error("Erreur de correction : ", error);
        alert("Erreur de correction, veuillez réessayer plus tard.");
    });
}

// Fonction pour démarrer la correction vocale
function startVoiceCorrection() {
    startRecognition();
}

// Écouteurs d'événements pour les boutons
document.getElementById('correctButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    correctText(inputText);
});

document.getElementById('voiceCorrectionButton').addEventListener('click', startVoiceCorrection);