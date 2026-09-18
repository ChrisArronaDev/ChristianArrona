import { courses, education, strengths } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="formacion" className="section education-section">
      <SectionHeading eyebrow="05 · FORMACIÓN" title="Base académica y aprendizaje continuo." />
      <div className="education-grid">
        <div className="education-column reveal">
          <h3>Educación</h3>
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <span>{item.period}</span><h4>{item.degree}</h4><p>{item.institution}</p>
            </article>
          ))}
        </div>
        <div className="education-column reveal">
          <h3>Cursos</h3>
          {courses.map((course) => (
            <article className="course-item" key={course.name}>
              <span>{course.date}</span><h4>{course.name}</h4><p>{course.provider}</p>
            </article>
          ))}
        </div>
        <div className="education-column reveal">
          <h3>Fortalezas</h3>
          <ul className="strength-list">{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
