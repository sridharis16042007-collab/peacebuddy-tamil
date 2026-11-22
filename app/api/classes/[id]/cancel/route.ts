import { NextRequest, NextResponse } from 'next/server';
import { cancelClass, getClassById } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { sendClassNotification } from '@/lib/email';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin(req);
    const { id } = await params;
    const body = await req.json().catch(() => ({}));

    const existing = await getClassById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: 'வகுப்பு கிடைக்கவில்லை (Class not found)' }, { status: 404 });
    }

    const updated = await cancelClass(id, {
      cancel_reason: body.cancel_reason?.trim(),
    });

    // Send email notification for cancellation
    const siteUrl = req.nextUrl.origin;
    sendClassNotification({
      classItem: updated,
      type: 'cancelled',
      siteUrl,
    }).catch((err) => console.error('Background cancel email error:', err));

    return NextResponse.json({
      success: true,
      message: 'வகுப்பு ரத்து செய்யப்பட்டது (Class marked as cancelled)',
      class: updated,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
