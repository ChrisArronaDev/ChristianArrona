import { experiences } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <SectionHeading eyebrow="02 · TRAYECTORIA" title="Experiencia que conecta producto y operación." description="Desarrollo, automatización, soporte y documentación para convertir necesidades reales en sistemas mantenibles." />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <article className="timeline-item reveal" key={`${experience.company}-${experience.period}`}>
            <div className="timeline-index">0{index + 1}</div>
            <div className="timeline-period">{experience.period}</div>
            <div className="timeline-content">
              <p className="company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
              <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
