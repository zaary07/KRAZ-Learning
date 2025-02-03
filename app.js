// ------------------------------
// Données réelles par niveau
// ------------------------------
const levelData = {
  A1: {
    quiz: [
      {
        question: "Quel est le mot pour 'Hello' en français ?",
        options: ["Bonjour", "Salut", "Bonsoir"],
        answer: "Bonjour"
      },
      {
        question: "Comment dit-on 'Thank you' en français ?",
        options: ["Merci", "Pardon", "S'il vous plaît"],
        answer: "Merci"
      },
      {
        question: "Quel est le mot pour 'Goodbye' en français ?",
        options: ["Au revoir", "Adieu", "Salut"],
        answer: "Au revoir"
      }
      // Vous pouvez ajouter jusqu'à 200 items
    ],
    pronunciation: [
      { phrase: "Bonjour" },
      { phrase: "Merci" },
      { phrase: "Au revoir" }
      // … jusqu'à 200
    ],
    reading: [
      { text: "Je m'appelle Marie et j'aime le chocolat." },
      { text: "Le chat est sur le canapé." },
      { text: "Il fait beau aujourd'hui." }
      // … jusqu'à 200
    ],
    translation: [
      { phrase: "Good morning", expected: "Bonjour" },
      { phrase: "Thank you", expected: "Merci" },
      { phrase: "Goodbye", expected: "Au revoir" }
      // … jusqu'à 200
    ]
  },
  A2: {
    quiz: [
      {
        question: "Quelle est la traduction de 'How are you?' en français ?",
        options: ["Comment ça va ?", "Ça va bien", "Bonjour"],
        answer: "Comment ça va ?"
      },
      {
        question: "Comment dit-on 'Please' en français ?",
        options: ["S'il vous plaît", "Merci", "Excusez-moi"],
        answer: "S'il vous plaît"
      },
      {
        question: "Quel est le mot pour 'Sorry' en français ?",
        options: ["Désolé", "Excusez-moi", "Pardon"],
        answer: "Désolé"
      }
      // … jusqu'à 200
    ],
    pronunciation: [
      { phrase: "Comment ça va ?" },
      { phrase: "S'il vous plaît" },
      { phrase: "Désolé" }
      // … jusqu'à 200
    ],
    reading: [
      { text: "Aujourd'hui, il fait un temps magnifique." },
      { text: "Je vais au supermarché pour acheter des fruits." },
      { text: "Le matin, je prends un café avec du lait." }
      // … jusqu'à 200
    ],
    translation: [
      { phrase: "How are you?", expected: "Comment ça va ?" },
      { phrase: "Please", expected: "S'il vous plaît" },
      { phrase: "Sorry", expected: "Désolé" }
      // … jusqu'à 200
    ]
  },
  B1: {
    quiz: [
      {
        question: "Complétez la phrase : 'Je ___ étudiant.'",
        options: ["suis", "serai", "étais"],
        answer: "suis"
      },
      {
        question: "Comment traduit-on 'I would like a coffee' en français ?",
        options: ["Je voudrais un café", "J'ai un café", "Je bois un café"],
        answer: "Je voudrais un café"
      },
      {
        question: "Quel est le mot pour 'Library' en français ?",
        options: ["Bibliothèque", "Livre", "Salle"],
        answer: "Bibliothèque"
      }
      // … jusqu'à 200
    ],
    pronunciation: [
      { phrase: "Je suis étudiant" },
      { phrase: "Je voudrais un café" },
      { phrase: "Bibliothèque" }
      // … jusqu'à 200
    ],
    reading: [
      { text: "Ce matin, je suis allé à la bibliothèque pour étudier." },
      { text: "Le marché était animé et coloré." },
      { text: "J'apprends le français depuis deux ans." }
      // … jusqu'à 200
    ],
    translation: [
      { phrase: "I would like a coffee", expected: "Je voudrais un café" },
      { phrase: "Library", expected: "Bibliothèque" },
      { phrase: "I am a student", expected: "Je suis étudiant" }
      // … jusqu'à 200
    ]
  },
  B2: {
    quiz: [
      {
        question: "Que signifie l'expression 'être à l'aise' ?",
        options: ["Se sentir confortable", "Être rapide", "Être fort"],
        answer: "Se sentir confortable"
      },
      {
        question: "Complétez la phrase : 'Il ___ à Paris depuis deux ans.'",
        options: ["habite", "vivait", "habitera"],
        answer: "habite"
      },
      {
        question: "Comment traduit-on 'innovation' en français ?",
        options: ["Innovation", "Créativité", "Modernité"],
        answer: "Innovation"
      }
      // … jusqu'à 200
    ],
    pronunciation: [
      { phrase: "Se sentir confortable" },
      { phrase: "Il habite à Paris" },
      { phrase: "Innovation" }
      // … jusqu'à 200
    ],
    reading: [
      { text: "La complexité de la langue française est fascinante et requiert beaucoup de pratique." },
      { text: "Les innovations technologiques transforment notre quotidien." },
      { text: "Paris est une ville riche en histoire et en culture." }
      // … jusqu'à 200
    ],
    translation: [
      { phrase: "It is a beautiful day", expected: "C'est une belle journée" },
      { phrase: "Innovation", expected: "Innovation" },
      { phrase: "He has lived in Paris for two years", expected: "Il habite à Paris depuis deux ans" }
      // … jusqu'à 200
    ]
  }
};

// ------------------------------
// Gestion des indices de leçon par niveau
// ------------------------------
let currentLessonIndex = {
  A1: 0,
  A2: 0,
  B1: 0,
  B2: 0
};

const sectionOrder = ["quizSection", "pronunciationSection", "readingSection", "writingSection"];
let currentSectionIndex = 0;
let currentLevel = "A1"; // Valeur par défaut

// ------------------------------
// Chargement de la leçon en cours pour un niveau donné
// ------------------------------
function loadLevel(level) {
  currentLevel = level;
  // Affiche le conteneur de la leçon et met à jour le titre
  document.getElementById("lessonContainer").style.display = "block";
  document.getElementById("levelTitle").innerText = "Leçon de Français - Niveau " + level;
  // Réinitialise l'index de section à 0 (quiz)
  currentSectionIndex = 0;
  loadCurrentSection();
}

// Charge la section en cours de la leçon (selon currentSectionIndex)
function loadCurrentSection() {
  const lessonIdx = currentLessonIndex[currentLevel];
  switch (sectionOrder[currentSectionIndex]) {
    case "quizSection":
      loadQuiz(currentLevel, lessonIdx);
      break;
    case "pronunciationSection":
      loadPronunciation(currentLevel, lessonIdx);
      break;
    case "readingSection":
      loadReading(currentLevel, lessonIdx);
      break;
    case "writingSection":
      loadTranslation(currentLevel, lessonIdx);
      break;
  }
  // Affiche uniquement la section en cours
  sectionOrder.forEach((sectionId, index) => {
    document.getElementById(sectionId).style.display = (index === currentSectionIndex) ? "block" : "none";
  });
}

// Passe à la section suivante dans la leçon
function nextSection() {
  if (currentSectionIndex < sectionOrder.length - 1) {
    currentSectionIndex++;
    loadCurrentSection();
  } else {
    // Fin de la leçon, on passe à la suivante (si disponible)
    alert("Leçon terminée !");
    currentLessonIndex[currentLevel]++; // Passe à la leçon suivante
    // Réinitialise l'index de section pour la nouvelle leçon
    currentSectionIndex = 0;
    // Vérifier s'il reste des leçons
    if (currentLessonIndex[currentLevel] < levelData[currentLevel].quiz.length) {
      loadCurrentSection();
    } else {
      alert("Vous avez terminé toutes les leçons du niveau " + currentLevel + " !");
    }
  }
}

// ------------------------------
// Fonctions de chargement pour chaque catégorie
// ------------------------------

// Quiz
function loadQuiz(level, lessonIdx) {
  const quizContainer = document.getElementById("quizSection");
  const quizArray = levelData[level].quiz;
  if (lessonIdx >= quizArray.length) {
    quizContainer.innerHTML = "<p>Aucun quiz disponible pour cette leçon.</p>";
    return;
  }
  const item = quizArray[lessonIdx];
  let content = `<p>${item.question}</p>`;
  content += item.options.map(option =>
    `<button class="btn" onclick="checkAnswer('${option}', '${item.answer}')">${option}</button>`
  ).join('');
  quizContainer.innerHTML = content;
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    alert("Bonne réponse !");
    nextSection();
  } else {
    alert("Mauvaise réponse, réessayez.");
  }
}

// Prononciation
function loadPronunciation(level, lessonIdx) {
  const pronunciationContainer = document.getElementById("pronunciationSection");
  const pronArray = levelData[level].pronunciation;
  if (lessonIdx >= pronArray.length) {
    pronunciationContainer.innerHTML = "<p>Aucun exercice de prononciation pour cette leçon.</p>";
    return;
  }
  const item = pronArray[lessonIdx];
  let content = `<p>Teste ta prononciation : "${item.phrase}"</p>`;
  content += `<button class="btn" onclick="playPronunciation('${item.phrase}')">Écouter</button>`;
  content += `<button class="btn" onclick="startPronunciationTest('${item.phrase}')">Prononcez</button>`;
  pronunciationContainer.innerHTML = content;
}

function playPronunciation(phrase) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
  } else {
    alert("Votre navigateur ne supporte pas la synthèse vocale.");
  }
}

function startPronunciationTest(expectedPhrase) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Votre navigateur ne supporte pas la reconnaissance vocale.");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();
  recognition.onresult = function(event) {
    const userSpeech = event.results[0][0].transcript;
    if (userSpeech.toLowerCase() === expectedPhrase.toLowerCase()) {
      alert("Bonne prononciation !");
      nextSection();
    } else {
      alert("Mauvaise prononciation. Vous avez dit : " + userSpeech);
    }
  };
  recognition.onerror = function(event) {
    alert("Erreur de reconnaissance vocale : " + event.error);
  };
}

// Lecture
function loadReading(level, lessonIdx) {
  const readingContainer = document.getElementById("readingSection");
  const readingArray = levelData[level].reading;
  if (lessonIdx >= readingArray.length) {
    readingContainer.innerHTML = "<p>Aucun texte de lecture pour cette leçon.</p>";
    return;
  }
  const item = readingArray[lessonIdx];
  let content = `<p>Lecture : "${item.text}"</p>`;
  content += `<button class="btn" onclick="playReading('${item.text}')">Écouter la lecture</button>`;
  readingContainer.innerHTML = content;
}

function playReading(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
  } else {
    alert("Votre navigateur ne supporte pas la synthèse vocale.");
  }
}

// Traduction
function loadTranslation(level, lessonIdx) {
  const translationContainer = document.getElementById("writingSection");
  const translationArray = levelData[level].translation;
  if (lessonIdx >= translationArray.length) {
    translationContainer.innerHTML = "<p>Aucun exercice de traduction pour cette leçon.</p>";
    return;
  }
  const item = translationArray[lessonIdx];
  let content = `<p>Traduisez en français: "${item.phrase}"</p>`;
  content += `<input type="text" id="userWriting" placeholder="Votre traduction">`;
  content += `<button class="btn" onclick="checkWriting('${item.expected}')">Vérifier</button>`;
  content += `<p id="writingFeedback"></p>`;
  translationContainer.innerHTML = content;
}

function checkWriting(expected) {
  const userInput = document.getElementById("userWriting").value;
  if (userInput.trim().toLowerCase() === expected.toLowerCase()) {
    document.getElementById("writingFeedback").innerText = "Correct !";
    document.getElementById("writingFeedback").style.color = "green";
    nextSection();
  } else {
    document.getElementById("writingFeedback").innerText = "Incorrect, essayez encore.";
    document.getElementById("writingFeedback").style.color = "red";
  }
}

// ------------------------------
// Fonction NEXT LEÇON (si besoin)
// ------------------------------
// Ici, la fonction nextSection() gère la fin d'une leçon en passant au prochain ensemble de contenus pour le même niveau.
// Si vous souhaitez, par exemple, passer automatiquement au niveau suivant après avoir terminé toutes les leçons, vous pouvez ajouter une logique ici.

// ------------------------------
// Exemple de démarrage
// ------------------------------
// Pour démarrer au niveau A1, leçon 1 :
loadLevel("A1");
