import { NextResponse } from 'next/server'
import { getTokenFromRequest, verifyToken } from '@/lib/auth'

export async function GET(request) {
  const token = getTokenFromRequest(request)
  if (!token) return NextResponse.json({ authenticated: false }, { status: 401 })

  const payload = await verifyToken(token)
  if (!payload?.admin) return NextResponse.json({ authenticated: false }, { status: 401 })

  return NextResponse.json({ authenticated: true })
}
