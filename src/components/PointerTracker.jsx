import { useEffect, useState } from 'react'

export const PointerTracker = () => {
  const [isTracking, setIsTracking] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => {
      setPosition({ x: clientX, y: clientY })
    }

    isTracking && window.addEventListener('pointermove', handleMove)

    //cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [isTracking])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          border: '1px solid',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setIsTracking(!isTracking)}>
        {isTracking ? 'Disable' : 'Enable'} tracker
      </button>
    </>
  )
}
