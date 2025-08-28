import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'

interface UseGSAPOptions {
  scope?: RefObject<HTMLElement | null>
  dependencies?: unknown[]
  revert?: boolean
}

export const useGSAP = (
  animation: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) => {
  const { scope, dependencies = [], revert = true } = options

  useEffect(() => {
    const ctx = gsap.context(animation, scope?.current || undefined)

    return () => {
      if (revert) {
        ctx.revert()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export const slideIn = (
  target: string | Element,
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  options: {
    duration?: number
    delay?: number
    distance?: number
    ease?: string
  } = {}
) => {
  const { duration = 0.8, delay = 0, distance = 100, ease = 'power3.out' } = options

  const fromProps: any = { opacity: 0 }
  const toProps: any = { opacity: 1, duration, delay, ease }

  switch (direction) {
    case 'left':
      fromProps.x = -distance
      toProps.x = 0
      break
    case 'right':
      fromProps.x = distance
      toProps.x = 0
      break
    case 'up':
      fromProps.y = distance
      toProps.y = 0
      break
    case 'down':
      fromProps.y = -distance
      toProps.y = 0
      break
  }

  return gsap.fromTo(target, fromProps, toProps)
}