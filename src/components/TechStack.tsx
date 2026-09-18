import type { IconType } from 'react-icons'
import {
  SiAngular, SiBootstrap, SiCss, SiGithub, SiHtml5, SiJavascript, SiLinux, SiMysql,
  SiNestjs, SiNetlify, SiNodedotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb'
import { technologyGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const icons: Record<string, IconType> = {
  HTML5: SiHtml5, CSS3: SiCss, JavaScript: SiJavascript, TypeScript: SiTypescript, Java: FaJava,
  Python: SiPython, PHP: SiPhp, React: SiReact, Angular: SiAngular, 'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap, 'Node.js': SiNodedotjs, NestJS: SiNestjs, TypeORM: TbDatabase,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, 'SQL Server': TbBrandCSharp, GitHub: SiGithub,
  Netlify: SiNetlify, Linux: SiLinux,
}

export function TechStack() {
  return (
    <section id="tecnologias" className="section stack-section">
      <SectionHeading eyebrow="03 · STACK" title="Tecnologías que convierto en soluciones." description="Un stack versátil para crear interfaces, APIs, sistemas empresariales y flujos de datos." />
      <div className="stack-groups">
        {technologyGroups.map((group) => (
          <article className="stack-group reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tech-list">
              {group.items.map((item) => {
                const Icon = icons[item]
                return <div className="tech-item" key={item}>{Icon ? <Icon aria-hidden="true" /> : <span className="tech-dot" />}<span>{item}</span></div>
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
