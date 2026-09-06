import { useEffect, useMemo, useState } from 'react'

type Difficulty = 'debutant' | 'intermediaire' | 'avance'
type Category = 'html' | 'css' | 'javascript'

type Question = {
  question: string
  options: string[]
  answer: number
}

type Mistake = {
  question: string
  correctAnswer: string
  explanation: string
}

type UserProfile = {
  username: string
  currentLevel: Difficulty
  unlockedLevels: Difficulty[]
  bestScore: number
}

const VERSION_ORDER: Difficulty[] = ['debutant', 'intermediaire', 'avance']

const quizSets: Record<Category, Record<Difficulty, Question[]>> = {
  html: {
    debutant: [
      { question: 'Quel élément HTML sert à créer un bouton cliquable ?', options: ['<button>', '<section>', '<p>', '<link>'], answer: 0 },
      { question: 'Quelle balise sert à créer un titre principal dans une page HTML ?', options: ['<h1>', '<header>', '<main>', '<title>'], answer: 0 },
      { question: 'Quelle balise HTML permet d’afficher une image ?', options: ['<img>', '<picture>', '<media>', '<svg>'], answer: 0 },
      { question: 'Quelle balise permet de créer un lien vers une autre page ?', options: ['<a>', '<nav>', '<button>', '<section>'], answer: 0 },
      { question: 'Quelle balise représente le plus gros titre d’une page ?', options: ['<h1>', '<h2>', '<p>', '<strong>'], answer: 0 },
    ],
    intermediaire: [
      { question: 'Quel attribut est utilisé pour indiquer le chemin d’une image ?', options: ['src', 'href', 'alt', 'class'], answer: 0 },
      { question: 'Quelle balise s’utilise pour définir une liste non ordonnée ?', options: ['<ul>', '<ol>', '<li>', '<dl>'], answer: 0 },
      { question: 'Quelle balise sert à regrouper un ensemble de champs de formulaire ?', options: ['<form>', '<fieldset>', '<label>', '<input>'], answer: 1 },
      { question: 'Quel attribut permet de rendre un élément accessible par le lecteur d’écran ?', options: ['aria-label', 'hidden', 'srcset', 'charset'], answer: 0 },
      { question: 'Quelle balise sémantique est la plus adaptée pour un article de blog ?', options: ['<article>', '<aside>', '<header>', '<footer>'], answer: 0 },
      { question: 'Quelle balise crée une zone de navigation principale ?', options: ['<nav>', '<main>', '<header>', '<section>'], answer: 0 },
    ],
    avance: [
      { question: 'Quelle balise est la plus appropriée pour structurer le contenu principal d’une page ?', options: ['<main>', '<section>', '<article>', '<div>'], answer: 0 },
      { question: 'Quel attribut est utilisé pour associer un libellé à un champ de formulaire ?', options: ['for', 'name', 'value', 'id'], answer: 0 },
      { question: 'Quelle balise permet d’intégrer un contenu multimédia avec une alternative textuelle ?', options: ['<figure>', '<audio>', '<video>', '<img>'], answer: 0 },
      { question: 'Quel rôle ARIA est utilisé pour identifier une zone de navigation ?', options: ['navigation', 'banner', 'main', 'alert'], answer: 0 },
      { question: 'Quelle balise permet d’indiquer une zone de contenu secondaire distincte du contenu principal ?', options: ['<aside>', '<footer>', '<header>', '<nav>'], answer: 0 },
      { question: 'Quel élément HTML est le plus adapté pour afficher une citation ou un extrait de texte notable ?', options: ['<blockquote>', '<q>', '<cite>', '<span>'], answer: 0 },
      { question: 'Quelle balise permet d’associer un titre à une image ou illustration ?', options: ['<figcaption>', '<caption>', '<legend>', '<summary>'], answer: 0 },
    ],
  },
  css: {
    debutant: [
      { question: 'Quelle propriété CSS permet de changer la couleur du texte ?', options: ['color', 'font-size', 'margin', 'display'], answer: 0 },
      { question: 'Quelle propriété CSS permet d’ajouter un espace autour d’un élément ?', options: ['margin', 'padding', 'border', 'background'], answer: 0 },
      { question: 'Quelle propriété CSS permet d’arrondir les coins d’un bloc ?', options: ['border-radius', 'box-shadow', 'font-weight', 'background'], answer: 0 },
      { question: 'Quelle propriété permet de mettre un fond coloré sur un élément ?', options: ['background-color', 'color', 'padding', 'width'], answer: 0 },
      { question: 'Quelle valeur de display permet de placer des éléments en ligne ?', options: ['inline', 'flex', 'grid', 'block'], answer: 0 },
    ],
    intermediaire: [
      { question: 'Quelle propriété CSS permet de créer un espace interne à un élément ?', options: ['padding', 'margin', 'outline', 'opacity'], answer: 0 },
      { question: 'Quel display est utilisé pour créer un conteneur flexible ?', options: ['flex', 'grid', 'table', 'block'], answer: 0 },
      { question: 'Quelle propriété permet de contrôler l’écart entre les éléments d’un conteneur flex ?', options: ['gap', 'padding-top', 'line-height', 'border-spacing'], answer: 0 },
      { question: 'Quelle pseudo-classe CSS permet de cibler un élément au survol de la souris ?', options: [':hover', ':focus', ':active', ':visited'], answer: 0 },
      { question: 'Quelle propriété permet de placer un élément par rapport à son conteneur ?', options: ['position', 'display', 'margin', 'transform'], answer: 0 },
      { question: 'Quelle règle CSS permet d’appliquer un style uniquement sur écrans plus petits ?', options: ['@media', '@import', '@supports', '@keyframes'], answer: 0 },
    ],
    avance: [
      { question: 'Quelle propriété permet de créer un layout en grille ?', options: ['display: grid', 'display: flex', 'position: absolute', 'overflow: hidden'], answer: 0 },
      { question: 'Quelle propriété permet d’animer une transformation de manière fluide ?', options: ['transition', 'padding', 'font-size', 'background'], answer: 0 },
      { question: 'Quelle fonction CSS permet de générer des valeurs entre deux bornes ?', options: ['clamp()', 'calc()', 'min()', 'max()'], answer: 0 },
      { question: 'Quelle propriété permet d’ajouter une ombre autour d’un bloc ?', options: ['box-shadow', 'outline', 'filter', 'border-collapse'], answer: 0 },
      { question: 'Quelle propriété est utilisée pour gérer la superposition des éléments ?', options: ['z-index', 'position', 'transform', 'gap'], answer: 0 },
      { question: 'Quelle pseudo-partie CSS permet de styliser le premier enfant d’un conteneur ?', options: ['::first-child', '::before', '::after', ':root'], answer: 0 },
      { question: 'Quelle propriété permet de conserver le ratio d’une image dans un conteneur ?', options: ['object-fit', 'background-size', 'overflow', 'padding'], answer: 0 },
    ],
  },
  javascript: {
    debutant: [
      { question: 'Quel mot-clé permet de déclarer une variable en JavaScript ?', options: ['var', 'const', 'function', 'if'], answer: 1 },
      { question: 'Dans un tableau JavaScript, quel index correspond au premier élément ?', options: ['1', '0', 'null', 'undefined'], answer: 1 },
      { question: 'Quelle méthode permet de récupérer un élément HTML via son identifiant ?', options: ['querySelector()', 'getElementById()', 'createElement()', 'appendChild()'], answer: 1 },
      { question: 'Quelle structure permet d’exécuter du code uniquement si une condition est vraie ?', options: ['if', 'for', 'switch', 'while'], answer: 0 },
      { question: 'Quelle syntaxe permet de créer une fonction ?', options: ['function nom() {}', 'const nom = []', 'if (nom) {}', 'var = nom'], answer: 0 },
    ],
    intermediaire: [
      { question: 'Quel type de donnée représente une liste de valeurs ?', options: ['Array', 'String', 'Boolean', 'Object'], answer: 0 },
      { question: 'À quoi sert localStorage en JavaScript ?', options: ['À sauvegarder des données dans le navigateur', 'À créer des animations', 'À styliser les boutons', 'À compresser les fichiers'], answer: 0 },
      { question: 'Quelle méthode permet d’exécuter du code après un délai donné ?', options: ['setTimeout()', 'querySelector()', 'appendChild()', 'parseInt()'], answer: 0 },
      { question: 'Quelle méthode permet d’ajouter un écouteur d’événement à un élément ?', options: ['addEventListener()', 'setAttribute()', 'createElement()', 'innerHTML'], answer: 0 },
      { question: 'Que retourne typeof [] ?', options: ['object', 'array', 'string', 'undefined'], answer: 0 },
      { question: 'Quelle méthode transforme un tableau en chaîne de caractères ?', options: ['join()', 'map()', 'filter()', 'reduce()'], answer: 0 },
    ],
    avance: [
      { question: 'Que fait la méthode .map() sur un tableau ?', options: ['Elle retourne un nouveau tableau transformé', 'Elle supprime les éléments', 'Elle trie le tableau', 'Elle compare deux tableaux'], answer: 0 },
      { question: 'Quelle instruction permet d’attendre qu’une promesse soit résolue ?', options: ['await', 'return', 'switch', 'throw'], answer: 0 },
      { question: 'Quelle technique permet d’extraire des valeurs d’un objet plus simplement ?', options: ['Destructuration', 'Interpolation', 'Concaténation', 'Mutation'], answer: 0 },
      { question: 'Quel mot-clé permet de créer une variable dont la valeur ne peut pas être réaffectée ?', options: ['const', 'let', 'var', 'function'], answer: 0 },
      { question: 'Quelle méthode permet de filtrer un tableau selon une condition ?', options: ['filter()', 'forEach()', 'push()', 'slice()'], answer: 0 },
      { question: 'Que deviens un callback lorsqu’on l’exécute dans le contexte de l’objet qui l’appelle ?', options: ['this fait référence à l’objet appelant', 'this vaut undefined', 'this devient null', 'this est constant'], answer: 0 },
      { question: 'Quelle méthode permet de réduire un tableau à une seule valeur ?', options: ['reduce()', 'map()', 'sort()', 'find()'], answer: 0 },
    ],
  },
}

const getLevelLabel = (level: Difficulty) => {
  if (level === 'intermediaire') return 'Intermédiaire'
  if (level === 'avance') return 'Avancé'
  return 'Débutant'
}

const getUnlockedVersions = (level: Difficulty): Difficulty[] => {
  if (level === 'intermediaire') return ['debutant', 'intermediaire']
  if (level === 'avance') return ['debutant', 'intermediaire', 'avance']
  return ['debutant']
}

export default function QuizApp() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('html')
  const [selectedVersion, setSelectedVersion] = useState<Difficulty>('debutant')
  const [currentUserName, setCurrentUserName] = useState('')
  const [currentUserLevel, setCurrentUserLevel] = useState<Difficulty>('debutant')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [authStatus, setAuthStatus] = useState('Invité')
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [profileData, setProfileData] = useState<UserProfile | null>(null)
  const [view, setView] = useState<'start' | 'quiz' | 'result'>('start')
  const [questions, setQuestions] = useState<Question[]>(quizSets.html.debutant)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState<Mistake[]>([])
  const [displayedFeedback, setDisplayedFeedback] = useState('')
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
  const [processingAnswer, setProcessingAnswer] = useState(false)
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const question = questions[currentQuestionIndex]

  useEffect(() => {
    const nextQuestions = quizSets[selectedCategory][selectedVersion]
    setQuestions(nextQuestions)
    setCurrentQuestionIndex(0)
    setScore(0)
    setMistakes([])
    setDisplayedFeedback('')
    setSelectedAnswerIndex(null)
    setProcessingAnswer(false)
  }, [selectedCategory, selectedVersion])

  useEffect(() => {
    if (!currentUserName) {
      setIsLoggedIn(false)
      setAuthStatus('Invité')
      setProfileData(null)
      setCurrentUserLevel('debutant')
    }
  }, [currentUserName])

  const currentUnlocked = useMemo(() => getUnlockedVersions(currentUserLevel), [currentUserLevel])

  const startQuiz = async () => {
    if (currentUserName) {
      await fetchUserProfile(currentUserName)
    }

    if (!currentUnlocked.includes(selectedVersion)) {
      setSelectedVersion(currentUnlocked[0])
    }

    setView('quiz')
  }

  const fetchUserProfile = async (username: string) => {
    const response = await fetch(`http://localhost:3001/api/quiz/users/${encodeURIComponent(username)}`)
    if (!response.ok) {
      setCurrentUserLevel('debutant')
      setProfileData(null)
      return null
    }

    const data = await response.json()
    setCurrentUserLevel(data.currentLevel || 'debutant')
    setProfileData(data)
    return data
  }

  const saveQuizResult = async (payload: Record<string, unknown>) => {
    try {
      const response = await fetch('http://localhost:3001/api/quiz/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) return null
      const result = await response.json()
      setProfileData(result.user || null)
      return result
    } catch {
      return null
    }
  }

  const handleAnswer = (index: number) => {
    if (processingAnswer || !question) return

    setProcessingAnswer(true)
    setSelectedAnswerIndex(index)

    if (index === question.answer) {
      setScore((previous) => previous + 1)
      setDisplayedFeedback('Bonne réponse !')
      return
    }

    const wrongAnswer: Mistake = {
      question: question.question,
      correctAnswer: question.options[question.answer],
      explanation: `La bonne réponse est ${question.options[question.answer]}. Cette notion est importante pour maîtriser le sujet.`,
    }

    setMistakes((previous) => [...previous, wrongAnswer])
    setDisplayedFeedback(`Mauvaise réponse. La bonne réponse était : ${question.options[question.answer]}.`)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((previous) => previous + 1)
      setSelectedAnswerIndex(null)
      setProcessingAnswer(false)
      setDisplayedFeedback('')
      return
    }

    finalizeQuiz()
  }

  const finalizeQuiz = async () => {
    const percentage = Math.round((score / questions.length) * 100)
    const categoryLabel = selectedCategory.toUpperCase()
    const versionLabel = getLevelLabel(selectedVersion)
    const username = currentUserName || 'Anonyme'

    await saveQuizResult({
      username,
      category: selectedCategory,
      version: selectedVersion,
      score,
      total: questions.length,
      mistakes,
      summary: `${username} a obtenu ${score}/${questions.length} en ${categoryLabel} - ${versionLabel}.`,
    })

    setView('result')
  }

  const handleRegister = async () => {
    if (!registerName || !registerEmail || !registerPassword) {
      setAuthStatus('Champs manquants')
      return
    }

    const response = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword }),
    })

    const data = await response.json()

    if (!response.ok) {
      setAuthStatus(data.message || 'Erreur d’inscription')
      return
    }

    setCurrentUserName(data.user.name)
    setIsLoggedIn(true)
    setAuthStatus(`Connecté : ${data.user.name}`)
    setAuthModalOpen(false)
    setProfileData(await fetchUserProfile(data.user.name))
  }

  const handleLogin = async () => {
    if (!registerEmail || !registerPassword) {
      setAuthStatus('Email et mot de passe requis')
      return
    }

    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: registerEmail, password: registerPassword }),
    })

    const data = await response.json()

    if (!response.ok) {
      setAuthStatus(data.message || 'Erreur de connexion')
      return
    }

    setCurrentUserName(data.user.name)
    setIsLoggedIn(true)
    setAuthStatus(`Connecté : ${data.user.name}`)
    setAuthModalOpen(false)
    setProfileData(await fetchUserProfile(data.user.name))
  }

  const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0

  return (
    <div className="quiz-demo mini-app-card">
      <nav className="quiz-navbar" aria-label="Navigation du quiz">
        <div className="brand-block">
          <span className="brand-mark">D</span>
          <span className="brand-name">DevQuiz</span>
        </div>

        <div className="nav-actions">
          {!isLoggedIn && (
            <>
              <button type="button" className="nav-btn nav-btn--ghost" onClick={() => { setAuthMode('login'); setAuthModalOpen(true) }}>
                Se connecter
              </button>
              <button type="button" className="nav-btn nav-btn--primary" onClick={() => { setAuthMode('register'); setAuthModalOpen(true) }}>
                S'inscrire
              </button>
            </>
          )}

          {isLoggedIn && (
            <button type="button" className="user-badge" onClick={() => setProfileModalOpen(true)}>
              <span>Profil</span>
              <strong>{currentUserName}</strong>
            </button>
          )}
        </div>
      </nav>

      {authModalOpen && (
        <div className="auth-modal open" aria-hidden="false">
          <div className="auth-modal__backdrop" onClick={() => setAuthModalOpen(false)} />
          <div className="auth-modal__panel">
            <button type="button" className="auth-modal__close" onClick={() => setAuthModalOpen(false)}>×</button>
            <p className="screen-kicker">Compte</p>
            <h3>{authMode === 'register' ? 'Inscription' : 'Connexion'}</h3>

            <div className="auth-header">
              <span>Compte</span>
              <strong>{authStatus}</strong>
            </div>

            <div className="auth-fields">
              {authMode === 'register' && (
                <label className="username-field">
                  <span>Nom</span>
                  <input value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder="Ex : Thomas" />
                </label>
              )}

              <label className="username-field">
                <span>Email</span>
                <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Ex : thomas@email.com" />
              </label>

              <label className="username-field">
                <span>Mot de passe</span>
                <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Votre mot de passe" />
              </label>
            </div>

            <div className="auth-actions">
              {authMode === 'register' ? (
                <button type="button" className="secondary-btn" onClick={handleRegister}>S'inscrire</button>
              ) : (
                <button type="button" className="secondary-btn" onClick={handleLogin}>Se connecter</button>
              )}
            </div>
          </div>
        </div>
      )}

      {profileModalOpen && profileData && (
        <div className="profile-modal open" aria-hidden="false">
          <div className="profile-modal__backdrop" onClick={() => setProfileModalOpen(false)} />
          <div className="profile-modal__panel">
            <button type="button" className="auth-modal__close" onClick={() => setProfileModalOpen(false)}>×</button>
            <p className="screen-kicker">Profil</p>
            <h3>Votre espace</h3>

            <div className="profile-panel">
              <div className="profile-header">
                <span className="profile-label">Utilisateur</span>
                <strong>{profileData.username}</strong>
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <span>Niveau</span>
                  <strong>{getLevelLabel(profileData.currentLevel || 'debutant')}</strong>
                </div>
                <div className="profile-stat">
                  <span>Score max</span>
                  <strong>{profileData.bestScore || 0}</strong>
                </div>
              </div>

              <div className="profile-unlocks">
                <span>Débloqués</span>
                <div className="unlocked-levels">
                  {(profileData.unlockedLevels || ['debutant']).map((level) => (
                    <span key={level} className={`level-pill ${level === (profileData.currentLevel || 'debutant') ? 'active' : ''}`}>
                      {getLevelLabel(level)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="quiz-shell">
        <section className="quiz-card" aria-live="polite">
          <div className="quiz-header">
            <div>
              <p className="eyebrow">Quiz web</p>
              <h1>DevQuiz</h1>
            </div>
            <div className="score-pill">
              <span>Score</span>
              <strong>{score}</strong>
            </div>
          </div>

          {view === 'start' && (
            <div className="screen visible">
              <div className="screen-content">
                <p className="screen-kicker">Teste tes connaissances</p>
                <h2>Choisis une catégorie</h2>
                <p> Sélectionne un domaine puis un niveau pour lancer un quiz précis sur HTML, CSS ou JavaScript.</p>

                <div className="category-grid" aria-label="Catégories de quiz">
                  {(['html', 'css', 'javascript'] as Category[]).map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div className="version-grid" aria-label="Niveaux de difficulté">
                  {(VERSION_ORDER as Difficulty[]).map((level) => {
                    const unlocked = currentUnlocked.includes(level)
                    return (
                      <button
                        key={level}
                        type="button"
                        hidden={!unlocked}
                        className={`version-btn ${selectedVersion === level ? 'active' : ''}`}
                        onClick={() => setSelectedVersion(level)}
                        disabled={!unlocked}
                      >
                        {getLevelLabel(level)}
                      </button>
                    )
                  })}
                </div>

                <button type="button" className="primary-btn" onClick={startQuiz}>Commencer</button>
              </div>
            </div>
          )}

          {view === 'quiz' && question && (
            <div className="screen visible">
              <div className="progress-wrap">
                <div className="progress-bar">
                  <span style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }} />
                </div>
                <span className="progress-text">Question {currentQuestionIndex + 1} / {questions.length}</span>
              </div>

              <div className="question-box">
                <p className="question-text">{question.question}</p>
              </div>

              <div className="answers" aria-label="Réponses possibles">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    className={`answer-btn ${selectedAnswerIndex === index ? 'selected' : ''} ${selectedAnswerIndex !== null && index === question.answer ? 'correct' : ''} ${selectedAnswerIndex === index && index !== question.answer ? 'wrong' : ''}`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswerIndex !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {displayedFeedback && <div className={`feedback ${selectedAnswerIndex === question.answer ? 'success' : 'error'}`}>{displayedFeedback}</div>}

              <div className="actions">
                <button type="button" className="secondary-btn" onClick={nextQuestion} disabled={selectedAnswerIndex === null}>
                  {currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Voir le résultat'}
                </button>
              </div>
            </div>
          )}

          {view === 'result' && (
            <div className="screen visible">
              <div className="screen-content result-content">
                <p className="screen-kicker">Résultat final</p>
                <h2>{percentage >= 50 ? 'Bravo !' : 'Tu peux mieux faire !'}</h2>
                <p>{percentage >= 80 ? `Excellent ! Tu maîtrises bien la thématique en ${getLevelLabel(selectedVersion)}.` : percentage >= 50 ? `Bien joué ! Tu as de bonnes bases en ${getLevelLabel(selectedVersion)}.` : `Tu as encore des notions à revoir. Continue, c’est une bonne base pour progresser.`} Ton score final est de {score} / {questions.length}.</p>
                <div className="mistakes-list">
                  {mistakes.length === 0 ? (
                    <p className="mistake-empty">Aucune erreur à corriger. Excellent travail !</p>
                  ) : (
                    mistakes.map((item, index) => (
                      <div key={`${item.question}-${index}`} className="mistake-item">
                        <strong>{item.question}</strong>
                        <p>Bonne réponse : {item.correctAnswer}</p>
                        <small>{item.explanation}</small>
                      </div>
                    ))
                  )}
                </div>
                <div className="result-actions">
                  <button type="button" className="secondary-btn" onClick={() => setView('start')}>Menu</button>
                  <button type="button" className="primary-btn" onClick={() => setView('quiz')}>Rejouer</button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
