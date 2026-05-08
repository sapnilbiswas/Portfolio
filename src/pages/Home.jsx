import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import Organizations from '../components/Organizations'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Skills from '../components/Skills'
import Profiles from '../components/Profiles'
import Contact from '../components/Contact'

export default function Home({ loaded }) {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!loaded) return

    // Re-trigger scroll animations when home page mounts or loaded state changes
    ScrollTrigger.refresh()

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })

    const revealsScale = document.querySelectorAll('.reveal-scale')
    revealsScale.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })

  }, [loaded])

  return (
    <main ref={mainRef}>
      <Hero isAppLoaded={loaded} />
      <Organizations />
      <Projects />
      <Timeline />
      <Skills />
      <Profiles />
      <Contact />
    </main>
  )
}
