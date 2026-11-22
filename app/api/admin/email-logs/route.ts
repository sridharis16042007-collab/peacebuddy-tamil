import { NextRequest, NextResponse } from 'next/server';
import { getEmailLogs } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await requireAdmin(req);
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get('limit')) || 100;

    const logs = await getEmailLogs(limit);
    return NextResponse.json({
      success: true,
      logs,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : err.message.includes('Unauthorized') ? 401 : 500;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
