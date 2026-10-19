import './App.css'

/** Affiche la page principale du portfolio de Thomas Vaugeois. */
function App() {

  return (
    <main>
      <section id="accueil" className='intro' aria-labelledby='accueil-title'>
        <h1 id="accueil-title">Thomas Vaugeois</h1>
        <p className='intro-subtitle'>Développeur web front-end junior</p>
        <p>
          Je développe des interfaces web avec React et TypeScript, en portant attention à leur utilisation sur
          mobile et à la clarté du code.
        </p>
        <p>
          Je recherche un CDD ou un CDI pour contribuer aux projets d'une équipe et continuer à
          progresser.
        </p>
        <div className="intro-actions">
          <a href="#projets">Découvrir mes projets</a>
          <a href="#contact">Me contacter</a>
        </div>
      </section>
    </main>
  )
}

export default App
