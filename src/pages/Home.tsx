import { Link } from 'react-router-dom'
import AppImage from '@/components/ui/AppImage'
import MaskedLines from '@/components/ui/MaskedLines'

const catalogueItems = [
  {
    num: '01',
    title: 'Luxury Packaging',
    desc: 'Bespoke rigid presentation boxes constructed from heavyweight greyboard wrapped in specialty uncoated or textured art paper.',
    to: '/capabilities#luxury-packaging',
    image: '/images/packaging-category-rigid-boxes.jpg',
    specs: 'Rigid Greyboard · Hot Foil · Neodymium Magnets'
  },
  {
    num: '02',
    title: 'Product Packaging',
    desc: 'Folding mono-cartons and reinforced corrugated shipping mailers designed for retail dominance and luxury unboxing.',
    to: '/capabilities#product-packaging',
    image: '/images/packaging-category-folding-cartons.jpg',
    specs: 'Virgin Kraft · E/B Flute · Auto-Locking Base'
  },
  {
    num: '03',
    title: 'Fragrance & Beauty',
    desc: 'Opulent coffrets, perfume presentation cases, and retention inserts crafted for niche perfumery and skincare.',
    to: '/capabilities#fragrance-beauty',
    image: '/images/packaging-category-fragrance-beauty.jpg',
    specs: 'Custom Flocked Foam · Satin Ribbons · 3D Deboss'
  },
  {
    num: '04',
    title: 'Chocolate & Confectionery',
    desc: 'Food-safe certified presentation boxes with moisture-barrier greaseproof liners and airtight magnetic seals.',
    to: '/capabilities#confectionery',
    image: '/images/packaging-category-chocolate-food.jpg',
    specs: 'FDA Certified · Glassine Liners · Cavity Trays'
  },
  {
    num: '05',
    title: 'Paper & Carry',
    desc: 'Heavyweight art-paper bags with reinforced turnover tops and knotted grosgrain or satin ribbon handles.',
    to: '/capabilities#paper-carry',
    image: '/images/packaging-category-paper-carry.jpg',
    specs: '250 GSM Art Board · Turnover Tops · Foil Crest'
  },
  {
    num: '06',
    title: 'Books & Publishing',
    desc: 'Thread-sewn hardcovers bound in imported European bookcloth, linen, or custom-printed jackets with slipcases.',
    to: '/capabilities#publishing',
    image: '/images/packaging-category-books-publishing.jpg',
    specs: 'Smyth-Sewn · Linen Cloth · Foil Edge Gilding'
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
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 px-6 lg:px-12 border-b border-[#E2DDD5] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Eyebrow Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase pb-8 border-b border-[#111111]/10 gap-2">
            <span>PRINT &amp; PACKAGING HOUSE</span>
            <span className="hidden md:inline">DESIGN • PRINT • PACKAGING — WORLDWIDE</span>
            <span>NO. 01 — FORM</span>
          </div>

          {/* Headline + Packaging Photo Grid */}
          <div className="pt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            {/* Headline + Subtext */}
            <div className="lg:col-span-8 z-10">
              <h1 className="sr-only">WHERE IDEAS TAKE FORM.</h1>
              <MaskedLines
                mode="load"
                className="font-serif text-[3.75rem] sm:text-[5.5rem] md:text-[6.75rem] lg:text-[7.75rem] xl:text-[8.75rem] leading-[0.88] font-normal tracking-[-0.02em] select-none text-[#111111]"
                lines={[
                  'WHERE',
                  <span key="ideas" className="italic text-[#A67C52]">IDEAS</span>,
                  'TAKE FORM.'
                ]}
              />

              <div className="pt-8 max-w-xl space-y-4">
                <p className="text-base sm:text-lg text-[#111111] font-normal leading-relaxed">
                  Hannah Pixels is a print and packaging house creating considered physical experiences for brands across the world.
                </p>
                <p className="text-sm sm:text-base text-[#111111]/70 font-normal leading-relaxed">
                  From luxury rigid boxes and fragrance packaging to bespoke paper bags, corrugated solutions, chocolate packaging and publishing, we bring together thoughtful design, exceptional materials and precise production.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    to="/capabilities"
                    className="group bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase pl-7 pr-2.5 py-3 transition-all flex items-center gap-3 rounded-full active:scale-[0.98] shadow-md shadow-black/10"
                  >
                    <span>EXPLORE CAPABILITIES</span>
                    <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      →
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="group text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors flex items-center gap-2"
                  >
                    <span>START A PROJECT</span>
                    <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Clean, Frameless Luxury Packaging Photo on the right */}
            <div className="lg:col-span-4 pt-4 lg:pt-6">
              <div className="aspect-[4/5] relative overflow-hidden bg-[#8FA396] shadow-sm">
                <AppImage
                  src="/images/hero-sage-boxes.jpg"
                  alt="Hannah Pixels luxury magnetic rigid boxes on sage background"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
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
              <MaskedLines
                mode="scroll"
                className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none"
                lines={[
                  'DESIGNED WITH',
                  <span key="intention" className="italic text-[#A67C52]">INTENTION.</span>,
                  'MADE TO BE',
                  'REMEMBERED.'
                ]}
              />
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
              <MaskedLines
                mode="scroll"
                className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none"
                lines={[
                  'WHAT WE',
                  <span key="create" className="italic text-[#A67C52]">CREATE</span>
                ]}
              />
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                Print and packaging developed around the character, purpose and physical experience of your brand.
              </p>
            </div>
          </div>

          {/* 6 Editorial Accordion Rows with Real Photographic Previews */}
          <div className="border-t border-[#E2DDD5]">
            {catalogueItems.map((item) => (
              <Link
                key={item.num}
                to={item.to}
                className="group py-6 md:py-8 border-b border-[#E2DDD5] grid grid-cols-12 gap-3 sm:gap-6 items-center hover:bg-black/[0.02] px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 font-serif italic text-xl sm:text-2xl text-[#A67C52]">
                  {item.num}
                </div>
                
                <div className="col-span-7 sm:col-span-7 space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal group-hover:text-[#A67C52] transition-colors flex flex-wrap items-baseline gap-3">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111111]/65 font-normal max-w-xl leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="text-[10px] font-mono tracking-widest text-[#A67C52] uppercase pt-0.5">
                    {item.specs}
                  </div>
                </div>

                {/* Micro Photographic Preview Thumbnail */}
                <div className="col-span-2 sm:col-span-3 flex justify-end">
                  <div className="w-16 h-12 sm:w-28 sm:h-18 md:w-36 md:h-22 relative overflow-hidden bg-black/5 border border-[#E2DDD5] group-hover:border-[#A67C52] transition-all duration-300 shadow-2xs">
                    <AppImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 64px, 144px"
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                  </div>
                </div>

                {/* Circular Arrow Badge */}
                <div className="col-span-1 text-right">
                  <span className="w-8 h-8 rounded-full border border-[#111111]/15 group-hover:border-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white inline-flex items-center justify-center text-sm transition-all duration-300">
                    ↗
                  </span>
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
              <MaskedLines
                mode="scroll"
                className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-white uppercase select-none"
                lines={[
                  'MATERIALS',
                  <span key="matter">THAT <span className="italic text-[#C49A74]">MATTER.</span></span>
                ]}
              />
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                The right material can transform how a product is seen, held and remembered.
              </p>
            </div>
          </div>

          {/* Material Photography Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
            <div className="md:col-span-5 aspect-[4/3] relative overflow-hidden bg-white/5 border border-white/10 group">
              <AppImage
                src="/images/finish-gold-foil.jpg"
                alt="Gold hot foil stamping detail on bookcloth"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-xs text-[10px] font-mono tracking-widest text-[#C49A74] uppercase">
                01 / HOT FOIL STAMPING
              </div>
            </div>

            <div className="md:col-span-3 aspect-[3/4] md:aspect-auto relative overflow-hidden bg-white/5 border border-white/10 group">
              <AppImage
                src="/images/finish-velvet-inlays.jpg"
                alt="Bespoke velvet and dark texture finish"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-xs text-[10px] font-mono tracking-widest text-[#C49A74] uppercase">
                02 / BESPOKE INLAYS
              </div>
            </div>

            <div className="md:col-span-4 aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 group">
              <AppImage
                src="/images/finish-speciality-papers.jpg"
                alt="Tactile specialty paper and cotton fiber texture"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-xs text-[10px] font-mono tracking-widest text-[#C49A74] uppercase">
                03 / SPECIALTY PAPERS
              </div>
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
              <MaskedLines
                mode="scroll"
                className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none"
                lines={[
                  'FROM IDEA TO',
                  <span key="finished" className="italic text-[#A67C52]">FINISHED PIECE.</span>
                ]}
              />
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
            07 — THE BENCHMARK
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <MaskedLines
                mode="scroll"
                className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none"
                lines={[
                  'STANDARDS',
                  <span key="execution">OF <span className="italic text-[#A67C52]">EXECUTION.</span></span>
                ]}
              />
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                Four foundational commitments guiding every dieline cut, hot foil pass, and freight dispatch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#E2DDD5]">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className="p-8 sm:p-10 border-r border-b border-[#E2DDD5] bg-[#FAF8F5] hover:bg-white transition-colors duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif italic text-2xl text-[#A67C52]">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2DDD5] group-hover:bg-[#A67C52] transition-colors" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal group-hover:text-[#A67C52] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM PROJECT BANNER ===================== */}
      <section className="py-24 md:py-36 px-6 lg:px-12 text-center bg-[#F3EFEA]">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#111111]/15 text-[10px] font-mono tracking-[0.24em] text-[#111111]/70 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" />
            <span>ATELIER CONSULTATION · UK &amp; DUBAI</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.05]">
            Ready to make something <span className="italic text-[#A67C52]">tangible?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#111111]/70 leading-relaxed max-w-xl mx-auto">
            From a single bespoke prototype to large-scale international brand production runs, our structural engineers and print artisans are ready.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-xs font-mono font-semibold tracking-[0.22em] uppercase pl-8 pr-2.5 py-3.5 rounded-full transition-all active:scale-[0.98] shadow-md shadow-black/10"
            >
              <span>START A PROJECT</span>
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
