import { stack } from "../data/content";
import { FootballBackdrop } from "./FootballBackdrop";
import { SectionTitle } from "./SectionTitle";
import { TechnologyIcon } from "./TechnologyIcon";
export function StackOriginal() {
  const marquee = [...stack, ...stack];
  return (
    <section
      id="stack"
      className="original-section stack-original"
      data-sec="01"
    >
      <FootballBackdrop />
      <SectionTitle
        eyebrow="STACK"
        title="Stack en rotación"
        note="USO PROFESIONAL / APRENDIZAJE CONTINUO"
      />
      <div className="marquee">
        <div>
          {marquee.map((item, index) => {
            return (
              <span key={`${item}-${index}`}>
                <TechnologyIcon name={item} />
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="bubble-map" data-reveal>
        {stack.slice(0, 14).map((item, index) => {
          return (
            <div className={`bubble b${index % 7}`} key={item}>
              <TechnologyIcon name={item} />
              <b>{item}</b>
              <small>{index < 6 ? "USO FRECUENTE" : "EN ROTACIÓN"}</small>
            </div>
          );
        })}
      </div>
      <p className="figure-note">
        FIG. 1.1 — MAPA DE TECNOLOGÍAS · LOGOS Y HERRAMIENTAS DEL CV
      </p>
    </section>
  );
}
