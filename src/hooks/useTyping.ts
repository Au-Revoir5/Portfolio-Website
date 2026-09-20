import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Counts up from 0 to `total` to drive a typing effect.
 * With reduced motion on, it returns `total` immediately.
 */
export function useTyping(total: number, startDelay = 700, interval = 24): number {
  const reduced = usePrefersReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) return
    let timer: number | undefined
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setCount((c) => {
          if (c >= total) {
            window.clearInterval(timer)
            return c
          }
          return c + 1
        })
      }, interval)
    }, startDelay)

    return () => {
      window.clearTimeout(start)
      window.clearInterval(timer)
    }
  }, [reduced, total, startDelay, interval])

  return reduced ? total : count
}
