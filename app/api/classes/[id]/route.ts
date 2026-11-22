import { NextRequest, NextResponse } from 'next/server';
import { updateClass, deleteClass, getClassById } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { sendClassNotification } from '@/lib/email';

const GOOGLE_MEET_REGEX = /^https:\/\/meet\.google\.com\/[a-zA-Z0-9\-_]+(\?.*)?$/;

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin(req);
    const { id } = await params;
    const body = await req.json();

    const existing = await getClassById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: 'வகுப்பு கிடைக்கவில்லை (Class not found)' }, { status: 404 });
    }

    if (body.meet_link && !GOOGLE_MEET_REGEX.test(body.meet_link.trim())) {
      return NextResponse.json(
        { success: false, error: 'முறையான Google Meet இணைப்பு தேவை (Invalid Google Meet URL)' },
        { status: 400 }
      );
    }

    const updated = await updateClass(id, {
      name: body.name?.trim(),
      description: body.description !== undefined ? body.description.trim() : undefined,
      date: body.date,
      start_time: body.start_time,
      duration_minutes: body.duration_minutes ? Number(body.duration_minutes) : undefined,
      meet_link: body.meet_link?.trim(),
    });

    // Send email notification for update
    const siteUrl = req.nextUrl.origin;
    sendClassNotification({
      classItem: updated,
      type: 'updated',
      siteUrl,
    }).catch((err) => console.error('Background email update error:', err));

    return NextResponse.json({
      success: true,
      message: 'வகுப்பு விவரங்கள் புதுப்பிக்கப்பட்டன! (Class updated successfully)',
      class: updated,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin(req);
    const { id } = await params;

    const existing = await getClassById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: 'வகுப்பு கிடைக்கவில்லை (Class not found)' }, { status: 404 });
    }

    const deleted = await deleteClass(id);
    return NextResponse.json({
      success: deleted,
      message: 'வகுப்பு வெற்றிகரமாக நீக்கப்பட்டது (Class deleted successfully)',
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
