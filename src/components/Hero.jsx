import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0A2540] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for contrast, keep interactions pass-through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 via-[#0A2540]/70 to-[#0A2540]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-20 pt-28 md:flex-row md:items-end md:gap-16 md:pt-36">
        <div className="md:w-2/3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Precision, At Scale
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            AYA — Business Growth Engine
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Strategy. Intelligence. Connection. Growth. A bold, modern identity engineered for dynamic yet trustworthy B2B acceleration.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#guidelines" className="rounded-md bg-teal-400 px-5 py-3 text-[#0A2540] transition hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300">View Guidelines</a>
            <a href="#examples" className="rounded-md border border-white/20 px-5 py-3 text-white transition hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30">See Examples</a>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <LogoLockup variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

export const LogoLockup = ({ variant = 'light' }) => {
  const navy = '#0A2540'
  const teal = '#14B8A6'
  const text = variant === 'light' ? navy : 'white'
  const accent = teal
  return (
    <div className="flex items-center gap-4">
      <IconMark size={48} colors={{ base: variant === 'light' ? navy : 'white', accent }} />
      <div className="leading-none">
        <span className="block text-4xl font-bold" style={{ color: text }}>AYA</span>
        <span className="block text-xs tracking-[0.2em]" style={{ color: variant === 'light' ? '#334155' : 'rgba(255,255,255,0.7)' }}>
          PRECISION • AT • SCALE
        </span>
      </div>
    </div>
  )
}

export const IconMark = ({ size = 40, colors = { base: '#0A2540', accent: '#14B8A6' } }) => {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AYA icon mark">
      {/* Shield geometry for trust */}
      <path d="M32 6l18 6v14c0 15-10.5 23.3-18 26-7.5-2.7-18-11-18-26V12l18-6z" fill={colors.base} opacity="0.95" />
      {/* Precision chevrons / momentum */}
      <path d="M20 24l12-8 12 8" stroke={colors.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 32l12-8 12 8" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Network dots */}
      <circle cx="20" cy="40" r="2" fill={colors.accent} />
      <circle cx="32" cy="44" r="1.5" fill="white" fillOpacity="0.9" />
      <circle cx="44" cy="40" r="2" fill={colors.accent} />
      <path d="M22 40c3 2 7 4 10 4s7-2 10-4" stroke="white" strokeOpacity="0.5" />
    </svg>
  )
}
