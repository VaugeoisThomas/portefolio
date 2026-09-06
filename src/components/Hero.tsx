export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Développeur web junior</p>
        <h1>
          Thomas Vaugeois{' '}
          <span>Je souhaite faire mes premiers pas dans une entreprise de développement web.</span>
        </h1>

        <p className="subtitle">
          Je conçois des interfaces claires avec HTML et CSS, et je souhaite renforcer mes compétences côté backend pour évoluer dans un environnement professionnel et contribuer à des projets web concrets.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">Voir mes projets</a>
          <a href="#contact" className="btn btn--secondary">Me contacter</a>
          <a href="/cv-thomas-vaugeois.pdf" className="btn btn--tertiary" download>Télécharger mon CV</a>
        </div>

        <ul className="hero__meta" aria-label="Compétences principales">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Backend</li>
        </ul>
      </div>

      <div className="hero__card" aria-label="Présentation du profil">
        <div className="profile-wrap">
          <div className="profile-badge">TV</div>
          <div className="profile-dot" />
        </div>
        <p className="card-label">Profil</p>
        <h2>Frontend solide, backend en devenir</h2>

        <div className="stats">
          <div><strong>HTML / CSS</strong><span>Base solide</span></div>
          <div><strong>JavaScript</strong><span>En apprentissage</span></div>
          <div><strong>Backend</strong><span>Spécialisation</span></div>
        </div>
      </div>
    </section>
  )
}
