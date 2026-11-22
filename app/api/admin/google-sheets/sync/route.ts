import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { getAllCustomers, getAllClasses } from '@/lib/db';
import {
  syncAllCustomersToGoogleSheets,
  syncAllClassesToGoogleSheets,
} from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    await requireAdmin(req);

    const customers = await getAllCustomers();
    const classes = await getAllClasses();

    const customerRes = await syncAllCustomersToGoogleSheets(customers);
    const classesRes = await syncAllClassesToGoogleSheets(classes);

    return NextResponse.json({
      success: true,
      message: `Synced ${customers.length} customers and ${classes.length} classes to Google Sheets`,
      details: {
        customers: customerRes,
        classes: classesRes,
      },
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
