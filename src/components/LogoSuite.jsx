import React from 'react'
import { IconMark, LogoLockup } from './Hero'

const Tile = ({ title, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 text-xs font-medium tracking-widest text-slate-500">{title}</div>
    <div className="flex items-center justify-center">{children}</div>
  </div>
)

const LogoSuite = () => {
  return (
    <section id="logos" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Logo System</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Versatile marks that scale across digital and print. Works in full-color and monochrome.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Tile title="Primary Lockup">
          <LogoLockup variant="light" />
        </Tile>
        <Tile title="Dark Lockup">
          <div className="w-full rounded-lg bg-[#0A2540] p-6">
            <div className="flex items-center justify-center">
              <LogoLockup variant="dark" />
            </div>
          </div>
        </Tile>
        <Tile title="Icon Mark">
          <IconMark size={72} />
        </Tile>
        <Tile title="Monochrome">
          <IconMark size={72} colors={{ base: '#0A2540', accent: '#0A2540' }} />
        </Tile>
      </div>
    </section>
  )
}

export default LogoSuite
