import { NextRequest, NextResponse } from 'next/server';
import {
  getSessionUser,
  getUserByEmail,
  hashPassword,
  createSession,
  deleteSession,
  UserItem,
  UserRoleType,
} from './db';

export const SESSION_COOKIE_NAME = 'pb_session';

export interface AuthContext {
  user: UserItem;
  role: UserRoleType;
}

export function extractToken(req: Request | NextRequest): string | null {
  // 1. Try Cookie header
  const cookieHeader = req.headers.get('cookie') || '';
  const match = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${SESSION_COOKIE_NAME}=`));

  if (match) {
    return match.substring(SESSION_COOKIE_NAME.length + 1);
  }

  // 2. Try Authorization header
  const authHeader = req.headers.get('authorization') || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7).trim();
  }

  return null;
}

export async function getAuthContext(req: Request | NextRequest): Promise<AuthContext | null> {
  const token = extractToken(req);
  if (!token) return null;
  return await getSessionUser(token);
}

export async function requireAuth(req: Request | NextRequest): Promise<AuthContext> {
  const auth = await getAuthContext(req);
  if (!auth) {
    throw new Error('Unauthorized');
  }
  return auth;
}

export async function requireAdmin(req: Request | NextRequest): Promise<AuthContext> {
  const auth = await requireAuth(req);
  if (auth.role !== 'admin') {
    throw new Error('Forbidden: Admin access required');
  }
  return auth;
}

export async function authenticateCredentials(
  email: string,
  plainPassword: string
): Promise<{ user: UserItem; role: UserRoleType; token: string } | null> {
  const user = await getUserByEmail(email);
  if (!user) return null;

  const hashed = hashPassword(plainPassword);
  if (user.password_hash !== hashed) return null;

  const auth = await getSessionUser(await createSession(user.id));
  if (!auth) return null;

  const token = await createSession(user.id);
  return { user: auth.user, role: auth.role, token };
}

export function setSessionCookie(response: NextResponse, token: string): void {
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
}

export function clearSessionCookie(response: NextResponse): void {
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}
