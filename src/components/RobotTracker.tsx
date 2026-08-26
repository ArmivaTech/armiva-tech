'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// The spritesheet has 5 frames arranged in a 3x2 grid:
// [front] [left]  [right]
// [up]    [down]  (empty)
// Each frame is 1/3 of width, 1/2 of height

type Frame = 'front' | 'left' | 'right' | 'up' | 'down'

const FRAME_POSITIONS: Record<Frame, { col: number; row: number }> = {
  front: { col: 0, row: 0 },
  left:  { col: 1, row: 0 },
  right: { col: 2, row: 0 },
  up:    { col: 0, row: 1 },
  down:  { col: 1, row: 1 },
}

function getFrame(cx: number, cy: number, rect: DOMRect): Frame {
  const rx = (cx - rect.left) / rect.width  - 0.5  // -0.5..0.5
  const ry = (cy - rect.top)  / rect.height - 0.5  // -0.5..0.5

  const absX = Math.abs(rx)
  const absY = Math.abs(ry)

  // Dead zone — look straight if cursor is near centre
  if (absX < 0.15 && absY < 0.12) return 'front'

  if (absY > absX) {
    return ry < 0 ? 'up' : 'down'
  }
  return rx < 0 ? 'left' : 'right'
}

export default function RobotTracker() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState<Frame>('front')
  const [loaded, setLoaded] = useState(false)
  const rafRef = useRef<number>()
  const mouseRef = useRef({ x: -9999, y: -9999 })

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    const tick = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const f = getFrame(mouseRef.current.x, mouseRef.current.y, rect)
        setFrame(prev => prev !== f ? f : prev)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onMouseMove])

  const fp = FRAME_POSITIONS[frame]
  // Each frame occupies 1/3 width, 1/2 height of the spritesheet
  const bgX = fp.col * (100 / 2)   // percentage offset X (3 cols → step = 33.33%)
  const bgY = fp.row * 100         // percentage offset Y (2 rows → step = 100%)

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Robot image using background-position to show correct frame */}
      <div
        style={{
          width: '420px',
          height: '520px',
          maxWidth: '90vw',
          backgroundImage: 'url(/robot/spritesheet.jpg)',
          backgroundSize: '300% 200%',
          backgroundPosition: `${fp.col * 50}% ${fp.row * 100}%`,
          backgroundRepeat: 'no-repeat',
          transition: 'background-position .12s cubic-bezier(.22,.61,.25,1)',
          opacity: loaded ? 1 : 0,
          transform: `scale(${loaded ? 1 : 0.95})`,
          transitionProperty: 'background-position, opacity, transform',
        }}
        onLoad={() => setLoaded(true)}
      />
      {/* Preload trigger */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/robot/spritesheet.jpg"
        alt=""
        style={{ display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
