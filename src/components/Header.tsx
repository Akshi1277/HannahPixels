import { useState, useEffect, useRef } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

const collections = [
  { label: 'Luxury Rigid & VIP Boxes', href: '#services', desc: 'Perfumes, Oud, Dates & Luxury Gifting' },
  { label: 'Eco Food & Drink Packaging', href: '#services', desc: 'Paper Cups, Deli Bowls & Takeaway' },
  { label: 'Boutique Bags', href: '#services', desc: 'Rope & Ribbon Handle Retail Carriers' },
  { label: 'Cartons & Custom Labels', href: '#services', desc: 'Folding Boxes & Waterproof Roll Labels' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setCollectionsOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setCollectionsOpen(false)
    }, 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setMobileCollectionsOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090B0A]/95 backdrop-blur-xl border-b border-[#202824] shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#090B0A]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with clean luxury presence */}
          <a href="#" className="flex items-center group py-1" aria-label="Hannah Pixels homepage">
            <AppImage
              src="/hannahpixels.png"
              alt="Hannah Pixels - Luxury Packaging & Printing"
              width={160}
              height={54}
              priority
              className="h-8 md:h-9 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center pill-nav gap-7" aria-label="Main navigation">
            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="label-tag flex items-center gap-1.5 text-white/80 hover:text-[#F8BC23] transition-colors cursor-pointer py-1"
                aria-haspopup="true"
                aria-expanded={collectionsOpen}
              >
                Collections
                <Icon
                  name="ChevronDownIcon"
                  size={12}
                  className={`text-[#F8BC23] transition-transform duration-300 ${collectionsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {collectionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50">
                  <div className="bg-[#0F1412] border border-[#F8BC23]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl overflow-hidden p-2.5">
                    {collections.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="flex flex-col px-4 py-2.5 rounded-xl hover:bg-[#1E3A2F]/40 transition-all group"
                        onClick={() => setCollectionsOpen(false)}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-white/90 group-hover:text-[#F8BC23]">
                          <span>{c.label}</span>
                          <Icon name="ArrowRightIcon" size={10} className="text-[#F8BC23] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[11px] text-white/50 group-hover:text-white/70">{c.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#finishes"
              className="label-tag text-white/80 hover:text-[#F8BC23] transition-colors"
            >
              Finishes &amp; Craft
            </a>

            <a
              href="#sample-kit"
              className="label-tag text-white/80 hover:text-[#F8BC23] transition-colors"
            >
              Sample Kit
            </a>

            <a
              href="#logistics"
              className="label-tag text-white/80 hover:text-[#F8BC23] transition-colors"
            >
              Global Hubs
            </a>

            <a
              href="#about"
              className="label-tag text-white/80 hover:text-[#F8BC23] transition-colors"
            >
              About
            </a>

            <a
              href="#faq"
              className="label-tag text-white/80 hover:text-[#F8BC23] transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsAppUrl("Hello Hannah Pixels team, I'd like to inquire about custom packaging and printing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#F8BC23]/40 text-white/90 hover:text-[#F8BC23] text-xs font-medium transition-all"
              aria-label="Direct WhatsApp Consultation with Hannah Pixels"
            >
              <Icon name="MessageCircleIcon" size={14} className="text-[#F8BC23]" />
              <span>WhatsApp Studio</span>
            </a>

            <a
              href="#quote-builder"
              className="flex items-center gap-2 bg-[#F8BC23] text-[#090B0A] px-5 py-2 rounded-full label-tag font-bold hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#F8BC23]/15"
            >
              Request Quote
              <Icon name="ArrowRightIcon" size={12} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon
              name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={20}
              className="text-[#F8BC23]"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#090B0A]/98 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-[#202824]">
            <AppImage
              src="/hannahpixels.png"
              alt="Hannah Pixels"
              width={130}
              height={40}
              className="h-7 w-auto object-contain"
            />
            <button
              onClick={closeMenu}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            <div>
              <button
                onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
                className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
              >
                Packaging Collections
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`text-[#F8BC23] transition-transform duration-300 ${mobileCollectionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileCollectionsOpen && (
                <div className="pl-3 py-2 flex flex-col gap-1.5 bg-white/5 rounded-xl my-2">
                  {collections.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={closeMenu}
                      className="py-2 text-sm text-white/80 hover:text-[#F8BC23] flex items-center justify-between pr-3"
                    >
                      <span>{c.label}</span>
                      <Icon name="ArrowRightIcon" size={12} className="text-[#F8BC23]" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#finishes"
              onClick={closeMenu}
              className="py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
            >
              Finishes &amp; Craftsmanship
            </a>

            <a
              href="#sample-kit"
              onClick={closeMenu}
              className="py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
            >
              Order Sample Kit
            </a>

            <a
              href="#logistics"
              onClick={closeMenu}
              className="py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
            >
              Global Operations (UK &amp; Dubai)
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
            >
              About Us
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="py-3.5 text-base font-semibold text-white/90 hover:text-[#F8BC23] border-b border-white/10 transition-colors"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="mt-auto space-y-3 pt-6">
            <a
              href={whatsAppUrl("Hello Hannah Pixels team, I'd like to inquire about packaging services.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full border border-[#264A38] bg-[#141A17] text-[#F8BC23] py-3 rounded-full font-bold text-sm transition-all"
            >
              <Icon name="MessageCircleIcon" size={18} className="text-[#F8BC23]" />
              <span>WhatsApp Specialist Desk</span>
            </a>

            <a
              href="#quote-builder"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-[#F8BC23] text-[#090B0A] py-3.5 rounded-full label-tag hover:bg-[#FFCB4D] transition-all font-bold shadow-lg shadow-[#F8BC23]/20"
            >
              Request Quote
              <Icon name="ArrowRightIcon" size={12} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
