import { SiClaude, SiCursor } from 'react-icons/si'
import { RiGeminiFill, RiOpenaiFill } from 'react-icons/ri'
import { aiTools } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const aiIcons = { ChatGPT: RiOpenaiFill, Claude: SiClaude, Gemini: RiGeminiFill, Cursor: SiCursor }

export function AITools() {
  return (
    <section id="ia" className="section ai-section">
      <SectionHeading eyebrow="04 · IA APLICADA" title="La IA amplifica el criterio; no lo reemplaza." description="Uso distintos asistentes según el problema, manteniendo revisión humana, seguridad y contexto técnico en cada entrega." />
      <div className="ai-grid">
        {aiTools.map((tool, index) => {
          const Icon = aiIcons[tool.name as keyof typeof aiIcons]
          return (
            <article className="ai-card reveal" key={tool.name}>
              <div className="ai-card-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{tool.name}</h3>
              <p>{tool.use}</p>
            </article>
          )
        })}
      </div>
      <div className="ai-flow reveal" aria-label="Flujo de trabajo con inteligencia artificial">
        <span>CONTEXTO</span><i>→</i><span>ANÁLISIS</span><i>→</i><span>IMPLEMENTACIÓN</span><i>→</i><span>REVISIÓN HUMANA</span>
      </div>
    </section>
  )
}
