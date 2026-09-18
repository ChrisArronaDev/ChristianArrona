import { FiArrowDownRight, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span /> Disponible para conversar sobre nuevos retos</div>
        <p className="hero-kicker">DESARROLLADOR DE SOFTWARE · IA APLICADA</p>
        <h1 id="hero-title">Christian<br /><em>Arrona Medina</em></h1>
        <p className="hero-intro">
          Desarrollo productos digitales de punta a punta: interfaz, lógica de negocio, datos y automatización. Integro inteligencia artificial en mi flujo para entregar software más rápido, claro y confiable.
        </p>
        <div className="hero-cta">
          <a className="button primary" href="mailto:christianarrona235@gmail.com">Hablemos <FiArrowDownRight /></a>
          <a className="button ghost" href="#experiencia">Ver experiencia</a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Resumen profesional">
        <div className="monogram" aria-hidden="true">CA</div>
        <div className="hero-card-row"><span>Perfil</span><strong>Full Stack</strong></div>
        <div className="hero-card-row"><span>Enfoque</span><strong>Web · Backend · IA</strong></div>
        <div className="hero-card-row"><span>Ubicación</span><strong><FiMapPin /> León, Gto.</strong></div>
        <div className="hero-links">
          <a href="mailto:christianarrona235@gmail.com" aria-label="Enviar correo"><FiMail /></a>
          <a href="https://github.com/ChrisArronaDev" target="_blank" rel="noreferrer" aria-label="Perfil de GitHub"><FiGithub /></a>
        </div>
      </aside>
      <a className="scroll-cue" href="#perfil">SCROLL <span>↓</span></a>
    </section>
  )
}
