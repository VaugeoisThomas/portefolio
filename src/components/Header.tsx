type HeaderProps = {
  links: Array<{ href: string; label: string }>
}

export function Header({ links }: Readonly<HeaderProps>) {
  return (
    <header className="topbar">
      <div className="brand">TV</div>
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
