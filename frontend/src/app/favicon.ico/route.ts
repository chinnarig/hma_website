import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Try to serve the actual favicon.ico if it exists
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
    
    if (fs.existsSync(faviconPath)) {
      const fileBuffer = fs.readFileSync(faviconPath);
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'image/x-icon',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
    
    // Fallback: serve the SVG logo as ICO (some browsers accept this)
    const logoSvgPath = path.join(process.cwd(), 'public', 'logos', 'logo_tab.svg');
    if (fs.existsSync(logoSvgPath)) {
      const svgBuffer = fs.readFileSync(logoSvgPath);
      return new NextResponse(svgBuffer, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
    
    // Last resort: return 404
    return new NextResponse(null, { status: 404 });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 500 });
  }
}

