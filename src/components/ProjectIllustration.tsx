const concepts = [
  { title: "Academy", nodes: ["Aprendizaje", "Gestión", "Datos"] },
  { title: "LuminaMO", nodes: ["Contratos", "Operación", "Control"] },
  { title: "Cotización", nodes: ["Propuesta", "Auditoría", "Respuesta"] },
];

export function ProjectIllustration({ index }: { index: number }) {
  const concept = concepts[index];
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label={`Ilustración conceptual de ${concept.title}`}
    >
      <defs>
        <radialGradient id={`project-glow-${index}`}>
          <stop stopColor="#ff703d" stopOpacity=".22" />
          <stop offset="1" stopColor="#ff703d" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`project-grid-${index}`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#93ab9e" opacity=".18" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="#0b1511" />
      <rect width="640" height="400" fill={`url(#project-grid-${index})`} />
      <ellipse
        cx="320"
        cy="195"
        rx="260"
        ry="200"
        fill={`url(#project-glow-${index})`}
      />
      <g fill="none" stroke="#ff794d">
        <circle cx="320" cy="172" r="99" opacity=".2" />
        <circle cx="320" cy="172" r="76" opacity=".35" strokeDasharray="3 8" />
        {index === 0 ? (
          <g strokeWidth="3">
            <path d="m267 148 53-25 53 25-53 25Z M282 157v31q38 26 76 0v-31 M373 149v40" />
            <path d="M296 211h48" />
          </g>
        ) : index === 1 ? (
          <g strokeWidth="3">
            <rect x="289" y="124" width="62" height="88" rx="7" />
            <path d="M301 144h38 M301 158h38 M301 173h20 M315 193l8 8 18-20" />
            <path d="M273 151h-14v64h57 M365 192h14v-64h-18" opacity=".5" />
          </g>
        ) : (
          <g strokeWidth="3">
            <path d="m330 119-39 60h28l-9 43 42-63h-30Z" />
            <path d="m270 148-17 23 17 23 M370 148l17 23-17 23" opacity=".5" />
          </g>
        )}
        <path d="M320 250v20M150 282v-12h340v12" opacity=".45" />
      </g>
      <text
        x="30"
        y="36"
        fill="#8ba094"
        fontSize="10"
        fontFamily="monospace"
        letterSpacing="2"
      >
        EXPEDIENTE / 0{index + 1}
      </text>
      {concept.nodes.map((node, n) => (
        <g key={node}>
          <rect
            x={78 + n * 170}
            y="282"
            width="144"
            height="34"
            rx="3"
            fill="#14221b"
            stroke="#344339"
          />
          <text
            x={150 + n * 170}
            y="303"
            textAnchor="middle"
            fill="#dce8df"
            fontSize="12"
            fontFamily="monospace"
          >
            {node}
          </text>
        </g>
      ))}
      <text
        x="320"
        y="362"
        textAnchor="middle"
        fill="#e7eee8"
        fontSize="29"
        fontFamily="Georgia, serif"
      >
        {concept.title}
      </text>
    </svg>
  );
}
