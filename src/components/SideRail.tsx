const sections = ['top', 'stack', 'proyectos', 'dominio', 'ia', 'laboratorio', 'actividad', 'trayectoria', 'busco', 'contacto']
export function SideRail() { return <aside className="side-rail" aria-label="Navegación rápida">{sections.map((id, index) => <a href={`#${id}`} key={id} aria-label={id}><span>{String(index).padStart(2, '0')}</span><i /></a>)}</aside> }
