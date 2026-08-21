import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Info, Briefcase, Mail } from 'lucide-react'

export default function PrimaryNavbar() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const getDesktopLinkClasses = ({ isActive }) =>
    `relative text-[13px] font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-2 ${
      isActive
        ? 'text-white bg-white/10 shadow-inner'
        : 'text-neutral-400 hover:text-white hover:bg-white/5'
    }`

  const getMobileLinkClasses = ({ isActive }) =>
    `flex flex-col items-center justify-center flex-1 py-1 transition-all duration-300 relative ${
      isActive ? 'text-[#D9FD3A]' : 'text-neutral-400 hover:text-neutral-200'
    }`

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP / LAPTOP BOTTOM DOCK (macOS / Dynamic Island) */}
      {/* ========================================================= */}
      <footer className="hidden md:block fixed bottom-6 left-0 right-0 z-50 px-8 pointer-events-none">
        <div className="max-w-fit mx-auto rounded-full bg-[#0D0E11]/80 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex items-center gap-6 px-4 py-2.5 pointer-events-auto transition-all duration-300 hover:border-white/20">
          {/* Brand Mark */}
          <NavLink to="/" className="flex items-center select-none pl-2 pr-1 group">
            <span className="text-sm font-black tracking-tighter lowercase text-white">
              Woi Infra <span className="text-[#D9FD3A] font-extrabold">.</span>
            </span>
          </NavLink>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-white/10" />

          {/* Links */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink key={item.path} to={item.path} className={getDesktopLinkClasses}>
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D9FD3A]' : ''}`} />
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D9FD3A] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 2. MOBILE BOTTOM APP BAR (Native App Style)             */}
      {/* ========================================================= */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="max-w-md mx-auto bg-[#0D0E11]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 px-3 flex items-center justify-around shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink key={item.path} to={item.path} className={getMobileLinkClasses}>
                {({ isActive }) => (
                  <>
                    <div className="relative">
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#D9FD3A] rounded-full ring-2 ring-[#0D0E11]" />
                      )}
                    </div>
                    <span className="text-[10px] font-medium mt-1 tracking-tight">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>
    </>
  )
}