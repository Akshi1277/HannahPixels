import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'))

const previewCollections = [
  {
    title: 'Luxury Rigid Boxes',
    category: 'Magnetic & Presentation Sets',
    desc: 'Bespoke high-density greyboard wrapped in specialty soft-touch paper with crisp 90° corners.',
    image: '/images/packaging-category-rigid-boxes.jpg',
    specs: '1.5mm – 3.0mm Board • Hot Foil • Custom Foam'
  },
  {
    title: 'Fragrance & Beauty Coffrets',
    category: 'Niche Perfumery & Cosmetics',
    desc: 'Opulent coffrets, multi-tier presentation cases, and perfume bottle retention inserts.',
    image: '/images/packaging-category-fragrance-beauty.jpg',
    specs: 'Custom Flocked Trays • Satin Pulls • Blind Emboss'
  },
  {
    title: 'Folding Cartons & Mailers',
    category: 'Retail, D2C & Sustainable Shipping',
    desc: 'Engineered folding mono-cartons, crash-lock bases, and protective luxury mailers.',
    image: '/images/packaging-category-folding-cartons.jpg',
    specs: '300 – 450 GSM Kraft • Spot UV • Tamper Proof'
  },
  {
    title: 'Confectionery & Gourmet Boxes',
    category: 'Artisan Chocolate & Fine Foods',
    desc: 'Food-safe certified presentation boxes with moisture-barrier greaseproof liners.',
    image: '/images/packaging-category-chocolate-food.jpg',
    specs: 'Direct Food Contact Safe • Cavity Trays • Foil'
  },
  {
    title: 'Luxury Boutique Carrier Bags',
    category: 'Retail Unboxing & Events',
    desc: 'Heavyweight art-paper bags with reinforced turnover tops and knotted grosgrain handles.',
    image: '/images/packaging-category-paper-carry.jpg',
    specs: '210 – 300 GSM Art Board • Ribbon Handles • Emboss'
  },
  {
    title: 'Hardcovers & Art Publishing',
    category: 'Monographs, Lookbooks & Catalogues',
    desc: 'Thread-sewn hardcovers with linen book-cloth binding, gilded edges, and slipcases.',
    image: '/images/packaging-category-books-publishing.jpg',
    specs: 'Section Sewn • Bookcloth • Archival Paper'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Hero */}
      <HeroSection />

      {/* Atelier Philosophy & Dual-Hub Intro */}
      <section className="py-20 md:py-28 bg-[#FBF9F4] border-b border-[#E6E0D2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-[2.25rem] p-1.5 bg-[#181A16]/5 ring-1 ring-[#93660C]/15 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="rounded-[calc(2.25rem-0.375rem)] overflow-hidden aspect-[4/5] relative border border-[#E6E0D2]">
                  <AppImage
                    src="/images/atelier-vision-master.jpg"
                    alt="Hannah Pixels artisan examining gold foil debossed rigid packaging"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F8BC23] font-semibold">
                        Hannah Pixels Atelier
                      </p>
                      <p className="text-xs font-serif italic text-white/95">
                        Where Ideas Take Form.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-white/70 tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      London &amp; Dubai
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">01</span>
                  <span className="w-8 h-px bg-[#93660C]/40" />
                  <span className="editorial-tag text-[#93660C]">ATELIER PHILOSOPHY</span>
                </div>
                <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight leading-[1.12]">
                  To Make the Physical World of Brands More Beautiful.
                </h2>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#E6E0D2] shadow-xs space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                  The First Touch
                </p>
                <blockquote className="text-xl md:text-2xl font-serif text-[#181A16] leading-snug">
                  “We believe packaging is more than protection. It is the first touch. The first impression. The moment a brand becomes tangible.”
                </blockquote>
              </div>

              <p className="text-[#3E4237] text-base md:text-lg leading-relaxed font-normal">
                Hannah Pixels is a print and packaging house creating considered physical experiences for brands across the world. Operating with dedicated desks in London and Dubai, we unite thoughtful structural design, exceptional materials, and meticulous finishing.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full bg-[#181A16] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#93660C] transition-colors flex items-center gap-2"
                >
                  <span>Our Heritage &amp; Standards</span>
                  <Icon name="ArrowRightIcon" size={11} />
                </Link>
                <Link
                  to="/process"
                  className="px-6 py-3 rounded-full border border-[#E6E0D2] hover:border-[#93660C] text-[#181A16] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Discover The Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Packaging Collections Showcase */}
      <section className="py-24 md:py-32 bg-[#F4EFE6] border-b border-[#E6E0D2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">02</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">PACKAGING DISCIPLINES</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                Considered Packaging Collections.
              </h2>
            </div>
            <div className="space-y-3 max-w-md">
              <p className="text-[#4A4E43] text-base leading-relaxed">
                From ultra-luxe rigid coffrets with velvet inserts to scalable retail cartons and archival hardcovers.
              </p>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#93660C] hover:text-[#181A16] transition-colors"
              >
                <span>View Full Capabilities Studio</span>
                <Icon name="ArrowRightIcon" size={12} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewCollections.map((col) => (
              <div
                key={col.title}
                className="rounded-[2rem] bg-white border border-[#E6E0D2] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[16/11] relative overflow-hidden bg-[#181A16]/5">
                  <AppImage
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono uppercase tracking-wider border border-white/15">
                      {col.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#181A16] group-hover:text-[#93660C] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-sm text-[#4A4E43] leading-relaxed">
                      {col.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E0D2] flex items-center justify-between text-xs font-mono text-[#93660C]">
                    <span className="text-[11px] truncate max-w-[200px] text-[#6B6F62]">{col.specs}</span>
                    <Link
                      to="/capabilities#services"
                      className="font-bold text-[#93660C] hover:text-[#181A16] flex items-center gap-1 shrink-0"
                    >
                      <span>Explore</span>
                      <Icon name="ArrowRightIcon" size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#181A16] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#93660C] transition-all hover:scale-105 shadow-md"
            >
              <span>Explore All Packaging &amp; Finishes</span>
              <Icon name="ArrowRightIcon" size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Process Banner Callout */}
      <section className="py-20 md:py-28 bg-[#090B0A] text-white border-b border-[#202824] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F8BC23]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A17] border border-[#F8BC23]/30">
                <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#F8BC23] uppercase">
                  MANUFACTURING INTEGRITY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                From CAD Dieline to Finished Box.{' '}
                <span className="shimmer-gold italic font-normal">Every Micron Calibrated.</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Experience our 4-stage transformation portal: from flat structural dielines and high-speed thermal scoring to high-crush rigid box assembly and 120°C hot gold foil stamping.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/process"
                  className="px-7 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all flex items-center gap-2"
                >
                  <span>Launch Process Portal</span>
                  <Icon name="ArrowRightIcon" size={11} />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/50 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Request Vector CAD Dieline
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0F1412] p-8 border border-[#202824] space-y-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#F8BC23] font-bold">
                  The Four Production Milestones
                </p>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Precision CAD Dieline', desc: 'Grain direction, fold clearance & glue tab matrix' },
                    { num: '02', title: 'Thermal Scoring', desc: 'Micro-groove laser creasing without fiber rupture' },
                    { num: '03', title: 'Formed Rigid Box', desc: '44 ECT crush test structural corner staying' },
                    { num: '04', title: 'Hot Gold Foil Monogram', desc: '120°C brass die micro-embossed luster stamping' }
                  ].map((s) => (
                    <div key={s.num} className="flex items-start gap-3.5 pt-3 border-t border-white/10 first:border-0 first:pt-0">
                      <span className="font-serif text-lg font-bold text-[#F8BC23]">{s.num}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                        <p className="text-xs text-white/60">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-xs tracking-widest uppercase text-[#93660C]">Loading Client Perspectives…</div>}>
        <TestimonialsSection />
      </Suspense>

      {/* Sample Swatch Box & Quick Quote Bottom Banner */}
      <section className="py-20 md:py-28 bg-[#FBF9F4] border-t border-[#E6E0D2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#090B0A] text-white border border-[#202824] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F8BC23]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
                <span className="text-[10px] font-mono tracking-widest text-[#F8BC23] uppercase font-bold">
                  Curated Material Swatch Box
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12]">
                Feel the Paper Before You Commit.
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Order our physical sample kit featuring 12+ tactile paper stocks, foil swatches, soft-touch lamination samples, and rigid box board calipers. Dispatched within 48 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 shadow-lg shadow-[#F8BC23]/25"
              >
                Request Quote &amp; Swatch Box
              </Link>
              <a
                href={whatsAppUrl("Hello Hannah Pixels, I would like to request a physical material sample swatch box.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-7 py-4 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="MessageCircleIcon" size={15} className="text-[#F8BC23]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
