// utils/authHelpers.ts

import { NextResponse } from 'next/server';
import { CreateSession } from '@/components/mattcomponents/api/CreateSession';
import { JWTPayload } from 'jose';

export async function CreateCookieToken<T extends JWTPayload>(user: T) {


  const token = await CreateSession(user);
  const response = NextResponse.json({ success: true, status: 200 });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 120 * 60, 
    path: '/',
  });

  return response;
}
