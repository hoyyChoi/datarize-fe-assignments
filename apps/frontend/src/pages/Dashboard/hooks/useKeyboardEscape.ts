import { useEffect, useRef } from 'react'

export const useKeyboardEscape = (key: string, callback: () => void, enabled: boolean = true) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callbackRef.current()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [key, enabled])
}
