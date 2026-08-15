// Standard SVG Placeholder Generator matching classic image wireframe (Screenshot 2)

export const createStandardPlaceholder = (label = 'IMAGE PLACEHOLDER', width = 800, height = 500): string => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 800 500" fill="none">
<rect width="800" height="500" rx="24" fill="#12141C"/>
<rect x="2" y="2" width="796" height="496" rx="22" fill="#161822" stroke="#2D3345" stroke-width="2"/>
<path d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M200 0 V500 M400 0 V500 M600 0 V500" stroke="#1E2230" stroke-width="1.5" stroke-dasharray="6 6"/>
<g transform="translate(270, 110)" stroke="#64748B" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none">
<rect x="15" y="15" width="230" height="170" rx="28" stroke="#475569" stroke-width="14"/>
<circle cx="170" cy="70" r="22" fill="#475569" stroke="none"/>
<path d="M 30 165 L 110 80 L 160 130 L 195 95 L 230 165 Z" fill="#475569" stroke="none"/>
</g>
<text x="400" y="360" font-family="Kanit, sans-serif" font-weight="700" font-size="20" fill="#94A3B8" text-anchor="middle" letter-spacing="3">${label.toUpperCase()}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
};
