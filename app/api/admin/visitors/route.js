import { NextResponse } from 'next/server'
import { getTokenFromRequest, verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request) {
  const token = getTokenFromRequest(request)
  const payload = await verifyToken(token)
  if (!payload?.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '100')
  const offset = parseInt(searchParams.get('offset') || '0')

  const { data, error, count } = await supabaseAdmin
    .from('visits')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Aggregate by visitor_id
  const { data: unique } = await supabaseAdmin
    .from('visits')
    .select('visitor_id')
    .not('visitor_id', 'is', null)

  const uniqueVisitors = new Set(unique?.map(r => r.visitor_id) || []).size

  return NextResponse.json({ visits: data, total: count, uniqueVisitors })
}
