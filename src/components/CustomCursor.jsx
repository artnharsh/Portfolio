import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorMainRef = useRef(null)
  const cursorTrailRef = useRef(null)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const cursorMain = cursorMainRef.current
    const cursorTrail = cursorTrailRef.current
    if (!cursorMain || !cursorTrail) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let trailX = mouseX
    let trailY = mouseY
    let animationFrameId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Main underscore moves instantly
      cursorMain.style.left = `${mouseX}px`
      cursorMain.style.top = `${mouseY}px`
    }

    // Smooth lag loop for brackets
    const updateTrail = () => {
      // Linear interpolation (lerp)
      trailX += (mouseX - trailX) * 0.18
      trailY += (mouseY - trailY) * 0.18

      cursorTrail.style.left = `${trailX}px`
      cursorTrail.style.top = `${trailY}px`

      animationFrameId = requestAnimationFrame(updateTrail)
    }

    animationFrameId = requestAnimationFrame(updateTrail)
    window.addEventListener('mousemove', handleMouseMove)

    // Add hover states for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card-h') ||
        target.closest('.group') ||
        target.closest('.theme-switch') ||
        target.closest('.interactive')
      ) {
        document.body.classList.add('hovering')
      } else {
        document.body.classList.remove('hovering')
      }
    }

    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('hovering')
    }
  }, [])

  return (
    <>
      <div ref={cursorMainRef} className="cursor-main" aria-hidden="true" />
      <div ref={cursorTrailRef} className="cursor-trail" aria-hidden="true" />
    </>
  )
}
