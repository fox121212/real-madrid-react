import { useEffect, useRef } from 'react'
export default function FadeIn({ children, className = '', style = {} }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) el.classList.add('visible') }, { threshold: 0.08 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`fade-in ${className}`} style={style}>{children}</div>
}
