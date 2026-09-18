import { SectionTitle } from "./SectionTitle";
const domains = [
  [
    "Frontend",
    "React · Angular · HTML · CSS",
    "Interfaces claras, adaptables y enfocadas en la experiencia de uso.",
  ],
  [
    "Backend",
    "Node.js · NestJS · Java · PHP",
    "Servicios, reglas de negocio y automatización de procesos internos.",
  ],
  [
    "Datos",
    "PostgreSQL · MySQL · SQL Server",
    "Modelado, consulta y trazabilidad de información operativa.",
  ],
  [
    "Entrega",
    "GitHub · Netlify · Scrum",
    "Colaboración, control de versiones y entregas iterativas.",
  ],
  [
    "IA aplicada",
    "ChatGPT · Claude · Gemini · Cursor",
    "Análisis, documentación, implementación y revisión asistida.",
  ],
];
export function DomainOriginal() {
  return (
    <section id="dominio" className="band-section" data-sec="03">
      <div className="section-inner">
        <SectionTitle
          eyebrow="HABILIDADES"
          title="Dominio técnico"
          note="SIN PORCENTAJES INVENTADOS · CAPACIDADES RESPALDADAS POR EXPERIENCIA"
          invert
        />
        <div className="domain-grid" data-reveal>
          <div className="domain-list">
            {domains.map(([title, tools], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{tools}</p>
              </div>
            ))}
          </div>
          <div className="radar-card">
            <div className="radar">
              <i />
              <i />
              <i />
              <i />
              <i />
              <span />
            </div>
            <h3>Perfil Full Stack</h3>
            <p>
              {domains[0][2]} {domains[1][2]}
            </p>
          </div>
        </div>
        <p className="figure-note band-note">FIG. 3.1 — ÁREAS DE TRABAJO</p>
      </div>
    </section>
  );
}
