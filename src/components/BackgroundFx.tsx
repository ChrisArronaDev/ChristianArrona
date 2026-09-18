import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Ripple = Point & { startedAt: number };

export function BackgroundFx({ dark }: { dark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    )
      return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!canvas || !context || !glow || !ring) return;

    const mouse = { x: -999, y: -999 };
    const soft = { x: -999, y: -999 };
    const cursor = { x: -999, y: -999 };
    const trail = trailRef.current.map((element) => ({
      element,
      x: -999,
      y: -999,
    }));
    let ripples: Ripple[] = [];
    let scroll = window.scrollY;
    let frame = 0;

    const palette = () =>
      dark
        ? { dot: "rgba(146,168,155,.24)", hot: "255,122,47", accent: "#ff7a2f" }
        : { dot: "rgba(61,92,79,.18)", hot: "232,89,12", accent: "#e8590c" };

    const resize = () => {
      const ratio = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (soft.x < -900) {
        soft.x = mouse.x;
        soft.y = mouse.y;
        cursor.x = mouse.x;
        cursor.y = mouse.y;
        trail.forEach((point) => {
          point.x = mouse.x;
          point.y = mouse.y;
        });
      }
      const interactive = (event.target as Element | null)?.closest(
        "a,button,article,.bubble,.orbit-node",
      );
      document.documentElement.dataset.cursor = interactive
        ? "interactive"
        : "default";
      glow.classList.add("visible");
      ring.classList.add("visible");
    };

    const onLeave = () => {
      glow.classList.remove("visible");
      ring.classList.remove("visible");
      mouse.x = -999;
      mouse.y = -999;
    };

    const onClick = (event: MouseEvent) => {
      ripples.push({
        x: event.clientX,
        y: event.clientY,
        startedAt: performance.now(),
      });
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    const draw = (now: number) => {
      frame = window.requestAnimationFrame(draw);
      const colors = palette();
      soft.x += (mouse.x - soft.x) * 0.06;
      soft.y += (mouse.y - soft.y) * 0.06;
      cursor.x += (mouse.x - cursor.x) * 0.32;
      cursor.y += (mouse.y - cursor.y) * 0.32;
      glow.style.background = `radial-gradient(circle, rgba(${colors.hot},.14), rgba(${colors.hot},0) 68%)`;
      glow.style.transform = `translate3d(${soft.x - 310}px,${soft.y - 310}px,0)`;
      ring.style.transform = `translate3d(${cursor.x}px,${cursor.y}px,0) translate(-50%,-50%)`;

      let previousX = mouse.x;
      let previousY = mouse.y;
      trail.forEach((point, index) => {
        point.x += (previousX - point.x) * 0.24;
        point.y += (previousY - point.y) * 0.24;
        if (point.element) {
          point.element.style.background = colors.accent;
          point.element.style.opacity = String(0.5 - index * 0.09);
          point.element.style.transform = `translate3d(${point.x}px,${point.y}px,0) translate(-50%,-50%) rotate(45deg)`;
        }
        previousX = point.x;
        previousY = point.y;
      });

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const spacing = 32;
      const radius = 210;
      const phase = now * 0.0007 + scroll * 0.004;
      for (let x = spacing / 2; x < window.innerWidth; x += spacing) {
        for (let y = spacing / 2; y < window.innerHeight; y += spacing) {
          const distance = Math.hypot(x - mouse.x, y - mouse.y);
          const proximity = distance < radius ? 1 - distance / radius : 0;
          const size = Math.max(
            0.25,
            1 +
              Math.sin(x * 0.014 + y * 0.01 + phase) * 0.55 +
              proximity * proximity * 3,
          );
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fillStyle =
            proximity > 0
              ? `rgba(${colors.hot},${0.18 + proximity * 0.72})`
              : colors.dot;
          context.fill();
        }
      }

      ripples = ripples.filter((ripple) => {
        // A click can land between two animation frames, making the first
        // timestamp fractionally earlier than `performance.now()`.
        const age = Math.max(0, (now - ripple.startedAt) / 900);
        if (age >= 1) return false;
        context.beginPath();
        context.arc(ripple.x, ripple.y, age * 200, 0, Math.PI * 2);
        context.strokeStyle = `rgba(${colors.hot},${0.5 * (1 - age)})`;
        context.lineWidth = 1.5;
        context.stroke();
        return true;
      });
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dark]);

  return (
    <div className="background-fx" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="cursor-glow" ref={glowRef} />
      <div className="cursor-ring" ref={ringRef} />
      {Array.from({ length: 5 }, (_, index) => (
        <span
          className="cursor-trail"
          ref={(node) => {
            trailRef.current[index] = node;
          }}
          key={index}
        />
      ))}
    </div>
  );
}
