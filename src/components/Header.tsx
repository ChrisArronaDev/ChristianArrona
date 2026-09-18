import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { navigation } from '../data/portfolio'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleTheme = () => {
    setDark((current) => !current)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">CA<span>.</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>
          {dark ? <FiSun /> : <FiMoon />}
        </button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
