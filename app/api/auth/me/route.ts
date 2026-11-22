import { NextRequest, NextResponse } from 'next/server';
import { getAuthContext } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthContext(req);
    if (!auth) {
      return NextResponse.json({ authenticated: false, user: null, role: null });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: auth.user.id,
        email: auth.user.email,
        name: auth.user.name,
      },
      role: auth.role,
    });
  } catch (err: any) {
    return NextResponse.json({ authenticated: false, error: err.message });
  }
}
