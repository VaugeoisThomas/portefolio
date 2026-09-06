type FooterProps = {
  links: Array<{ href: string; label: string }>
}

export function Footer({ links }: Readonly<FooterProps>) {
  return (
    <footer id="contact" className="section contact site-footer" aria-labelledby="footer-title">
      <p className="eyebrow">Contact</p>
      <h2 id="footer-title">Je suis ouvert aux opportunités et aux missions qui permettent d’apprendre et de progresser.</h2>

      <div className="contact-card">
        <a href="mailto:vaugeois.thomas@gmail.com">vaugeois.thomas@gmail.com</a>
        <nav className="contact-links" aria-label="Navigation du pied de page">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="contact-links" aria-label="Réseaux sociaux">
          <a href="https://github.com/VaugeoisThomas" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}
