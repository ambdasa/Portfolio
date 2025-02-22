import { NextResponse } from 'next/server';
import { get } from '@vercel/analytics';

export async function GET() {
  try {
    const analytics = await get('views');
    return NextResponse.json({ views: analytics?.pageViews?.value || 0 });
  } catch (error) {
    return NextResponse.json({ views: 0 });
  }
} 