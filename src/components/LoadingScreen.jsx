import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0)
  const screenRef = useRef(null)
  const counterRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate counter from 0 to 100
    const counter = { val: 0 }
    tl.to(counter, {
      val: 100,
      duration: 2.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.floor(counter.val))
      },
    })

    // After counting, animate out
    tl.to(counterRef.current, {
      scale: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.in',
    }, '+=0.3')

    tl.to(screenRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        if (screenRef.current) {
          screenRef.current.style.visibility = 'hidden'
          screenRef.current.style.pointerEvents = 'none'
        }
        onComplete()
      },
    }, '-=0.3')

    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="loading-screen" ref={screenRef}>
      <div ref={counterRef}>
        <div className="loading-counter">{count}</div>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" ref={barRef} style={{ width: `${count}%` }} />
      </div>
      <div className="loading-text">Initializing Portfolio</div>
    </div>
  )
}
