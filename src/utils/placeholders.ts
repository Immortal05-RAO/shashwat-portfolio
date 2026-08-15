// Robust, Base64-encoded SVG Placeholder Generator matching classic image wireframe (Screenshot 2)

export const createStandardPlaceholder = (label = 'IMAGE PLACEHOLDER', width = 800, height = 500): string => {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 800 500" fill="none">
      <!-- Dark Theme Container Background -->
      <rect width="800" height="500" rx="24" fill="#12141C"/>
      <rect x="2" y="2" width="796" height="496" rx="22" fill="#161822" stroke="#2D3345" stroke-width="2"/>
      
      <!-- Subtle Grid Pattern -->
      <path d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M200 0 V500 M400 0 V500 M600 0 V500" stroke="#1E2230" stroke-width="1.5" stroke-dasharray="6 6"/>

      <!-- Classic Picture Placeholder Graphic (Screenshot 2) -->
      <g transform="translate(270, 110)" stroke="#64748B" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Rounded Image Box Frame -->
        <rect x="15" y="15" width="230" height="170" rx="28" stroke="#475569" stroke-width="14"/>
        <!-- Sun Circle -->
        <circle cx="170" cy="70" r="22" fill="#475569" stroke="none"/>
        <!-- Mountain Peak Path -->
        <path d="M 30 165 L 110 80 L 160 130 L 195 95 L 230 165 Z" fill="#475569" stroke="none"/>
      </g>

      <!-- Label Text -->
      <text x="400" y="360" font-family="Kanit, sans-serif" font-weight="700" font-size="20" fill="#94A3B8" text-anchor="middle" letter-spacing="3">${label.toUpperCase()}</text>
    </svg>
  `;

  // Encode safely to Base64 to prevent any URI parsing failures
  const base64Svg = typeof window !== 'undefined' && window.btoa 
    ? window.btoa(unescape(encodeURIComponent(svgString)))
    : Buffer.from(svgString).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
};
