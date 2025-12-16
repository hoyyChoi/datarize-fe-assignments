import { useEffect } from 'react'

export const useLockBodyScroll = (lock: boolean = true) => {
  useEffect(() => {
    if (!lock) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [lock])
}
