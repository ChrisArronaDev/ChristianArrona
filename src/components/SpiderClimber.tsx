import { useEffect, useRef } from "react";

/** Decorative climbing loop, suspended when the laboratory is offscreen. */
export function SpiderClimber() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    let visible = false;
    const sync = () => {
      node.dataset.active = String(visible && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(node);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div
      className="spider-climb"
      ref={root}
      data-active="false"
      aria-hidden="true"
    >
      <div className="spider-wall" />
      <div className="spider-traveller">
        <span className="spider-thread" />
        <svg className="spider-figure" viewBox="0 0 180 240" focusable="false">
          <defs>
            <linearGradient id="spider-red" x2="1" y2=".7">
              <stop stopColor="#ff5b56" />
              <stop offset=".45" stopColor="#d42536" />
              <stop offset="1" stopColor="#780f26" />
            </linearGradient>
            <linearGradient id="spider-blue" x2="1" y2=".5">
              <stop stopColor="#3375bf" />
              <stop offset="1" stopColor="#102c5c" />
            </linearGradient>
          </defs>
          <g className="spider-body">
            <g className="spider-limb spider-left-leg">
              <path
                className="spider-blue"
                d="M76 131Q60 143 49 169Q44 179 50 188L62 207 74 198 64 177 88 151Z"
              />
              <path
                className="spider-red"
                d="m60 193 13-4 6 13-2 16-8 9q-7 3-10-3l4-18Z"
              />
              <path
                className="spider-web"
                d="m63 201 12 2m-13 7 14 1m-14 8 9 2"
              />
            </g>
            <g className="spider-limb spider-right-leg">
              <path
                className="spider-blue"
                d="M99 130q22 9 33 32 6 11-1 19l-16 19-11-11 12-19-27-20Z"
              />
              <path
                className="spider-red"
                d="m109 187 13 8-11 17-4 16q-6 7-13 0l2-16Z"
              />
              <path
                className="spider-web"
                d="m106 196 11 6m-16 2 10 8m-13 3 10 4"
              />
            </g>
            <g className="spider-limb spider-left-arm">
              <path
                className="spider-blue"
                d="M72 76Q59 69 49 57L33 32 23 38l17 37q7 10 24 21Z"
              />
              <path
                className="spider-red"
                d="m41 46-13 8-11-24-9-7q-3-5 1-6l10 6-3-17q1-5 4-1l5 15 1-17q3-4 5 0l1 18 7-11q4-2 4 3L33 31Z"
              />
              <path
                className="spider-web"
                d="m24 31 10-5m-7 13 10-5m-5 11 8-5M22 24l12 23"
              />
            </g>
            <g className="spider-limb spider-right-arm">
              <path
                className="spider-blue"
                d="m107 77 24-25 13-26 12 6-12 36q-8 13-26 27Z"
              />
              <path
                className="spider-red"
                d="m134 44 15 7 11-24 11-7q3-5-2-6l-11 7 3-16q-2-5-5-1l-5 16-2-18q-3-3-5 1l1 18-8-10q-5-1-4 3l10 16Z"
              />
              <path
                className="spider-web"
                d="m144 27 12 5m-16 3 13 5m-16 2 13 6m-1-23-8 21"
              />
            </g>
            <path
              className="spider-blue"
              d="M68 77q22-11 42 0l6 27-12 43q-18 13-35-1l-7-39Z"
            />
            <path
              className="spider-red"
              d="M69 74q20-13 39 0l-5 39-8 12 8 17q-18 8-32-1l11-16-11-16Z"
            />
            <path
              className="spider-web"
              d="m73 84 31 0m-30 11 28 0m-27 10 26 0m-22 9 17 0M85 77l3 47m7-47-4 47m-18 11 27 0"
            />
            <g className="spider-emblem">
              <ellipse cx="89" cy="98" rx="4" ry="7" />
              <circle cx="89" cy="89" r="3" />
              <path d="m86 94-9-5-3-8m18 13 9-5 3-8m-18 17-11-2-5-6m22 8 11-2 5-6m-22 11-10 6-1 9m17-15 10 6 1 9m-16-12-6 11 1 10m9-21 6 11-1 10" />
            </g>
            <path className="spider-red" d="M79 68V57h20v12Z" />
            <g className="spider-head">
              <path
                className="spider-red"
                d="M69 40q0-24 20-25 23 1 23 25l-5 20q-8 13-18 14-13-4-18-16Z"
              />
              <path
                className="spider-web"
                d="M89 16v56M74 22l15 19 18-19M69 38l20 3 22-3M72 57l17-16 17 19M74 26q16 9 32 0M70 35q18 12 40 0M71 48q18 14 38 0M76 62q13 7 27 0"
              />
              <path className="spider-eye" d="m73 35 14 11q-6 10-11 3Z" />
              <path className="spider-eye" d="m106 35-14 11q6 10 11 3Z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
