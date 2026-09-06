const VERSION_ORDER = ['debutant', 'intermediaire', 'avance'];
const quizSets = {
  html: {
    debutant: [
      {
        question: 'Quel élément HTML sert à créer un bouton cliquable ?',
        options: ['<button>', '<section>', '<p>', '<link>'],
        answer: 0,
      },
      {
        question: 'Quelle balise sert à créer un titre principal dans une page HTML ?',
        options: ['<h1>', '<header>', '<main>', '<title>'],
        answer: 0,
      },
      {
        question: 'Quelle balise HTML permet d’afficher une image ?',
        options: ['<img>', '<picture>', '<media>', '<svg>'],
        answer: 0,
      },
      {
        question: 'Quelle balise permet de créer un lien vers une autre page ?',
        options: ['<a>', '<nav>', '<button>', '<section>'],
        answer: 0,
      },
      {
        question: 'Quelle balise représente le plus gros titre d’une page ?',
        options: ['<h1>', '<h2>', '<p>', '<strong>'],
        answer: 0,
      },
    ],
    intermediaire: [
      {
        question: 'Quel attribut est utilisé pour indiquer le chemin d’une image ?',
        options: ['src', 'href', 'alt', 'class'],
        answer: 0,
      },
      {
        question: 'Quelle balise s’utilise pour définir une liste non ordonnée ?',
        options: ['<ul>', '<ol>', '<li>', '<dl>'],
        answer: 0,
      },
      {
        question: 'Quelle balise sert à regrouper un ensemble de champs de formulaire ?',
        options: ['<form>', '<fieldset>', '<label>', '<input>'],
        answer: 1,
      },
      {
        question: 'Quel attribut permet de rendre un élément accessible par le lecteur d’écran ?',
        options: ['aria-label', 'hidden', 'srcset', 'charset'],
        answer: 0,
      },
      {
        question: 'Quelle balise semantique est la plus adaptée pour un article de blog ?',
        options: ['<article>', '<aside>', '<header>', '<footer>'],
        answer: 0,
      },
      {
        question: 'Quelle balise crée une zone de navigation principale ?',
        options: ['<nav>', '<main>', '<header>', '<section>'],
        answer: 0,
      },
    ],
    avance: [
      {
        question: 'Quelle balise est la plus appropriée pour structurer le contenu principal d’une page ?',
        options: ['<main>', '<section>', '<article>', '<div>'],
        answer: 0,
      },
      {
        question: 'Quel attribut est utilisé pour associer un libellé à un champ de formulaire ?',
        options: ['for', 'name', 'value', 'id'],
        answer: 0,
      },
      {
        question: 'Quelle balise permet d’intégrer un contenu multimédia avec une alternative textuelle ?',
        options: ['<figure>', '<audio>', '<video>', '<img>'],
        answer: 0,
      },
      {
        question: 'Quel rôle ARIA est utilisé pour identifier une zone de navigation ?',
        options: ['navigation', 'banner', 'main', 'alert'],
        answer: 0,
      },
      {
        question: 'Quelle balise permet d’indiquer une zone de contenu secondaire distincte du contenu principal ?',
        options: ['<aside>', '<footer>', '<header>', '<nav>'],
        answer: 0,
      },
      {
        question: 'Quel élément HTML est le plus adapté pour afficher une citation ou un extrait de texte notable ?',
        options: ['<blockquote>', '<q>', '<cite>', '<span>'],
        answer: 0,
      },
      {
        question: 'Quelle balise permet d’associer un titre à une image ou illustration ?',
        options: ['<figcaption>', '<caption>', '<legend>', '<summary>'],
        answer: 0,
      },
    ],
  },
  css: {
    debutant: [
      {
        question: 'Quelle propriété CSS permet de changer la couleur du texte ?',
        options: ['color', 'font-size', 'margin', 'display'],
        answer: 0,
      },
      {
        question: 'Quelle propriété CSS permet d’ajouter un espace autour d’un élément ?',
        options: ['margin', 'padding', 'border', 'background'],
        answer: 0,
      },
      {
        question: 'Quelle propriété CSS permet d’arrondir les coins d’un bloc ?',
        options: ['border-radius', 'box-shadow', 'font-weight', 'background'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet de mettre un fond coloré sur un élément ?',
        options: ['background-color', 'color', 'padding', 'width'],
        answer: 0,
      },
      {
        question: 'Quelle valeur de display permet de placer des éléments en ligne ?',
        options: ['inline', 'flex', 'grid', 'block'],
        answer: 0,
      },
    ],
    intermediaire: [
      {
        question: 'Quelle propriété CSS permet de créer un espace interne à un élément ?',
        options: ['padding', 'margin', 'outline', 'opacity'],
        answer: 0,
      },
      {
        question: 'Quel display est utilisé pour créer un conteneur flexible ?',
        options: ['flex', 'grid', 'table', 'block'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet de contrôler l’écart entre les éléments d’un conteneur flex ?',
        options: ['gap', 'padding-top', 'line-height', 'border-spacing'],
        answer: 0,
      },
      {
        question: 'Quelle pseudo-classe CSS permet de cibler un élément au survol de la souris ?',
        options: [':hover', ':focus', ':active', ':visited'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet de placer un élément par rapport à son conteneur ?',
        options: ['position', 'display', 'margin', 'transform'],
        answer: 0,
      },
      {
        question: 'Quelle règle CSS permet d’appliquer un style uniquement sur écrans plus petits ?',
        options: ['@media', '@import', '@supports', '@keyframes'],
        answer: 0,
      },
    ],
    avance: [
      {
        question: 'Quelle propriété permet de créer un layout en grille ?',
        options: ['display: grid', 'display: flex', 'position: absolute', 'overflow: hidden'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet d’animer une transformation de manière fluide ?',
        options: ['transition', 'padding', 'font-size', 'background'],
        answer: 0,
      },
      {
        question: 'Quelle fonction CSS permet de générer des valeurs entre deux bornes ?',
        options: ['clamp()', 'calc()', 'min()', 'max()'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet d’ajouter une ombre autour d’un bloc ?',
        options: ['box-shadow', 'outline', 'filter', 'border-collapse'],
        answer: 0,
      },
      {
        question: 'Quelle propriété est utilisée pour gérer la superposition des éléments ?',
        options: ['z-index', 'position', 'transform', 'gap'],
        answer: 0,
      },
      {
        question: 'Quelle pseudo-partie CSS permet de styliser le premier enfant d’un conteneur ?',
        options: ['::first-child', '::before', '::after', ':root'],
        answer: 0,
      },
      {
        question: 'Quelle propriété permet de conserver le ratio d’une image dans un conteneur ?',
        options: ['object-fit', 'background-size', 'overflow', 'padding'],
        answer: 0,
      },
    ],
  },
  javascript: {
    debutant: [
      {
        question: 'Quel mot-clé permet de déclarer une variable en JavaScript ?',
        options: ['var', 'const', 'function', 'if'],
        answer: 1,
      },
      {
        question: 'Dans un tableau JavaScript, quel index correspond au premier élément ?',
        options: ['1', '0', 'null', 'undefined'],
        answer: 1,
      },
      {
        question: 'Quelle méthode permet de récupérer un élément HTML via son identifiant ?',
        options: ['querySelector()', 'getElementById()', 'createElement()', 'appendChild()'],
        answer: 1,
      },
      {
        question: 'Quelle structure permet d’exécuter du code uniquement si une condition est vraie ?',
        options: ['if', 'for', 'switch', 'while'],
        answer: 0,
      },
      {
        question: 'Quelle syntaxe permet de créer une fonction ?',
        options: ['function nom() {}', 'const nom = []', 'if (nom) {}', 'var = nom'],
        answer: 0,
      },
    ],
    intermediaire: [
      {
        question: 'Quel type de donnée représente une liste de valeurs ?',
        options: ['Array', 'String', 'Boolean', 'Object'],
        answer: 0,
      },
      {
        question: 'À quoi sert localStorage en JavaScript ?',
        options: ['À sauvegarder des données dans le navigateur', 'À créer des animations', 'À styliser les boutons', 'À compresser les fichiers'],
        answer: 0,
      },
      {
        question: 'Quelle méthode permet d’exécuter du code après un délai donné ?',
        options: ['setTimeout()', 'querySelector()', 'appendChild()', 'parseInt()'],
        answer: 0,
      },
      {
        question: 'Quelle méthode permet d’ajouter un écouteur d’événement à un élément ?',
        options: ['addEventListener()', 'setAttribute()', 'createElement()', 'innerHTML'],
        answer: 0,
      },
      {
        question: 'Que retourne typeof [] ?',
        options: ['object', 'array', 'string', 'undefined'],
        answer: 0,
      },
      {
        question: 'Quelle méthode transforme un tableau en chaîne de caractères ?',
        options: ['join()', 'map()', 'filter()', 'reduce()'],
        answer: 0,
      },
    ],
    avance: [
      {
        question: 'Que fait la méthode .map() sur un tableau ?',
        options: ['Elle retourne un nouveau tableau transformé', 'Elle supprime les éléments', 'Elle trie le tableau', 'Elle compare deux tableaux'],
        answer: 0,
      },
      {
        question: 'Quelle instruction permet d’attendre qu’une promesse soit résolue ?',
        options: ['await', 'return', 'switch', 'throw'],
        answer: 0,
      },
      {
        question: 'Quelle technique permet d’extraire des valeurs d’un objet plus simplement ?',
        options: ['Destructuration', 'Interpolation', 'Concaténation', 'Mutation'],
        answer: 0,
      },
      {
        question: 'Quel mot-clé permet de créer une variable dont la valeur ne peut pas être réaffectée ?',
        options: ['const', 'let', 'var', 'function'],
        answer: 0,
      },
      {
        question: 'Quelle méthode permet de filtrer un tableau selon une condition ?',
        options: ['filter()', 'forEach()', 'push()', 'slice()'],
        answer: 0,
      },
      {
        question: 'Que deviens un callback lorsqu’on l’exécute dans le contexte de l’objet qui l’appelle ?',
        options: ['this fait référence à l’objet appelant', 'this vaut undefined', 'this devient null', 'this est constant'],
        answer: 0,
      },
      {
        question: 'Quelle méthode permet de réduire un tableau à une seule valeur ?',
        options: ['reduce()', 'map()', 'sort()', 'find()'],
        answer: 0,
      },
    ],
  },
};

const startScreen = document.querySelector('#startScreen');
const quizScreen = document.querySelector('#quizScreen');
const resultScreen = document.querySelector('#resultScreen');
const startBtn = document.querySelector('#startBtn');
const nextBtn = document.querySelector('#nextBtn');
const restartBtn = document.querySelector('#restartBtn');
const menuBtn = document.querySelector('#menuBtn');
const answersContainer = document.querySelector('#answers');
const questionText = document.querySelector('#questionText');
const questionCounter = document.querySelector('#questionCounter');
const progressFill = document.querySelector('#progressFill');
const scoreValue = document.querySelector('#scoreValue');
const resultTitle = document.querySelector('#resultTitle');
const resultText = document.querySelector('#resultText');
const feedback = document.querySelector('#feedback');
const categoryButtons = document.querySelectorAll('.category-btn');
const versionButtons = document.querySelectorAll('.version-btn');
const registerName = document.querySelector('#registerName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerBtn = document.querySelector('#registerBtn');
const loginBtn = document.querySelector('#loginBtn');
const authStatus = document.querySelector('#authStatus');
const mistakesList = document.querySelector('#mistakesList');
const profilePanel = document.querySelector('#profilePanel');
const profileUsername = document.querySelector('#profileUsername');
const profileLevel = document.querySelector('#profileLevel');
const profileBestScore = document.querySelector('#profileBestScore');
const profileUnlockedLevels = document.querySelector('#profileUnlockedLevels');
const profileModal = document.querySelector('#profileModal');
const closeProfileModalBtn = document.querySelector('#closeProfileModal');
const navLoginBtn = document.querySelector('#navLoginBtn');
const navRegisterBtn = document.querySelector('#navRegisterBtn');
const navUserBadge = document.querySelector('#navUserBadge');
const navUserName = document.querySelector('#navUserName');
const authModal = document.querySelector('#authModal');
const closeAuthModalBtn = document.querySelector('#closeAuthModal');

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedCategory = 'html';
let selectedVersion = 'debutant';
let currentUserLevel = 'debutant';
let currentUserName = '';
let questions = quizSets[selectedCategory][selectedVersion];
let mistakes = [];
let isProfileOpen = false;

function getUnlockedVersions(level = currentUserLevel) {
  switch (level) {
    case 'intermediaire':
      return ['debutant', 'intermediaire'];
    case 'avance':
      return ['debutant', 'intermediaire', 'avance'];
    default:
      return ['debutant'];
  }
}

function canAccessVersion(version) {
  return getUnlockedVersions(currentUserLevel).includes(version);
}

function getLevelLabel(level) {
  switch (level) {
    case 'intermediaire':
      return 'Intermédiaire';
    case 'avance':
      return 'Avancé';
    default:
      return 'Débutant';
  }
}

function openAuthModal(mode = 'login') {
  if (!authModal) return;

  authModal.classList.add('open');
  authModal.setAttribute('aria-hidden', 'false');

  if (mode === 'register') {
    registerName.focus();
    return;
  }

  registerEmail.focus();
}

function closeAuthModal() {
  if (!authModal) return;

  authModal.classList.remove('open');
  authModal.setAttribute('aria-hidden', 'true');
}

function openProfileModal() {
  const currentName = (currentUserName || navUserName.textContent || '').trim();

  if (!currentName || currentName === 'Invité') {
    closeProfileModal();
    return;
  }

  if (!profileModal) return;

  profileModal.classList.add('open');
  profileModal.setAttribute('aria-hidden', 'false');
  isProfileOpen = true;
}

function closeProfileModal() {
  if (!profileModal) return;

  profileModal.classList.remove('open');
  profileModal.setAttribute('aria-hidden', 'true');
  isProfileOpen = false;
}

function updateNavUserStatus(username = '') {
  const currentName = (username || currentUserName || '').trim();

  if (!currentName) {
    currentUserName = '';
    navLoginBtn.hidden = false;
    navRegisterBtn.hidden = false;
    navUserBadge.hidden = true;
    navUserName.textContent = 'Invité';
    closeProfileModal();
    return;
  }

  currentUserName = currentName;
  navLoginBtn.hidden = true;
  navRegisterBtn.hidden = true;
  navUserBadge.hidden = false;
  navUserName.textContent = currentName;
  closeProfileModal();
}

function renderUserProfile(data) {
  if (!data?.username) {
    closeProfileModal();
    updateNavUserStatus('');
    return;
  }

  const unlockedLevels = data.unlockedLevels || ['debutant'];

  profileUsername.textContent = data.username;
  profileLevel.textContent = getLevelLabel(data.currentLevel || 'debutant');
  profileBestScore.textContent = `${data.bestScore || 0} pts`;
  profileUnlockedLevels.innerHTML = unlockedLevels
    .map((level) => `<span class="level-pill ${level === (data.currentLevel || 'debutant') ? 'active' : ''}">${getLevelLabel(level)}</span>`)
    .join('');

  updateNavUserStatus(data.username);
}

async function loadUserProfile(username) {
  const normalizedUsername = (username || '').trim();

  if (!normalizedUsername) {
    currentUserLevel = 'debutant';
    renderUserProfile(null);
    updateVersionButtons();
    return null;
  }

  const response = await fetch(`http://localhost:3001/api/quiz/users/${encodeURIComponent(normalizedUsername)}`);

  if (!response.ok) {
    currentUserLevel = 'debutant';
    renderUserProfile(null);
    updateVersionButtons();
    return null;
  }

  const data = await response.json();
  currentUserLevel = data.currentLevel || 'debutant';
  updateVersionButtons();
  renderUserProfile(data);
  return data;
}

async function saveQuizResult(payload) {
  try {
    const response = await fetch('http://localhost:3001/api/quiz/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l’enregistrement du résultat.');
    }

    const result = await response.json();
    renderUserProfile(result.user || null);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function registerUser() {
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();

  if (!name || !email || !password) {
    authStatus.textContent = 'Champs manquants';
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      authStatus.textContent = data.message || 'Erreur d’inscription';
      return;
    }

    authStatus.textContent = `Connecté : ${data.user.name}`;
    currentUserName = data.user.name;
    updateNavUserStatus(data.user.name);
    closeAuthModal();
    await loadUserProfile(data.user.name);
  } catch (error) {
    authStatus.textContent = 'Serveur indisponible. Démarre le backend d’abord.';
    console.error('Register failed:', error);
  }
}

async function loginUser() {
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();

  if (!email || !password) {
    authStatus.textContent = 'Email et mot de passe requis';
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      authStatus.textContent = data.message || 'Erreur de connexion';
      return;
    }

    authStatus.textContent = `Connecté : ${data.user.name}`;
    currentUserName = data.user.name;
    updateNavUserStatus(data.user.name);
    closeAuthModal();
    await loadUserProfile(data.user.name);
  } catch (error) {
    authStatus.textContent = 'Serveur indisponible. Démarre le backend d’abord.';
    console.error('Login failed:', error);
  }
}

function showScreen(screen) {
  startScreen.classList.remove('visible');
  quizScreen.classList.remove('visible');
  resultScreen.classList.remove('visible');
  screen.classList.add('visible');
}

function setSelectedCategory(category) {
  selectedCategory = category;

  categoryButtons.forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateVersionButtons(level = currentUserLevel) {
  const unlockedVersions = getUnlockedVersions(level);

  versionButtons.forEach((button) => {
    const isUnlocked = unlockedVersions.includes(button.dataset.version);
    button.hidden = !isUnlocked;
    button.disabled = !isUnlocked;
    button.classList.toggle('active', button.dataset.version === selectedVersion && isUnlocked);
    button.setAttribute('aria-pressed', String(button.dataset.version === selectedVersion && isUnlocked));
  });

  if (!unlockedVersions.includes(selectedVersion)) {
    selectedVersion = unlockedVersions[0];
  }
}

function setSelectedVersion(version) {
  if (!canAccessVersion(version)) {
    return;
  }

  selectedVersion = version;

  versionButtons.forEach((button) => {
    const isActive = button.dataset.version === version && !button.hidden;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
}

function renderQuestion() {
  answered = false;
  feedback.textContent = '';
  feedback.className = 'feedback';
  nextBtn.disabled = true;
  mistakesList.innerHTML = '';

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index, button));
    answersContainer.appendChild(button);
  });

  updateProgress();
}

function handleAnswer(selectedIndex, selectedButton) {
  if (answered) return;

  answered = true;
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = answersContainer.querySelectorAll('.answer-btn');

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === currentQuestion.answer) {
      button.classList.add('correct');
    }

    if (index === selectedIndex && index !== currentQuestion.answer) {
      button.classList.add('wrong');
    }
  });

  if (selectedIndex === currentQuestion.answer) {
    score += 1;
    scoreValue.textContent = String(score);
    feedback.textContent = 'Bonne réponse !';
    feedback.classList.add('success');
  } else {
    const wrongAnswer = {
      question: currentQuestion.question,
      correctAnswer: currentQuestion.options[currentQuestion.answer],
      explanation: getExplanation(currentQuestion, selectedIndex),
    };
    mistakes.push(wrongAnswer);
    feedback.textContent = `Mauvaise réponse. La bonne réponse était : ${currentQuestion.options[currentQuestion.answer]}.`;
    feedback.classList.add('error');
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showResult();
}

function getExplanation(question, selectedIndex) {
  const correctAnswer = question.options[question.answer];
  const selectedAnswer = question.options[selectedIndex];

  if (selectedAnswer === correctAnswer) {
    return 'Bonne réponse.';
  }

  if (question.category === 'html') {
    return `Le bon élément est ${correctAnswer}. Il correspond à la structure attendue pour ce type de contenu HTML.`;
  }

  if (question.category === 'css') {
    return `La bonne propriété est ${correctAnswer}. Elle est la bonne réponse pour régler ce point de style.`;
  }

  return `La bonne réponse est ${correctAnswer}. Cette notion est fondamentale en JavaScript pour comprendre le comportement attendu.`;
}

function renderMistakes() {
  if (!mistakes.length) {
    mistakesList.innerHTML = '<p class="mistake-empty">Aucune erreur à corriger. Excellent travail !</p>';
    return;
  }

  mistakesList.innerHTML = mistakes.map((item) => `
    <div class="mistake-item">
      <strong>${item.question}</strong>
      <p>Bonne réponse : ${item.correctAnswer}</p>
      <small>${item.explanation}</small>
    </div>
  `).join('');
}

async function showResult() {
  const percentage = Math.round((score / questions.length) * 100);
  const categoryLabel = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  let versionLabel = 'Débutant';

  if (selectedVersion === 'intermediaire') {
    versionLabel = 'Intermédiaire';
  } else if (selectedVersion === 'avance') {
    versionLabel = 'Avancé';
  }

  let message = `Tu as encore des notions à revoir en ${categoryLabel} (${versionLabel}), mais c’est une très bonne base pour continuer.`;

  if (percentage >= 80) {
    message = `Excellent ! Tu maîtrises bien les bases de ${categoryLabel} en version ${versionLabel}.`;
  } else if (percentage >= 50) {
    message = `Bien joué ! Tu as de bonnes bases en ${categoryLabel} (${versionLabel}), il reste encore quelques points à améliorer.`;
  }

  resultTitle.textContent = percentage >= 50 ? 'Bravo !' : 'Tu peux mieux faire !';
  resultText.textContent = `${message} Ton score final est de ${score} / ${questions.length}.`;
  renderMistakes();

  const username = (currentUserName || 'Anonyme').trim();
  const summary = `${username} a obtenu ${score}/${questions.length} en ${categoryLabel} - ${versionLabel}.`;

  const saved = await saveQuizResult({
    username,
    category: selectedCategory,
    version: selectedVersion,
    score,
    total: questions.length,
    mistakes,
    summary,
  });

  if (saved?.user) {
    currentUserLevel = saved.user.currentLevel || currentUserLevel;
    updateVersionButtons();
  }

  showScreen(resultScreen);
}

function startQuiz(category = selectedCategory, version = selectedVersion) {
  questions = quizSets[category]?.[version] ?? quizSets.html.debutant;
  questions = questions.map((question) => ({ ...question, category }));
  currentQuestionIndex = 0;
  score = 0;
  mistakes = [];
  scoreValue.textContent = '0';
  renderQuestion();
  showScreen(quizScreen);
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setSelectedCategory(button.dataset.category);
  });
});

versionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setSelectedVersion(button.dataset.version);
  });
});

navLoginBtn.addEventListener('click', () => {
  openAuthModal('login');
});

navRegisterBtn.addEventListener('click', () => {
  openAuthModal('register');
});

navUserBadge.addEventListener('click', () => {
  openProfileModal();
});

closeProfileModalBtn.addEventListener('click', closeProfileModal);
profileModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeProfile === 'true') {
    closeProfileModal();
  }
});

closeAuthModalBtn.addEventListener('click', closeAuthModal);
authModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
    closeAuthModal();
  }
});

startBtn.addEventListener('click', async () => {
  if (currentUserName) {
    await loadUserProfile(currentUserName);
  }

  if (!canAccessVersion(selectedVersion)) {
    selectedVersion = getUnlockedVersions(currentUserLevel)[0];
  }

  startQuiz(selectedCategory, selectedVersion);
});

nextBtn.addEventListener('click', () => {
  nextQuestion();
});

restartBtn.addEventListener('click', () => {
  startQuiz(selectedCategory, selectedVersion);
});

menuBtn.addEventListener('click', () => {
  showScreen(startScreen);
});

registerBtn.addEventListener('click', async () => {
  await registerUser();
});

loginBtn.addEventListener('click', async () => {
  await loginUser();
});

setSelectedCategory(selectedCategory);
updateVersionButtons();
setSelectedVersion(selectedVersion);
updateNavUserStatus('');
showScreen(startScreen);
