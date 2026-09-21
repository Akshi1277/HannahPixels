import { Link } from 'react-router-dom'
import AppImage from '@/components/ui/AppImage'

const catalogueItems = [
  {
    num: '01',
    title: 'Luxury Packaging',
    desc: 'Packaging designed for brands where every detail matters.',
    to: '/capabilities#luxury-packaging'
  },
  {
    num: '02',
    title: 'Product Packaging',
    desc: 'Functional, distinctive packaging created around your product and brand.',
    to: '/capabilities#product-packaging'
  },
  {
    num: '03',
    title: 'Fragrance & Beauty',
    desc: 'Opulent coffrets, perfume presentation cases, and retention inserts.',
    to: '/capabilities#fragrance-beauty'
  },
  {
    num: '04',
    title: 'Chocolate & Confectionery',
    desc: 'Food-safe certified presentation boxes with moisture-barrier greaseproof liners.',
    to: '/capabilities#confectionery'
  },
  {
    num: '05',
    title: 'Paper & Carry',
    desc: 'Heavyweight art-paper bags with reinforced turnover tops and ribbon handles.',
    to: '/capabilities#paper-carry'
  },
  {
    num: '06',
    title: 'Books & Publishing',
    desc: 'Thread-sewn hardcovers with linen book-cloth binding and slipcases.',
    to: '/capabilities#publishing'
  }
]

const processSteps = [
  { num: '01', title: 'Discover', desc: 'We begin with your brand, your product and the purpose behind the piece.' },
  { num: '02', title: 'Develop', desc: 'Ideas become structures, materials, finishes and considered details.' },
  { num: '03', title: 'Refine', desc: 'We explore papers, boards, textures and specialist finishes.' },
  { num: '04', title: 'Produce', desc: 'Every piece is produced with precision and close attention to detail.' }
]

const principles = [
  { title: 'Thoughtful Design', desc: 'Every line, fold, and closure engineered with structural purpose.' },
  { title: 'Exceptional Materials', desc: 'FSC-certified rigid greyboard, specialty papers, and non-toxic vegetal inks.' },
  { title: 'Precise Production', desc: '±0.1mm CNC cutting, 120°C hot brass stamping, and hand-finished seams.' },
  { title: 'Worldwide Delivery', desc: 'Dual production desks in London and Dubai dispatching across the globe.' }
]

const testimonials = [
  {
    quote: 'Hannah Pixels is our exclusive packaging atelier for luxury rigid fragrance boxes. Their gold hot foil debossing and precision velvet inserts exceed every standard.',
    author: 'Tariq Al-Mansoor',
    role: 'Creative Director, Oud Royal Parfums (Dubai)'
  },
  {
    quote: 'Finding eco-friendly certified packaging with bespoke print and zero plastic liners was tough until we partnered with Hannah Pixels. Impeccable craft.',
    author: 'Oliver Sterling',
    role: 'Co-Founder, Sterling Coffee Roasters (London)'
  },
  {
    quote: 'The book-style magnetic rigid boxes for our confectionery collections made an immediate impression on our VIP corporate clients.',
    author: 'Noor Al-Hassan',
    role: 'Head of Procurement, Barakah Confectionery (Abu Dhabi)'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#111111]">
      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          {/* Eyebrow Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase pb-10 border-b border-[#111111]/10 gap-2">
            <span>PRINT &amp; PACKAGING HOUSE</span>
            <span className="hidden md:inline">DESIGN • PRINT • PACKAGING — WORLDWIDE</span>
            <span>NO. 01 — FORM</span>
          </div>

          {/* Asymmetric Headline + Packaging Photo Grid */}
          <div className="pt-12 grid lg:grid-cols-12 gap-8 items-start relative">
            {/* Headline + Subtext */}
            <div className="lg:col-span-8 z-10">
              <h1 className="font-serif text-[4.25rem] sm:text-[7rem] md:text-[9rem] lg:text-[10.5rem] xl:text-[11.8rem] leading-[0.88] font-normal tracking-[-0.02em] select-none text-[#111111]">
                <span className="block">WHERE</span>
                <span className="block italic text-[#A67C52]">IDEAS</span>
                <span className="block">TAKE FORM.</span>
              </h1>

              <div className="pt-10 max-w-xl space-y-4">
                <p className="text-base sm:text-lg text-[#111111] font-normal leading-relaxed">
                  Hannah Pixels is a print and packaging house creating considered physical experiences for brands across the world.
                </p>
                <p className="text-sm sm:text-base text-[#111111]/70 font-normal leading-relaxed">
                  From luxury rigid boxes and fragrance packaging to bespoke paper bags, corrugated solutions, chocolate packaging and publishing, we bring together thoughtful design, exceptional materials and precise production.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <Link
                    to="/capabilities"
                    className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-7 py-3.5 transition-colors"
                  >
                    EXPLORE CAPABILITIES
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors flex items-center gap-1.5"
                  >
                    <span>START A PROJECT</span>
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Packaging Photo on the right */}
            <div className="lg:col-span-4 pt-6 lg:pt-16">
              <div className="aspect-[3/4] relative overflow-hidden bg-[#7E9689] shadow-xs">
                <AppImage
                  src="/images/packaging-category-rigid-boxes.jpg"
                  alt="Rigid box with gold foil stamping on calm sage background"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="pt-3 text-[10px] font-mono tracking-[0.2em] text-[#111111]/60 uppercase">
                FIG. 01 — RIGID CONSTRUCTION, FOIL DETAIL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TICKER RIBBON ===================== */}
      <div className="bg-[#F3EFEA] border-b border-[#E2DDD5] py-5 overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-8 text-2xl md:text-3xl font-serif italic text-[#111111] animate-none">
          <span>Packaging that stays</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Rigid boxes</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Foil &amp; emboss</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Luxury paper bags</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Fragrance coffrets</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Publishing &amp; hardcovers</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>Confectionery packaging</span>
          <span className="text-[#A67C52] not-italic text-sm">♦</span>
          <span>London &amp; Dubai</span>
        </div>
      </div>

      {/* ===================== 02 — THE BELIEF ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            02 — THE BELIEF
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none">
                <span className="block">DESIGNED WITH</span>
                <span className="block italic text-[#A67C52]">INTENTION.</span>
                <span className="block">MADE TO BE</span>
                <span className="block">REMEMBERED.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-4 pb-2 md:pb-6">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal leading-snug">
                Packaging is more than protection.
              </h3>
              <p className="text-base text-[#111111]/70 leading-relaxed font-normal">
                It is the first touch. The first impression. The moment a brand becomes tangible.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>OUR VISION &amp; STANDARDS</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 03 — CATALOGUE ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            03 — CATALOGUE
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none">
                <span className="block">WHAT WE</span>
                <span className="block italic text-[#A67C52]">CREATE</span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                Print and packaging developed around the character, purpose and physical experience of your brand.
              </p>
            </div>
          </div>

          {/* 6 Editorial Accordion Rows */}
          <div className="border-t border-[#E2DDD5]">
            {catalogueItems.map((item) => (
              <Link
                key={item.num}
                to={item.to}
                className="group py-8 md:py-10 border-b border-[#E2DDD5] grid grid-cols-12 gap-4 items-center hover:bg-black/[0.02] transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 font-serif italic text-lg sm:text-xl text-[#A67C52]">
                  {item.num}
                </div>
                <div className="col-span-9 sm:col-span-10 space-y-1">
                  <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#111111] font-normal group-hover:text-[#A67C52] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111111]/65 font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="col-span-1 text-right text-lg sm:text-2xl text-[#111111]/40 group-hover:text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  ↗
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link
              to="/capabilities"
              className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors inline-flex items-center gap-1.5"
            >
              <span>VIEW FULL CAPABILITIES STUDIO</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 04 — MATERIALITY (DARK CONTRAST) ===================== */}
      <section className="bg-[#111111] text-[#F3EFEA] py-24 md:py-36 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-white/50 uppercase mb-8 md:mb-12">
            04 — MATERIALITY
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-white uppercase select-none">
                <span className="block">MATERIALS</span>
                <span className="block">THAT <span className="italic text-[#C49A74]">MATTER.</span></span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                The right material can transform how a product is seen, held and remembered.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/15">
            {[
              { num: '01', title: 'Foil & Emboss', desc: 'Hot-stamped metallic luster and multi-level 3D blind debossing.' },
              { num: '02', title: 'Speciality Papers', desc: 'Textured, uncoated, linen, and through-dyed archival paper stocks.' },
              { num: '03', title: 'Rigid Boards', desc: 'High-density 1.2mm to 3.0mm recycled greyboard with sharp 90° corners.' },
              { num: '04', title: 'Custom Inserts', desc: 'Laser-cut high-density EVA foam lined with velvet, suede, or card partitions.' }
            ].map((m) => (
              <div key={m.title} className="p-8 border border-white/15 space-y-4">
                <span className="font-serif italic text-lg text-[#C49A74]">{m.num}</span>
                <h3 className="font-serif text-2xl text-white font-normal">{m.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/capabilities#finishes"
              className="bg-white text-[#111111] hover:bg-[#C49A74] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-8 py-3.5 transition-colors inline-block"
            >
              DISCOVER SPECIALIST FINISHES ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 05 — THE PROCESS ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            05 — THE PROCESS
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none">
                <span className="block">FROM IDEA TO</span>
                <span className="block italic text-[#A67C52]">FINISHED PIECE.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                Craftsmanship is control. Each stage moves the work closer to its final form — deliberately, precisely, and with close attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#E2DDD5]">
            {processSteps.map((s) => (
              <div key={s.num} className="space-y-4">
                <div className="font-serif italic text-2xl text-[#A67C52]">{s.num}</div>
                <h3 className="font-serif text-3xl text-[#111111] font-normal">{s.title}</h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="/process"
              className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors inline-flex items-center gap-1.5"
            >
              <span>EXPLORE ALL SIX MANUFACTURING PHASES</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 06 — CLIENT PERSPECTIVES ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 border-b border-[#E2DDD5] bg-[#EAE5DE]/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            06 — PERSPECTIVES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div key={t.author} className="space-y-6 flex flex-col justify-between">
                <blockquote className="font-serif text-xl sm:text-2xl text-[#111111] leading-snug font-normal">
                  “{t.quote}”
                </blockquote>
                <div className="pt-4 border-t border-[#E2DDD5] space-y-1">
                  <p className="text-sm font-semibold text-[#111111]">{t.author}</p>
                  <p className="text-xs text-[#111111]/60 font-mono tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 07 — THE PRINCIPLES ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            07 — PRINCIPLES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="p-8 border border-[#E2DDD5] bg-white space-y-3">
                <h3 className="font-serif text-2xl text-[#111111] font-normal">{p.title}</h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM PROJECT BANNER ===================== */}
      <section className="py-24 md:py-32 px-6 lg:px-12 text-center bg-[#F3EFEA]">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
            ATELIER CONSULTATION
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal leading-tight">
            Ready to make something <span className="italic text-[#A67C52]">tangible?</span>
          </h2>
          <p className="text-base text-[#111111]/70 leading-relaxed">
            From a single bespoke prototype to large-scale international brand production runs.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-xs font-mono font-semibold tracking-[0.22em] uppercase px-9 py-4 transition-colors inline-block"
            >
              START A PROJECT ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
