import { cases } from "../data/content";
import { SectionTitle } from "./SectionTitle";
export function ProjectsOriginal() {
  return (
    <section
      id="proyectos"
      className="original-section projects-original"
      data-sec="02"
    >
      <SectionTitle
        eyebrow="PROYECTOS"
        title="Impacto en producto"
        note="03 EXPEDIENTES · INFORMACIÓN VERIFICADA DEL CV"
      />
      <div className="case-list">
        {cases.map((item, index) => (
          <article className="case-file" data-reveal key={item.title}>
            <div className="case-number">0{index + 1}</div>
            <div className="case-main">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="case-detail">
              <small>
                {item.type}
                <br />
                {item.code}
              </small>
              <b>{item.client}</b>
              <strong>{item.status}</strong>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
