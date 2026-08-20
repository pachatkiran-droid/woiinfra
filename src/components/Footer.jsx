import React from 'react'

export default function Footer() {
  return (
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-light text-slate-400 gap-6 tracking-wide">
            <div className="flex items-center gap-3">
              <span className="font-light text-sm text-white tracking-[0.2em] uppercase">Cyber//Deck</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-500">© 2026 Ultimate Gaming Matrix. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Anti-Cheat Engine</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Combat</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Server Status</a>
            </div>
          </div>
  )
}