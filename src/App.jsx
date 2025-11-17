import React from 'react'
import Hero from './components/Hero'
import LogoSuite from './components/LogoSuite'
import Guidelines from './components/Guidelines'
import Examples from './components/Examples'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-[#0A2540]" />
            <span className="font-semibold tracking-wide">AYA Brand System</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#guidelines" className="text-slate-600 hover:text-slate-900">Guidelines</a>
            <a href="#logos" className="text-slate-600 hover:text-slate-900">Logos</a>
            <a href="#examples" className="text-slate-600 hover:text-slate-900">Examples</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <LogoSuite />
        <Guidelines />
        <Examples />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AYA — Precision, At Scale
      </footer>
    </div>
  )
}

export default App
