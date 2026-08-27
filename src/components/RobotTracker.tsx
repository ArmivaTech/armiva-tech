'use client'

import { useEffect, useRef } from 'react'

export default function RobotTracker() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>()
  const mouseX = useRef(0.5)
  const currentTime = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.pause()
    video.currentTime = 0

    const onMouseMove = (e: MouseEvent) => {
      // 0 = cursor a la izquierda (robot mira izquierda = inicio video)
      // 1 = cursor a la derecha (robot mira derecha = final video)
      mouseX.current = Math.max(0, Math.min(1, e.clientX / window.innerWidth))
    }

    const tick = () => {
      const v = videoRef.current
      if (v && v.duration) {
        const target = mouseX.current * v.duration
        currentTime.current += (target - currentTime.current) * 0.06
        v.currentTime = currentTime.current
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
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <video
        ref={videoRef}
        src="/robot/robot.mp4"
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          userSelect: 'none',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  )
}
