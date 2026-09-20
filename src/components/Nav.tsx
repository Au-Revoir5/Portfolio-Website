import { profile } from '../data'

const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          ~/<span>{profile.handle}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
