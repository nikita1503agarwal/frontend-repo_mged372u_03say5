import React from 'react'

// A simple generative pattern using networking lines and digital dots
const BrandPattern = ({ tone = 'light' }) => {
  const bg = tone === 'light' ? 'bg-white' : 'bg-[#0A2540]'
  const border = tone === 'light' ? 'border-slate-200' : 'border-white/10'
  const dot = tone === 'light' ? 'bg-teal-400' : 'bg-teal-300'
  return (
    <div className={`relative overflow-hidden rounded-xl border ${border} ${bg} p-8`}>      
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(20,184,166,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* networking lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 80 C 120 60, 240 120, 360 100 S 600 120, 800 80" stroke="rgba(20,184,166,0.25)" strokeWidth="2" fill="none" />
        <path d="M0 200 C 160 170, 260 210, 420 190 S 640 210, 800 180" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
      </svg>
      {/* dots */}
      <div className={`relative grid grid-cols-8 gap-3`}>        
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex h-12 items-center justify-center">
            <div className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandPattern
