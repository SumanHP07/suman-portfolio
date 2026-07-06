import { NextResponse } from 'next/server'
import { UAParser } from 'ua-parser-js'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { visitorId, referrer } = body

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    const ua = request.headers.get('user-agent') || ''
    const parser = new UAParser(ua)
    const browser = parser.getBrowser()
    const device = parser.getDevice()
    const deviceType = device.type || 'desktop'
    const browserName = `${browser.name || 'Unknown'} ${browser.version || ''}`

    // Geo lookup
    let city = null, country = null, org = null, region = null
    if (ip !== 'unknown' && ip !== '127.0.0.1' && !ip.startsWith('192.168')) {
      try {
        const geo = await fetch(`https://ipapi.co/${ip}/json/`, {
          headers: { 'User-Agent': 'portfolio-tracker/1.0' },
          signal: AbortSignal.timeout(3000),
        })
        if (geo.ok) {
          const d = await geo.json()
          city = d.city || null
          country = d.country_name || null
          region = d.region || null
          org = d.org || null
        }
      } catch { /* silent */ }
    }

    await supabaseAdmin.from('resume_downloads').insert({
      visitor_id:  visitorId || null,
      ip_address:  ip,
      city,
      region,
      country,
      org,
      device_type: deviceType,
      browser:     browserName,
      referrer:    referrer || null,
      created_at:  new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
