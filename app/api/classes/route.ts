import { NextRequest, NextResponse } from 'next/server';
import { getAllClasses, createClass } from '@/lib/db';
import { getAuthContext, requireAdmin } from '@/lib/auth';
import { sendClassNotification } from '@/lib/email';

// Google Meet URL validation regex
const GOOGLE_MEET_REGEX = /^https:\/\/meet\.google\.com\/[a-zA-Z0-9\-_]+(\?.*)?$/;

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthContext(req);
    const isLoggedIn = !!auth;
    const isPaid = auth?.role === 'admin' ? true : Boolean(auth?.user?.is_paid);
    const paymentStatus = auth?.role === 'admin' ? 'paid' : (auth?.user?.payment_status || (isPaid ? 'paid' : 'unpaid'));

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || undefined;
    const date = searchParams.get('date') || undefined;
    const status = searchParams.get('status') || undefined;

    const allClasses = await getAllClasses({ search, date, status });

    // Sanitize classes: hide meet_link for anonymous users or unpaid customers
    const sanitized = allClasses.map((cls) => {
      if (isLoggedIn && (isPaid || auth?.role === 'admin')) {
        return cls;
      }
      return {
        ...cls,
        meet_link: '', // Masked for non-logged in or unpaid users
      };
    });

    return NextResponse.json({
      success: true,
      isLoggedIn,
      isPaid,
      paymentStatus,
      userRole: auth?.role || null,
      classes: sanitized,
    });
  } catch (err: any) {
    console.error('Error fetching classes:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to fetch classes' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAdmin(req);
    const body = await req.json();

    const { name, description, date, start_time, duration_minutes, meet_link } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ success: false, error: 'வகுப்பு பெயர் தேவை (Class name is required)' }, { status: 400 });
    }
    if (!date) {
      return NextResponse.json({ success: false, error: 'தேதி தேவை (Date is required)' }, { status: 400 });
    }
    if (!start_time) {
      return NextResponse.json({ success: false, error: 'தொடக்க நேரம் தேவை (Start time is required)' }, { status: 400 });
    }
    const duration = Number(duration_minutes);
    if (!duration || duration <= 0) {
      return NextResponse.json({ success: false, error: 'கால அளவு தேவை (Duration must be greater than 0)' }, { status: 400 });
    }
    if (!meet_link || !GOOGLE_MEET_REGEX.test(meet_link.trim())) {
      return NextResponse.json(
        { success: false, error: 'முறையான Google Meet இணைப்பு தேவை (Must be a valid https://meet.google.com/... URL)' },
        { status: 400 }
      );
    }

    const newClass = await createClass({
      name: name.trim(),
      description: (description || '').trim(),
      date,
      start_time,
      duration_minutes: duration,
      meet_link: meet_link.trim(),
      created_by: auth.user.id,
    });

    // Send automatic email notification in background
    const siteUrl = req.nextUrl.origin;
    sendClassNotification({
      classItem: newClass,
      type: 'created',
      siteUrl,
    }).catch((err) => console.error('Background email notification error:', err));

    return NextResponse.json({
      success: true,
      message: 'வகுப்பு வெற்றிகரமாக உருவாக்கப்பட்டது! (Class added successfully)',
      class: newClass,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
