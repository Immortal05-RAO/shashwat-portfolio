// Helper utility to generate ultra-sleek, dark-themed SVG UI mockups for project placeholders

interface PlaceholderOptions {
  title: string;
  subtitle: string;
  tag: string;
  themeColor?: string;
  accentColor?: string;
  variant?: 'dashboard' | 'workflow' | 'mobile' | 'code' | 'analytics';
}

export const createProjectPlaceholder = ({
  title,
  subtitle,
  tag,
  themeColor = '#B600A8',
  accentColor = '#7621B0',
  variant = 'dashboard',
}: PlaceholderOptions): string => {
  let innerGraphic = '';

  if (variant === 'workflow') {
    // n8n / AI Agent Workflow Node Graphic
    innerGraphic = `
      <g opacity="0.85">
        <rect x="70" y="220" width="160" height="70" rx="14" fill="#1F2330" stroke="${themeColor}" stroke-width="2"/>
        <text x="90" y="250" font-family="Kanit, sans-serif" font-weight="700" font-size="14" fill="#FFF">Trigger: Webhook</text>
        <text x="90" y="270" font-family="Kanit, sans-serif" font-size="12" fill="#A0AEC0">HTTP POST Request</text>

        <path d="M 230 255 L 290 255" stroke="${themeColor}" stroke-width="3" stroke-dasharray="4 4"/>

        <rect x="290" y="220" width="170" height="70" rx="14" fill="#1F2330" stroke="${accentColor}" stroke-width="2"/>
        <text x="310" y="250" font-family="Kanit, sans-serif" font-weight="700" font-size="14" fill="#FFF">AI Agent Reasoning</text>
        <text x="310" y="270" font-family="Kanit, sans-serif" font-size="12" fill="${themeColor}">LLM Processing Pipeline</text>

        <path d="M 460 255 L 520 255" stroke="${accentColor}" stroke-width="3" stroke-dasharray="4 4"/>

        <rect x="520" y="220" width="160" height="70" rx="14" fill="#1F2330" stroke="#10B981" stroke-width="2"/>
        <text x="540" y="250" font-family="Kanit, sans-serif" font-weight="700" font-size="14" fill="#FFF">Action: Dispatch</text>
        <text x="540" y="270" font-family="Kanit, sans-serif" font-size="12" fill="#10B981">Automated System Exec</text>
      </g>
    `;
  } else if (variant === 'analytics') {
    // E-Commerce / Intent Analytics Bar & Line Chart Graphic
    innerGraphic = `
      <g opacity="0.85">
        <!-- Bars -->
        <rect x="80" y="320" width="30" height="90" rx="6" fill="${themeColor}" opacity="0.6"/>
        <rect x="130" y="260" width="30" height="150" rx="6" fill="${themeColor}"/>
        <rect x="180" y="220" width="30" height="190" rx="6" fill="${accentColor}"/>
        <rect x="230" y="290" width="30" height="120" rx="6" fill="${themeColor}" opacity="0.8"/>
        <rect x="280" y="190" width="30" height="220" rx="6" fill="#10B981"/>
        <!-- Intent Line -->
        <path d="M 70 300 Q 150 180 230 240 T 400 150 T 520 120" fill="none" stroke="#60A5FA" stroke-width="4"/>
        <circle cx="520" cy="120" r="6" fill="#60A5FA"/>
        <!-- Score Card -->
        <rect x="550" y="140" width="190" height="140" rx="16" fill="#1F2330" stroke="#374151"/>
        <text x="570" y="180" font-family="Kanit, sans-serif" font-weight="800" font-size="28" fill="#10B981">98.4%</text>
        <text x="570" y="205" font-family="Kanit, sans-serif" font-size="12" fill="#A0AEC0">Intent Score Model</text>
        <text x="570" y="240" font-family="Kanit, sans-serif" font-weight="600" font-size="13" fill="#FFF">Real-time Shopify Sync</text>
      </g>
    `;
  } else if (variant === 'mobile') {
    // QR Code / Mobile App UI Layout Graphic
    innerGraphic = `
      <g opacity="0.85">
        <!-- Phone Frame -->
        <rect x="100" y="130" width="180" height="320" rx="24" fill="#1A1D26" stroke="${themeColor}" stroke-width="3"/>
        <rect x="150" y="142" width="80" height="14" rx="7" fill="#0C0C0C"/>
        <!-- QR Screen -->
        <rect x="120" y="170" width="140" height="140" rx="12" fill="#FFFFFF"/>
        <rect x="135" y="185" width="40" height="40" fill="#0C0C0C"/>
        <rect x="205" y="185" width="40" height="40" fill="#0C0C0C"/>
        <rect x="135" y="255" width="40" height="40" fill="#0C0C0C"/>
        <rect x="145" y="195" width="20" height="20" fill="#FFFFFF"/>
        <rect x="215" y="195" width="20" height="20" fill="#FFFFFF"/>
        <!-- Admin Dashboard Frame -->
        <rect x="320" y="140" width="420" height="300" rx="16" fill="#1F2330" stroke="#374151"/>
        <rect x="340" y="165" width="180" height="24" rx="6" fill="${accentColor}" opacity="0.8"/>
        <text x="350" y="182" font-family="Kanit, sans-serif" font-weight="700" font-size="12" fill="#FFF">Live Orders Dashboard</text>
        <rect x="340" y="210" width="380" height="45" rx="10" fill="#2B3040"/>
        <rect x="340" y="265" width="380" height="45" rx="10" fill="#2B3040"/>
        <rect x="340" y="320" width="380" height="45" rx="10" fill="#2B3040"/>
      </g>
    `;
  } else if (variant === 'code') {
    // Security Middleware & Token Rotation Code Graphic
    innerGraphic = `
      <g opacity="0.85">
        <rect x="80" y="140" width="640" height="300" rx="16" fill="#141720" stroke="#2E3444"/>
        <text x="110" y="185" font-family="monospace" font-size="15" fill="#F472B6">const authSecurity = async (req, res, next) =&gt; {</text>
        <text x="140" y="220" font-family="monospace" font-size="14" fill="#60A5FA">  const refreshToken = req.cookies.refreshToken;</text>
        <text x="140" y="250" font-family="monospace" font-size="14" fill="#34D399">  const isValid = await verifyTokenRotation(refreshToken);</text>
        <text x="140" y="280" font-family="monospace" font-size="14" fill="#FBBF24">  if (!isValid) return res.status(401).json({ error: 'Lockout' });</text>
        <text x="140" y="310" font-family="monospace" font-size="14" fill="#A78BFA">  await zodSchema.parseAsync(req.body);</text>
        <text x="140" y="340" font-family="monospace" font-size="14" fill="#E5E7EB">  return next();</text>
        <text x="110" y="375" font-family="monospace" font-size="15" fill="#F472B6">};</text>
      </g>
    `;
  } else {
    // Standard SaaS Dashboard Wireframe
    innerGraphic = `
      <g opacity="0.85">
        <rect x="80" y="140" width="180" height="290" rx="14" fill="#1A1D26" stroke="#2B2F3D"/>
        <rect x="100" y="170" width="140" height="16" rx="4" fill="${themeColor}" opacity="0.7"/>
        <rect x="100" y="200" width="120" height="12" rx="4" fill="#2B2F3D"/>
        <rect x="100" y="225" width="140" height="12" rx="4" fill="#2B2F3D"/>
        <rect x="100" y="250" width="110" height="12" rx="4" fill="#2B2F3D"/>

        <rect x="280" y="140" width="440" height="135" rx="14" fill="#1A1D26" stroke="#2B2F3D"/>
        <text x="310" y="185" font-family="Kanit, sans-serif" font-weight="700" font-size="22" fill="#FFFFFF">System Architecture</text>
        <text x="310" y="215" font-family="Kanit, sans-serif" font-size="14" fill="#A0AEC0">Microservices & AI Workflows</text>

        <rect x="280" y="295" width="210" height="135" rx="14" fill="#1A1D26" stroke="#2B2F3D"/>
        <rect x="510" y="295" width="210" height="135" rx="14" fill="#1A1D26" stroke="#2B2F3D"/>
      </g>
    `;
  }

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
      <rect width="800" height="500" rx="28" fill="#0F1015"/>
      <rect width="800" height="500" rx="28" fill="url(#grad)" opacity="0.4"/>
      
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
          <stop stop-color="${themeColor}" stop-opacity="0.3"/>
          <stop offset="0.5" stop-color="${accentColor}" stop-opacity="0.15"/>
          <stop offset="1" stop-color="#0C0C0C" stop-opacity="0.95"/>
        </linearGradient>
      </defs>

      <!-- Window Bar -->
      <rect x="30" y="24" width="740" height="42" rx="12" fill="#161822" stroke="#2A2E3D"/>
      <circle cx="58" cy="45" r="5.5" fill="#EF4444"/>
      <circle cx="78" cy="45" r="5.5" fill="#F59E0B"/>
      <circle cx="98" cy="45" r="5.5" fill="#10B981"/>
      
      <rect x="130" y="34" width="180" height="22" rx="6" fill="#252A38"/>
      <text x="145" y="49" font-family="Kanit, sans-serif" font-size="11" font-weight="600" fill="#A0AEC0" letter-spacing="1">https://${title.toLowerCase().replace(/\s+/g, '')}.app</text>

      <!-- Badge Tag -->
      <rect x="620" y="34" width="130" height="22" rx="11" fill="${themeColor}" opacity="0.3"/>
      <text x="685" y="49" font-family="Kanit, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${tag.toUpperCase()}</text>

      <!-- Header Titles -->
      <text x="50" y="102" font-family="Kanit, sans-serif" font-weight="900" font-size="26" fill="#FFFFFF" letter-spacing="-0.5">${title.toUpperCase()}</text>
      <text x="50" y="122" font-family="Kanit, sans-serif" font-size="13" font-weight="500" fill="#94A3B8">${subtitle}</text>

      <!-- Inner Variant Mockup Graphic -->
      ${innerGraphic}
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
};
