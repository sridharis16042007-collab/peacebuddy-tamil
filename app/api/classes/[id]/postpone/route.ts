import { NextRequest, NextResponse } from 'next/server';
import { postponeClass, getClassById } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { sendClassNotification } from '@/lib/email';

const GOOGLE_MEET_REGEX = /^https:\/\/meet\.google\.com\/[a-zA-Z0-9\-_]+(\?.*)?$/;

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin(req);
    const { id } = await params;
    const body = await req.json();

    const { new_date, new_start_time, new_meet_link, postpone_reason } = body;

    if (!new_date) {
      return NextResponse.json({ success: false, error: 'புதிய தேதி தேவை (New date is required)' }, { status: 400 });
    }
    if (!new_start_time) {
      return NextResponse.json({ success: false, error: 'புதிய தொடக்க நேரம் தேவை (New start time is required)' }, { status: 400 });
    }

    // Validate that new date/time is in the future
    const newDateTime = new Date(`${new_date}T${new_start_time}:00`);
    const now = new Date();
    if (isNaN(newDateTime.getTime()) || newDateTime <= now) {
      return NextResponse.json(
        { success: false, error: 'ஒத்திவைக்கப்பட்ட நேரம் எதிர்காலத்தில் இருக்க வேண்டும் (New date/time must be in the future)' },
        { status: 400 }
      );
    }

    if (new_meet_link && new_meet_link.trim() && !GOOGLE_MEET_REGEX.test(new_meet_link.trim())) {
      return NextResponse.json(
        { success: false, error: 'முறையான Google Meet இணைப்பு தேவை (Invalid Google Meet URL)' },
        { status: 400 }
      );
    }

    const existing = await getClassById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: 'வகுப்பு கிடைக்கவில்லை (Class not found)' }, { status: 404 });
    }

    const updated = await postponeClass(id, {
      new_date,
      new_start_time,
      new_meet_link: new_meet_link?.trim(),
      postpone_reason: postpone_reason?.trim(),
    });

    // Send email notification for postponement
    const siteUrl = req.nextUrl.origin;
    sendClassNotification({
      classItem: updated,
      type: 'postponed',
      siteUrl,
    }).catch((err) => console.error('Background postpone email error:', err));

    return NextResponse.json({
      success: true,
      message: 'வகுப்பு வெற்றிகரமாக ஒத்திவைக்கப்பட்டது! (Class postponed successfully)',
      class: updated,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
