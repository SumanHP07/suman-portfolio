// In-memory rate limiter (resets on server restart — sufficient for portfolio)
const attempts = new Map()

const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

export function checkRateLimit(ip) {
  const now = Date.now()
  const key = ip || 'unknown'
  const record = attempts.get(key)

  if (!record) {
    attempts.set(key, { count: 1, firstAttempt: now })
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  // Reset window if expired
  if (now - record.firstAttempt > WINDOW_MS) {
    attempts.set(key, { count: 1, firstAttempt: now })
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  if (record.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((WINDOW_MS - (now - record.firstAttempt)) / 1000)
    return { allowed: false, retryAfter }
  }

  record.count++
  attempts.set(key, record)
  return { allowed: true, remaining: MAX_ATTEMPTS - record.count }
}

export function resetRateLimit(ip) {
  attempts.delete(ip || 'unknown')
}
