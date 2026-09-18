import { SectionTitle } from "./SectionTitle";
export function LabOriginal() {
  return (
    <section
      id="laboratorio"
      className="original-section lab-original"
      data-sec="05"
    >
      <SectionTitle
        eyebrow="PROCESO PERSONAL"
        title="Laboratorio"
        note="IA, DOCUMENTACIÓN Y AUTOMATIZACIÓN APLICADAS AL DESARROLLO"
      />
      <div className="lab-grid" data-reveal>
        <div className="terminal">
          <header>
            <i />
            <i />
            <i />
            <span>~/flujo-de-trabajo</span>
          </header>
          <pre>
            <b>$</b> analizar requerimientos{`\n`}
            <em>→ objetivo, restricciones y riesgos</em>
            {`\n\n`}
            <b>$</b> diseñar solución{`\n`}
            <em>→ frontend · backend · datos</em>
            {`\n\n`}
            <b>$</b> implementar con IA{`\n`}
            <em>→ ChatGPT · Claude · Gemini · Cursor</em>
            {`\n\n`}
            <b>$</b> revisar y documentar{`\n`}
            <em>→ criterio humano · pruebas · contexto</em>
            {`\n\n`}
            <b>$</b> _
          </pre>
        </div>
        <div className="workflow">
          <div>
            <span>01</span>
            <b>CONTEXTO</b>
            <p>Requerimientos y conocimiento del negocio.</p>
          </div>
          <i>→</i>
          <div>
            <span>02</span>
            <b>ASISTENTES</b>
            <p>Análisis y aceleración con IA.</p>
          </div>
          <i>→</i>
          <div>
            <span>03</span>
            <b>CÓDIGO</b>
            <p>Implementación full stack.</p>
          </div>
          <i>→</i>
          <div>
            <span>04</span>
            <b>REVISIÓN</b>
            <p>Validación, seguridad y documentación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
