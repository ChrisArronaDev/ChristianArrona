import { useState, type CSSProperties } from "react";
import { orbit } from "../data/content";

export function HeroOriginal() {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const detail = selected === null ? null : orbit[selected];

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

        <div
          className={`orbit-panel${expanded ? " expanded" : " collapsed"}`}
          data-reveal
        >
          <div className="orbit-label">
            <span>STACK · 09 NODOS</span>
            <b>{expanded ? "DESPLEGADO" : "AGRUPADO"}</b>
          </div>
          <div className="orbit-map">
            <div className="orbit-ring outer" />
            <div className="orbit-ring inner" />
            <button
              className="orbit-core"
              onClick={() => {
                setExpanded((value) => !value);
                setSelected(null);
              }}
              aria-label="Alternar mapa de tecnologías"
            >
              <span>FULL</span>
              <i />
              <span>STACK</span>
            </button>
            {orbit.map((node, index) => {
              const angle = (index / orbit.length) * Math.PI * 2 - Math.PI / 2;
              const style = {
                "--x": `${50 + Math.cos(angle) * 39}%`,
                "--y": `${50 + Math.sin(angle) * 39}%`,
              } as CSSProperties;
              return (
                <button
                  className={`orbit-node${selected === index ? " selected" : ""}`}
                  style={style}
                  key={node.name}
                  onClick={() => {
                    setExpanded(true);
                    setSelected(index);
                  }}
                  onMouseEnter={() => setSelected(index)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <b>{node.abbr}</b>
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>
          <div className="orbit-caption" aria-live="polite">
            <span>
              {detail ? "TECNOLOGÍA" : "PERFIL PROFESIONAL"}{" "}
              <b>{detail ? "EN USO" : "FULL STACK"}</b>
            </span>
            <h3>{detail?.name ?? "Christian Arrona Medina"}</h3>
            <p>
              {detail?.detail ??
                "Frontend, backend, datos e inteligencia artificial aplicada al desarrollo."}
            </p>
          </div>
        </div>
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
