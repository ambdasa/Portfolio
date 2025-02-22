import { NextResponse } from 'next/server';
import Analytics from '@vercel/analytics';

export async function GET() {
  try {
    return NextResponse.json({ views: 0 });
  } catch (error) {
    return NextResponse.json({ views: 0 });
  }
} 