'use client'

import { useEffect } from 'react'

function getOrCreateVisitorId() {
  try {
    let id = localStorage.getItem('_vid')
    if (!id) {
      id = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
      localStorage.setItem('_vid', id)
    }
    return id
  } catch {
    return null
  }
}

export default function Tracker() {
  useEffect(() => {
    const visitorId = getOrCreateVisitorId()
    const referrer = document.referrer || null
    const page = window.location.pathname

    // Fire and forget — don't block anything
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId, page, referrer }),
    }).catch(() => {})
  }, [])

  // Renders nothing — completely invisible
  return null
}
