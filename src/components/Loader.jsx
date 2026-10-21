import { useState, useEffect } from 'react'

const bootSequence = [
  "INITIALIZING...",
  "LOADING RESOURCES...",
  "COMPILING ASSETS...",
  "SYSTEM READY"
]

export default function Loader({ onLoaded }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [textState, setTextState] = useState('active') // 'active', 'exit'
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Lock scroll during loader
    document.body.style.overflowY = 'hidden'

    let currentStep = 0

    const runSequence = () => {
      if (currentStep < bootSequence.length) {
        setStepIndex(currentStep)
        setTextState('active')

        const calculatedProgress = Math.min(100, Math.floor(((currentStep + 1) / bootSequence.length) * 100))
        setProgress(calculatedProgress)

        const textTimer = setTimeout(() => {
          if (currentStep < bootSequence.length - 1) {
            setTextState('exit')
          }
          currentStep++
          const nextTimer = setTimeout(runSequence, 400)
          return () => clearTimeout(nextTimer)
        }, 800)

        return () => clearTimeout(textTimer)
      } else {
        // Finished sequence
        setIsFinished(true)
        document.body.style.overflowY = 'auto'
        if (onLoaded) onLoaded()

        const hideTimer = setTimeout(() => {
          setIsHidden(true)
        }, 900)
        return () => clearTimeout(hideTimer)
      }
    }

    const initialTimer = setTimeout(runSequence, 300)

    return () => {
      clearTimeout(initialTimer)
      document.body.style.overflowY = 'auto'
    }
  }, [onLoaded])

  if (isHidden) return null

  const progressFormatted = `00${progress}`.slice(-3)

  return (
    <div
      id="loader"
      style={{
        transform: isFinished ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)'
      }}
    >
      <div className="text-center">
        <div className="loader-text-wrapper mb-2">
          <div className={`loader-text ${textState}`}>
            {bootSequence[stepIndex]}
          </div>
        </div>
      </div>
      <div id="loader-progress">{progressFormatted}</div>
    </div>
  )
}
