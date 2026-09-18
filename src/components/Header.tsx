import { useState } from 'react'
const links = [['STACK', '#stack'], ['PROYECTOS', '#proyectos'], ['DOMINIO', '#dominio'], ['IA', '#ia'], ['LAB', '#laboratorio'], ['TRAYECTORIA', '#trayectoria'], ['BUSCO', '#busco']]
export function Header({ dark, onTheme }: { dark: boolean; onTheme: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="topbar"><a className="wordmark" href="#top"><span className="mark">C.</span> ARRONA MEDINA</a><nav className={open ? 'topnav open' : 'topnav'} aria-label="Secciones">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="top-actions"><button className="sections-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>☰ SECCIONES</button><button className="theme-toggle" onClick={onTheme}><i />{dark ? 'MODO OSCURO' : 'MODO CLARO'}</button><a className="contact-button" href="#contacto">CONTACTO</a></div></header>
}
