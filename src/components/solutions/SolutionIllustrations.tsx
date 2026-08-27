import React from 'react';

/* ─────────────────────────────────────────────
   Shared SVG style constants
   All illustrations: 280 × 200 viewBox
   Palette: slate-900 (#0f172a), sky-500 (#0ea5e9),
            slate-200 (#e2e8f0), crimson (#dc2626)
───────────────────────────────────────────── */

export function ExecutiveSearchIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Soft bg circle */}
      <circle cx="140" cy="100" r="90" fill="#f0f9ff" />
      {/* Dashed search ring */}
      <circle cx="140" cy="100" r="70" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="6 4" />
      {/* Outer candidate dots */}
      <circle cx="60" cy="100" r="14" fill="#e2e8f0" />
      <circle cx="220" cy="100" r="14" fill="#e2e8f0" />
      <circle cx="100" cy="40" r="14" fill="#e2e8f0" />
      <circle cx="180" cy="40" r="14" fill="#e2e8f0" />
      <circle cx="100" cy="160" r="14" fill="#e2e8f0" />
      <circle cx="180" cy="160" r="14" fill="#e2e8f0" />
      {/* Person silhouettes in outer dots */}
      {[60,220].map((cx, i) => <circle key={i} cx={cx} cy={97} r="5" fill="#94a3b8" />)}
      {[60,220].map((cx, i) => <path key={i+10} d={`M${cx-6} 107 Q${cx} 103 ${cx+6} 107`} stroke="#94a3b8" strokeWidth="1.5" fill="none" />)}
      {/* Central selected candidate */}
      <circle cx="140" cy="100" r="26" fill="#0f172a" />
      <circle cx="140" cy="95" r="9" fill="white" />
      <path d="M124 114 Q140 107 156 114" stroke="white" strokeWidth="2" fill="none" />
      {/* Crown */}
      <path d="M128 80 L132 72 L140 78 L148 72 L152 80 Z" fill="#dc2626" />
      {/* Focus lines from ring to center */}
      <line x1="74" y1="100" x2="114" y2="100" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="166" y1="100" x2="206" y2="100" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export function RPOIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Pipeline track */}
      <rect x="20" y="90" width="240" height="20" rx="10" fill="#f1f5f9" />
      {/* Flow arrows along track */}
      {[60,100,140,180].map((x) => (
        <path key={x} d={`M${x} 100 L${x+12} 100`} stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)" />
      ))}
      {/* Input stack: requirements */}
      <rect x="20" y="55" width="38" height="10" rx="3" fill="#e2e8f0" />
      <rect x="20" y="68" width="38" height="10" rx="3" fill="#e2e8f0" />
      <rect x="20" y="81" width="38" height="10" rx="3" fill="#cbd5e1" />
      <text x="39" y="130" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui">Requirements</text>
      {/* 3 embedded team nodes */}
      {[100,140,180].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="100" r="18" fill="#0f172a" />
          <circle cx={cx} cy="97" r="6" fill="white" />
          <path d={`M${cx-7} 108 Q${cx} 104 ${cx+7} 108`} stroke="white" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      <text x="140" y="130" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui">Embedded Team</text>
      {/* Output: placed checkmarks */}
      <circle cx="240" cy="80" r="12" fill="#0ea5e9" />
      <path d="M234 80 L238 84 L246 76" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="240" cy="105" r="12" fill="#0ea5e9" opacity="0.6" />
      <path d="M234 105 L238 109 L246 101" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="240" y="130" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui">Placements</text>
      {/* Decorative: ATS integration line */}
      <path d="M59 62 C80 62 80 100 100 100" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

export function PermanentHiringIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Foundation layers — 4 audit blocks */}
      {[
        { y: 152, w: 200, label: 'Background Verification', fill: '#e2e8f0' },
        { y: 128, w: 170, label: 'Cultural Fit', fill: '#cbd5e1' },
        { y: 104, w: 140, label: 'Psychometrics', fill: '#94a3b8' },
        { y: 80,  w: 110, label: 'Domain Audit', fill: '#475569' },
      ].map(({ y, w, fill }, i) => (
        <g key={i}>
          <rect x={140 - w/2} y={y} width={w} height={20} rx="4" fill={fill} />
          {/* Layer label */}
          <text x="140" y={y + 14} textAnchor="middle" fontSize="7" fill={i > 1 ? 'white' : '#64748b'} fontFamily="system-ui">
            {['01 Domain Audit', '02 Psychometrics', '03 Cultural Fit', '04 Background'][i]}
          </text>
        </g>
      ))}
      {/* Placed candidate block — top */}
      <rect x="104" y="44" width="72" height="30" rx="8" fill="#0f172a" />
      <circle cx="140" cy="55" r="8" fill="white" />
      <path d="M130 67 Q140 63 150 67" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Star / confirmed icon */}
      <circle cx="162" cy="44" r="10" fill="#0ea5e9" />
      <path d="M162 38 L163.8 43.2 L169 43.2 L164.8 46.3 L166.6 51.5 L162 48.4 L157.4 51.5 L159.2 46.3 L155 43.2 L160.2 43.2 Z" fill="white" />
      {/* Vertical connecting line */}
      <line x1="140" y1="74" x2="140" y2="80" stroke="#0ea5e9" strokeWidth="2" />
      {/* Ground shadow */}
      <ellipse cx="140" cy="174" rx="80" ry="6" fill="#f1f5f9" />
      {/* Label */}
      <text x="140" y="193" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">4-Layer Verified Placement</text>
    </svg>
  );
}

export function ContractStaffingIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Background ring */}
      <circle cx="140" cy="100" r="80" fill="#f8fafc" />
      <circle cx="140" cy="100" r="80" stroke="#e2e8f0" strokeWidth="8" />
      {/* Progress arc – represents 48h SLA */}
      <circle cx="140" cy="100" r="80" stroke="#0ea5e9" strokeWidth="8"
        strokeDasharray="335 167"
        strokeDashoffset="84"
        strokeLinecap="round"
        transform="rotate(-90 140 100)" />
      {/* Clock tick marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const r1 = 64; const r2 = 70;
        return (
          <line key={i}
            x1={140 + r1 * Math.cos(angle)} y1={100 + r1 * Math.sin(angle)}
            x2={140 + r2 * Math.cos(angle)} y2={100 + r2 * Math.sin(angle)}
            stroke="#cbd5e1" strokeWidth={i % 3 === 0 ? 2 : 1}
          />
        );
      })}
      {/* Clock hands */}
      <line x1="140" y1="100" x2="140" y2="64" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <line x1="140" y1="100" x2="165" y2="110" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="140" cy="100" r="4" fill="#0f172a" />
      {/* Center text */}
      <text x="140" y="125" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontFamily="system-ui" fontWeight="800">48h</text>
      {/* Lightning bolt accent */}
      <path d="M200 55 L192 72 L200 72 L188 92 L196 76 L188 76 Z" fill="#dc2626" opacity="0.85" />
      {/* Deployment tag */}
      <rect x="68" y="158" width="104" height="22" rx="11" fill="#0f172a" />
      <text x="120" y="173" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="700">Deploy-on-Demand SLA</text>
    </svg>
  );
}

export function CampusHiringIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* University arch */}
      <path d="M90 140 L90 100 Q90 72 140 72 Q190 72 190 100 L190 140 Z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M114 140 L114 110 L166 110 L166 140" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Door */}
      <rect x="128" y="118" width="24" height="22" rx="12" fill="#0f172a" />
      {/* Windows */}
      <rect x="118" y="114" width="12" height="10" rx="2" fill="#0ea5e9" opacity="0.6" />
      <rect x="150" y="114" width="12" height="10" rx="2" fill="#0ea5e9" opacity="0.6" />
      {/* Graduation cap */}
      <rect x="118" y="58" width="44" height="8" rx="2" fill="#0f172a" />
      <path d="M140 42 L162 58 L140 62 L118 58 Z" fill="#0f172a" />
      <path d="M162 58 L162 72" stroke="#0f172a" strokeWidth="2" />
      <circle cx="162" cy="74" r="3" fill="#dc2626" />
      {/* Candidate pipeline: many dots → filtered → few */}
      {/* Many at top */}
      {[30,55,80,200,225,250].map((x) => (
        <circle key={x} cx={x} cy="38" r="6" fill="#e2e8f0" />
      ))}
      {/* Funnel lines */}
      <path d="M30 44 L90 80" stroke="#e2e8f0" strokeWidth="1" />
      <path d="M250 44 L190 80" stroke="#e2e8f0" strokeWidth="1" />
      {/* Selected few at bottom */}
      {[110, 140, 170].map((x) => (
        <circle key={x} cx={x} cy="162" r="8" fill="#0ea5e9" opacity="0.8" />
      ))}
      {/* Assessment filter bar */}
      <rect x="82" y="148" width="116" height="4" rx="2" fill="#0ea5e9" opacity="0.2" />
      <text x="140" y="186" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">Structured Intake Pipeline</text>
    </svg>
  );
}

export function TechHiringIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Background */}
      <rect x="40" y="30" width="200" height="140" rx="12" fill="#f8fafc" />
      {/* Code bracket lines */}
      {/* Left bracket < */}
      <path d="M80 70 L58 100 L80 130" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Right bracket > */}
      <path d="M200 70 L222 100 L200 130" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Slash / */}
      <path d="M155 68 L125 132" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
      {/* Node network dots */}
      <circle cx="140" cy="50" r="7" fill="#0ea5e9" />
      <circle cx="70" cy="50" r="5" fill="#e2e8f0" />
      <circle cx="210" cy="50" r="5" fill="#e2e8f0" />
      <circle cx="55" cy="165" r="5" fill="#e2e8f0" />
      <circle cx="225" cy="165" r="5" fill="#e2e8f0" />
      <circle cx="140" cy="165" r="7" fill="#dc2626" opacity="0.7" />
      {/* Connector lines */}
      <line x1="140" y1="57" x2="70" y2="50" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="140" y1="57" x2="210" y2="50" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="140" y1="158" x2="55" y2="165" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="140" y1="158" x2="225" y2="165" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      {/* Circuit board horizontal lines */}
      <line x1="88" y1="100" x2="58" y2="100" stroke="#e2e8f0" strokeWidth="1.5" />
      <line x1="192" y1="100" x2="222" y2="100" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="56" cy="100" r="3" fill="#0ea5e9" opacity="0.6" />
      <circle cx="224" cy="100" r="3" fill="#0ea5e9" opacity="0.6" />
      {/* AI/ML chip center */}
      <rect x="118" y="88" width="44" height="24" rx="4" fill="#0f172a" />
      <text x="140" y="104" textAnchor="middle" fontSize="8" fill="#0ea5e9" fontFamily="monospace" fontWeight="700">AI / ML</text>
    </svg>
  );
}

export function GlobalMobilityIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Globe outline */}
      <circle cx="140" cy="100" r="75" fill="#f0f9ff" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Latitude lines */}
      <ellipse cx="140" cy="100" rx="75" ry="25" stroke="#e2e8f0" strokeWidth="1" />
      <ellipse cx="140" cy="100" rx="75" ry="50" stroke="#e2e8f0" strokeWidth="1" />
      {/* Vertical center line */}
      <line x1="140" y1="25" x2="140" y2="175" stroke="#e2e8f0" strokeWidth="1" />
      {/* City dots */}
      <circle cx="90" cy="75" r="6" fill="#0f172a" />   {/* City A – India */}
      <circle cx="175" cy="65" r="6" fill="#0f172a" />  {/* City B – GCC */}
      <circle cx="115" cy="130" r="6" fill="#0f172a" /> {/* City C – APAC */}
      <circle cx="185" cy="120" r="6" fill="#0ea5e9" /> {/* City D – Global */}
      {/* Flight arc paths */}
      <path d="M90 75 Q132 35 175 65" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M90 75 Q100 115 115 130" stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5 3" />
      <path d="M175 65 Q195 90 185 120" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Arrow heads on arcs */}
      <circle cx="175" cy="65" r="3" fill="#0ea5e9" />
      <circle cx="115" cy="130" r="3" fill="#0ea5e9" />
      <circle cx="185" cy="120" r="3" fill="#dc2626" opacity="0.7" />
      {/* City labels */}
      <text x="85" y="90" textAnchor="middle" fontSize="7" fill="#475569" fontFamily="system-ui" fontWeight="600">India</text>
      <text x="181" y="58" textAnchor="middle" fontSize="7" fill="#475569" fontFamily="system-ui" fontWeight="600">GCC</text>
      <text x="112" y="147" textAnchor="middle" fontSize="7" fill="#475569" fontFamily="system-ui" fontWeight="600">APAC</text>
      <text x="194" y="134" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="system-ui" fontWeight="600">Global</text>
    </svg>
  );
}

export function RecruitmentConsultingIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Grid baseline */}
      <line x1="50" y1="160" x2="240" y2="160" stroke="#e2e8f0" strokeWidth="1.5" />
      <line x1="50" y1="160" x2="50" y2="40" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Grid horizontals */}
      {[130,100,70,40].map((y) => (
        <line key={y} x1="50" y1={y} x2="240" y2={y} stroke="#f1f5f9" strokeWidth="1" />
      ))}
      {/* Bars */}
      <rect x="70" y="130" width="28" height="30" rx="4" fill="#e2e8f0" />
      <rect x="110" y="108" width="28" height="52" rx="4" fill="#cbd5e1" />
      <rect x="150" y="82" width="28" height="78" rx="4" fill="#64748b" />
      <rect x="190" y="54" width="28" height="106" rx="4" fill="#0f172a" />
      {/* Trend line */}
      <path d="M84 125 L124 103 L164 77 L204 49" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />
      {/* Trend dots */}
      {[[84,125],[124,103],[164,77],[204,49]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#0ea5e9" />
      ))}
      {/* Target ring overlay */}
      <circle cx="204" cy="49" r="14" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
      <circle cx="204" cy="49" r="6" stroke="#dc2626" strokeWidth="1.5" opacity="0.7" />
      {/* Arrow at end of trend */}
      <path d="M204 43 L210 37" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
      <path d="M204 43 L212 46" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
      {/* X-axis labels */}
      <text x="84" y="175" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Q1</text>
      <text x="124" y="175" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Q2</text>
      <text x="164" y="175" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Q3</text>
      <text x="204" y="175" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">Q4</text>
      {/* Label */}
      <text x="140" y="192" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">TA Maturity Improvement Trajectory</text>
    </svg>
  );
}
