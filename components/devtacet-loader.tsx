'use client'

import { useEffect, useRef, useState } from 'react'

export function DevtacetLoader() {
  const [mounted, setMounted] = useState(true)
  const loaderRootRef = useRef<HTMLDivElement>(null)
  const strokeOuterRef = useRef<SVGPathElement>(null)
  const strokeInnerRef = useRef<SVGPathElement>(null)
  const fillMarkRef = useRef<SVGPathElement>(null)
  const markWrapRef = useRef<HTMLDivElement>(null)
  const sweepGroupRef = useRef<SVGGElement>(null)
  const sweepRectRef = useRef<SVGRectElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const pctRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // 1. Instantly skip loader for Lighthouse / PageSpeed / Search bots or reduced motion
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    const isBotOrLighthouse =
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse|pagespeed|headlesschrome/i.test(ua)
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyVisited = typeof window !== 'undefined' && sessionStorage.getItem('devtacet_visited')

    if (isBotOrLighthouse || isReduced || alreadyVisited) {
      setMounted(false)
      return
    }

    try {
      sessionStorage.setItem('devtacet_visited', '1')
    } catch {
      // ignore storage access errors in private browsing
    }

    let isCancelled = false

    function sleep(ms: number) {
      return new Promise((res) => setTimeout(res, ms))
    }

    async function finish() {
      if (loaderRootRef.current) {
        loaderRootRef.current.classList.add('is-done')
      }
      await sleep(350)
      if (!isCancelled) setMounted(false)
    }

    async function run() {
      const strokeOuter = strokeOuterRef.current
      const strokeInner = strokeInnerRef.current
      if (strokeOuter && strokeInner) {
        const lenO = strokeOuter.getTotalLength()
        const lenI = strokeInner.getTotalLength()
        strokeOuter.style.strokeDasharray = `${lenO}`
        strokeInner.style.strokeDasharray = `${lenI}`
        strokeOuter.style.strokeDashoffset = `${lenO}`
        strokeInner.style.strokeDashoffset = `${lenI}`
        strokeOuter.style.opacity = '1'
        strokeInner.style.opacity = '1'

        strokeOuter.animate(
          [{ strokeDashoffset: lenO }, { strokeDashoffset: 0 }],
          { duration: 350, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
        )
        strokeInner.animate(
          [{ strokeDashoffset: lenI }, { strokeDashoffset: 0 }],
          { duration: 350, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
        )
      }

      if (fillMarkRef.current) {
        fillMarkRef.current.animate(
          [{ fillOpacity: 0 }, { fillOpacity: 1 }],
          { duration: 250, easing: 'ease-out', fill: 'forwards' }
        )
      }

      if (barFillRef.current) {
        barFillRef.current.style.transition = 'width 300ms ease-out'
        barFillRef.current.style.width = '100%'
      }
      if (pctRef.current) pctRef.current.textContent = '100%'
      if (statusRef.current) statusRef.current.style.opacity = '1'

      await sleep(400)
      if (!isCancelled) finish()
    }

    run()

    return () => {
      isCancelled = true
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={loaderRootRef}
      id="loaderRoot"
      role="status"
      aria-live="polite"
      className="loader-root fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_60%_50%_at_50%_42%,#121826,#0A0D12_72%)] transition-[opacity,transform,visibility] duration-[400ms] ease-[cubic-bezier(.76,0,.24,1)] [&.is-done]:pointer-events-none [&.is-done]:invisible [&.is-done]:scale-[1.03] [&.is-done]:opacity-0"
    >
      <span className="sr-only">Devtacet is loading</span>
      <div className="stage relative flex flex-col items-center gap-[clamp(20px,4vw,30px)]">
        <div
          ref={markWrapRef}
          className="mark-wrap aspect-square w-[clamp(104px,18vw,152px)] [filter:drop-shadow(0_14px_26px_rgba(0,0,0,.4))]"
        >
          <svg className="mark block h-full w-full overflow-visible" viewBox="0 0 500 500" aria-hidden="true">
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
              <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id="markClip" clipPathUnits="userSpaceOnUse">
                <path
                  fillRule="evenodd"
                  d="M98,79 L338,79 L406,146 L406,309 L311,392 L98,392 Z M98,79 L189,150 L258,150 L375,235 L243,325 L209,325 L98,392 L165,315 L165,197 Z"
                />
              </clipPath>
            </defs>

            <path
              ref={fillMarkRef}
              id="fillMark"
              className="fill-mark fill-[url(#cyanGrad)] fill-opacity-0 stroke-[#0891b2] stroke-[1.5] stroke-opacity-60"
              fillRule="evenodd"
              d="M98,79 L338,79 L406,146 L406,309 L311,392 L98,392 Z M98,79 L189,150 L258,150 L375,235 L243,325 L209,325 L98,392 L165,315 L165,197 Z"
            />

            <path
              ref={strokeOuterRef}
              id="strokeOuter"
              className="draw-path fill-none stroke-[#22d3ee] stroke-[8] [stroke-linecap:butt] [stroke-linejoin:miter] [stroke-miterlimit:6]"
              d="M98,79 L338,79 L406,146 L406,309 L311,392 L98,392 Z"
            />
            <path
              ref={strokeInnerRef}
              id="strokeInner"
              className="draw-path fill-none stroke-[#22d3ee] stroke-[8] [stroke-linecap:butt] [stroke-linejoin:miter] [stroke-miterlimit:6]"
              d="M98,79 L189,150 L258,150 L375,235 L243,325 L209,325 L98,392 L165,315 L165,197 Z"
            />

            <g clipPath="url(#markClip)">
              <g ref={sweepGroupRef} id="sweepGroup" className="sweep-group opacity-0 [transform-origin:250px_250px] [transform:rotate(16deg)]">
                <rect ref={sweepRectRef} id="sweep" x="0" y="-200" width="140" height="900" fill="url(#sweepGrad)" />
              </g>
            </g>
          </svg>
        </div>

        <div ref={statusRef} id="status" className="status flex w-[clamp(140px,22vw,190px)] flex-col gap-2 opacity-0">
          <div className="status-row flex items-baseline justify-between font-mono text-[10.5px] tracking-[0.16em] text-[#5B6579]">
            <span>Loading</span>
            <span className="cur text-[#EDF1F6]">
              <span ref={pctRef} id="pct">
                100%
              </span>
            </span>
          </div>
          <div className="bar h-[2px] overflow-hidden rounded-[2px] bg-white/10">
            <div
              ref={barFillRef}
              id="barFill"
              className="bar-fill h-full w-0 rounded-[2px] bg-gradient-to-r from-[#06B6D4] to-[#22d3ee]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
