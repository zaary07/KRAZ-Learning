// Variable globale pour stocker la réponse attendue de la traduction
var expectedTranslation = "";

// Variables pour gérer la navigation entre sections
var sectionOrder = ["quizSection", "pronunciationSection", "readingSection", "writingSection"];
var currentSectionIndex = 0;

/* =======================================================
   Fonction principale : charge toutes les sections du niveau
========================================================== */
function loadLevel(level) {
  // Affiche le conteneur de la leçon
  document.getElementById("lessonContainer").style.display = "block";
  // Met à jour le titre avec le niveau choisi
  document.getElementById("levelTitle").innerText = "Leçon de Français - Niveau " + level;

  // Charge dynamiquement chaque section selon le niveau
  loadQuiz(level);
  loadPronunciation(level);
  loadReading(level);
  loadTranslation(level);

  // Initialisation de la navigation : on commence par la première section (quiz)
  currentSectionIndex = 0;
  sectionOrder.forEach(function(sectionId, index) {
    document.getElementById(sectionId).style.display = (index === currentSectionIndex) ? "block" : "none";
  });
}

/* =======================================================
   Section QUIZ
========================================================== */
function loadQuiz(level) {
  var quizContainer = document.getElementById("quizSection");
  var quizContent = "";
  switch (level) {
    case "A1":
      quizContent = `<p>Quel est le mot pour "Hello" en français ?</p>
        <button class="btn" onclick="checkAnswer('Bonjour', 'Bonjour')">Bonjour</button>
        <button class="btn" onclick="checkAnswer('Salut', 'Bonjour')">Salut</button>
        <button class="btn" onclick="checkAnswer('Bonsoir', 'Bonjour')">Bonsoir</button>`;
      break;
    case "A2":
      quizContent = `<p>Quelle est la traduction de "How are you?" en français ?</p>
        <button class="btn" onclick="checkAnswer('Comment ça va ?', 'Comment ça va ?')">Comment ça va ?</button>
        <button class="btn" onclick="checkAnswer('Ça va bien', 'Comment ça va ?')">Ça va bien</button>
        <button class="btn" onclick="checkAnswer('Salut', 'Comment ça va ?')">Salut</button>`;
      break;
    case "B1":
      quizContent = `<p>Complétez la phrase : "Je ____ un étudiant."</p>
        <button class="btn" onclick="checkAnswer('suis', 'suis')">suis</button>
        <button class="btn" onclick="checkAnswer('serai', 'suis')">serai</button>
        <button class="btn" onclick="checkAnswer('étais', 'suis')">étais</button>`;
      break;
    case "B2":
      quizContent = `<p>Que signifie "Être à l'aise" en français ?</p>
        <button class="btn" onclick="checkAnswer('Être confortable', 'Se sentir bien')">Être confortable</button>
        <button class="btn" onclick="checkAnswer('Se sentir bien', 'Se sentir bien')">Se sentir bien</button>
        <button class="btn" onclick="checkAnswer('Être rapide', 'Se sentir bien')">Être rapide</button>`;
      break;
    default:
      quizContent = "<p>Aucun quiz disponible pour ce niveau.</p>";
  }
  quizContainer.innerHTML = quizContent;
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse, réessayez.");
  }
}

/* =======================================================
   Section PRONONCIATION
========================================================== */
function loadPronunciation(level) {
  var pronunciationContainer = document.getElementById("pronunciationSection");
  var phrase = "";
  switch (level) {
    case "A1":
      phrase = "Bonjour";
      break;
    case "A2":
      phrase = "Comment ça va ?";
      break;
    case "B1":
      phrase = "Je suis un étudiant.";
      break;
    case "B2":
      phrase = "Être à l'aise";
      break;
    default:
      phrase = "";
  }
  // La section affichera la phrase, un bouton pour écouter et un pour prononcer
  pronunciationContainer.innerHTML = `<p>Teste ta prononciation :</p>
    <p id="pronunciationPhrase">${phrase}</p>
    <button class="btn" onclick="playPronunciation()">Écouter</button>
    <button class="btn" onclick="startPronunciationTest()">Prononcez</button>`;
}

// Utilisation de la synthèse vocale pour lire la phrase
function playPronunciation() {
  var phrase = document.getElementById("pronunciationPhrase").innerText;
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
  } else {
    alert("Votre navigateur ne supporte pas la synthèse vocale.");
  }
}

// Utilisation de la reconnaissance vocale pour tester la prononciation
function startPronunciationTest() {
  // Vérifie la disponibilité de l'API de reconnaissance vocale
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Votre navigateur ne supporte pas la reconnaissance vocale.");
    return;
  }
  var recognition = new SpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();
  recognition.onresult = function(event) {
    var userSpeech = event.results[0][0].transcript;
    var expected = document.getElementById("pronunciationPhrase").innerText;
    if (userSpeech.toLowerCase() === expected.toLowerCase()) {
      alert("Bonne prononciation !");
    } else {
      alert("Mauvaise prononciation. Vous avez dit : " + userSpeech);
    }
  };
  recognition.onerror = function(event) {
    alert("Erreur de reconnaissance vocale : " + event.error);
  };
}

/* =======================================================
   Section LECTURE
========================================================== */
function loadReading(level) {
  var readingContainer = document.getElementById("readingSection");
  var text = "";
  switch (level) {
    case "A1":
      text = "Je m'appelle Pierre.";
      break;
    case "A2":
      text = "Aujourd'hui, il fait beau.";
      break;
    case "B1":
      text = "Je suis allé au marché ce matin.";
      break;
    case "B2":
      text = "La complexité de la langue française est fascinante.";
      break;
    default:
      text = "";
  }
  readingContainer.innerHTML = `<p>Lecture :</p>
    <p id="readingPhrase">${text}</p>
    <button class="btn" onclick="playReading()">Écouter la lecture</button>`;
}

// Utilisation de la synthèse vocale pour la lecture
function playReading() {
  var text = document.getElementById("readingPhrase").innerText;
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
  } else {
    alert("Votre navigateur ne supporte pas la synthèse vocale.");
  }
}

/* =======================================================
   Section TRADUCTION
========================================================== */
function loadTranslation(level) {
  var translationContainer = document.getElementById("writingSection");
  var phrase = "";
  switch (level) {
    case "A1":
      phrase = "Translate to French: 'Good morning'";
      expectedTranslation = "Bonjour";
      break;
    case "A2":
      phrase = "Translate to French: 'How are you?'";
      expectedTranslation = "Comment ça va ?";
      break;
    case "B1":
      phrase = "Translate to French: 'I am going to the market'";
      expectedTranslation = "Je vais au marché";
      break;
    case "B2":
      phrase = "Translate to French: 'It is a beautiful day'";
      expectedTranslation = "C'est une belle journée";
      break;
    default:
      phrase = "";
      expectedTranslation = "";
  }
  translationContainer.innerHTML = `<p>${phrase}</p>
    <input type="text" id="userWriting" placeholder="Votre traduction">
    <button class="btn" onclick="checkWriting()">Vérifier</button>
    <p id="writingFeedback"></p>`;
}

function checkWriting() {
  var userInput = document.getElementById("userWriting").value;
  if (userInput.trim().toLowerCase() === expectedTranslation.toLowerCase()) {
    document.getElementById("writingFeedback").innerText = "Correct!";
    document.getElementById("writingFeedback").style.color = "green";
  } else {
    document.getElementById("writingFeedback").innerText = "Incorrect, essayez encore.";
    document.getElementById("writingFeedback").style.color = "red";
  }
}

/* =======================================================
   Fonction NEXT SECTION
   Cette fonction passe à la section suivante dans l'ordre défini
========================================================== */
function nextSection() {
  // Si nous ne sommes pas à la dernière section
  if (currentSectionIndex < sectionOrder.length - 1) {
    currentSectionIndex++;
    sectionOrder.forEach(function(sectionId, index) {
      document.getElementById(sectionId).style.display = (index === currentSectionIndex) ? "block" : "none";
    });
  } else {
    alert("Vous avez terminé la leçon !");
  }
}
