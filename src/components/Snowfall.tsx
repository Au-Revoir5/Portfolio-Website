import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Flake {
  x: number
  y: number
  r: number
  vy: number
  phase: number
  sway: number
}

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let flakes: Flake[] = []
    let raf = 0

    const makeFlake = (anywhere: boolean): Flake => {
      const r = 0.8 + Math.random() * 2.2
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : -r * 2,
        r,
        vy: 0.25 + r * 0.28,
        phase: Math.random() * Math.PI * 2,
        sway: 0.2 + Math.random() * 0.6,
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#f2f8ff'
      for (const f of flakes) {
        ctx.globalAlpha = 0.35 + f.r * 0.18
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(140, Math.round((width * height) / 9000))
      flakes = Array.from({ length: count }, () => makeFlake(true))
      draw()
    }

    const tick = (time: number) => {
      for (const f of flakes) {
        f.y += f.vy
        f.x += Math.sin(time / 1200 + f.phase) * f.sway * 0.6
        if (f.y - f.r > height) Object.assign(f, makeFlake(false))
        if (f.x < -5) f.x = width + 5
        else if (f.x > width + 5) f.x = -5
      }
      draw()
      raf = requestAnimationFrame(tick)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    if (!reduced) raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="snow" aria-hidden="true" />
}
