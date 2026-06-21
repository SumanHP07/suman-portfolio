import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { signToken } from '@/lib/auth'
import { checkRateLimit, resetRateLimit } from '@/lib/rateLimit'

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'

  // Rate limit check
  const limit = checkRateLimit(ip)
  if (!limit.allowed) {
    return NextResponse.json(
      { error: `Too many attempts. Try again in ${limit.retryAfter}s` },
      { status: 429 }
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { password } = body

  if (!password) {
    return NextResponse.json({ error: 'Password required' }, { status: 400 })
  }

  // SHA-256 hash of submitted password
  const submitted = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex')

  const stored = process.env.ADMIN_PASSWORD_HASH

  // Constant-time comparison to prevent timing attacks
  const valid =
    stored?.length === submitted.length &&
    crypto.timingSafeEqual(Buffer.from(submitted), Buffer.from(stored))

  if (!valid) {
    return NextResponse.json(
      { error: 'Invalid password', remaining: limit.remaining },
      { status: 401 }
    )
  }

  // Success
  resetRateLimit(ip)
  const token = await signToken({ admin: true })

  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  })

  return response
}
