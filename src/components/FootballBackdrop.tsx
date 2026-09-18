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
            <stop stopColor="#64809a" stopOpacity=".65" />
            <stop offset=".5" stopColor="#142131" stopOpacity=".15" />
            <stop offset="1" stopColor="#946073" stopOpacity=".5" />
          </linearGradient>
          <linearGradient id="football-fabric" x1="0" x2="1" y1=".2" y2=".6">
            <stop stopColor="#29415a" />
            <stop offset=".28" stopColor="#14263b" />
            <stop offset=".53" stopColor="#351d30" />
            <stop offset=".76" stopColor="#192338" />
            <stop offset="1" stopColor="#080f19" />
          </linearGradient>
          <linearGradient id="football-skin-light" x1="0" x2="1">
            <stop stopColor="#645d59" />
            <stop offset=".27" stopColor="#393c42" />
            <stop offset=".75" stopColor="#1a202a" />
            <stop offset="1" stopColor="#30232b" />
          </linearGradient>
          <radialGradient id="football-ball-shade" cx=".3" cy=".25">
            <stop stopColor="#c3cad0" />
            <stop offset=".65" stopColor="#6d7b86" />
            <stop offset="1" stopColor="#263142" />
          </radialGradient>
          <filter
            id="football-light"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation=".5" result="halo" />
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
                  <path d="M7-148C16-157 24-154 28-143L36-119Q37-114 45-109L66-97Q72-97 76-92L80-86Q81-82 77-82L71-86Q73-80 69-80L61-88 33-101Q28-104 25-114L16-136Z" />
                </g>
                <g className="football-leg football-leg-back">
                  <path d="M1-53Q14-58 24-49C27-39 22-18 17-8Q12 0 4-6L1-27Z" />
                  <g className="football-calf football-calf-back">
                    <path d="M4-12Q17-15 17-4C17 8 10 18 8 29L-2 31C-4 19-7 8-3-1Z" />
                    <path
                      className="football-sock"
                      d="M-3 6Q4 9 13 7L8 30-2 32Z"
                    />
                    <path
                      className="football-boot"
                      d="M-3 28Q2 31 8 28L14 35 27 39Q31 41 29 44L5 44Q-1 43-5 38Z"
                    />
                  </g>
                </g>
                <path
                  className="football-shirt"
                  d="M-27-160C-19-166-10-167-3-166L12-158Q23-148 24-135L21-119Q17-109 18-97L22-77Q7-69-22-73L-27-93Q-36-109-34-123L-38-141Z"
                />
                <path
                  className="football-fabric-fold"
                  d="M-25-131Q-14-121-16-104M12-103 4-85M-21-80Q-1-77 16-82"
                />
                <path
                  className="football-shorts"
                  d="M-24-76Q0-72 20-78L24-64 29-47Q17-40 5-42L-3-55-14-39Q-27-39-36-47L-31-65Z"
                />
                <g className="football-leg football-leg-front">
                  <path d="M-31-50Q-19-46-10-47C-10-32-17-16-21-6Q-27 1-35-6C-38-16-36-33-31-50Z" />
                  <g className="football-calf football-calf-front">
                    <path d="M-33-12Q-23-16-19-6C-16 4-18 17-14 30L-23 33C-29 23-35 13-36 3Z" />
                    <path
                      className="football-sock"
                      d="M-35 3Q-28 8-18 4L-14 30-23 34Z"
                    />
                    <path
                      className="football-boot"
                      d="M-24 29Q-19 31-14 28L-5 35 9 39Q14 42 10 45L-11 44Q-21 42-26 37Z"
                    />
                  </g>
                </g>
                <path d="M-12-161Q-6-170-9-180L6-184Q4-171 12-164L4-158Z" />
                <path d="M-12-195C-14-207-5-216 6-213Q21-212 20-199L19-192 24-187Q25-185 20-184L19-178Q14-172 7-175L-4-181Q-12-185-12-195Z" />
                <path
                  className="football-hair"
                  d="M-13-193C-19-201-14-214-6-216Q0-221 9-217Q21-216 22-205L19-199Q13-204 7-201L1-198-3-192-6-185Q-11-186-13-193Z"
                />
                <g className="football-arm football-arm-front">
                  <path d="M-26-150C-33-154-40-149-42-141L-49-118Q-50-113-55-108L-70-93-77-90Q-83-85-81-82L-77-83Q-81-77-76-77L-68-81-64-88-40-103Q-36-107-34-115L-25-135Z" />
                  <path
                    className="football-shirt"
                    d="M-29-159Q-42-153-43-140L-40-131-26-128-20-145Z"
                  />
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
