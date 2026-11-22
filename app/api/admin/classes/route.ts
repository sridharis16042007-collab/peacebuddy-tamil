import { NextRequest, NextResponse } from 'next/server';
import { getAllClasses } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await requireAdmin(req);

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || undefined;
    const date = searchParams.get('date') || undefined;
    const status = searchParams.get('status') || undefined;

    const classes = await getAllClasses({ search, date, status, includePast: true });

    // Compute metrics
    const now = new Date();
    const nowISO = now.toISOString();

    const metrics = {
      total: classes.length,
      upcoming: classes.filter((c) => c.status !== 'cancelled' && `${c.date}T${c.start_time}` >= nowISO.slice(0, 16)).length,
      postponed: classes.filter((c) => c.status === 'postponed').length,
      cancelled: classes.filter((c) => c.status === 'cancelled').length,
    };

    return NextResponse.json({
      success: true,
      metrics,
      classes,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
