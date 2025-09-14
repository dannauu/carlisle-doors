import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Create a modern garage door SVG
  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#34495E;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3498DB;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2980B9;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Main door background -->
      <rect width="300" height="200" fill="url(#modernGradient)" stroke="#1A252F" stroke-width="2"/>
      
      <!-- Horizontal panels -->
      <rect x="20" y="20" width="260" height="35" fill="url(#accentGradient)" stroke="#1A252F" stroke-width="1"/>
      <rect x="20" y="65" width="260" height="35" fill="url(#modernGradient)" stroke="#1A252F" stroke-width="1"/>
      <rect x="20" y="110" width="260" height="35" fill="url(#accentGradient)" stroke="#1A252F" stroke-width="1"/>
      <rect x="20" y="155" width="260" height="25" fill="url(#modernGradient)" stroke="#1A252F" stroke-width="1"/>
      
      <!-- Vertical accent lines -->
      <line x1="50" y1="20" x2="50" y2="180" stroke="#3498DB" stroke-width="2"/>
      <line x1="150" y1="20" x2="150" y2="180" stroke="#3498DB" stroke-width="2"/>
      <line x1="250" y1="20" x2="250" y2="180" stroke="#3498DB" stroke-width="2"/>
      
      <!-- Modern handle -->
      <rect x="270" y="90" width="20" height="20" fill="#E74C3C" stroke="#C0392B" stroke-width="1" rx="3"/>
      <rect x="275" y="95" width="10" height="10" fill="#F39C12"/>
      
      <!-- Tech-style elements -->
      <circle cx="80" cy="40" r="3" fill="#3498DB"/>
      <circle cx="220" cy="40" r="3" fill="#3498DB"/>
      <circle cx="80" cy="130" r="3" fill="#3498DB"/>
      <circle cx="220" cy="130" r="3" fill="#3498DB"/>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
