// ------------------------------
// Données réelles par niveau
// ------------------------------
const levelData = {
  A1: {
    quiz: [
      {
        question: "Que signifie 'Bonjour' en anglais ?",
        options: ["Hello", "Goodbye", "Please"],
        answer: "Hello"
      },
      {
        question: "Que signifie 'Merci' en anglais ?",
        options: ["Thank you", "Sorry", "Good morning"],
        answer: "Thank you"
      },
      {
        question: "Que signifie 'Oui' en anglais ?",
        options: ["Yes", "No", "Maybe"],
        answer: "Yes"
      },
      {
        question: "Que signifie 'Non' en anglais ?",
        options: ["No", "Yes", "Please"],
        answer: "No"
      },
      {
        question: "Que signifie 'S'il vous plaît' en anglais ?",
        options: ["Please", "Thank you", "Excuse me"],
        answer: "Please"
      },
      {
        question: "Que signifie 'Excusez-moi' en anglais ?",
        options: ["Excuse me", "Hello", "Sorry"],
        answer: "Excuse me"
      },
      {
        question: "Que signifie 'Comment ça va ?' en anglais ?",
        options: ["How are you?", "What's your name?", "Good morning"],
        answer: "How are you?"
      },
      {
        question: "Que signifie 'Bien' en anglais ?",
        options: ["Fine", "Bad", "Happy"],
        answer: "Fine"
      },
      {
        question: "Que signifie 'Mal' en anglais ?",
        options: ["Bad", "Fine", "Happy"],
        answer: "Bad"
      },
      {
        question: "Que signifie 'Très bien' en anglais ?",
        options: ["Very well", "Very bad", "Okay"],
        answer: "Very well"
      },
      {
        question: "Que signifie 'Très mal' en anglais ?",
        options: ["Very bad", "Very well", "Fine"],
        answer: "Very bad"
      },
      {
        question: "Que signifie 'Comment vous appelez-vous ?' en anglais ?",
        options: ["What is your name?", "How old are you?", "Where are you from?"],
        answer: "What is your name?"
      },
      {
        question: "Que signifie 'Je m'appelle...' en anglais ?",
        options: ["My name is...", "I am...", "I live in..."],
        answer: "My name is..."
      },
      {
        question: "Que signifie 'Où ?' en anglais ?",
        options: ["Where?", "When?", "Who?"],
        answer: "Where?"
      },
      {
        question: "Que signifie 'Quand ?' en anglais ?",
        options: ["When?", "Where?", "How?"],
        answer: "When?"
      },
      {
        question: "Que signifie 'Pourquoi ?' en anglais ?",
        options: ["Why?", "What?", "Who?"],
        answer: "Why?"
      },
      {
        question: "Que signifie 'Quoi ?' en anglais ?",
        options: ["What?", "Where?", "When?"],
        answer: "What?"
      },
      {
        question: "Que signifie 'Qui ?' en anglais ?",
        options: ["Who?", "What?", "Why?"],
        answer: "Who?"
      },
      {
        question: "Que signifie 'Combien ?' en anglais ?",
        options: ["How many?", "When?", "Where?"],
        answer: "How many?"
      },
      {
        question: "Que signifie 'Aujourd'hui' en anglais ?",
        options: ["Today", "Tomorrow", "Yesterday"],
        answer: "Today"
      },
      {
        question: "Que signifie 'Demain' en anglais ?",
        options: ["Tomorrow", "Today", "Yesterday"],
        answer: "Tomorrow"
      },
      {
        question: "Que signifie 'Hier' en anglais ?",
        options: ["Yesterday", "Today", "Tomorrow"],
        answer: "Yesterday"
      },
      {
        question: "Que signifie 'Lundi' en anglais ?",
        options: ["Monday", "Tuesday", "Friday"],
        answer: "Monday"
      },
      {
        question: "Que signifie 'Mardi' en anglais ?",
        options: ["Tuesday", "Monday", "Wednesday"],
        answer: "Tuesday"
      },
      {
        question: "Que signifie 'Mercredi' en anglais ?",
        options: ["Wednesday", "Thursday", "Friday"],
        answer: "Wednesday"
      },
      {
        question: "Que signifie 'Jeudi' en anglais ?",
        options: ["Thursday", "Wednesday", "Friday"],
        answer: "Thursday"
      },
      {
        question: "Que signifie 'Vendredi' en anglais ?",
        options: ["Friday", "Saturday", "Sunday"],
        answer: "Friday"
      },
      {
        question: "Que signifie 'Samedi' en anglais ?",
        options: ["Saturday", "Friday", "Sunday"],
        answer: "Saturday"
      },
      {
        question: "Que signifie 'Dimanche' en anglais ?",
        options: ["Sunday", "Saturday", "Monday"],
        answer: "Sunday"
      },
      {
        question: "Que signifie 'Janvier' en anglais ?",
        options: ["January", "February", "December"],
        answer: "January"
      },
      {
        question: "Que signifie 'Février' en anglais ?",
        options: ["February", "January", "March"],
        answer: "February"
      },
      {
        question: "Que signifie 'Mars' en anglais ?",
        options: ["March", "April", "February"],
        answer: "March"
      },
      {
        question: "Que signifie 'Avril' en anglais ?",
        options: ["April", "March", "May"],
        answer: "April"
      },
      {
        question: "Que signifie 'Mai' en anglais ?",
        options: ["May", "June", "April"],
        answer: "May"
      },
      {
        question: "Que signifie 'Juin' en anglais ?",
        options: ["June", "July", "May"],
        answer: "June"
      },
      {
        question: "Que signifie 'Juillet' en anglais ?",
        options: ["July", "June", "August"],
        answer: "July"
      },
      {
        question: "Que signifie 'Août' en anglais ?",
        options: ["August", "July", "September"],
        answer: "August"
      },
      {
        question: "Que signifie 'Septembre' en anglais ?",
        options: ["September", "August", "October"],
        answer: "September"
      },
      {
        question: "Que signifie 'Octobre' en anglais ?",
        options: ["October", "November", "September"],
        answer: "October"
      },
      {
        question: "Que signifie 'Novembre' en anglais ?",
        options: ["November", "October", "December"],
        answer: "November"
      },
      {
        question: "Que signifie 'Décembre' en anglais ?",
        options: ["December", "November", "January"],
        answer: "December"
      },
      {
        question: "Que signifie 'Homme' en anglais ?",
        options: ["Man", "Woman", "Child"],
        answer: "Man"
      },
      {
        question: "Que signifie 'Femme' en anglais ?",
        options: ["Woman", "Man", "Child"],
        answer: "Woman"
      },
      {
        question: "Que signifie 'Enfant' en anglais ?",
        options: ["Child", "Adult", "Friend"],
        answer: "Child"
      },
      {
        question: "Que signifie 'Ami(e)' en anglais ?",
        options: ["Friend", "Enemy", "Family"],
        answer: "Friend"
      },
      {
        question: "Que signifie 'Maison' en anglais ?",
        options: ["House", "Car", "Book"],
        answer: "House"
      },
      {
        question: "Que signifie 'Voiture' en anglais ?",
        options: ["Car", "House", "Bicycle"],
        answer: "Car"
      },
      {
        question: "Que signifie 'Livre' en anglais ?",
        options: ["Book", "Table", "Pen"],
        answer: "Book"
      },
      {
        question: "Que signifie 'Table' en anglais ?",
        options: ["Table", "Chair", "Book"],
        answer: "Table"
      },
      {
        question: "Que signifie 'Chaise' en anglais ?",
        options: ["Chair", "Table", "Sofa"],
        answer: "Chair"
      }
    ],
    pronunciation: [
      { phrase: "Bonjour" },
      { phrase: "Merci" },
      { phrase: "Au revoir" },
      { phrase: "Comment ça va ?" },
      { phrase: "Bien, merci." },
      { phrase: "Où est la bibliothèque ?" },
      { phrase: "Je voudrais un café." },
      { phrase: "Pouvez-vous m'aider ?" },
      { phrase: "Je ne parle pas bien français." },
      { phrase: "Parlez-vous anglais ?" },
      { phrase: "Quel est ton prénom ?" },
      { phrase: "Je suis étudiant." },
      { phrase: "J'aime le chocolat." },
      { phrase: "Où est la gare ?" },
      { phrase: "C'est combien ?" },
      { phrase: "Je voudrais une table pour deux." },
      { phrase: "L'addition, s'il vous plaît." },
      { phrase: "Excusez-moi." },
      { phrase: "Je suis désolé." },
      { phrase: "Avez-vous une carte ?" },
      { phrase: "Où est la pharmacie ?" },
      { phrase: "Je ne comprends pas." },
      { phrase: "Pouvez-vous répéter ?" },
      { phrase: "Je cherche un hôtel." },
      { phrase: "Il est où le métro ?" },
      { phrase: "Je vais bien, merci." },
      { phrase: "C'est loin d'ici ?" },
      { phrase: "Quel âge as-tu ?" },
      { phrase: "Je suis perdu." },
      { phrase: "Vous avez une chambre ?" },
      { phrase: "C'est une bonne idée." },
      { phrase: "Où puis-je acheter des tickets ?" },
      { phrase: "Il est quelle heure ?" },
      { phrase: "J'ai soif." },
      { phrase: "J'ai faim." },
      { phrase: "Tu veux venir avec moi ?" },
      { phrase: "Je veux apprendre le français." },
      { phrase: "C'est un plaisir de vous rencontrer." },
      { phrase: "Merci beaucoup." },
      { phrase: "Je voudrais un billet pour Paris." },
      { phrase: "Vous avez un menu en anglais ?" },
      { phrase: "Je peux avoir de l'eau ?" },
      { phrase: "Où est le restaurant ?" },
      { phrase: "Je ne parle pas bien anglais." },
      { phrase: "J'ai besoin d'un taxi." },
      { phrase: "Pouvez-vous me montrer sur la carte ?" },
      { phrase: "Est-ce que c'est loin ?" },
      { phrase: "Est-ce que vous avez une carte touristique ?" },
      { phrase: "Comment ça s'écrit ?" },
      { phrase: "Quel est votre numéro de téléphone ?" },
      { phrase: "Je suis content de vous voir." },
      { phrase: "C'est une belle journée." }
    ],
    reading: [
      { text: "Je m'appelle Marie et j'aime le chocolat." },
      { text: "Le chat est sur le canapé." },
      { text: "Il fait beau aujourd'hui." },
      { text: "Je vais au travail en bus." },
      { text: "Elle habite à Paris." },
      { text: "Nous avons deux enfants." },
      { text: "Vous aimez le cinéma." },
      { text: "Ils parlent français." },
      { text: "Je mange une pomme." },
      { text: "Il lit un livre." },
      { text: "Elle écoute de la musique." },
      { text: "Nous buvons du café." },
      { text: "Vous écrivez une lettre." },
      { text: "Ils jouent au football." },
      { text: "Je travaille dans un bureau." },
      { text: "Elle étudie à l'université." },
      { text: "Nous allons au marché." },
      { text: "Vous faites du sport." },
      { text: "Ils regardent la télévision." },
      { text: "Je prends le train." },
      { text: "Il conduit une voiture." },
      { text: "Elle porte une robe rouge." },
      { text: "Nous avons une maison à la campagne." },
      { text: "Vous aimez les animaux." },
      { text: "Ils vont à l'école à pied." },
      { text: "Je suis content de vous voir." },
      { text: "Elle est très gentille." },
      { text: "Nous sommes en vacances." },
      { text: "Vous êtes en retard." },
      { text: "Ils sont à la plage." },
      { text: "Je suis fatigué ce matin." },
      { text: "Elle est en train de cuisiner." },
      { text: "Nous sommes prêts à partir." },
      { text: "Vous êtes invités à ma fête." },
      { text: "Ils sont en train de jouer." },
      { text: "Je suis allé au cinéma hier." },
      { text: "Elle a acheté une nouvelle voiture." },
      { text: "Nous avons visité le musée." },
      { text: "Vous avez bien dormi." },
      { text: "Ils ont mangé au restaurant." },
      { text: "Je suis allé à la plage." },
      { text: "Elle a lu un article intéressant." },
      { text: "Nous avons vu un film hier soir." },
      { text: "Vous avez pris le bus." },
      { text: "Ils ont fait du shopping." },
      { text: "Je suis allé chez le médecin." },
      { text: "Elle a préparé le dîner." },
      { text: "Nous avons rencontré des amis." },
      { text: "Vous avez visité la ville." },
      { text: "Ils ont pris des photos." },
      { text: "Je suis allé à la bibliothèque." },
      { text: "Elle a écrit une carte postale." },
      { text: "Nous avons fait une promenade." },
      { text: "Vous avez écouté de la musique." },
      { text: "Ils ont joué au tennis." },
      { text: "Je suis allé au supermarché." },
      { text: "Elle a acheté des fruits." },
      { text: "Nous avons pris le petit déjeuner." },
      { text: "Vous avez regardé un film." },
      { text: "Ils ont fait du vélo." },
      { text: "Je suis allé au parc." },
      { text: "Elle a pris une photo." },
      { text: "Nous avons mangé au restaurant." },
      { text: "Vous avez fait du sport." },
      { text: "Ils ont visité le musée." },
      { text: "Je suis allé à la piscine." },
      { text: "Elle a préparé le déjeuner." },
      { text: "Nous avons rencontré des collègues." },
      { text: "Vous avez pris le train." },
      { text: "Ils ont joué au football." },
      { text: "Je suis allé au cinéma." },
      { text: "Elle a acheté une nouvelle robe." },
      { text: "Nous avons visité un château." },
      { text: "Vous avez bien travaillé." },
      { text: "Ils ont mangé des crêpes." },
      { text: "Je suis allé à la montagne." },
      { text: "Elle a lu un livre passionnant." },
      { text: "Nous avons vu un spectacle." },
      { text: "Vous avez pris des photos." },
      { text: "Ils ont fait du jardinage." },
      { text: "Je suis allé au zoo." },
      { text: "Elle a écrit une lettre." },
      { text: "Nous avons fait une excursion." },
      { text: "Vous avez écouté une chanson." },
      { text: "Ils ont joué aux cartes." },
      { text: "Je suis allé au musée." },
      { text: "Elle a pris une décision." },
      { text: "Nous avons mangé des pâtes." },
      { text: "Vous avez regardé un match." },
      { text: "Ils ont fait du ski." },
      { text: "Je suis allé à la plage." },
      { text: "Elle a préparé un gâteau." },
      { text: "Nous avons rencontré des voisins." },
      { text: "Vous avez pris le métro." },
      { text: "Ils ont joué au basket." },
      { text: "Je suis allé au théâtre." },
      { text: "Elle a acheté des vêtements." },
      { text: "Nous avons visité une exposition." },
      { text: "Vous avez bien dormi." },
      { text: "Ils ont mangé des légumes." },
      { text: "Je suis allé au concert." },
      { text: "Elle a lu un roman." },
      { text: "Nous avons vu un film d'action." },
      { text: "Vous avez pris des notes." },
      { text: "Ils ont fait du camping." },
      { text: "Je suis allé au marché." },
      { text: "Elle a écrit un poème." },
      { text: "Nous avons fait une randonnée." },
      { text: "Vous avez écouté un podcast." },
      { text: "Ils ont joué au volley." },
      { text: "Je suis allé au musée d'art." },
      { text: "Elle a pris une photo de la mer." },
      { text: "Nous avons mangé des fruits." },
      { text: "Vous avez regardé une série." },
      { text: "Ils ont fait du patin à glace." },
      { text: "Je suis allé au parc d'attractions." },
      { text: "Elle a préparé une salade." },
      { text: "Nous avons rencontré des amis d'enfance." },
      { text: "Vous avez pris le vélo." },
      { text: "Ils ont joué au ping-pong." },
      { text: "Je suis allé au musée d'histoire." },
      { text: "Elle a acheté des souvenirs." },
      { text: "Nous avons visité un parc naturel." },
      { text: "Vous avez bien mangé." },
      { text: "Ils ont mangé des crêpes au chocolat." },
      { text: "Je suis allé à la bibliothèque municipale." },
      { text: "Elle a lu un article de journal." },
      { text: "Nous avons vu un documentaire." },
      { text: "Vous avez pris des photos de famille." },
      { text: "Ils ont fait du jardin." },

      // … autres textes éventuels
    ],
    translation: [
      { phrase: "Good morning", expected: "Bonjour" },
      { phrase: "Thank you", expected: "Merci" },
      { phrase: "Goodbye", expected: "Au revoir" }
      [
  { "phrase": "Bonjour", "expected": "Good morning" },
  { "phrase": "Bonsoir", "expected": "Good evening" },
  { "phrase": "Salut", "expected": "Hi" },
  { "phrase": "Au revoir", "expected": "Goodbye" },
  { "phrase": "S'il vous plaît", "expected": "Please" },
  { "phrase": "Merci", "expected": "Thank you" },
  { "phrase": "De rien", "expected": "You're welcome" },
  { "phrase": "Pardon", "expected": "Excuse me" },
  { "phrase": "Oui", "expected": "Yes" },
  { "phrase": "Non", "expected": "No" },
  { "phrase": "Je", "expected": "I" },
  { "phrase": "Tu", "expected": "You (informal)" },
  { "phrase": "Il", "expected": "He" },
  { "phrase": "Elle", "expected": "She" },
  { "phrase": "Nous", "expected": "We" },
  { "phrase": "Vous", "expected": "You (formal/plural)" },
  { "phrase": "Ils", "expected": "They (masculine)" },
  { "phrase": "Elles", "expected": "They (feminine)" },
  { "phrase": "Être", "expected": "To be" },
  { "phrase": "Avoir", "expected": "To have" },
  { "phrase": "Aller", "expected": "To go" },
  { "phrase": "Faire", "expected": "To do" },
  { "phrase": "Parler", "expected": "To speak" },
  { "phrase": "Manger", "expected": "To eat" },
  { "phrase": "Boire", "expected": "To drink" },
  { "phrase": "Venir", "expected": "To come" },
  { "phrase": "Voir", "expected": "To see" },
  { "phrase": "Savoir", "expected": "To know" },
  { "phrase": "Maison", "expected": "House" },
  { "phrase": "Voiture", "expected": "Car" },
  { "phrase": "École", "expected": "School" },
  { "phrase": "Travail", "expected": "Work" },
  { "phrase": "Ville", "expected": "City" },
  { "phrase": "Rue", "expected": "Street" },
  { "phrase": "Ami", "expected": "Friend (masculine)" },
  { "phrase": "Amie", "expected": "Friend (feminine)" },
  { "phrase": "Famille", "expected": "Family" },
  { "phrase": "Temps", "expected": "Time" },
  { "phrase": "Grand", "expected": "Big" },
  { "phrase": "Petit", "expected": "Small" },
  { "phrase": "Bon", "expected": "Good" },
  { "phrase": "Mauvais", "expected": "Bad" },
  { "phrase": "Beau", "expected": "Beautiful" },
  { "phrase": "Jeune", "expected": "Young" },
  { "phrase": "Vieux", "expected": "Old" },
  { "phrase": "Nouveau", "expected": "New" },
  { "phrase": "Content", "expected": "Happy" },
  { "phrase": "Triste", "expected": "Sad" },
  { "phrase": "Facile", "expected": "Easy" }
  [
    { "phrase": "Bonjour", "expected": "Good morning" },
    { "phrase": "Bonsoir", "expected": "Good evening" },
    { "phrase": "Salut", "expected": "Hi" },
    { "phrase": "Au revoir", "expected": "Goodbye" },
    { "phrase": "S'il vous plaît", "expected": "Please" },
    { "phrase": "Merci", "expected": "Thank you" },
    { "phrase": "De rien", "expected": "You're welcome" },
    { "phrase": "Pardon", "expected": "Excuse me" },
    { "phrase": "Oui", "expected": "Yes" },
    { "phrase": "Non", "expected": "No" },
    { "phrase": "Je", "expected": "I" },
    { "phrase": "Tu", "expected": "You (informal)" },
    { "phrase": "Il", "expected": "He" },
    { "phrase": "Elle", "expected": "She" },
    { "phrase": "Nous", "expected": "We" },
    { "phrase": "Vous", "expected": "You (formal/plural)" },
    { "phrase": "Ils", "expected": "They (masculine)" },
    { "phrase": "Elles", "expected": "They (feminine)" },
    { "phrase": "Être", "expected": "To be" },
    { "phrase": "Avoir", "expected": "To have" },
    { "phrase": "Aller", "expected": "To go" },
    { "phrase": "Faire", "expected": "To do" },
    { "phrase": "Parler", "expected": "To speak" },
    { "phrase": "Manger", "expected": "To eat" },
    { "phrase": "Boire", "expected": "To drink" },
    { "phrase": "Venir", "expected": "To come" },
    { "phrase": "Voir", "expected": "To see" },
    { "phrase": "Savoir", "expected": "To know" },
    { "phrase": "Maison", "expected": "House" },
    { "phrase": "Voiture", "expected": "Car" },
    { "phrase": "École", "expected": "School" },
    { "phrase": "Travail", "expected": "Work" },
    { "phrase": "Ville", "expected": "City" },
    { "phrase": "Rue", "expected": "Street" },
    { "phrase": "Ami", "expected": "Friend (masculine)" },
    { "phrase": "Amie", "expected": "Friend (feminine)" },
    { "phrase": "Famille", "expected": "Family" },
    { "phrase": "Temps", "expected": "Time" },
    { "phrase": "Grand", "expected": "Big" },
    { "phrase": "Petit", "expected": "Small" },
    { "phrase": "Bon", "expected": "Good" },
    { "phrase": "Mauvais", "expected": "Bad" },
    { "phrase": "Beau", "expected": "Beautiful" },
    { "phrase": "Jeune", "expected": "Young" },
    { "phrase": "Vieux", "expected": "Old" },
    { "phrase": "Nouveau", "expected": "New" },
    { "phrase": "Content", "expected": "Happy" },
    { "phrase": "Triste", "expected": "Sad" },
    { "phrase": "Facile", "expected": "Easy" }
  ]  
      // … autres exercices éventuels
    ]
  },
  // Les niveaux A2, B1, B2 restent inchangés ou peuvent être complétés de manière similaire.
  A2: { /* ... */ },
  B1: { /* ... */ },
  B2: { /* ... */ }
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

// Quiz (niveau A1)
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
// Exemple de démarrage : charge le niveau A1, leçon 1
// ------------------------------
loadLevel("A1");