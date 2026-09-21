import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '@/components/ui/AppIcon'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'CAPABILITIES', to: '/capabilities' },
  { label: 'PROCESS', to: '/process' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3EFEA]/95 backdrop-blur-md shadow-xs border-b border-[#E2DDD5] py-4'
            : 'bg-[#F3EFEA] border-b border-[#E2DDD5]/70 py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Hannah Pixels Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group py-1"
            aria-label="Hannah Pixels homepage"
          >
            <img
              src="/hannahpixels-dark.png"
              alt="Hannah Pixels"
              className="h-8 md:h-9 lg:h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[11px] font-mono tracking-[0.26em] uppercase transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#111111] font-semibold border-b border-[#A67C52] pb-0.5'
                      : 'text-[#111111]/70 hover:text-[#111111]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Button - Button-in-Button Architecture */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase pl-5 pr-2 py-2 transition-all flex items-center gap-2.5 rounded-full active:scale-[0.98]"
            >
              <span>START A PROJECT</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 border border-[#111111]/20 bg-white/40 text-[#111111]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={18} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#F3EFEA] flex flex-col pt-24 px-8 pb-10 overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center shrink-0"
              aria-label="Hannah Pixels homepage"
            >
              <img
                src="/hannahpixels-dark.png"
                alt="Hannah Pixels"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 border border-[#111111]/20 flex items-center justify-center text-[#111111]"
            >
              <Icon name="XMarkIcon" size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-10" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-mono tracking-[0.22em] uppercase transition-colors ${
                    isActive ? 'text-[#A67C52] font-bold' : 'text-[#111111]/80 hover:text-[#111111]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#E2DDD5]">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-[#111111] text-[#F3EFEA] py-3.5 text-xs font-mono font-semibold tracking-[0.22em] uppercase flex items-center justify-center gap-1.5 hover:bg-[#A67C52] transition-colors"
            >
              <span>START A PROJECT</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
