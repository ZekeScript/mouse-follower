import { useState } from 'react'
import { usePointerTracker } from '../hooks/usePointerTracker'

export const PointerTracker = () => {
  const [isTracking, setIsTracking] = useState(false)
  const { position } = usePointerTracker({ isTracking })

  const handleClick = async () => {
    setIsTracking(!isTracking)
  }

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
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />

      <button onClick={handleClick}>
        {isTracking ? 'Disable' : 'Enable'} tracker
      </button>
    </>
  )
}
