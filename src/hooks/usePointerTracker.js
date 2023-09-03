import { useEffect, useState } from 'react'

export function usePointerTracker ({ isTracking }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => {
      setPosition({ x: clientX, y: clientY })
    }

    isTracking && window.addEventListener('pointermove', handleMove)

    // cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [isTracking])
  return { position }
}
