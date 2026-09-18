import { TechOrbit } from "./TechOrbit";

export function HeroOriginal() {
  return (
    <section id="top" className="original-hero" data-sec="00">
      <div className="shape shape-square" data-parallax="slow" />
      <div className="shape shape-dot" data-parallax="fast" />
      <div className="shape shape-ring" data-parallax="medium" />
      <div className="hero-layout">
        <div className="hero-statement" data-reveal>
          <div className="location-line">
            <b>PORTAFOLIO</b>
            <i />
            <span>LEÓN, GUANAJUATO — MX</span>
          </div>
          <h1>
            <span>Escribo el código dos veces:</span>
            <em>una para que funcione,</em>
            <em>otra para que nadie</em>
            <span>tenga que volver a tocarlo.</span>
          </h1>
          <div className="hero-summary">
            <p>
              Desarrollador Full Stack con experiencia en proyectos web, móviles
              y de escritorio. Construyo soluciones de punta a punta e integro
              IA para acelerar el desarrollo, automatizar procesos y mejorar la
              calidad del código.
            </p>
            <div>
              <b>
                <i /> ABIERTO A ENTREVISTAS
              </b>
              <span>ING. EN DESARROLLO Y GESTIÓN DE SOFTWARE — UTL</span>
            </div>
          </div>
        </div>

        <TechOrbit />
      </div>

      <div className="spec-strip">
        <div>
          <small>ROL</small>
          <b>Full Stack</b>
        </div>
        <div>
          <small>EMPRESA</small>
          <b>GSF — financiero</b>
        </div>
        <div>
          <small>DESDE</small>
          <b>DIC 2025</b>
        </div>
        <div>
          <small>IDIOMAS</small>
          <b>ES nativo · EN B1</b>
        </div>
        <div>
          <small>HOJA DE ESPEC.</small>
          <b>v2026.09</b>
        </div>
      </div>
    </section>
  );
}
