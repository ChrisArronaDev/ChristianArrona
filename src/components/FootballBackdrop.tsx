/**
 * An articulated light silhouette: each limb has its own running cycle.
 * The aura, player and ball travel together; CSS also respects reduced motion.
 */
export function FootballBackdrop() {
  return (
    <div className="football-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1100 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="football-aura">
            <stop stopColor="#166ce0" stopOpacity=".7" />
            <stop offset=".45" stopColor="#76255d" stopOpacity=".35" />
            <stop offset="1" stopColor="#a50044" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="football-rim" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#449dff" />
            <stop offset=".5" stopColor="#2467bf" />
            <stop offset="1" stopColor="#f04485" />
          </linearGradient>
          <filter
            id="football-light"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="3" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="football-light-run">
          <g className="football-light-reveal">
            <ellipse
              className="football-running-aura"
              cx="0"
              cy="-110"
              rx="270"
              ry="220"
              fill="url(#football-aura)"
            />
            <path
              className="football-light-trail"
              d="M-265 30 Q-160-20-40 15 M-225 48Q-100 5 0 32"
            />
            <ellipse
              className="football-contact-shadow"
              cy="52"
              rx="80"
              ry="8"
            />
            <g className="football-athlete" filter="url(#football-light)">
              <g className="football-body">
                <g className="football-arm football-arm-back">
                  <path d="M7-148Q22-157 29-145L42-107 73-90Q80-80 72-77L33-95Q27-99 25-106Z" />
                </g>
                <g className="football-leg football-leg-back">
                  <path d="M1-51 24-49 25-9 5 27-7 21 8-14Z" />
                  <path
                    className="football-boot"
                    d="M-7 19 7 24 13 34 30 38Q37 45 26 47L-3 39-12 31Z"
                  />
                </g>
                <path d="M-29-162Q-9-175 13-157L33-120 19-72-23-66-37-113Z" />
                <path d="M-24-76 20-78 32-47 6-37-4-51-18-35-38-46Z" />
                <g className="football-leg football-leg-front">
                  <path d="M-31-51-10-46-22-7-2 27-15 36-42-3Q-46-10-41-23Z" />
                  <path
                    className="football-boot"
                    d="M-16 28-1 24 8 36 26 39Q36 46 23 50L-4 48-17 40Z"
                  />
                </g>
                <path d="M-14-162-11-180 6-187 12-167Z" />
                <path d="M-17-199Q-18-219 0-220 18-222 23-205L21-193 27-186 19-182Q15-169 4-174L-11-180Z" />
                <path
                  className="football-hair"
                  d="M-18-199-21-207-15-218-8-223 0-221 7-224 17-217 23-209 20-199 12-203 6-198-3-203-11-193Z"
                />
                <g className="football-arm football-arm-front">
                  <path d="M-26-155Q-38-161-43-147L-53-110-78-89Q-83-80-77-76L-67-78-38-99Q-33-103-31-112L-20-140Z" />
                </g>
                <text
                  className="football-light-number"
                  x="-3"
                  y="-113"
                  textAnchor="middle"
                >
                  10
                </text>
              </g>
            </g>
            <g className="football-dribble-ball">
              <g className="football-ball-spin">
                <circle r="13" />
                <path d="m0-7 7 5-3 8h-8l-3-8zM-12-4-7-2M7-2l5-2M-4 6l-3 5M4 6l3 5M0-7v-5" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
