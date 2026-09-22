import { useState } from "react";
import { cases } from "../data/content";
import { SectionTitle } from "./SectionTitle";
import { ProjectIllustration } from "./ProjectIllustration";

function ProjectCard({
  item,
  index,
}: {
  item: (typeof cases)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const expanded = open || pinned;
  return (
    <article
      className={`project-card ${expanded ? "is-open" : ""}`}
      data-reveal
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={() => setOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          setPinned(false);
        }
      }}
    >
      <h3 className="project-heading">
        <button
          type="button"
          className="project-trigger"
          aria-expanded={expanded}
          aria-controls={`project-panel-${index}`}
          id={`project-trigger-${index}`}
          onClick={() => {
            setPinned(!pinned);
            setOpen(false);
          }}
        >
          <span className="case-number">0{index + 1}</span>
          <span className="project-title">
            <small>
              {item.type} / {item.code}
            </small>
            <span>{item.title}</span>
          </span>
          <span className="project-indicator" aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        className="project-panel"
        id={`project-panel-${index}`}
        role="region"
        aria-labelledby={`project-trigger-${index}`}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className="project-panel-inner">
          <div className="project-preview">
            <figure className="project-visual">
              <ProjectIllustration index={index} />
              <figcaption>
                ILUSTRACIÓN CONCEPTUAL · NO ES UNA CAPTURA REAL
              </figcaption>
            </figure>
            <div className="project-info">
              <strong className="project-status">{item.status}</strong>
              <p className="project-client">{item.client}</p>
              <p className="project-summary">{item.summary}</p>
              <h4>Lo esencial</h4>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
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
        note="PASA EL CURSOR PARA EXPLORAR · TOCA PARA FIJAR"
      />
      <div className="case-list">
        {cases.map((item, index) => (
          <ProjectCard item={item} index={index} key={item.code} />
        ))}
      </div>
    </section>
  );
}
