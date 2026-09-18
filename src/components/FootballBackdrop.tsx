export function FootballBackdrop() {
  const playerImage = `${import.meta.env.BASE_URL}images/football-number-10.png`;

  return (
    <div className="football-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1100 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="barca-blue-glow">
            <stop offset="0" stopColor="#0068b5" stopOpacity=".58" />
            <stop offset="1" stopColor="#0068b5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="barca-garnet-glow">
            <stop offset="0" stopColor="#a50044" stopOpacity=".55" />
            <stop offset="1" stopColor="#a50044" stopOpacity="0" />
          </radialGradient>
          <filter
            id="player-shadow"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="8"
              floodColor="#000"
              floodOpacity=".72"
            />
          </filter>
          <path
            id="star-run-path"
            d="M140 420 C285 350 360 420 495 370 S710 345 820 375 S905 335 950 350"
          />
        </defs>

        <circle className="football-glow blue" cx="330" cy="250" r="310" />
        <circle className="football-glow garnet" cx="790" cy="255" r="290" />

        <g className="football-pitch">
          <rect x="55" y="45" width="990" height="410" rx="14" />
          <line x1="550" y1="45" x2="550" y2="455" />
          <circle cx="550" cy="250" r="82" />
          <circle cx="550" cy="250" r="4" />
          <path d="M55 148h112v204H55M1045 148H933v204h112" />
        </g>

        <path
          className="football-speed-line"
          d="M105 400 C270 252 355 430 500 303 S775 310 1025 170"
        />
        <path
          className="football-speed-line delayed"
          d="M90 420 C255 282 365 448 515 328 S790 335 1040 192"
        />

        <g className="football-player-motion">
          <g className="football-player-bob" filter="url(#player-shadow)">
            <ellipse
              className="football-player-ground-shadow"
              cx="0"
              cy="20"
              rx="54"
              ry="10"
            />
            <image
              className="football-player-cutout"
              href={playerImage}
              x="-110"
              y="-300"
              width="220"
              height="330"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            rotate="0"
            keyTimes="0;0.35;0.68;1"
            keyPoints="0;0.36;0.7;1"
            calcMode="spline"
            keySplines=".35 0 .25 1;.42 0 .2 1;.4 0 .2 1"
          >
            <mpath href="#star-run-path" />
          </animateMotion>
        </g>
      </svg>
      <div className="football-backdrop-label">
        <span /> LA JUGADA DEL 10 · REGATE EN MOVIMIENTO
      </div>
    </div>
  );
}
