import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie, extractToken } from '@/lib/auth';
import { deleteSession } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const token = extractToken(req);
    if (token) {
      await deleteSession(token);
    }
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
    clearSessionCookie(response);
    return response;
  } catch (err: any) {
    const response = NextResponse.json({ success: true });
    clearSessionCookie(response);
    return response;
  }
}
