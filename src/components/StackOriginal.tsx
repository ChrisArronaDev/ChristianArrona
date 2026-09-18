import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiBootstrap,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { stack } from "../data/content";
import { SectionTitle } from "./SectionTitle";
const iconMap: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  Python: SiPython,
  PHP: SiPhp,
  Angular: SiAngular,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Bootstrap: SiBootstrap,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  TypeORM: TbDatabase,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  GitHub: SiGithub,
  Netlify: SiNetlify,
};
export function StackOriginal() {
  const marquee = [...stack, ...stack];
  return (
    <section
      id="stack"
      className="original-section stack-original"
      data-sec="01"
    >
      <SectionTitle
        eyebrow="STACK"
        title="Stack en rotación"
        note="USO PROFESIONAL / APRENDIZAJE CONTINUO"
      />
      <div className="marquee">
        <div>
          {marquee.map((item, index) => {
            const Icon = iconMap[item];
            return (
              <span key={`${item}-${index}`}>
                {Icon && <Icon />}
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="bubble-map" data-reveal>
        {stack.slice(0, 14).map((item, index) => {
          const Icon = iconMap[item];
          return (
            <div className={`bubble b${index % 7}`} key={item}>
              {Icon && <Icon />}
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
