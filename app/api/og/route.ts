import { ImageResponse } from '@vercel/og';

export async function GET() {
  return new ImageResponse(
    <div style={{ fontSize: 60, color: 'white', background: 'black', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Reels
    </div>,
    { width: 1200, height: 630 }
  );
}