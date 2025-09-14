import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const panelColor = searchParams.get('panelColor') || '#FFFFFF';
  const frameColor = searchParams.get('frameColor') || '#8B7355';
  const width = parseInt(searchParams.get('width') || '300');
  const height = parseInt(searchParams.get('height') || '200');

  // Create a realistic traditional recessed panel door SVG based on Clopay design
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Frame gradient -->
        <linearGradient id="frameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${frameColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustBrightness(frameColor, -15)};stop-opacity:1" />
        </linearGradient>
        
        <!-- Panel gradient for depth -->
        <linearGradient id="panelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${adjustBrightness(panelColor, 5)};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustBrightness(panelColor, -5)};stop-opacity:1" />
        </linearGradient>
        
        <!-- Shadow for recessed effect -->
        <filter id="panelShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" flood-color="rgba(0,0,0,0.2)"/>
        </filter>
        
        <!-- Inner shadow for recessed panels -->
        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood flood-color="rgba(0,0,0,0.05)"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      
      <!-- Main door frame -->
      <rect width="${width}" height="${height}" fill="url(#frameGradient)" stroke="${adjustBrightness(frameColor, -30)}" stroke-width="3"/>
      
      <!-- Top panel -->
      <rect x="25" y="25" width="${width-50}" height="45" fill="url(#panelGradient)" stroke="${adjustBrightness(panelColor, -20)}" stroke-width="1" rx="2" filter="url(#panelShadow)"/>
      
      <!-- Middle panel -->
      <rect x="25" y="80" width="${width-50}" height="45" fill="url(#panelGradient)" stroke="${adjustBrightness(panelColor, -20)}" stroke-width="1" rx="2" filter="url(#panelShadow)"/>
      
      <!-- Bottom panel -->
      <rect x="25" y="135" width="${width-50}" height="35" fill="url(#panelGradient)" stroke="${adjustBrightness(panelColor, -20)}" stroke-width="1" rx="2" filter="url(#panelShadow)"/>
      
      <!-- Horizontal dividers between panels -->
      <rect x="20" y="72" width="${width-40}" height="2" fill="${adjustBrightness(frameColor, -40)}"/>
      <rect x="20" y="127" width="${width-40}" height="2" fill="${adjustBrightness(frameColor, -40)}"/>
      
      <!-- Panel recesses (inset effect) -->
      <rect x="30" y="30" width="${width-60}" height="35" fill="none" stroke="${adjustBrightness(panelColor, -15)}" stroke-width="0.5" rx="1"/>
      <rect x="30" y="85" width="${width-60}" height="35" fill="none" stroke="${adjustBrightness(panelColor, -15)}" stroke-width="0.5" rx="1"/>
      <rect x="30" y="140" width="${width-60}" height="25" fill="none" stroke="${adjustBrightness(panelColor, -15)}" stroke-width="0.5" rx="1"/>
      
      <!-- Subtle texture lines -->
      <g opacity="0.1">
        <line x1="30" y1="35" x2="${width-30}" y2="35" stroke="${panelColor}" stroke-width="0.5"/>
        <line x1="30" y1="40" x2="${width-30}" y2="40" stroke="${panelColor}" stroke-width="0.5"/>
        <line x1="30" y1="90" x2="${width-30}" y2="90" stroke="${panelColor}" stroke-width="0.5"/>
        <line x1="30" y1="95" x2="${width-30}" y2="95" stroke="${panelColor}" stroke-width="0.5"/>
        <line x1="30" y1="145" x2="${width-30}" y2="145" stroke="${panelColor}" stroke-width="0.5"/>
        <line x1="30" y1="150" x2="${width-30}" y2="150" stroke="${panelColor}" stroke-width="0.5"/>
      </g>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}

function adjustBrightness(color: string, percent: number): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const newR = Math.max(0, Math.min(255, r + (r * percent / 100)));
  const newG = Math.max(0, Math.min(255, g + (g * percent / 100)));
  const newB = Math.max(0, Math.min(255, b + (b * percent / 100)));
  
  return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
}