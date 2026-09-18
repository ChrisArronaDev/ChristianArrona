import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="perfil" className="section about">
      <SectionHeading eyebrow="01 · PERFIL" title="Código con propósito, aprendizaje constante." />
      <div className="about-grid reveal">
        <p className="lead">
          Soy desarrollador de software con experiencia en proyectos web, móviles y de escritorio. Me muevo con soltura entre frontend y backend, buscando siempre la solución más útil para el negocio y más clara para quien mantendrá el código después.
        </p>
        <div className="about-notes">
          <p>Me caracterizan la curiosidad, la constancia y la capacidad de probar distintos enfoques hasta resolver un reto.</p>
          <p>Disfruto colaborar con equipos multidisciplinarios, comunicar decisiones técnicas y transformar procesos manuales en flujos digitales más eficientes.</p>
          <div className="language-row"><span>ESPAÑOL</span><strong>Nativo</strong><span>INGLÉS</span><strong>B1 · lectura y conversación</strong></div>
        </div>
      </div>
    </section>
  )
}
