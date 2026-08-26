'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandA}>A</span>rmiva
          <span className={styles.brandDot}>Tech</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className={`btn-primary ${styles.cta}`}>
          Hablar con el equipo
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contacto" className={`btn-primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
          Hablar con el equipo
        </a>
      </div>
    </nav>
  )
}
