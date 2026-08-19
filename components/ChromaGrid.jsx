'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Globe, Mail } from 'lucide-react'

const LinkedinIcon = ({ className = 'size-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = ({ className = 'size-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}) => {
  const rootRef = useRef(null)
  const fadeRef = useRef(null)
  const setX = useRef(null)
  const setY = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeMobileIndex, setActiveMobileIndex] = useState(null)

  const demo = [
    {
      image: '/Ayush_Kumar_Yadav.png',
      title: 'Ayush Kumar Yadav',
      subtitle: 'Founder & Lead Engineer',
      handle: '@ayush',
      borderColor: 'rgba(168, 85, 247, 0.5)',
      gradient: 'linear-gradient(145deg, rgba(168, 85, 247, 0.18), transparent)',
      accentColor: '#a855f7',
      socials: {
        linkedin: 'https://linkedin.com/in/ayush-kumar-yadav',
        github: 'https://github.com/ayush',
        portfolio: 'https://devtacet.com',
        email: 'mailto:ayush@devtacet.com',
      },
    },
    {
      image: '/Aditya_Mukerji.png',
      title: 'Aditya Mukerji',
      subtitle: 'Technical Architect',
      handle: '@aditya',
      borderColor: 'rgba(6, 182, 212, 0.5)',
      gradient: 'linear-gradient(210deg, rgba(6, 182, 212, 0.18), transparent)',
      accentColor: '#06b6d4',
      socials: {
        linkedin: 'https://linkedin.com/in/aditya-mukerji',
        github: 'https://github.com/aditya',
        portfolio: 'https://devtacet.com',
        email: 'mailto:aditya@devtacet.com',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      title: 'Aniket Chakraborty',
      subtitle: 'Frontend & UI/UX Lead',
      handle: '@aniket',
      borderColor: 'rgba(16, 185, 129, 0.5)',
      gradient: 'linear-gradient(165deg, rgba(16, 185, 129, 0.18), transparent)',
      accentColor: '#10b981',
      socials: {
        linkedin: 'https://linkedin.com/in/aniket-chakraborty',
        github: 'https://github.com/aniket',
        portfolio: 'https://devtacet.com',
        email: 'mailto:aniket@devtacet.com',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      title: 'Arpan Ganguly',
      subtitle: 'Backend & Cloud Engineer',
      handle: '@arpan',
      borderColor: 'rgba(245, 158, 11, 0.5)',
      gradient: 'linear-gradient(195deg, rgba(245, 158, 11, 0.18), transparent)',
      accentColor: '#f59e0b',
      socials: {
        linkedin: 'https://linkedin.com/in/arpan-ganguly',
        github: 'https://github.com/arpan',
        portfolio: 'https://devtacet.com',
        email: 'mailto:arpan@devtacet.com',
      },
    },
  ]

  const data = items?.length ? items : demo

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    setX.current = gsap.quickSetter(el, '--x', 'px')
    setY.current = gsap.quickSetter(el, '--y', 'px')
    const { width, height } = el.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }
    setX.current(pos.current.x)
    setY.current(pos.current.y)
  }, [])

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x)
        setY.current?.(pos.current.y)
      },
      overwrite: true,
    })
  }

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect()
    moveTo(e.clientX - r.left, e.clientY - r.top)
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true })
  }

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    })
  }

  const handleCardMove = (e) => {
    const c = e.currentTarget
    const rect = c.getBoundingClientRect()
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  const handleSocialClick = (e, url) => {
    e.stopPropagation()
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 ${className}`}
      style={{
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%',
      }}
    >
      {data.map((c, i) => {
        const socials = c.socials || {}
        const isVisible = hoveredIndex === i || activeMobileIndex === i

        return (
          <article
            key={i}
            tabIndex={0}
            onClick={() => setActiveMobileIndex((prev) => (prev === i ? null : i))}
            onMouseMove={handleCardMove}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[20px] border transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              borderColor: c.borderColor || 'rgba(255,255,255,0.15)',
              background: c.gradient || 'transparent',
              '--spotlight-color': c.borderColor || 'rgba(255,255,255,0.15)',
            }}
          >
            {/* Dynamic Cursor Spotlight Effect */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
              }}
            />

            {/* Avatar Image Container */}
            <div className="relative z-10 box-border flex-1 p-[10px]">
              <div className="relative overflow-hidden rounded-[14px]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-[210px] w-full object-cover sm:h-[230px] lg:h-[240px]"
                />

                {/* Floating Social / Contact Tooltip Overlay on Card */}
                <div
                  className={`absolute inset-x-2.5 bottom-2.5 z-50 grid grid-cols-4 items-center justify-items-center gap-1.5 rounded-xl border border-white/15 bg-[#0f1016]/95 backdrop-blur-md p-1.5 sm:p-2 shadow-[0_10px_35px_rgba(0,0,0,0.9)] transition-all duration-300 ${
                    isVisible
                      ? 'translate-y-0 opacity-100 pointer-events-auto'
                      : 'translate-y-4 opacity-0 pointer-events-none'
                  }`}
                >
                  {/* LinkedIn */}
                  {socials.linkedin && (
                    <button
                      type="button"
                      title="LinkedIn Profile"
                      onClick={(e) => handleSocialClick(e, socials.linkedin)}
                      className="group/btn relative flex size-9 w-full max-w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-zinc-300 transition-all hover:scale-105 hover:border-sky-500/50 hover:bg-sky-500/20 hover:text-sky-400"
                    >
                      <LinkedinIcon className="size-4" />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/95 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover/btn:opacity-100 z-50">
                        LinkedIn
                      </span>
                    </button>
                  )}

                  {/* GitHub */}
                  {socials.github && (
                    <button
                      type="button"
                      title="GitHub Profile"
                      onClick={(e) => handleSocialClick(e, socials.github)}
                      className="group/btn relative flex size-9 w-full max-w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-zinc-300 transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <GithubIcon className="size-4" />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/95 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover/btn:opacity-100 z-50">
                        GitHub
                      </span>
                    </button>
                  )}

                  {/* Portfolio / Website */}
                  {socials.portfolio && (
                    <button
                      type="button"
                      title="Portfolio Website"
                      onClick={(e) => handleSocialClick(e, socials.portfolio)}
                      className="group/btn relative flex size-9 w-full max-w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-zinc-300 transition-all hover:scale-105 hover:border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400"
                    >
                      <Globe className="size-4" />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/95 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover/btn:opacity-100 z-50">
                        Portfolio
                      </span>
                    </button>
                  )}

                  {/* Email / Direct Contact */}
                  {socials.email && (
                    <button
                      type="button"
                      title="Contact Email"
                      onClick={(e) => handleSocialClick(e, socials.email)}
                      className="group/btn relative flex size-9 w-full max-w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-zinc-300 transition-all hover:scale-105 hover:border-amber-500/50 hover:bg-amber-500/20 hover:text-amber-400"
                    >
                      <Mail className="size-4" />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/95 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover/btn:opacity-100 z-50">
                        Contact
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Footer with Title, Handle & Subtitle */}
            <footer className="relative z-10 grid grid-cols-[1fr_auto] gap-x-2 gap-y-1 p-3.5 font-sans text-white sm:p-4">
              <h3 className="m-0 text-[0.95rem] font-semibold leading-tight lg:text-[1rem]">
                {c.title}
              </h3>
              {c.handle && (
                <span className="text-right text-xs opacity-70 lg:text-[0.85rem]">
                  {c.handle}
                </span>
              )}
              <p className="m-0 text-xs leading-snug opacity-80 lg:text-[0.82rem]">
                {c.subtitle}
              </p>
              {c.location && (
                <span className="text-right text-xs opacity-80 lg:text-[0.82rem]">
                  {c.location}
                </span>
              )}
            </footer>
          </article>
        )
      })}
    </div>
  )
}

export default ChromaGrid
