import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export type ClassStatus = 'scheduled' | 'postponed' | 'cancelled';
export type UserRoleType = 'admin' | 'customer';
export type EmailLogType = 'created' | 'updated' | 'postponed' | 'cancelled' | 'reminder';

export interface ClassItem {
  id: string;
  name: string;
  description: string;
  date: string; // YYYY-MM-DD (IST)
  start_time: string; // HH:mm (24-hour format)
  duration_minutes: number;
  meet_link: string;
  status: ClassStatus;
  original_date?: string | null;
  original_time?: string | null;
  postpone_reason?: string | null;
  cancel_reason?: string | null;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserItem {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  created_at: string;
}

export interface UserRoleItem {
  user_id: string;
  email: string;
  role: UserRoleType;
  created_at: string;
}

export interface SubscriberItem {
  id: string;
  email: string;
  user_id?: string | null;
  is_subscribed: boolean;
  created_at: string;
}

export interface EmailLogItem {
  id: string;
  class_id?: string | null;
  class_name?: string | null;
  recipient_email: string;
  type: EmailLogType;
  status: 'sent' | 'failed';
  error_message?: string | null;
  sent_at: string;
}

interface DatabaseSchema {
  classes: ClassItem[];
  users: UserItem[];
  user_roles: UserRoleItem[];
  subscribers: SubscriberItem[];
  email_logs: EmailLogItem[];
  sessions: { token: string; user_id: string; expires_at: string }[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Password Hash Helper using Node's native crypto (PBKDF2)
export function hashPassword(password: string): string {
  const salt = 'pb_peace_salt_2026';
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

// Initial seed data generator
function getInitialData(): DatabaseSchema {
  const defaultAdminId = 'admin-user-001';
  const defaultAdminEmail = 'admin@peacebuddytamil.com';
  const defaultAdminPassword = hashPassword(process.env.ADMIN_PASSWORD || 'PeaceAdmin@2026!');

  // Seed with 2 realistic classes in the future
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 3);
  const nextWeekStr = nextWeek.toISOString().split('T')[0];

  return {
    classes: [
      {
        id: 'cls-brahma-01',
        name: 'பிரம்ம முகூர்த்த தியானம் (Brahma Muhurtham Meditation)',
        description: 'விடியற்காலை அமைதியில் ஆழ்ந்து, மனதை ஒருமுகப்படுத்தி புத்துணர்ச்சியுடன் அன்றைய நாளைத் தொடங்குவதற்கான தமிழ் நேரலை தியான அமர்வு.',
        date: tomorrowStr,
        start_time: '05:30',
        duration_minutes: 45,
        meet_link: 'https://meet.google.com/pbt-morn-calm',
        status: 'scheduled',
        original_date: null,
        original_time: null,
        postpone_reason: null,
        cancel_reason: null,
        created_by: defaultAdminId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'cls-evening-02',
        name: 'இரவு நேர அமைதி ஜர்னல் & தியானம் (Evening Journal & Calm)',
        description: 'அன்றாட சோர்வு மற்றும் சிந்தனைகளை இறக்கி வைத்து, நிம்மதியான ஆழ்ந்த உறக்கத்திற்குத் தயாராகும் இரவு நேர அமர்வு.',
        date: nextWeekStr,
        start_time: '20:30',
        duration_minutes: 40,
        meet_link: 'https://meet.google.com/pbt-even-rest',
        status: 'scheduled',
        original_date: null,
        original_time: null,
        postpone_reason: null,
        cancel_reason: null,
        created_by: defaultAdminId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ],
    users: [
      {
        id: defaultAdminId,
        email: defaultAdminEmail,
        password_hash: defaultAdminPassword,
        name: 'Peace Buddy Admin',
        created_at: new Date().toISOString(),
      },
    ],
    user_roles: [
      {
        user_id: defaultAdminId,
        email: defaultAdminEmail,
        role: 'admin',
        created_at: new Date().toISOString(),
      },
    ],
    subscribers: [
      {
        id: 'sub-sample-01',
        email: 'sridharis16042007@gmail.com',
        user_id: null,
        is_subscribed: true,
        created_at: new Date().toISOString(),
      },
    ],
    email_logs: [],
    sessions: [],
  };
}

// Read database atomic
function readDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialData();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(content);
    // Ensure all tables exist
    if (!parsed.classes) parsed.classes = [];
    if (!parsed.users) parsed.users = [];
    if (!parsed.user_roles) parsed.user_roles = [];
    if (!parsed.subscribers) parsed.subscribers = [];
    if (!parsed.email_logs) parsed.email_logs = [];
    if (!parsed.sessions) parsed.sessions = [];
    return parsed;
  } catch (err) {
    console.error('Error reading db.json, returning initial data fallback:', err);
    return getInitialData();
  }
}

// Write database atomic
function writeDb(data: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempFile = `${DB_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error('Error writing db.json:', err);
    throw err;
  }
}

// =====================================================================
// CLASSES CRUD API
// =====================================================================

export async function getAllClasses(filter?: {
  status?: string;
  search?: string;
  date?: string;
  includePast?: boolean;
}): Promise<ClassItem[]> {
  const db = readDb();
  let items = [...db.classes];

  if (filter?.status && filter.status !== 'all') {
    items = items.filter((c) => c.status === filter.status);
  }

  if (filter?.date) {
    items = items.filter((c) => c.date === filter.date);
  }

  if (filter?.search) {
    const q = filter.search.toLowerCase().trim();
    items = items.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q))
    );
  }

  // Sort by date and start_time ascending
  items.sort((a, b) => {
    const dtA = `${a.date}T${a.start_time}`;
    const dtB = `${b.date}T${b.start_time}`;
    return dtA.localeCompare(dtB);
  });

  return items;
}

export async function getClassById(id: string): Promise<ClassItem | null> {
  const db = readDb();
  return db.classes.find((c) => c.id === id) || null;
}

export async function createClass(data: {
  name: string;
  description?: string;
  date: string;
  start_time: string;
  duration_minutes: number;
  meet_link: string;
  created_by?: string;
}): Promise<ClassItem> {
  const db = readDb();
  const newClass: ClassItem = {
    id: `cls-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: data.name.trim(),
    description: (data.description || '').trim(),
    date: data.date,
    start_time: data.start_time,
    duration_minutes: Number(data.duration_minutes),
    meet_link: data.meet_link.trim(),
    status: 'scheduled',
    original_date: null,
    original_time: null,
    postpone_reason: null,
    cancel_reason: null,
    created_by: data.created_by || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  db.classes.push(newClass);
  writeDb(db);
  return newClass;
}

export async function updateClass(
  id: string,
  data: Partial<Pick<ClassItem, 'name' | 'description' | 'date' | 'start_time' | 'duration_minutes' | 'meet_link'>>
): Promise<ClassItem> {
  const db = readDb();
  const idx = db.classes.findIndex((c) => c.id === id);
  if (idx === -1) throw new Error('Class not found');

  const existing = db.classes[idx];
  const updated: ClassItem = {
    ...existing,
    ...data,
    updated_at: new Date().toISOString(),
  };

  db.classes[idx] = updated;
  writeDb(db);
  return updated;
}

export async function postponeClass(
  id: string,
  params: {
    new_date: string;
    new_start_time: string;
    new_meet_link?: string;
    postpone_reason?: string;
  }
): Promise<ClassItem> {
  const db = readDb();
  const idx = db.classes.findIndex((c) => c.id === id);
  if (idx === -1) throw new Error('Class not found');

  const existing = db.classes[idx];

  // Save original date and time if not already saved
  const original_date = existing.original_date || existing.date;
  const original_time = existing.original_time || existing.start_time;

  const updated: ClassItem = {
    ...existing,
    date: params.new_date,
    start_time: params.new_start_time,
    meet_link: params.new_meet_link && params.new_meet_link.trim().length > 0 ? params.new_meet_link.trim() : existing.meet_link,
    status: 'postponed',
    original_date,
    original_time,
    postpone_reason: params.postpone_reason?.trim() || null,
    updated_at: new Date().toISOString(),
  };

  db.classes[idx] = updated;
  writeDb(db);
  return updated;
}

export async function cancelClass(
  id: string,
  params: {
    cancel_reason?: string;
  }
): Promise<ClassItem> {
  const db = readDb();
  const idx = db.classes.findIndex((c) => c.id === id);
  if (idx === -1) throw new Error('Class not found');

  const existing = db.classes[idx];
  const updated: ClassItem = {
    ...existing,
    status: 'cancelled',
    cancel_reason: params.cancel_reason?.trim() || null,
    updated_at: new Date().toISOString(),
  };

  db.classes[idx] = updated;
  writeDb(db);
  return updated;
}

export async function deleteClass(id: string): Promise<boolean> {
  const db = readDb();
  const initialLen = db.classes.length;
  db.classes = db.classes.filter((c) => c.id !== id);
  if (db.classes.length !== initialLen) {
    writeDb(db);
    return true;
  }
  return false;
}

// =====================================================================
// USERS & ROLES
// =====================================================================

export async function getUserByEmail(email: string): Promise<UserItem | null> {
  const db = readDb();
  return db.users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
}

export async function getUserById(id: string): Promise<UserItem | null> {
  const db = readDb();
  return db.users.find((u) => u.id === id) || null;
}

export async function getUserRole(userId: string): Promise<UserRoleType> {
  const db = readDb();
  const roleRecord = db.user_roles.find((r) => r.user_id === userId);
  return roleRecord?.role || 'customer';
}

export async function createUser(data: {
  email: string;
  password: string;
  name?: string;
  role?: UserRoleType;
}): Promise<{ user: UserItem; role: UserRoleType }> {
  const db = readDb();
  const cleanEmail = data.email.toLowerCase().trim();

  if (db.users.some((u) => u.email.toLowerCase() === cleanEmail)) {
    throw new Error('User already exists with this email');
  }

  const userId = `usr-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const newUser: UserItem = {
    id: userId,
    email: cleanEmail,
    password_hash: hashPassword(data.password),
    name: (data.name || cleanEmail.split('@')[0]).trim(),
    created_at: new Date().toISOString(),
  };

  const userRole: UserRoleItem = {
    user_id: userId,
    email: cleanEmail,
    role: data.role || 'customer',
    created_at: new Date().toISOString(),
  };

  db.users.push(newUser);
  db.user_roles.push(userRole);

  // Automatically add to subscribers table if not present
  if (!db.subscribers.some((s) => s.email.toLowerCase() === cleanEmail)) {
    db.subscribers.push({
      id: `sub-${Date.now()}`,
      email: cleanEmail,
      user_id: userId,
      is_subscribed: true,
      created_at: new Date().toISOString(),
    });
  }

  writeDb(db);
  return { user: newUser, role: userRole.role };
}

// =====================================================================
// SESSIONS (Token-based Session Auth)
// =====================================================================

export async function createSession(userId: string): Promise<string> {
  const db = readDb();
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days

  db.sessions.push({
    token,
    user_id: userId,
    expires_at: expiresAt,
  });

  writeDb(db);
  return token;
}

export async function getSessionUser(token: string): Promise<{ user: UserItem; role: UserRoleType } | null> {
  if (!token) return null;
  const db = readDb();
  const session = db.sessions.find((s) => s.token === token);
  if (!session) return null;

  if (new Date(session.expires_at) < new Date()) {
    // Expired
    db.sessions = db.sessions.filter((s) => s.token !== token);
    writeDb(db);
    return null;
  }

  const user = db.users.find((u) => u.id === session.user_id);
  if (!user) return null;

  const roleRecord = db.user_roles.find((r) => r.user_id === user.id);
  const role: UserRoleType = roleRecord?.role || 'customer';

  return { user, role };
}

export async function deleteSession(token: string): Promise<void> {
  const db = readDb();
  db.sessions = db.sessions.filter((s) => s.token !== token);
  writeDb(db);
}

// =====================================================================
// SUBSCRIBERS & EMAIL LOGS
// =====================================================================

export async function getActiveSubscribers(): Promise<string[]> {
  const db = readDb();
  const activeSubs = db.subscribers.filter((s) => s.is_subscribed).map((s) => s.email);
  const userEmails = db.users.map((u) => u.email);

  // Combine unique active emails
  const set = new Set<string>();
  activeSubs.forEach((e) => set.add(e.toLowerCase().trim()));
  userEmails.forEach((e) => set.add(e.toLowerCase().trim()));

  return Array.from(set);
}

export async function unsubscribeEmail(email: string): Promise<boolean> {
  const db = readDb();
  const cleanEmail = email.toLowerCase().trim();
  let changed = false;

  db.subscribers.forEach((s) => {
    if (s.email.toLowerCase() === cleanEmail) {
      s.is_subscribed = false;
      changed = true;
    }
  });

  if (changed) {
    writeDb(db);
  }
  return changed;
}

export async function logEmailSend(params: {
  class_id?: string | null;
  class_name?: string | null;
  recipient_email: string;
  type: EmailLogType;
  status: 'sent' | 'failed';
  error_message?: string | null;
}): Promise<EmailLogItem> {
  const db = readDb();
  const log: EmailLogItem = {
    id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    class_id: params.class_id || null,
    class_name: params.class_name || null,
    recipient_email: params.recipient_email,
    type: params.type,
    status: params.status,
    error_message: params.error_message || null,
    sent_at: new Date().toISOString(),
  };

  db.email_logs.unshift(log); // Prepend so latest is first
  // Keep max 1000 logs
  if (db.email_logs.length > 1000) {
    db.email_logs = db.email_logs.slice(0, 1000);
  }

  writeDb(db);
  return log;
}

export async function getEmailLogs(limit = 100): Promise<EmailLogItem[]> {
  const db = readDb();
  return db.email_logs.slice(0, limit);
}
