const sections = [
  { number: "00", id: "top", label: "INICIO" },
  { number: "01", id: "stack", label: "STACK" },
  { number: "02", id: "proyectos", label: "PROYECTOS" },
  { number: "03", id: "dominio", label: "DOMINIO" },
  { number: "04", id: "ia", label: "IA" },
  { number: "05", id: "laboratorio", label: "LABORATORIO" },
  { number: "06", id: "actividad", label: "ACTIVIDAD" },
  { number: "07", id: "trayectoria", label: "TRAYECTORIA" },
  { number: "08", id: "busco", label: "BUSCO" },
  { number: "09", id: "contacto", label: "CONTACTO" },
];

export function SideRail({ activeSection }: { activeSection: string }) {
  return (
    <aside className="side-rail" aria-label="Navegación rápida">
      <div className="rail-counter">
        <strong>{activeSection}</strong>
        <span>/ 09</span>
      </div>
      {sections.map((section) => (
        <a
          className={activeSection === section.number ? "active" : ""}
          href={`#${section.id}`}
          key={section.id}
          aria-label={section.label}
        >
          <span>{section.label}</span>
          <i />
        </a>
      ))}
    </aside>
  );
}
