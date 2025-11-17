import React from 'react'
import BrandPattern from './BrandPattern'
import { LogoLockup } from './Hero'

const Examples = () => {
  return (
    <section id="examples" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Applications</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Example layouts for a services page and a social tile.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Services page card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-[#0A2540] p-6 text-white">
            <LogoLockup variant="dark" />
            <p className="mt-3 max-w-xl text-white/80">We combine strategy, intelligence, and connection to drive measurable growth at scale.</p>
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-2">
            {[
              { t: 'Strategy', d: 'Positioning, ICP, value architecture.' },
              { t: 'Intelligence', d: 'Market mapping, pipeline insights.' },
              { t: 'Connection', d: 'Account orchestration, partnerships.' },
              { t: 'Growth', d: 'Demand programs, revenue enablement.' },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-900">{s.t}</div>
                <div className="text-sm text-slate-600">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social tile */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between bg-[#0A2540] px-6 py-5">
            <LogoLockup variant="dark" />
            <div className="rounded-full bg-teal-400 px-3 py-1 text-xs font-bold text-[#0A2540]">NEW</div>
          </div>
          <div className="p-6">
            <BrandPattern tone="light" />
            <div className="mt-4 text-sm text-slate-700">Report: Signals for Enterprise Pipeline Velocity →</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Examples
