import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { getSettings, updateSettings } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    await requireAdmin(req);
    const settings = await getSettings();
    return NextResponse.json({ success: true, settings });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin(req);
    const body = await req.json();
    const { google_sheets_url, site_url } = body;

    const updated = await updateSettings({
      google_sheets_url,
      site_url,
    });

    return NextResponse.json({
      success: true,
      settings: updated,
      message: 'Settings updated successfully',
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
