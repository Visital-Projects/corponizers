import React from 'react';

/* ─────────────────────────────────────────────
   Industry SVG Illustrations
   All: 280×200 viewBox
   Palette: slate-900 (#0f172a), sky-500 (#0ea5e9),
            slate-200 (#e2e8f0), crimson (#dc2626)
   aria-hidden="true" on all
───────────────────────────────────────────── */

// ── Finance & Banking ──────────────────────
export function FinanceIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Vault ring */}
      <circle cx="140" cy="100" r="72" stroke="#e2e8f0" strokeWidth="8" fill="#f8fafc" />
      <circle cx="140" cy="100" r="72" stroke="#0ea5e9" strokeWidth="8"
        strokeDasharray="226 226"
        strokeDashoffset="45"
        strokeLinecap="round"
        transform="rotate(-90 140 100)" />
      {/* Vault dial marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        return (
          <line key={i}
            x1={140 + 58 * Math.cos(angle)} y1={100 + 58 * Math.sin(angle)}
            x2={140 + 65 * Math.cos(angle)} y2={100 + 65 * Math.sin(angle)}
            stroke="#cbd5e1" strokeWidth={i % 3 === 0 ? 2.5 : 1} />
        );
      })}
      {/* Ascending bars inside vault */}
      <rect x="108" y="118" width="14" height="18" rx="2" fill="#e2e8f0" />
      <rect x="126" y="108" width="14" height="28" rx="2" fill="#94a3b8" />
      <rect x="144" y="92" width="14" height="44" rx="2" fill="#0f172a" />
      <rect x="162" y="80" width="14" height="56" rx="2" fill="#0ea5e9" />
      {/* Trend arrow */}
      <path d="M108 120 L126 110 L144 94 L166 82" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="166" cy="82" r="4" fill="#dc2626" />
      {/* Shield badge */}
      <path d="M130 42 L140 36 L150 42 L150 54 Q140 60 130 54 Z" fill="#0f172a" />
      <path d="M135 48 L138.5 52 L145 44" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ── Healthcare & Life Sciences ──────────────
export function HealthcareIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Medical cross */}
      <rect x="122" y="60" width="36" height="80" rx="8" fill="#f0f9ff" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="98" y="84" width="84" height="36" rx="8" fill="#f0f9ff" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Cross fill */}
      <rect x="124" y="62" width="32" height="76" rx="7" fill="#0ea5e9" opacity="0.15" />
      <rect x="100" y="86" width="80" height="32" rx="7" fill="#0ea5e9" opacity="0.15" />
      {/* Center dot */}
      <circle cx="140" cy="102" r="10" fill="#0f172a" />
      <path d="M136 102 L139 105 L144 99" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Care nodes — hospital, patient, research */}
      <circle cx="60" cy="60" r="16" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="53" y="55" width="14" height="10" rx="2" fill="#94a3b8" />
      <rect x="56" y="51" width="8" height="5" rx="1" fill="#64748b" />
      <circle cx="220" cy="60" r="16" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="220" cy="57" r="5" fill="#94a3b8" />
      <path d="M213 68 Q220 64 227 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      <circle cx="140" cy="170" r="16" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <path d="M133 175 L137 162 L143 175" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      {/* Connector lines */}
      <line x1="76" y1="68" x2="100" y2="88" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="204" y1="68" x2="180" y2="88" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="140" y1="140" x2="140" y2="154" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// ── Manufacturing ───────────────────────────
export function ManufacturingIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Factory floor baseline */}
      <line x1="30" y1="155" x2="250" y2="155" stroke="#e2e8f0" strokeWidth="2" />
      {/* 3 production stages */}
      {/* Stage 1: Raw input */}
      <rect x="35" y="120" width="50" height="35" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="47" y="128" width="26" height="20" rx="2" fill="#94a3b8" />
      <text x="60" y="142" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="700">INPUT</text>
      {/* Stage 1 chimney/vent */}
      <rect x="53" y="110" width="6" height="12" rx="2" fill="#cbd5e1" />
      <rect x="63" y="115" width="4" height="7" rx="1" fill="#cbd5e1" />
      {/* Arrow 1→2 */}
      <path d="M85 137 L110 137" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#mfg-arrow)" />
      <polygon points="107,133 115,137 107,141" fill="#0ea5e9" />
      {/* Stage 2: Processing */}
      <rect x="115" y="108" width="50" height="47" rx="4" fill="#f1f5f9" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="140" cy="131" r="14" fill="#0f172a" />
      {/* Gear teeth */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45) * (Math.PI / 180);
        return <rect key={i} x={140 + 13 * Math.cos(a) - 2} y={131 + 13 * Math.sin(a) - 2} width="4" height="4" rx="1" fill="#0f172a" transform={`rotate(${i * 45} 140 131)`} />;
      })}
      <circle cx="140" cy="131" r="6" fill="white" />
      {/* Arrow 2→3 */}
      <polygon points="167,133 175,137 167,141" fill="#0ea5e9" />
      {/* Stage 3: Output */}
      <rect x="175" y="120" width="65" height="35" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Product boxes */}
      <rect x="182" y="128" width="14" height="18" rx="2" fill="#0f172a" />
      <rect x="200" y="128" width="14" height="18" rx="2" fill="#0f172a" opacity="0.7" />
      <rect x="218" y="128" width="14" height="18" rx="2" fill="#0f172a" opacity="0.4" />
      <text x="207" y="158" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">OUTPUT</text>
      {/* Industry 4.0 indicator */}
      <rect x="100" y="38" width="80" height="22" rx="11" fill="#0f172a" />
      <text x="140" y="53" textAnchor="middle" fontSize="8" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">INDUSTRY 4.0</text>
      <line x1="140" y1="60" x2="140" y2="108" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// ── Steel ───────────────────────────────────
export function SteelIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Furnace/blast arc */}
      <path d="M90 160 L90 100 Q90 50 140 44 Q190 50 190 100 L190 160 Z" fill="#0f172a" />
      {/* Inner flame */}
      <path d="M115 160 L115 110 Q115 75 140 70 Q165 75 165 110 L165 160 Z" fill="#dc2626" opacity="0.8" />
      <path d="M125 160 L125 118 Q125 88 140 84 Q155 88 155 118 L155 160 Z" fill="#f97316" opacity="0.7" />
      <path d="M132 160 L132 128 Q132 108 140 104 Q148 108 148 128 L148 160 Z" fill="#fbbf24" opacity="0.6" />
      {/* Tapping output — right side */}
      <path d="M190 130 L220 145" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <circle cx="222" cy="146" r="6" fill="#dc2626" opacity="0.7" />
      {/* Molten drop */}
      <ellipse cx="222" cy="155" rx="6" ry="4" fill="#f97316" opacity="0.5" />
      {/* Product flow: ingot → billet → coil */}
      <rect x="28" y="152" width="28" height="20" rx="3" fill="#475569" />
      <text x="42" y="167" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">Ingot</text>
      <polygon points="56,162 62,158 62,166" fill="#94a3b8" />
      <rect x="64" y="152" width="28" height="20" rx="3" fill="#334155" />
      <text x="78" y="167" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">Billet</text>
      <polygon points="92,162 98,158 98,166" fill="#94a3b8" />
      {/* Rolled coil at end */}
      <circle cx="82" cy="90" r="28" fill="none" stroke="#94a3b8" strokeWidth="10" />
      <circle cx="82" cy="90" r="14" fill="none" stroke="#475569" strokeWidth="6" />
      <circle cx="82" cy="90" r="5" fill="#0f172a" />
      <text x="82" y="128" textAnchor="middle" fontSize="7" fill="#64748b" fontFamily="system-ui" fontWeight="600">Coil</text>
      {/* Labels */}
      <text x="140" y="192" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">BF / EAF Process Flow</text>
    </svg>
  );
}

// ── Mining & Metals ─────────────────────────
export function MiningIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Ground layers */}
      {/* Surface */}
      <rect x="20" y="40" width="240" height="24" rx="0" fill="#a8a29e" />
      <text x="140" y="56" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="600">Surface / Open Pit</text>
      {/* Rock layer 1 */}
      <rect x="20" y="64" width="240" height="28" rx="0" fill="#78716c" />
      <text x="140" y="81" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="600">Overburden</text>
      {/* Rock layer 2 */}
      <rect x="20" y="92" width="240" height="28" rx="0" fill="#57534e" />
      <text x="140" y="109" textAnchor="middle" fontSize="7" fill="#e7e5e4" fontFamily="system-ui" fontWeight="600">Waste Rock</text>
      {/* Ore layer */}
      <rect x="20" y="120" width="240" height="40" rx="0" fill="#292524" />
      {/* Ore veins */}
      <path d="M40 132 Q60 125 80 134 Q100 143 120 130" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M130 138 Q160 128 190 140 Q210 148 240 136" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="140" y="152" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">Ore Deposit</text>
      {/* Vertical shaft */}
      <rect x="128" y="40" width="24" height="120" rx="2" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 4" />
      {/* Shaft label */}
      <rect x="112" y="20" width="56" height="20" rx="10" fill="#0f172a" />
      <text x="140" y="33" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="700">Mine Shaft</text>
      {/* Extraction bucket */}
      <rect x="130" y="95" width="20" height="14" rx="3" fill="#dc2626" opacity="0.8" />
      <line x1="140" y1="95" x2="140" y2="40" stroke="#dc2626" strokeWidth="1.5" opacity="0.6" />
      {/* Safety/ESG badge */}
      <circle cx="230" cy="52" r="16" fill="#0ea5e9" />
      <text x="230" y="50" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="700">HSE</text>
      <text x="230" y="60" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui">ESG</text>
    </svg>
  );
}

// ── Information Technology ──────────────────
export function ITIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Background */}
      <rect x="30" y="25" width="220" height="150" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      {/* Hexagonal node grid */}
      {[
        { cx: 140, cy: 100, label: 'Cloud', fill: '#0f172a', textColor: '#0ea5e9' },
        { cx: 90, cy: 70, label: 'AI/ML', fill: '#0ea5e9', textColor: 'white' },
        { cx: 190, cy: 70, label: 'DevOps', fill: '#0ea5e9', textColor: 'white' },
        { cx: 90, cy: 130, label: 'Data', fill: '#475569', textColor: 'white' },
        { cx: 190, cy: 130, label: 'Product', fill: '#475569', textColor: 'white' },
        { cx: 55, cy: 100, label: 'Security', fill: '#e2e8f0', textColor: '#475569' },
        { cx: 225, cy: 100, label: 'Platform', fill: '#e2e8f0', textColor: '#475569' },
      ].map(({ cx, cy, label, fill, textColor }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r={label === 'Cloud' ? 22 : 18} fill={fill} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="7" fill={textColor} fontFamily="system-ui" fontWeight="700">{label}</text>
        </g>
      ))}
      {/* Connector lines */}
      {[
        [140,100,90,70], [140,100,190,70], [140,100,90,130], [140,100,190,130],
        [90,70,55,100], [190,70,225,100], [90,130,55,100], [190,130,225,100],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e2e8f0" strokeWidth="1.5" />
      ))}
      {/* Terminal prompt */}
      <rect x="95" y="158" width="90" height="18" rx="4" fill="#0f172a" />
      <text x="140" y="171" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="monospace" fontWeight="600">$ deploy --prod</text>
    </svg>
  );
}

// ── Retail & E-Commerce ─────────────────────
export function RetailIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Shelf structure */}
      <rect x="30" y="60" width="220" height="8" rx="3" fill="#e2e8f0" />
      <rect x="30" y="110" width="220" height="8" rx="3" fill="#e2e8f0" />
      <rect x="30" y="160" width="220" height="8" rx="3" fill="#e2e8f0" />
      <rect x="30" y="60" width="6" height="108" rx="2" fill="#e2e8f0" />
      <rect x="244" y="60" width="6" height="108" rx="2" fill="#e2e8f0" />
      {/* Products on shelves */}
      {[50,80,110,140,170,200].map((x, i) => (
        <rect key={i} x={x} y={i % 2 === 0 ? 42 : 92} width="20" height="20" rx="3" fill={i % 3 === 0 ? '#0f172a' : i % 3 === 1 ? '#0ea5e9' : '#dc2626'} opacity="0.8" />
      ))}
      {[50,90,130,170,210].map((x, i) => (
        <rect key={i} x={x} y={92} width="18" height="20" rx="3" fill={i % 2 === 0 ? '#475569' : '#0ea5e9'} opacity="0.7" />
      ))}
      {/* Omnichannel path: Store → Digital → Customer */}
      <circle cx="60" cy="150" r="18" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="52" y="144" width="16" height="12" rx="2" fill="#94a3b8" />
      <rect x="55" y="140" width="10" height="5" rx="1" fill="#64748b" />
      <text x="60" y="175" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Store</text>
      <path d="M80 150 L100 150" stroke="#0ea5e9" strokeWidth="1.5" />
      <polygon points="98,146 106,150 98,154" fill="#0ea5e9" />
      <rect x="108" y="136" width="30" height="28" rx="6" fill="#0f172a" />
      <rect x="112" y="140" width="22" height="16" rx="3" fill="#0ea5e9" opacity="0.6" />
      <text x="123" y="172" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Digital</text>
      <path d="M140 150 L160 150" stroke="#0ea5e9" strokeWidth="1.5" />
      <polygon points="158,146 166,150 158,154" fill="#0ea5e9" />
      <circle cx="180" cy="148" r="14" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="180" cy="144" r="5" fill="#94a3b8" />
      <path d="M173 155 Q180 151 187 155" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      <text x="180" y="172" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Customer</text>
      {/* D2C label */}
      <rect x="200" y="138" width="44" height="18" rx="9" fill="#0ea5e9" opacity="0.1" stroke="#0ea5e9" strokeWidth="1" />
      <text x="222" y="151" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">D2C → GMV</text>
    </svg>
  );
}

// ── Logistics & Supply Chain ────────────────
export function LogisticsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Route map horizontal baseline */}
      <line x1="40" y1="100" x2="240" y2="100" stroke="#e2e8f0" strokeWidth="2" />
      {/* Origin hub */}
      <circle cx="50" cy="100" r="14" fill="#0f172a" />
      <text x="50" y="104" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="700">O</text>
      <text x="50" y="122" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Origin</text>
      {/* Intermediate nodes */}
      <circle cx="110" cy="75" r="10" fill="#0ea5e9" />
      <text x="110" y="79" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">WH</text>
      <text x="110" y="94" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="system-ui">Warehouse</text>
      <path d="M62 96 L102 78" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 3" />
      <circle cx="170" cy="75" r="10" fill="#0ea5e9" />
      <text x="170" y="79" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">3PL</text>
      <text x="170" y="94" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="system-ui">Partner</text>
      <path d="M118 75 L162 75" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Alternative route — below */}
      <circle cx="140" cy="130" r="10" fill="#475569" />
      <text x="140" y="134" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">LM</text>
      <text x="140" y="149" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="system-ui">Last-Mile</text>
      <path d="M62 104 L132 128" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M148 128 L224 104" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" />
      {/* Destination hub */}
      <circle cx="230" cy="100" r="14" fill="#0f172a" />
      <text x="230" y="104" textAnchor="middle" fontSize="8" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">D</text>
      <text x="230" y="122" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Dest.</text>
      <path d="M178 77 L218 96" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Truck icon */}
      <rect x="120" y="42" width="40" height="20" rx="4" fill="#0f172a" />
      <rect x="138" y="38" width="22" height="26" rx="3" fill="#334155" />
      <circle cx="125" cy="62" r="5" fill="#94a3b8" />
      <circle cx="155" cy="62" r="5" fill="#94a3b8" />
      <text x="130" y="55" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui" fontWeight="700">FLEET</text>
      {/* Cold chain badge */}
      <rect x="192" y="44" width="54" height="18" rx="9" fill="#0ea5e9" opacity="0.1" stroke="#0ea5e9" strokeWidth="1" />
      <text x="219" y="57" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">Cold Chain</text>
    </svg>
  );
}

// ── Education & EdTech ──────────────────────
export function EducationIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Pyramid tiers */}
      {/* Base: Students */}
      <path d="M40 165 L240 165 L200 135 L80 135 Z" fill="#e2e8f0" />
      <text x="140" y="155" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="system-ui" fontWeight="600">Student Body</text>
      {/* Mid: Faculty */}
      <path d="M80 135 L200 135 L172 108 L108 108 Z" fill="#94a3b8" />
      <text x="140" y="126" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="600">Faculty</text>
      {/* Upper: Admin */}
      <path d="M108 108 L172 108 L155 84 L125 84 Z" fill="#475569" />
      <text x="140" y="100" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="600">Admin</text>
      {/* Apex: Leadership */}
      <path d="M125 84 L155 84 L140 56 Z" fill="#0f172a" />
      {/* Graduation cap at apex */}
      <rect x="128" y="42" width="24" height="6" rx="1.5" fill="#0f172a" />
      <path d="M140 28 L156 42 L140 46 L124 42 Z" fill="#0f172a" />
      <path d="M156 42 L156 52" stroke="#0f172a" strokeWidth="1.5" />
      <circle cx="156" cy="54" r="2.5" fill="#dc2626" />
      <text x="140" y="82" textAnchor="middle" fontSize="6" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">Leadership</text>
      {/* EdTech panel — right side */}
      <rect x="200" y="80" width="56" height="70" rx="8" fill="#0f172a" />
      <rect x="205" y="86" width="46" height="32" rx="4" fill="#0ea5e9" opacity="0.2" />
      <rect x="209" y="90" width="14" height="3" rx="1" fill="#0ea5e9" />
      <rect x="209" y="96" width="22" height="3" rx="1" fill="#0ea5e9" opacity="0.6" />
      <rect x="209" y="102" width="18" height="3" rx="1" fill="#0ea5e9" opacity="0.4" />
      <text x="228" y="134" textAnchor="middle" fontSize="7" fill="white" fontFamily="system-ui" fontWeight="700">EdTech</text>
      <text x="228" y="144" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="system-ui">LMS / Platform</text>
      {/* Connector */}
      <path d="M172 108 L198 108" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// ── Energy & Renewables ─────────────────────
export function EnergyIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Solar panel array — left */}
      {[30,60].map((y, row) => (
        [35,57,79].map((x, col) => (
          <rect key={`${row}-${col}`} x={x} y={y + 70} width="18" height="14" rx="2" fill={row === 0 ? '#0f172a' : '#1e293b'} stroke="#0ea5e9" strokeWidth="0.5" />
        ))
      ))}
      <rect x="30" y="155" width="72" height="5" rx="2" fill="#475569" />
      <line x1="66" y1="155" x2="66" y2="168" stroke="#475569" strokeWidth="3" />
      <text x="66" y="180" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">Solar PV</text>
      {/* Wind turbine — center */}
      <line x1="140" y1="80" x2="140" y2="165" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      {/* Blades */}
      <path d="M140 80 L128 50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <path d="M140 80 L166 72" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <path d="M140 80 L132 108" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="140" cy="80" r="7" fill="#0ea5e9" />
      <text x="140" y="180" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">Wind</text>
      {/* Grid connection lines */}
      <path d="M102 148 L118 148" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M162 148 L185 148" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 3" />
      {/* Grid node */}
      <rect x="183" y="130" width="60" height="38" rx="6" fill="#0f172a" />
      <rect x="188" y="136" width="20" height="12" rx="2" fill="#0ea5e9" opacity="0.3" />
      <rect x="212" y="136" width="26" height="5" rx="1" fill="#0ea5e9" opacity="0.5" />
      <rect x="212" y="144" width="20" height="5" rx="1" fill="#0ea5e9" opacity="0.3" />
      <rect x="212" y="152" width="15" height="5" rx="1" fill="#0ea5e9" opacity="0.2" />
      <text x="213" y="178" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui" fontWeight="600">Grid / CERC</text>
      {/* Lightning bolt — energy symbol */}
      <path d="M155 38 L146 58 L154 58 L142 78 L151 60 L143 60 Z" fill="#dc2626" opacity="0.9" />
      {/* EPC label */}
      <rect x="35" y="38" width="50" height="20" rx="10" fill="#0ea5e9" opacity="0.1" stroke="#0ea5e9" strokeWidth="1" />
      <text x="60" y="52" textAnchor="middle" fontSize="8" fill="#0ea5e9" fontFamily="system-ui" fontWeight="700">EPC</text>
    </svg>
  );
}
