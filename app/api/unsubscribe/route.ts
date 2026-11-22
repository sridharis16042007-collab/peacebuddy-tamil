import { NextRequest, NextResponse } from 'next/server';
import { unsubscribeEmail } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const changed = await unsubscribeEmail(email);
    return NextResponse.json({
      success: true,
      message: changed
        ? 'You have successfully unsubscribed from class notification emails.'
        : 'Email was not found or already unsubscribed.',
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  if (email) {
    await unsubscribeEmail(email);
  }
  return NextResponse.redirect(new URL(`/unsubscribe?email=${encodeURIComponent(email || '')}`, req.url));
}
