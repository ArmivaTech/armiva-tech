'use client'

import { useEffect, useRef } from 'react'

export default function RobotTracker() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const mouseX = useRef(0.5)
  const currentTime = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Mute and pause — we control playback manually
    video.muted = true
    video.pause()
    video.currentTime = 0

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Normalize cursor X position across the whole viewport: 0 (left) → 1 (right)
      mouseX.current = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    }

    const tick = () => {
      const video = videoRef.current
      if (video && video.duration) {
        const target = mouseX.current * video.duration
        // Smooth interpolation toward target time
        currentTime.current += (target - currentTime.current) * 0.08
        video.currentTime = currentTime.current
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,255,.12) 0%, rgba(47,142,255,.06) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <video
        ref={videoRef}
        src="/robot/robot.mp4"
        muted
        playsInline
        preload="auto"
        style={{
          width: '420px',
          maxWidth: '90vw',
          height: 'auto',
          position: 'relative',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
    </div>
  )
}
