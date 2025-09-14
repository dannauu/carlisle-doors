import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Create a carriage house garage door SVG
  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="carriageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#DEB887;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#CD853F;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Main door background -->
      <rect width="300" height="200" fill="url(#carriageGradient)" stroke="#4A2C17" stroke-width="3"/>
      
      <!-- Wood panel texture -->
      <rect x="20" y="20" width="260" height="160" fill="url(#woodGradient)" stroke="#4A2C17" stroke-width="2"/>
      
      <!-- Vertical wood planks -->
      <line x1="50" y1="20" x2="50" y2="180" stroke="#8B4513" stroke-width="2"/>
      <line x1="100" y1="20" x2="100" y2="180" stroke="#8B4513" stroke-width="2"/>
      <line x1="150" y1="20" x2="150" y2="180" stroke="#8B4513" stroke-width="2"/>
      <line x1="200" y1="20" x2="200" y2="180" stroke="#8B4513" stroke-width="2"/>
      <line x1="250" y1="20" x2="250" y2="180" stroke="#8B4513" stroke-width="2"/>
      
      <!-- Horizontal cross beams -->
      <line x1="20" y1="60" x2="280" y2="60" stroke="#8B4513" stroke-width="3"/>
      <line x1="20" y1="120" x2="280" y2="120" stroke="#8B4513" stroke-width="3"/>
      
      <!-- Carriage house hardware -->
      <circle cx="80" cy="100" r="12" fill="#C0C0C0" stroke="#808080" stroke-width="2"/>
      <circle cx="80" cy="100" r="6" fill="#E0E0E0"/>
      <circle cx="220" cy="100" r="12" fill="#C0C0C0" stroke="#808080" stroke-width="2"/>
      <circle cx="220" cy="100" r="6" fill="#E0E0E0"/>
      
      <!-- Decorative X pattern -->
      <line x1="30" y1="30" x2="70" y2="70" stroke="#8B4513" stroke-width="2"/>
      <line x1="70" y1="30" x2="30" y2="70" stroke="#8B4513" stroke-width="2"/>
      <line x1="230" y1="30" x2="270" y2="70" stroke="#8B4513" stroke-width="2"/>
      <line x1="270" y1="30" x2="230" y2="70" stroke="#8B4513" stroke-width="2"/>
      
      <!-- Bottom decorative panel -->
      <rect x="30" y="140" width="240" height="30" fill="none" stroke="#8B4513" stroke-width="2"/>
      <line x1="30" y1="155" x2="270" y2="155" stroke="#8B4513" stroke-width="1"/>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
