import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Create a glass garage door SVG
  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#34495E;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2C3E50;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ECF0F1;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#BDC3C7;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#95A5A6;stop-opacity:0.2" />
        </linearGradient>
      </defs>
      
      <!-- Main door frame -->
      <rect width="300" height="200" fill="url(#glassGradient)" stroke="#1A252F" stroke-width="3"/>
      
      <!-- Glass panels -->
      <rect x="20" y="20" width="120" height="70" fill="#2C3E50" stroke="#1A252F" stroke-width="2"/>
      <rect x="160" y="20" width="120" height="70" fill="#2C3E50" stroke="#1A252F" stroke-width="2"/>
      <rect x="20" y="110" width="120" height="70" fill="#2C3E50" stroke="#1A252F" stroke-width="2"/>
      <rect x="160" y="110" width="120" height="70" fill="#2C3E50" stroke="#1A252F" stroke-width="2"/>
      
      <!-- Glass reflections -->
      <rect x="25" y="25" width="110" height="60" fill="url(#glassReflection)" stroke="none"/>
      <rect x="165" y="25" width="110" height="60" fill="url(#glassReflection)" stroke="none"/>
      <rect x="25" y="115" width="110" height="60" fill="url(#glassReflection)" stroke="none"/>
      <rect x="165" y="115" width="110" height="60" fill="url(#glassReflection)" stroke="none"/>
      
      <!-- Metal frame details -->
      <rect x="15" y="15" width="130" height="80" fill="none" stroke="#7F8C8D" stroke-width="2"/>
      <rect x="155" y="15" width="130" height="80" fill="none" stroke="#7F8C8D" stroke-width="2"/>
      <rect x="15" y="105" width="130" height="80" fill="none" stroke="#7F8C8D" stroke-width="2"/>
      <rect x="155" y="105" width="130" height="80" fill="none" stroke="#7F8C8D" stroke-width="2"/>
      
      <!-- Center divider -->
      <line x1="150" y1="20" x2="150" y2="180" stroke="#7F8C8D" stroke-width="3"/>
      
      <!-- Modern handle -->
      <rect x="270" y="90" width="20" height="20" fill="#E74C3C" stroke="#C0392B" stroke-width="1" rx="3"/>
      <rect x="275" y="95" width="10" height="10" fill="#F39C12"/>
      
      <!-- Glass highlights -->
      <line x1="30" y1="30" x2="130" y2="30" stroke="#ECF0F1" stroke-width="1" opacity="0.5"/>
      <line x1="30" y1="35" x2="130" y2="35" stroke="#ECF0F1" stroke-width="1" opacity="0.3"/>
      <line x1="170" y1="30" x2="270" y2="30" stroke="#ECF0F1" stroke-width="1" opacity="0.5"/>
      <line x1="170" y1="35" x2="270" y2="35" stroke="#ECF0F1" stroke-width="1" opacity="0.3"/>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
