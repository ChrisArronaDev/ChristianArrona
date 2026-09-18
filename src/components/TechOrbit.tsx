import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { orbit } from "../data/content";
import { TechnologyIcon } from "./TechnologyIcon";

type MotionBall = {
  element: HTMLButtonElement;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function TechOrbit() {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [loose, setLoose] = useState(false);
  const nodeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const ballRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const detail = selected === null ? null : orbit[selected];

  useLayoutEffect(() => {
    if (!loose) return;

    const balls: MotionBall[] = orbit.flatMap((_, index) => {
      const element = ballRefs.current[index];
      if (!element) return [];
      const source = nodeRefs.current[index]?.getBoundingClientRect();
      const radius = (element.offsetWidth || 66) / 2;
      const x = source ? source.left + source.width / 2 : innerWidth / 2;
      const y = source ? source.top + source.height / 2 : innerHeight / 2;
      const angle = (index / orbit.length) * Math.PI * 2 - Math.PI / 2;
      const speed = 185 + (index % 4) * 34;
      return [
        {
          element,
          radius,
          x,
          y,
          vx: Math.cos(angle + 0.32) * speed,
          vy: Math.sin(angle + 0.32) * speed,
        },
      ];
    });

    let frame = 0;
    let previous = performance.now();

    const draw = (now: number) => {
      const delta = Math.min(0.034, Math.max(0, (now - previous) / 1000));
      previous = now;
      const width = window.innerWidth;
      const height = window.innerHeight;

      balls.forEach((ball) => {
        ball.x += ball.vx * delta;
        ball.y += ball.vy * delta;
        if (ball.x < ball.radius) {
          ball.x = ball.radius;
          ball.vx = Math.abs(ball.vx) * 0.98;
        }
        if (ball.x > width - ball.radius) {
          ball.x = width - ball.radius;
          ball.vx = -Math.abs(ball.vx) * 0.98;
        }
        if (ball.y < ball.radius) {
          ball.y = ball.radius;
          ball.vy = Math.abs(ball.vy) * 0.98;
        }
        if (ball.y > height - ball.radius) {
          ball.y = height - ball.radius;
          ball.vy = -Math.abs(ball.vy) * 0.98;
        }
      });

      for (let index = 0; index < balls.length; index += 1) {
        for (let next = index + 1; next < balls.length; next += 1) {
          const first = balls[index];
          const second = balls[next];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const distance = Math.hypot(dx, dy) || 0.001;
          const limit = first.radius + second.radius;
          if (distance >= limit) continue;

          const nx = dx / distance;
          const ny = dy / distance;
          const push = (limit - distance) / 2;
          first.x -= nx * push;
          first.y -= ny * push;
          second.x += nx * push;
          second.y += ny * push;
          const impact =
            (first.vx - second.vx) * nx + (first.vy - second.vy) * ny;
          if (impact > 0) {
            first.vx -= impact * nx;
            first.vy -= impact * ny;
            second.vx += impact * nx;
            second.vy += impact * ny;
          }
        }
      }

      balls.forEach((ball) => {
        ball.element.style.transform = `translate3d(${(ball.x - ball.radius).toFixed(1)}px, ${(ball.y - ball.radius).toFixed(1)}px, 0)`;
      });
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [loose]);

  const release = (index: number) => {
    setSelected(index);
    setExpanded(true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoose(true);
    }
  };

  const regroup = () => {
    setLoose(false);
    setSelected(null);
  };

  return (
    <>
      <div
        className={`orbit-panel${expanded ? " expanded" : " collapsed"}${loose ? " loose" : ""}`}
        data-reveal
      >
        <div className="orbit-label">
          <span>STACK · 09 NODOS</span>
          <b>
            {loose ? "EN MOVIMIENTO" : expanded ? "DESPLEGADO" : "AGRUPADO"}
          </b>
        </div>
        <div className="orbit-map">
          <div className="orbit-ring outer" />
          <div className="orbit-ring inner" />
          <button
            className="orbit-core"
            onClick={() => {
              if (loose) {
                regroup();
                return;
              }
              setExpanded((value) => !value);
              setSelected(null);
            }}
            aria-label="Alternar mapa de tecnologías"
          >
            <span>FULL</span>
            <i />
            <span>STACK</span>
          </button>
          {orbit.map((node, index) => {
            const angle = (index / orbit.length) * Math.PI * 2 - Math.PI / 2;
            const style = {
              "--x": `${50 + Math.cos(angle) * 39}%`,
              "--y": `${50 + Math.sin(angle) * 39}%`,
              "--delay": `${index * -0.38}s`,
            } as CSSProperties;
            return (
              <button
                className={`orbit-node${selected === index ? " selected" : ""}`}
                style={style}
                key={node.name}
                ref={(element) => {
                  nodeRefs.current[index] = element;
                }}
                onClick={() => release(index)}
                onMouseEnter={() => !loose && setSelected(index)}
                onMouseLeave={() => !loose && setSelected(null)}
                aria-label={`${node.name}: activar pelotas en movimiento`}
              >
                <span className="orbit-node-icon">
                  <TechnologyIcon name={node.name} />
                </span>
                <span>{node.name}</span>
              </button>
            );
          })}
        </div>
        <div className="orbit-caption" aria-live="polite">
          <span>
            {detail ? "TECNOLOGÍA" : "PERFIL PROFESIONAL"}{" "}
            <b>{detail ? "EN USO" : "FULL STACK"}</b>
          </span>
          <h3>{detail?.name ?? "Christian Arrona Medina"}</h3>
          <p>
            {detail?.detail ??
              "Selecciona una tecnología para liberar las pelotas. Toca cualquiera para reagruparlas."}
          </p>
        </div>
      </div>

      {loose &&
        createPortal(
          <div
            className="loose-ball-layer"
            aria-label="Tecnologías en movimiento"
          >
            {orbit.map((node, index) => (
              <button
                className="loose-tech-ball"
                key={node.name}
                ref={(element) => {
                  ballRefs.current[index] = element;
                }}
                onClick={regroup}
                aria-label={`${node.name}: reagrupar tecnologías`}
              >
                <TechnologyIcon name={node.name} />
                <span>{node.name}</span>
              </button>
            ))}
            <div className="loose-ball-hint">
              <i /> TOCA UNA PELOTA PARA REAGRUPAR
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
