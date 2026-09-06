type HeaderProps = {
  links: Array<{ href: string; label: string }>
}

export function Header({ links }: Readonly<HeaderProps>) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Retour à l’accueil">
        TV
      </a>
      <nav className="nav" aria-label="Navigation principale">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
