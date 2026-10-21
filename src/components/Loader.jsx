import { useState, useEffect } from 'react'

const bootSequence = [
  "INITIALIZING...",
  "LOADING RESOURCES...",
  "COMPILING ASSETS...",
  "SYSTEM READY"
]

export default function Loader({ onLoaded }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [textState, setTextState] = useState('active')
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const finishImmediately = () => {
    setIsFinished(true)
    document.body.style.overflowY = 'auto'
    if (onLoaded) onLoaded()
    setTimeout(() => setIsHidden(true), 600)
  }

  useEffect(() => {
    // Check if user already saw loader this session for instant response
    const hasSeenLoader = sessionStorage.getItem('has_seen_loader')
    if (hasSeenLoader) {
      document.body.style.overflowY = 'auto'
      if (onLoaded) onLoaded()
      setIsHidden(true)
      return
    }

    // Lock scroll briefly while loader is running
    document.body.style.overflowY = 'hidden'

    let currentStep = 0
    let isCancelled = false

    const runSequence = () => {
      if (isCancelled) return

      if (currentStep < bootSequence.length) {
        setStepIndex(currentStep)
        setTextState('active')

        const calculatedProgress = Math.min(
          100,
          Math.floor(((currentStep + 1) / bootSequence.length) * 100)
        )
        setProgress(calculatedProgress)

        // Snappy 250ms display per step
        setTimeout(() => {
          if (isCancelled) return
          if (currentStep < bootSequence.length - 1) {
            setTextState('exit')
          }
          currentStep++
          setTimeout(runSequence, 120)
        }, 260)
      } else {
        // Immediately unlock scrolling and slide up
        sessionStorage.setItem('has_seen_loader', 'true')
        finishImmediately()
      }
    }

    const initialTimer = setTimeout(runSequence, 100)

    return () => {
      isCancelled = true
      clearTimeout(initialTimer)
      document.body.style.overflowY = 'auto'
    }
  }, [onLoaded])

  if (isHidden) return null

  const progressFormatted = `00${progress}`.slice(-3)

  return (
    <div
      id="loader"
      onClick={finishImmediately}
      onTouchStart={finishImmediately}
      className={isFinished ? 'pointer-events-none' : ''}
      style={{
        transform: isFinished ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)'
      }}
      title="Tap anywhere to skip"
    >
      <div className="text-center">
        <div className="loader-text-wrapper mb-2">
          <div className={`loader-text ${textState}`}>
            {bootSequence[stepIndex]}
          </div>
        </div>
      </div>
      <div id="loader-progress">{progressFormatted}</div>

      {/* Skip indicator */}
      <div className="absolute top-6 right-6 font-mono text-[10px] text-text-muted/60 uppercase tracking-widest">
        [TAP TO SKIP]
      </div>
    </div>
  )
}
