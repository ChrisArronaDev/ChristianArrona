import { useEffect, useState } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("00");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const scrollable = Math.max(
        1,
        document.documentElement.scrollHeight - viewportHeight,
      );
      setProgress(
        Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)),
      );

      let current = "00";
      document
        .querySelectorAll<HTMLElement>("[data-sec]")
        .forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.height > 0 && rect.top < viewportHeight * 0.42) {
            current = section.dataset.sec ?? current;
          }
        });
      setActiveSection(current);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return { activeSection, progress };
}
