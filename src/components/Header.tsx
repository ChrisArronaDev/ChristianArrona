import { useState } from "react";

const links = [
  { number: "01", label: "STACK", href: "#stack" },
  { number: "02", label: "PROYECTOS", href: "#proyectos" },
  { number: "03", label: "DOMINIO", href: "#dominio" },
  { number: "04", label: "IA", href: "#ia" },
  { number: "05", label: "LAB", href: "#laboratorio" },
  { number: "07", label: "TRAYECTORIA", href: "#trayectoria" },
  { number: "08", label: "BUSCO", href: "#busco" },
];

type HeaderProps = {
  dark: boolean;
  activeSection: string;
  progress: number;
  onTheme: () => void;
};

export function Header({
  dark,
  activeSection,
  progress,
  onTheme,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <a className="wordmark" href="#top">
        <span className="mark">C.</span> ARRONA MEDINA
      </a>
      <nav className={open ? "topnav open" : "topnav"} aria-label="Secciones">
        {links.map((link) => (
          <a
            className={activeSection === link.number ? "active" : ""}
            href={link.href}
            key={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="top-actions">
        <button
          className="sections-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          ☰ SECCIONES
        </button>
        <button className="theme-toggle" onClick={onTheme}>
          <i />
          {dark ? "MODO OSCURO" : "MODO CLARO"}
        </button>
        <a className="contact-button" href="#contacto">
          CONTACTO
        </a>
      </div>
    </header>
  );
}
