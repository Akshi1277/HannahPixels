import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import AppImage from '@/components/ui/AppImage'

const standards = [
  {
    num: '01',
    title: 'Thoughtful by Design',
    desc: 'Every decision has a purpose — from the structure of a box to the feel of the paper. We eliminate unnecessary excess and engineer proportions that elevate the unboxing ritual.'
  },
  {
    num: '02',
    title: 'Materials That Matter',
    desc: 'The right material transforms how a product is held, seen, and remembered. We source exclusively FSC-certified greyboards, virgin kraft fibers, and through-dyed archival paper stocks.'
  },
  {
    num: '03',
    title: 'Precision in Every Detail',
    desc: 'Good packaging should feel effortless. That comes from getting microscopic tolerances right: ±0.1mm CNC scoring, razor-sharp 90° corners, and hand-finished adhesive seams.'
  },
  {
    num: '04',
    title: 'Made to Last',
    desc: 'We create packaging designed to be kept, repurposed, and treasured as keepsake objects long after the product inside has been opened.'
  },
  {
    num: '05',
    title: 'Without Borders',
    desc: 'Operating with twin hubs in London and Dubai, Hannah Pixels serves luxury brands across the UK, Europe, the Middle East, and worldwide with full cross-border logistics.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#111111]">
      <PageHeader
        eyebrow="ABOUT — OUR VISION"
        titleLine1="TO MAKE THE PHYSICAL"
        titleLine2="WORLD OF BRANDS"
        titleItalic="MORE BEAUTIFUL."
        description="Hannah Pixels was created to bring greater thought, craft and character to the way brands are experienced in the physical world."
      />

      {/* Philosophy Narrative + Atelier Photography */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] relative overflow-hidden bg-[#111111] border border-[#E2DDD5] shadow-xs">
              <AppImage
                src="/images/atelier-vision-master.jpg"
                alt="Hannah Pixels artisan inspecting rigid box craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md text-white text-xs font-mono tracking-wider flex justify-between items-center">
                <span>ATELIER DESK</span>
                <span className="text-[#A67C52]">LONDON &amp; DUBAI</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
                THE FOUNDING INTENT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] font-normal leading-[1.08]">
                Where Ideas Take Form.
              </h2>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl text-[#111111] leading-snug border-l-2 border-[#A67C52] pl-6 italic">
              “We believe packaging is more than protection. It is the first touch. The first impression. The moment a brand becomes tangible.”
            </blockquote>

            <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
              Hannah Pixels was born from a refusal to accept generic packaging. We partner with brands that value detail — creating print and packaging that feels considered, distinctive and made to last.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#111111]/70">
              <span className="px-3.5 py-2 bg-white border border-[#E2DDD5]">• FSC® Certified Boards</span>
              <span className="px-3.5 py-2 bg-white border border-[#E2DDD5]">• Greenguard Vegetal Inks</span>
              <span className="px-3.5 py-2 bg-white border border-[#E2DDD5]">• UK VAT &amp; UAE TRN Invoicing</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Hannah Pixels Standards */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            THE STANDARDS
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none">
                <span className="block">THE FIVE</span>
                <span className="block italic text-[#A67C52]">PRINCIPLES.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
                Non-negotiable benchmarks that govern every structural dieline, foil impression, and material selection.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E2DDD5]">
            {standards.map((s) => (
              <div
                key={s.num}
                className="py-10 border-b border-[#E2DDD5] grid lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1 font-serif italic text-2xl text-[#A67C52]">
                  {s.num}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-[#111111]/75 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Hub Production Desks */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5] bg-[#EAE5DE]/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
            GLOBAL ATELIER HUBS
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-[#E2DDD5] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono tracking-wider text-[#A67C52]">
                <span>LONDON DESK</span>
                <span>GMT TIMEZONE</span>
              </div>
              <h3 className="font-serif text-3xl text-[#111111] font-normal">United Kingdom &amp; Europe</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">
                Serving Mayfair boutiques, British perfumery houses, artisan chocolatiers, and publishing houses across the UK. In-person physical swatch reviews and nationwide insured distribution.
              </p>
            </div>

            <div className="p-10 bg-white border border-[#E2DDD5] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono tracking-wider text-[#A67C52]">
                <span>DUBAI DESK</span>
                <span>GST TIMEZONE</span>
              </div>
              <h3 className="font-serif text-3xl text-[#111111] font-normal">UAE &amp; GCC Operations</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">
                Engineering opulent fragrance coffrets, VIP presentation hampers, and luxury date boxes across Dubai, Abu Dhabi, Riyadh, and Doha. Direct land and air courier delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement FAQ */}
      <FaqSection />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 lg:px-12 text-center bg-[#F3EFEA]">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
            COLLABORATION
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-base text-[#111111]/70 leading-relaxed">
            Connect directly with our creative directors to discuss custom dielines, board calipers, and production runs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-8 py-4 transition-colors inline-block"
            >
              START A PROJECT ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
