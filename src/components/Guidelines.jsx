import React from 'react'
import { IconMark, LogoLockup } from './Hero'

const Swatch = ({ name, hex, className = '' }) => (
  <div className={`rounded-lg p-4 ${className}`}>
    <div className="h-16 w-full rounded-md" style={{ background: hex }} />
    <div className="mt-2 text-xs font-medium text-slate-600">{name} · {hex}</div>
  </div>
)

const Guidelines = () => {
  return (
    <section id="guidelines" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Brand Guidelines</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Core usage rules for consistency across web, print and social.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-medium tracking-widest text-slate-500">Spacing</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4">
              <IconMark />
              <div>
                <div className="text-sm font-semibold text-slate-900">Clearspace</div>
                <div className="text-sm text-slate-600">Keep padding around the logo equal to the height of the icon mark.</div>
              </div>
            </div>
            <div className="rounded-lg border border-dashed border-slate-300 p-6">
              <LogoLockup />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-medium tracking-widest text-slate-500">Colors</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Swatch name="AYA Navy" hex="#0A2540" />
            <Swatch name="Crisp White" hex="#FFFFFF" />
            <Swatch name="Vibrant Teal" hex="#14B8A6" />
            <Swatch name="Slate" hex="#0F172A" />
          </div>
          <p className="mt-4 text-sm text-slate-600">Primary palette is deep navy with crisp white; teal is a restrained accent for calls to action and highlights.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-medium tracking-widest text-slate-500">Typography</div>
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-sm font-semibold text-slate-900">Primary</div>
              <div className="text-slate-700">Inter / Manrope — clean, confident sans-serif for headings and UI.</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Secondary</div>
              <div className="text-slate-700">IBM Plex Sans — technical tone for data labels and captions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guidelines
