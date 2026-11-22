import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { getAllCustomers, updateCustomerPayment } from '@/lib/db';
import { syncCustomerToGoogleSheets } from '@/lib/googleSheets';

export async function GET(req: NextRequest) {
  try {
    await requireAdmin(req);
    const customers = await getAllCustomers();

    const paidCount = customers.filter((c) => c.is_paid).length;
    const unpaidCount = customers.length - paidCount;

    return NextResponse.json({
      success: true,
      customers,
      metrics: {
        total: customers.length,
        paidCount,
        unpaidCount,
      },
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin(req);
    const body = await req.json();
    const { userId, isPaid, notes } = body;

    if (!userId || isPaid === undefined) {
      return NextResponse.json(
        { success: false, error: 'userId and isPaid are required' },
        { status: 400 }
      );
    }

    const updated = await updateCustomerPayment(userId, Boolean(isPaid), notes);

    // Sync updated customer payment status to Google Sheets automatically
    syncCustomerToGoogleSheets(updated).catch((err) =>
      console.error('Failed to sync updated customer to Google Sheets:', err)
    );

    return NextResponse.json({
      success: true,
      customer: updated,
      message: `Customer payment marked as ${isPaid ? 'PAID' : 'UNPAID'}`,
    });
  } catch (err: any) {
    const status = err.message.includes('Forbidden') ? 403 : 401;
    return NextResponse.json({ success: false, error: err.message }, { status });
  }
}
