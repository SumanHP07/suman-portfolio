'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // If already logged in, go straight to dashboard
    fetch('/api/admin/verify')
      .then(r => { if (r.ok) router.replace('/admin/dashboard') })
      .finally(() => setChecking(false))
  }, [router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    const data = await res.json()
    setLoading(false)

    if (res.ok) {
      router.replace('/admin/dashboard')
    } else {
      setError(data.error || 'Invalid password')
      setPassword('')
    }
  }

  if (checking) return null

  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* No branding — just a plain auth form */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-600/40 flex items-center justify-center text-2xl mx-auto mb-4">
              🔐
            </div>
            <h1 className="text-white font-bold text-lg">Access Required</h1>
            <p className="text-slate-500 text-sm mt-1">Enter your password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.10] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/60 transition-colors"
            />

            {error && (
              <p className="text-red-400 text-xs text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold text-sm transition-all"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
