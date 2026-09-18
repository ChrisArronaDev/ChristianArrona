export function FootballBackdrop() {
  const players = [
    {
      className: "blue",
      path: "M120 205 C260 135 390 235 530 165 S790 115 930 195",
      begin: "-1.5s",
      duration: "14s",
    },
    {
      className: "garnet",
      path: "M965 315 C805 255 725 355 565 300 S300 245 145 335",
      begin: "-7s",
      duration: "16s",
    },
    {
      className: "blue",
      path: "M260 390 C340 300 430 385 525 255 S720 170 835 245",
      begin: "-9s",
      duration: "18s",
    },
    {
      className: "garnet",
      path: "M820 95 C750 190 645 145 560 225 S355 315 225 250",
      begin: "-4s",
      duration: "17s",
    },
  ];

  return (
    <div className="football-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1100 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="barca-blue-glow">
            <stop offset="0" stopColor="#0068b5" stopOpacity=".42" />
            <stop offset="1" stopColor="#0068b5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="barca-garnet-glow">
            <stop offset="0" stopColor="#a50044" stopOpacity=".4" />
            <stop offset="1" stopColor="#a50044" stopOpacity="0" />
          </radialGradient>
          <filter
            id="football-soft-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            id="football-pass-path"
            d="M170 350 C310 170 455 345 560 220 S810 115 950 270"
          />
        </defs>

        <circle className="football-glow blue" cx="340" cy="245" r="285" />
        <circle className="football-glow garnet" cx="790" cy="250" r="260" />

        <g className="football-pitch">
          <rect x="65" y="52" width="970" height="396" rx="12" />
          <line x1="550" y1="52" x2="550" y2="448" />
          <circle cx="550" cy="250" r="78" />
          <circle cx="550" cy="250" r="4" />
          <path d="M65 155h105v190H65M1035 155H930v190h105" />
          <path d="M65 205h46v90H65M1035 205h-46v90h46" />
        </g>

        <path
          className="football-pass-line"
          d="M170 350 C310 170 455 345 560 220 S810 115 950 270"
        />

        {players.map((player, index) => (
          <g
            className={`football-player ${player.className}`}
            key={player.path}
          >
            <circle cy="-10" r="5" />
            <path d="M0-4v15M0 3l-9 8M0 3l9 7M0 11l-7 13M0 11l9 12" />
            <animateMotion
              path={player.path}
              begin={player.begin}
              dur={player.duration}
              repeatCount="indefinite"
              rotate="auto"
            />
            <animate
              attributeName="opacity"
              values=".24;.62;.24"
              dur={`${7 + index}s`}
              repeatCount="indefinite"
            />
          </g>
        ))}

        <g className="football-ball" filter="url(#football-soft-glow)">
          <circle r="7" />
          <path d="M0-4 4-1 2 4h-4l-3-5z" />
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#football-pass-path" />
          </animateMotion>
        </g>
      </svg>
      <div className="football-backdrop-label">
        <span /> VISCA EL FÚTBOL · DETALLE PERSONAL
      </div>
    </div>
  );
}
