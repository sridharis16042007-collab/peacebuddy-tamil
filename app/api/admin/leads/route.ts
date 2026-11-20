import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

function readJsonFile(filePath: string) {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return [];
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get('pin');

  // Simple secure PIN check (default: 14416 or custom)
  if (pin !== '14416' && pin !== 'peace2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const subscribers = readJsonFile(SUBSCRIBERS_FILE);
  const messages = readJsonFile(MESSAGES_FILE);

  // Combine into unified lead list
  const leads = [
    ...subscribers.map((s: any, idx: number) => ({
      id: `sub-${idx}-${s.createdAt || Date.now()}`,
      type: 'Newsletter',
      name: s.name || 'Anonymous',
      email: s.email,
      message: 'Subscribed to free peace guide',
      createdAt: s.createdAt || new Date().toISOString(),
      status: s.status || 'Active',
    })),
    ...messages.map((m: any, idx: number) => ({
      id: `msg-${idx}-${m.createdAt || Date.now()}`,
      type: 'Contact Inquiry',
      name: m.name || 'Anonymous',
      email: m.email,
      message: m.message || 'General Inquiry',
      createdAt: m.createdAt || new Date().toISOString(),
      status: m.status || 'Pending',
    })),
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return NextResponse.json({
    success: true,
    leads,
    counts: {
      total: leads.length,
      subscribers: subscribers.length,
      messages: messages.length,
    },
    googleSheetUrl:
      'https://script.google.com/macros/s/AKfycbwLSuVu2aJ90owifFMXYhRt3YNZ4C8uNguYopWnNBcgowXKZ0vLr7FpbNzluejFKH6-lg/exec',
  });
}
