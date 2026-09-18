import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { HeroOriginal } from './components/HeroOriginal'
import { StackOriginal } from './components/StackOriginal'
import { ProjectsOriginal } from './components/ProjectsOriginal'
import { DomainOriginal } from './components/DomainOriginal'
import { AIOriginal } from './components/AIOriginal'
import { LabOriginal } from './components/LabOriginal'
import { ActivityOriginal } from './components/ActivityOriginal'
import { TimelineOriginal } from './components/TimelineOriginal'
import { SeekingOriginal } from './components/SeekingOriginal'
import { ContactOriginal } from './components/ContactOriginal'
import { SideRail } from './components/SideRail'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light')
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.08 })
    nodes.forEach((node) => observer.observe(node))
    const fallback = window.setTimeout(() => nodes.forEach((node) => node.classList.add('is-visible')), 1400)
    return () => { observer.disconnect(); window.clearTimeout(fallback) }
  }, [])
  return <div className="portfolio-shell"><Header dark={dark} onTheme={() => setDark((value) => !value)} /><SideRail /><main id="contenido"><HeroOriginal /><StackOriginal /><ProjectsOriginal /><DomainOriginal /><AIOriginal /><LabOriginal /><ActivityOriginal /><TimelineOriginal /><SeekingOriginal /><ContactOriginal /></main></div>
}
