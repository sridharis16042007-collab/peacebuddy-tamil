import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwLSuVu2aJ90owifFMXYhRt3YNZ4C8uNguYopWnNBcgowXKZ0vLr7FpbNzluejFKH6-lg/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const payload = {
      type: 'Newsletter Registration',
      name: name || 'Anonymous',
      email: email.trim(),
      message: 'Subscribed to free peace guide from Home Page',
      timestamp: new Date().toISOString(),
    };

    console.log(`[Newsletter Registration] Processing: ${email}`);

    // Forward to Google Apps Script / Google Sheet
    try {
      const googleRes = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log(`[Google Sheet Sync] Status: ${googleRes.status}`);
    } catch (sheetErr) {
      console.error('[Google Sheet Sync Error - Non-fatal]:', sheetErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Subscription successful. Welcome to Peace Buddy Tamil.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
