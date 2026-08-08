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
  const wordRef = useRef<HTMLParagraphElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const pctRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let progressRAF: number | null = null
    let progressVal = 0
    let shimmerAnim: Animation | null = null
    let isCancelled = false

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function sleep(ms: number) {
      return new Promise((res) => setTimeout(res, ms))
    }

    function cancelAllAnimations() {
      if (strokeOuterRef.current) strokeOuterRef.current.getAnimations().forEach((a) => a.cancel())
      if (strokeInnerRef.current) strokeInnerRef.current.getAnimations().forEach((a) => a.cancel())
      if (fillMarkRef.current) fillMarkRef.current.getAnimations().forEach((a) => a.cancel())
      if (markWrapRef.current) markWrapRef.current.getAnimations().forEach((a) => a.cancel())
      if (sweepGroupRef.current) sweepGroupRef.current.getAnimations().forEach((a) => a.cancel())
      if (statusRef.current) statusRef.current.getAnimations().forEach((a) => a.cancel())
    }

    function resetVisualState() {
      cancelAllAnimations()
      if (progressRAF) cancelAnimationFrame(progressRAF)

      const strokeOuter = strokeOuterRef.current
      const strokeInner = strokeInnerRef.current
      const fillMark = fillMarkRef.current
      const markWrap = markWrapRef.current
      const statusEl = statusRef.current
      const barFill = barFillRef.current
      const pctEl = pctRef.current
      const sweepGroup = sweepGroupRef.current

      if (strokeOuter && strokeInner) {
        const lenO = strokeOuter.getTotalLength()
        const lenI = strokeInner.getTotalLength()
        strokeOuter.style.strokeDasharray = `${lenO}`
        strokeInner.style.strokeDasharray = `${lenI}`
        strokeOuter.style.strokeDashoffset = `${lenO}`
        strokeInner.style.strokeDashoffset = `${lenI}`
        strokeOuter.style.opacity = '1'
        strokeInner.style.opacity = '1'
      }

      if (fillMark) fillMark.style.fillOpacity = '0'
      if (markWrap) markWrap.style.transform = 'scale(1)'

      if (statusEl) statusEl.style.opacity = '0'
      if (barFill) barFill.style.width = '0%'
      if (pctEl) pctEl.textContent = '000%'
      progressVal = 0

      if (sweepGroup) sweepGroup.style.opacity = '0'

      loaderRootRef.current?.classList.remove('is-done')
    }

    function startProgressLoop() {
      const target = 92
      function tick() {
        if (isCancelled) return
        progressVal += (target - progressVal) * 0.025 + Math.random() * 0.2
        if (progressVal > target) progressVal = target
        if (barFillRef.current) barFillRef.current.style.width = `${progressVal}%`
        if (pctRef.current) pctRef.current.textContent = `${String(Math.floor(progressVal)).padStart(3, '0')}%`
        progressRAF = requestAnimationFrame(tick)
      }
      progressRAF = requestAnimationFrame(tick)
    }

    function startShimmerLoop() {
      if (sweepGroupRef.current) {
        sweepGroupRef.current.animate(
          [{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.85 }, { opacity: 0 }],
          { duration: 60, fill: 'forwards' }
        )
      }
      if (sweepRectRef.current) {
        sweepRectRef.current.style.transform = 'translateX(-260px)'
        shimmerAnim = sweepRectRef.current.animate(
          [{ transform: 'translateX(-260px)' }, { transform: 'translateX(620px)' }],
          { duration: 2400, iterations: Infinity, easing: 'cubic-bezier(.6,0,.4,1)' }
        )
      }
    }

    async function finishLoading() {
      if (progressRAF) cancelAnimationFrame(progressRAF)

      const start = progressVal
      const t0 = performance.now()
      await new Promise<void>((resolve) => {
        function step(now: number) {
          const p = Math.min(1, (now - t0) / 280)
          const val = start + (100 - start) * p
          if (barFillRef.current) barFillRef.current.style.width = `${val}%`
          if (pctRef.current) pctRef.current.textContent = `${String(Math.floor(val)).padStart(3, '0')}%`
          if (p < 1) requestAnimationFrame(step)
          else resolve()
        }
        requestAnimationFrame(step)
      })

      if (shimmerAnim) shimmerAnim.cancel()

      if (markWrapRef.current) {
        await markWrapRef.current.animate(
          [
            { filter: 'drop-shadow(0 14px 26px rgba(0,0,0,.4)) brightness(1)' },
            { filter: 'drop-shadow(0 14px 34px rgba(6,182,212,.7)) brightness(1.35)' },
            { filter: 'drop-shadow(0 14px 26px rgba(0,0,0,.4)) brightness(1)' },
          ],
          { duration: 520, easing: 'ease-out' }
        ).finished
      }

      await sleep(160)
      if (loaderRootRef.current) {
        loaderRootRef.current.classList.add('is-done')
      }
      await sleep(700)
      setMounted(false)
    }

    async function run() {
      resetVisualState()

      if (reduced) {
        if (fillMarkRef.current) {
          fillMarkRef.current.style.transition = 'fill-opacity .4s ease-out'
          requestAnimationFrame(() => {
            if (fillMarkRef.current) fillMarkRef.current.style.fillOpacity = '1'
          })
        }
        if (strokeOuterRef.current) strokeOuterRef.current.style.opacity = '0'
        if (strokeInnerRef.current) strokeInnerRef.current.style.opacity = '0'
        if (statusRef.current) statusRef.current.style.opacity = '1'
        if (barFillRef.current) barFillRef.current.style.width = '100%'
        if (pctRef.current) pctRef.current.textContent = '100%'
        setTimeout(() => {
          loaderRootRef.current?.classList.add('is-done')
          setTimeout(() => setMounted(false), 700)
        }, 800)
        return
      }

      const strokeOuter = strokeOuterRef.current
      const strokeInner = strokeInnerRef.current
      if (!strokeOuter || !strokeInner) return

      const lenO = strokeOuter.getTotalLength()
      const lenI = strokeInner.getTotalLength()

      const drawOuter = strokeOuter.animate(
        [{ strokeDashoffset: lenO }, { strokeDashoffset: 0 }],
        { duration: 900, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
      )
      await sleep(380)

      const drawInner = strokeInner.animate(
        [{ strokeDashoffset: lenI }, { strokeDashoffset: 0 }],
        { duration: 760, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
      )

      await Promise.all([drawOuter.finished, drawInner.finished])

      if (markWrapRef.current) {
        markWrapRef.current.animate(
          [{ transform: 'scale(.965)' }, { transform: 'scale(1.016)' }, { transform: 'scale(1)' }],
          { duration: 560, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' }
        )
      }
      if (fillMarkRef.current) {
        fillMarkRef.current.animate(
          [{ fillOpacity: 0 }, { fillOpacity: 1 }],
          { duration: 420, easing: 'ease-out', fill: 'forwards' }
        )
      }

      strokeOuter.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'ease-out', fill: 'forwards' })
      strokeInner.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'ease-out', fill: 'forwards' })

      await sleep(300)

      if (statusRef.current) {
        statusRef.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out', fill: 'forwards' })
      }
      await sleep(160)

      startShimmerLoop()
      startProgressLoop()

      setTimeout(() => {
        if (!isCancelled) finishLoading()
      }, 1600)
    }

    run()

    return () => {
      isCancelled = true
      cancelAllAnimations()
      if (progressRAF) cancelAnimationFrame(progressRAF)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={loaderRootRef}
      id="loaderRoot"
      role="status"
      aria-live="polite"
      className="loader-root fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_60%_50%_at_50%_42%,#121826,#0A0D12_72%)] transition-[opacity,transform,visibility] duration-[680ms] ease-[cubic-bezier(.76,0,.24,1)] [&.is-done]:pointer-events-none [&.is-done]:invisible [&.is-done]:scale-[1.045] [&.is-done]:opacity-0"
    >
      <span className="sr-only">DevTacet is loading</span>
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
                000%
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
