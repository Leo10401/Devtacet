'use client'

import { useEffect } from 'react'

export function VisitorTracker() {
  useEffect(() => {
    try {
      const KEY = 'devtacet_reach_logged'
      const lastLogged = sessionStorage.getItem(KEY)
      const now = Date.now()

      // Only log once per browser session (or once every 30 minutes)
      if (!lastLogged || now - parseInt(lastLogged, 10) > 30 * 60 * 1000) {
        sessionStorage.setItem(KEY, now.toString())
        fetch('/api/reach', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: window.location.pathname || '/' }),
        }).catch((err) => {
          console.warn('Visitor reach auto-log silent error:', err)
        })
      }
    } catch {
      // Catch storage security exceptions in private modes
    }
  }, [])

  return null
}
