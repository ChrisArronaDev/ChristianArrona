import { useEffect } from 'react'
import { About } from './components/About'
import { AITools } from './components/AITools'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <AITools />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
