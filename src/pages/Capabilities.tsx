import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import AppImage from '@/components/ui/AppImage'

const categories = [
  {
    id: 'luxury-packaging',
    num: '01',
    title: 'Luxury Packaging',
    tagline: 'Rigid, Gift, Magnetic & Drawer Boxes',
    desc: 'Bespoke rigid presentation boxes constructed from heavyweight greyboard wrapped in specialty uncoated or textured art paper. Engineered with sharp 90-degree thermal scored edges, hidden neodymium magnetic closures, and velvet-flocked protection trays.',
    specs: ['1.5mm – 3.0mm FSC Board', 'Magnetic Snap Closures', 'Velvet & Silk Liners', 'Hot Foil Monograms'],
    image: '/images/packaging-category-rigid-boxes.jpg'
  },
  {
    id: 'product-packaging',
    num: '02',
    title: 'Product Packaging',
    tagline: 'Corrugated, Folding Cartons & Mailers',
    desc: 'High-speed folding mono-cartons and reinforced corrugated shipping mailers designed for retail shelf dominance and luxury unboxing. Engineered with auto-locking bases, tear-strip tape clasps, and high-impact exterior flexographic prints.',
    specs: ['300 – 450 GSM Virgin Kraft', 'E/B Flute Corrugated', 'Anti-Crush Edge Ratings', 'Direct Food Contact Safe'],
    image: '/images/packaging-category-folding-cartons.jpg'
  },
  {
    id: 'fragrance-beauty',
    num: '03',
    title: 'Fragrance & Beauty',
    tagline: 'Perfume, Cosmetic & Presentation Sets',
    desc: 'Opulent coffrets, multi-tier presentation cases, and bespoke bottle retention inserts crafted for niche perfumery and high-end skincare. Engineered with high-density laser-cut EVA foam calibrated to prevent bottle movement in transit.',
    specs: ['Custom Flocked Inserts', 'Satin Pull Ribbons', 'Precision Bottle Cavities', 'Multi-Level 3D Debossing'],
    image: '/images/packaging-category-fragrance-beauty.jpg'
  },
  {
    id: 'confectionery',
    num: '04',
    title: 'Chocolate & Confectionery',
    tagline: 'Indulgence Boxes & Gourmet Food Packaging',
    desc: 'Certified food-contact packaging designed for artisan chocolatiers, patisseries, and luxury date confectioners. Features greaseproof barriers, removable divider trays, clear acetate windows, and airtight preservation seals.',
    specs: ['FDA & EU Food-Safe Certified', 'Greaseproof Glassine Liners', 'Modular Cavity Trays', 'Airtight Magnetic Seals'],
    image: '/images/packaging-category-chocolate-food.jpg'
  },
  {
    id: 'paper-carry',
    num: '05',
    title: 'Paper & Carry',
    tagline: 'Luxury Boutique Bags, Tissue & Collateral',
    desc: 'Heavyweight boutique carrier bags with turnover-top cardboard reinforcements and knotted grosgrain, herringbone, or satin ribbon handles. Accompanied by custom-printed acid-free tissue paper and metallic foil seals.',
    specs: ['210 – 300 GSM Art Board', 'Reinforced Bases & Handles', 'Foil Stamped Logos', 'Acid-Free Archival Tissue'],
    image: '/images/packaging-category-paper-carry.jpg'
  },
  {
    id: 'publishing',
    num: '06',
    title: 'Books & Publishing',
    tagline: 'Hardcovers, Art Books, Catalogues & Lookbooks',
    desc: 'Thread-sewn hardcovers bound in imported European bookcloth, linen, or custom-printed dust jackets. Features foil-gilded page edges, head and tail bands, ribbon page markers, and matching rigid slipcases.',
    specs: ['Thread-Sewn Smyth Binding', 'Linen & Fine Bookcloth', 'Metallic Edge Gilding', 'Handcrafted Slipcases'],
    image: '/images/packaging-category-books-publishing.jpg'
  }
]

const finishes = [
  {
    title: 'Hot Foil Stamping',
    desc: 'Micro-engraved brass dies transferring metallic gold, copper, rose gold, silver, or holographic foils under 120°C calibrated pressure.',
    image: '/images/finish-gold-foil.jpg'
  },
  {
    title: '3D Multi-Level Embossing',
    desc: 'Tactile sculpted dies elevating typography and brand crests above the surface plane with microscopic shadow depth.',
    image: '/images/finish-blind-deboss.jpg'
  },
  {
    title: 'Precision Spot UV & Varnish',
    desc: 'High-gloss polymer coating cured under ultraviolet light to contrast against velvety matte or uncoated raw paper stocks.',
    image: '/images/atelier-craft-emboss.jpg'
  },
  {
    title: 'Velvet Soft-Touch Lamination',
    desc: 'Tactile anti-scratch matte lamination imparting a peach-skin, velvety hand-feel that repels fingerprints.',
    image: '/images/finish-velvet-inlays.jpg'
  },
  {
    title: 'Bespoke Laser-Cut Inserts',
    desc: 'High-density EVA foam and velvet-flocked cardboard trays CNC cut to the exact 3D contours of your physical products.',
    image: '/images/eco-packaging-clean.jpg'
  },
  {
    title: 'Textured Specialty Papers',
    desc: 'Sustainably milled FSC art papers with linen, laid, felt, and handmade deckled textures sourced from European mills.',
    image: '/images/finish-speciality-papers.jpg'
  }
]

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#111111]">
      <PageHeader
        eyebrow="CAPABILITIES — THE CATALOGUE"
        titleLine1="WHAT WE"
        titleItalic="CREATE."
        description="Six disciplines, one standard. Every category is developed around the character, purpose and physical experience of your brand."
      />

      {/* The 6 Packaging Disciplines */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 first:pt-0 border-t border-[#E2DDD5] first:border-0"
            >
              {/* Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] relative overflow-hidden bg-[#7E9689] border border-[#E2DDD5] shadow-xs">
                  <AppImage
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-white/85 text-[#111111] backdrop-blur-xs">
                      CAT. {cat.num}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-xl text-[#A67C52]">{cat.num}</span>
                    <span className="text-[11px] font-mono tracking-[0.22em] text-[#111111]/60 uppercase">
                      {cat.tagline}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.05]">
                    {cat.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                  {cat.desc}
                </p>

                {/* Specs Pill List */}
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {cat.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3.5 py-1.5 border border-[#E2DDD5] bg-white text-xs font-mono tracking-wider text-[#111111]/80"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#111111] hover:text-[#A67C52] border-b border-[#111111] pb-1 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>REQUEST SPECIFICATION &amp; QUOTE</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Finishes Studio (Dark Contrast Section) */}
      <section id="finishes" className="bg-[#111111] text-[#F3EFEA] py-24 md:py-36 px-6 lg:px-12 border-b border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-white/50 uppercase mb-8 md:mb-12">
            SPECIALIST CRAFT
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.9] font-normal tracking-[-0.02em] text-white uppercase select-none">
                <span className="block">TACTILE</span>
                <span className="block italic text-[#C49A74]">FINISHES.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                Every surface finish is calibrated under controlled temperature and mechanical pressure to ensure lifelong haptic distinction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 border-t border-white/15">
            {finishes.map((f, i) => (
              <div key={f.title} className="border border-white/15 bg-white/[0.02] flex flex-col group overflow-hidden">
                <div className="aspect-[16/10] relative overflow-hidden bg-white/5">
                  <AppImage
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-xs font-serif italic text-sm text-[#C49A74]">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C49A74] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Sample Kit Callout */}
      <section id="sample-kit" className="py-24 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
              PHYSICAL SWATCHES
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal leading-[1.05]">
              Curated Material <span className="italic text-[#A67C52]">Swatch Box.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed max-w-xl">
              Hold the substrates in your hands. Our curated sample box contains 12+ paper stock weights, hot foil stamping swatches, soft-touch lamination swatches, and structural greyboard calipers.
            </p>
            <div>
              <Link
                to="/contact"
                className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-8 py-4 transition-colors inline-block"
              >
                ORDER SAMPLE SWATCH BOX ↗
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] relative overflow-hidden bg-white border border-[#E2DDD5] p-2">
              <AppImage
                src="/images/sample-swatch-box-atelier.jpg"
                alt="Hannah Pixels material sample swatch box"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
