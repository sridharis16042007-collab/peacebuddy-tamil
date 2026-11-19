import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwLSuVu2aJ90owifFMXYhRt3YNZ4C8uNguYopWnNBcgowXKZ0vLr7FpbNzluejFKH6-lg/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    const payload = {
      type: 'Direct Contact Inquiry',
      name: name || 'Anonymous',
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    console.log(`[Contact Submission] Processing: ${email}`);

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
        message: 'Message received. We will respond peacefully soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
