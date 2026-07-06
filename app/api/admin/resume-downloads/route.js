import { NextResponse } from 'next/server'
import { getTokenFromRequest, verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request) {
  const token = getTokenFromRequest(request)
  const payload = await verifyToken(token)
  if (!payload?.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error, count } = await supabaseAdmin
    .from('resume_downloads')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ downloads: data, total: count })
}
