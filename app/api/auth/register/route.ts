import { NextRequest, NextResponse } from 'next/server';
import { createUser, createSession } from '@/lib/db';
import { setSessionCookie } from '@/lib/auth';
import { syncCustomerToGoogleSheets } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    const { user, role } = await createUser({
      email,
      password,
      name,
      role: 'customer',
    });

    // Automatically sync new customer to Google Sheets
    syncCustomerToGoogleSheets(user).catch((err) =>
      console.error('Failed to sync new customer to Google Sheets:', err)
    );

    const token = await createSession(user.id);
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      role,
    });

    setSessionCookie(response, token);
    return response;
  } catch (err: any) {
    console.error('Registration error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Registration failed' },
      { status: 400 }
    );
  }
}
