import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { testGoogleSheetsWebhook } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAdmin(req);
    const body = await req.json().catch(() => ({}));
    const toEmail = body.to || auth.user.email;

    const result = await testGoogleSheetsWebhook(toEmail);

    return NextResponse.json({
      success: result.success,
      message: result.message || (result.success ? 'Test email dispatched' : 'Failed to send test email'),
      error: result.error,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
