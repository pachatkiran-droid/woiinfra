import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function PrimaryNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClasses = ({ isActive }) =>
    `relative text-[13px] font-medium tracking-wide transition-all duration-300 py-1 ${
      isActive
        ? 'text-white'
        : 'text-neutral-400 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-8 pt-4">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 ease-out flex items-center justify-between px-6 sm:px-8 ${
          scrolled
            ? 'py-3 bg-[#0D0E11]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center group select-none">
          <span className="text-xl font-black tracking-tighter lowercase text-white">
            carty<span className="text-[#D9FD3A] font-extrabold">’</span>
          </span>
        </NavLink>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={getLinkClasses}>
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9FD3A] rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/about" className={getLinkClasses}>
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9FD3A] rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/services" className={getLinkClasses}>
            {({ isActive }) => (
              <>
                Services
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9FD3A] rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className={getLinkClasses}>
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9FD3A] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="hidden sm:inline-block text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </NavLink>
          
          <NavLink
            to="/get-started"
            className="bg-[#D9FD3A] hover:bg-[#c9f029] text-black text-xs font-bold px-5 py-2.2 rounded-full transition-all duration-300 active:scale-95 shadow-[0_2px_12px_rgba(217,253,58,0.2)]"
          >
            Get Started
          </NavLink>
        </div>

      </div>
    </header>
  )
}