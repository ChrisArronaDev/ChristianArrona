import { FiArrowUpRight, FiGithub, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <p className="eyebrow">06 · CONTACTO</p>
      <div className="contact-title"><h2>Construyamos algo<br /><em>que valga la pena.</em></h2><FiArrowUpRight /></div>
      <div className="contact-grid">
        <p>¿Tienes un proyecto, una oportunidad o un reto técnico? Estoy abierto a conversar y entender cómo puedo aportar.</p>
        <div className="contact-links">
          <a href="mailto:christianarrona235@gmail.com"><FiMail /><span><small>CORREO</small>christianarrona235@gmail.com</span></a>
          <a href="tel:+524774332136"><FiPhone /><span><small>TELÉFONO</small>+52 477 433 2136</span></a>
          <a href="https://github.com/ChrisArronaDev" target="_blank" rel="noreferrer"><FiGithub /><span><small>GITHUB</small>@ChrisArronaDev</span></a>
          <div><FiMapPin /><span><small>UBICACIÓN</small>León, Guanajuato · MX</span></div>
        </div>
      </div>
    </section>
  )
}
