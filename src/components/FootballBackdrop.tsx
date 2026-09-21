import { useEffect, useRef } from "react";

/** Segmented real footage; the light follows the full play's reveal. */
export function FootballBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const scene = sceneRef.current;
    if (!video || !scene) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      if (visible && !reduced.matches && !document.hidden) {
        video.playbackRate = 0.75;
        void video.play().catch(() => {
          scene.style.setProperty("--scene-opacity", "0");
        });
      } else {
        video.pause();
        if (reduced.matches) scene.style.setProperty("--scene-opacity", "0");
      }
    };
    const reveal = () => {
      if (reduced.matches || !Number.isFinite(video.duration)) return;
      const fade = Math.min(
        1,
        video.currentTime / 0.65,
        (video.duration - video.currentTime) / 0.85,
      );
      scene.style.setProperty("--scene-opacity", String(Math.max(0, fade)));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(scene);
    reduced.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    video.addEventListener("timeupdate", reveal);
    video.addEventListener("loadeddata", syncPlayback);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.removeEventListener("timeupdate", reveal);
      video.removeEventListener("loadeddata", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <div className="football-backdrop football-footage" aria-hidden="true">
      <div className="football-film-scene" ref={sceneRef}>
        <div className="football-film-light" />
        <video
          ref={videoRef}
          className="football-film"
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          tabIndex={-1}
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/football-shadow-long.webm`}
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
}
