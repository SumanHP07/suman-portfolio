'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-slate-400 text-xs mb-1">{label}</p>
      <p className="text-3xl font-extrabold text-white">{value ?? '—'}</p>
      {sub && <p className="text-slate-500 text-xs mt-1">{sub}</p>}
    </div>
  )
}

function getBadgeColor(deviceType) {
  if (deviceType === 'mobile') return 'bg-blue-500/20 text-blue-300'
  if (deviceType === 'tablet') return 'bg-yellow-500/20 text-yellow-300'
  return 'bg-slate-500/20 text-slate-300'
}

export default function AdminDashboard() {
  const [visits, setVisits]         = useState([])
  const [total, setTotal]           = useState(0)
  const [unique, setUnique]         = useState(0)
  const [loading, setLoading]       = useState(true)
  const [search, setSearch]         = useState('')
  const [sortField, setSortField]   = useState('created_at')
  const [sortDir, setSortDir]       = useState('desc')
  const [tab, setTab]               = useState('visitors') // 'visitors' | 'daily'
  const router = useRouter()

  const fetchData = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/visitors?limit=200')
    if (res.status === 401) { router.replace('/admin'); return }
    const data = await res.json()
    setVisits(data.visits || [])
    setTotal(data.total || 0)
    setUnique(data.uniqueVisitors || 0)
    setLoading(false)
  }, [router])

  useEffect(() => {
    fetch('/api/admin/verify').then(r => {
      if (!r.ok) router.replace('/admin')
      else fetchData()
    })
  }, [fetchData, router])

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin')
  }

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortField(field); setSortDir('desc') }
  }

  // Filter
  const filtered = visits.filter(v => {
    const q = search.toLowerCase()
    return (
      (v.org || '').toLowerCase().includes(q) ||
      (v.city || '').toLowerCase().includes(q) ||
      (v.country || '').toLowerCase().includes(q) ||
      (v.browser || '').toLowerCase().includes(q) ||
      (v.page || '').toLowerCase().includes(q)
    )
  })

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortField] || ''
    const bv = b[sortField] || ''
    if (sortDir === 'asc') return av > bv ? 1 : -1
    return av < bv ? 1 : -1
  })

  // Daily chart data
  const dailyCounts = visits.reduce((acc, v) => {
    const day = v.created_at?.slice(0, 10)
    if (day) acc[day] = (acc[day] || 0) + 1
    return acc
  }, {})
  const dailyData = Object.entries(dailyCounts)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-14) // last 14 days
  const maxCount = Math.max(...dailyData.map(d => d[1]), 1)

  // Visitor frequency
  const visitorFreq = visits.reduce((acc, v) => {
    if (v.visitor_id) acc[v.visitor_id] = (acc[v.visitor_id] || 0) + 1
    return acc
  }, {})

  const SortIcon = ({ field }) => (
    <span className="ml-1 text-slate-500">
      {sortField === field ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  )

  return (
    <div className="min-h-screen bg-[#080810] text-slate-200">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#080810]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-white">📊 Analytics</span>
          <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Live</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-slate-400 hover:text-white text-sm transition-colors">
            View Site ↗
          </a>
          <button onClick={logout}
            className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-600/40 text-red-400 hover:bg-red-600/30 text-sm font-semibold transition-all">
            Logout
          </button>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Visits" value={total} />
          <StatCard label="Unique Visitors" value={unique} />
          <StatCard label="Repeat Visits" value={total - unique} sub="same visitor, multiple views" />
          <StatCard label="Today" value={
            visits.filter(v => v.created_at?.slice(0, 10) === new Date().toISOString().slice(0, 10)).length
          } sub={new Date().toLocaleDateString()} />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/[0.06] pb-0">
          {['visitors', 'daily'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-colors ${
                tab === t
                  ? 'bg-white/[0.06] text-white border border-white/[0.08] border-b-transparent'
                  : 'text-slate-500 hover:text-slate-300'
              }`}>
              {t === 'visitors' ? '👥 Visitor Log' : '📈 Daily Chart'}
            </button>
          ))}
        </div>

        {/* Visitor Log */}
        {tab === 'visitors' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by org, city, country, browser, page..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
              />
              <button onClick={fetchData}
                className="px-4 py-2.5 rounded-xl bg-brand-600/20 border border-brand-600/40 text-brand-300 hover:bg-brand-600/30 text-sm transition-all">
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="text-center text-slate-500 py-20">Loading...</div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                      {[
                        ['created_at', '🕐 Time'],
                        ['org', '🏢 Org / ISP'],
                        ['city', '📍 Location'],
                        ['device_type', '📱 Device'],
                        ['browser', '🌐 Browser'],
                        ['page', '📄 Page'],
                        ['visitor_id', '🔁 Visits'],
                      ].map(([field, label]) => (
                        <th key={field}
                          onClick={() => handleSort(field)}
                          className="text-left px-4 py-3 text-slate-400 font-semibold cursor-pointer hover:text-white select-none whitespace-nowrap">
                          {label}<SortIcon field={field} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.length === 0 ? (
                      <tr><td colSpan={7} className="text-center text-slate-600 py-12">No visits yet</td></tr>
                    ) : sorted.map((v, i) => (
                      <tr key={v.id || i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3 text-slate-400 whitespace-nowrap text-xs">
                          {v.created_at ? new Date(v.created_at).toLocaleString() : '—'}
                        </td>
                        <td className="px-4 py-3 text-white font-medium max-w-[200px] truncate">
                          {v.org || <span className="text-slate-600">Unknown</span>}
                        </td>
                        <td className="px-4 py-3 text-slate-300 whitespace-nowrap">
                          {[v.city, v.country].filter(Boolean).join(', ') || <span className="text-slate-600">—</span>}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(v.device_type)}`}>
                            {v.device_type || 'desktop'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">{v.browser || '—'}</td>
                        <td className="px-4 py-3 text-slate-400 text-xs">{v.page || '/'}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                            (visitorFreq[v.visitor_id] || 1) > 1
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-slate-500/10 text-slate-500'
                          }`}>
                            {visitorFreq[v.visitor_id] || 1}×
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Daily Chart */}
        {tab === 'daily' && (
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <h3 className="text-white font-bold mb-6">Visits — Last 14 Days</h3>
            {dailyData.length === 0 ? (
              <p className="text-slate-600 text-center py-12">No data yet</p>
            ) : (
              <div className="flex items-end gap-2 h-48">
                {dailyData.map(([day, count]) => (
                  <div key={day} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                    <span className="text-brand-400 text-xs font-bold">{count}</span>
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-brand-700 to-brand-500 transition-all duration-500"
                      style={{ height: `${(count / maxCount) * 160}px`, minHeight: '4px' }}
                    />
                    <span className="text-slate-600 text-xs rotate-45 origin-left whitespace-nowrap" style={{ fontSize: '10px' }}>
                      {day.slice(5)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
