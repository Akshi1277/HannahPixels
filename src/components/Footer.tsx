import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, PHONE_NUMBER } from '@/lib/contact'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F3EFEA] pt-20 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Giant Ghosted Watermark in Background */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 select-none pointer-events-none text-center font-serif text-[18vw] leading-none text-white/[0.03] tracking-wider uppercase"
      >
        HANNAH
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group" aria-label="Hannah Pixels homepage">
              <img
                src="/hannahpixels.png"
                alt="Hannah Pixels"
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
              />
            </Link>

            <div className="space-y-1">
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Where ideas
              </h3>
              <p className="font-serif text-2xl sm:text-3xl italic text-[#C49A74]">
                take form.
              </p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed font-normal max-w-sm">
              A print and packaging house creating considered physical experiences for brands across the world.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block border border-white/20 hover:border-[#C49A74] text-white hover:text-[#C49A74] text-[11px] font-mono tracking-[0.2em] uppercase px-6 py-3 transition-colors"
              >
                START A PROJECT ↗
              </Link>
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase">
              SITEMAP
            </h4>
            <ul className="space-y-2.5 text-sm font-normal text-white/80">
              <li>
                <Link to="/" className="hover:text-[#C49A74] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-[#C49A74] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#C49A74] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C49A74] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C49A74] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase">
              CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-sm font-normal text-white/80">
              <li>
                <Link to="/capabilities#luxury-packaging" className="hover:text-[#C49A74] transition-colors">
                  Luxury Packaging
                </Link>
              </li>
              <li>
                <Link to="/capabilities#product-packaging" className="hover:text-[#C49A74] transition-colors">
                  Product Packaging
                </Link>
              </li>
              <li>
                <Link to="/capabilities#fragrance-beauty" className="hover:text-[#C49A74] transition-colors">
                  Fragrance &amp; Beauty
                </Link>
              </li>
              <li>
                <Link to="/capabilities#confectionery" className="hover:text-[#C49A74] transition-colors">
                  Chocolate &amp; Confectionery
                </Link>
              </li>
              <li>
                <Link to="/capabilities#paper-carry" className="hover:text-[#C49A74] transition-colors">
                  Paper &amp; Carry
                </Link>
              </li>
              <li>
                <Link to="/capabilities#publishing" className="hover:text-[#C49A74] transition-colors">
                  Books &amp; Publishing
                </Link>
              </li>
            </ul>
          </div>

          {/* Enquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase">
              ENQUIRIES
            </h4>
            <ul className="space-y-2.5 text-sm font-normal text-white/80">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#C49A74] transition-colors">
                  Email — {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/60">Phone — {PHONE_NUMBER}</span>
              </li>
              <li className="pt-2 text-xs font-mono text-white/50 tracking-wider">
                London &amp; Dubai Desks • Worldwide enquiries welcome
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Hannah Pixels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>DESIGN</span>
            <span>•</span>
            <span>PRINT</span>
            <span>•</span>
            <span>PACKAGING</span>
            <span>•</span>
            <span>WORLDWIDE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
