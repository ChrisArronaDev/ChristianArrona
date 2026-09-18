import { SectionTitle } from "./SectionTitle";
const cards = [
  [
    "ROL",
    "Full Stack",
    "Con participación real tanto en frontend como en backend.",
  ],
  [
    "EQUIPO",
    "Colaborativo",
    "Comunicación clara, revisión de código y conocimiento compartido.",
  ],
  ["MODALIDAD", "Híbrido o remoto", "León, Guanajuato · zona horaria GMT-6."],
  [
    "DISPONIBILIDAD",
    "Abierto a entrevistas",
    "Interesado en retos donde pueda aprender y generar impacto.",
  ],
];
export function SeekingOriginal() {
  return (
    <section
      id="busco"
      className="original-section seeking-original"
      data-sec="08"
    >
      <SectionTitle
        eyebrow="SIGUIENTE PASO"
        title="Lo que busco"
        note="OPORTUNIDADES PARA CRECER, COLABORAR Y CONSTRUIR PRODUCTO"
      />
      <div className="seeking-grid" data-reveal>
        {cards.map(([tag, title, body]) => (
          <article key={tag}>
            <small>{tag}</small>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="bring" data-reveal>
        <div>
          LO QUE TRAIGO
          <br />
          TRES COSAS CONCRETAS
        </div>
        <ol>
          <li>
            <b>01</b>
            <span>
              Visión completa del producto: interfaz, backend y datos.
            </span>
          </li>
          <li>
            <b>02</b>
            <span>
              Documentación clara y disposición para colaborar con otras áreas.
            </span>
          </li>
          <li>
            <b>03</b>
            <span>
              IA aplicada con revisión humana para acelerar sin perder calidad.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
