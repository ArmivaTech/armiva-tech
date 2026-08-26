'use client'

import { useEffect } from 'react'

export default function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * .92) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
