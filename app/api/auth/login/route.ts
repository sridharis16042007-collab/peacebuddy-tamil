import { NextRequest, NextResponse } from 'next/server';
import { authenticateCredentials, setSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const auth = await authenticateCredentials(email, password);
    if (!auth) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: {
        id: auth.user.id,
        email: auth.user.email,
        name: auth.user.name,
      },
      role: auth.role,
    });

    setSessionCookie(response, auth.token);
    return response;
  } catch (err: any) {
    console.error('Login error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
