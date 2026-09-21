import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import PackagingTransformationSection from '@/components/PackagingTransformationSection'

const stages = [
  {
    num: '01',
    title: 'Discover',
    tagline: 'Brand Intent & Structural Purpose',
    desc: 'We begin with your brand, your physical product, and the functional purpose behind the piece. We evaluate weight, dimensions, fragile contact points, unboxing sequence, and logistics channel requirements.',
    deliverables: ['Product Dimension Audit', 'Transit Fragility Analysis', 'Packaging Style Selection', 'Target Caliper Specification']
  },
  {
    num: '02',
    title: 'Develop',
    tagline: 'CAD Dielines & Structural Prototyping',
    desc: 'Ideas become precision mathematical vectors. Our structural engineers create production dielines factoring in exact board caliper fold allowances, glue flap shear strength, and friction tuck tolerances.',
    deliverables: ['Vector CAD Dieline (.AI / .DXF / .PDF)', 'Structural White-Sample Prototyping', 'Digital 3D Interactive Proofs', 'Volume Optimization']
  },
  {
    num: '03',
    title: 'Refine',
    tagline: 'Substrates, Textures & Finishes Calibration',
    desc: 'We explore papers, boards, textures, colours, and specialist finishes to find the exact combination. We formulate custom foil temperatures, verify Pantone ink gamuts, and test insert foam densities.',
    deliverables: ['Paper Swatch Matching', 'Hot Brass Foil Testing', 'FSC Greyboard Density Test', 'Wet Press Digital In-Person Proofs']
  },
  {
    num: '04',
    title: 'Produce',
    tagline: 'Precision Printing, Scoring & Die-Cutting',
    desc: 'Every piece is produced with micro-millimeter precision. High-speed Heidelberg presses lay down Greenguard non-toxic inks, followed by automated thermal scoring matrix lines and laser die-cutting.',
    deliverables: ['±0.1mm Cutting Tolerances', 'Heidelberg Multi-Color Offset', 'Thermal Matrix Creasing', '44 ECT Crush Test Validation']
  },
  {
    num: '05',
    title: 'Finish',
    tagline: 'Foil Stamping, Hand Craft & Cleanroom Inspection',
    desc: 'From 120°C hot brass foil stamping and 3D blind embossing to hand-wrapped corner staying and velvet insert insertion. Dedicated craftspeople hand-inspect each box before sealing.',
    deliverables: ['120°C Mirror Metallic Foiling', 'Hand-Wrapped Corner Seams', 'Microscopic Cleanroom Inspection', 'Zero-Defect Quality Gate']
  },
  {
    num: '06',
    title: 'Deliver',
    tagline: 'Dual-Hub Global Logistics & Pallet Distribution',
    desc: 'Finished packaging is sealed in protective moisture-barrier shrink wrap, packed into export-grade double-wall master cartons, and palletized for insured door-to-door delivery from London and Dubai.',
    deliverables: ['London UK Nationwide Courier', 'Dubai & GCC Land/Air Freight', 'Palletized Container Consolidation', 'Export Customs Clearance Included']
  }
]

export default function Process() {
  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#111111]">
      <PageHeader
        eyebrow="THE PROCESS — SIX STAGES"
        titleLine1="FROM IDEA TO"
        titleItalic="FINISHED PIECE."
        description="Craftsmanship is control. Each stage moves the work closer to its final form — deliberately, precisely, and with close attention to detail."
        subnav={[
          { num: '01', label: 'DISCOVER', href: '#stage-01' },
          { num: '02', label: 'DEVELOP', href: '#stage-02' },
          { num: '03', label: 'REFINE', href: '#stage-03' },
          { num: '04', label: 'PRODUCE', href: '#stage-04' },
          { num: '05', label: 'FINISH', href: '#stage-05' },
          { num: '06', label: 'DELIVER', href: '#stage-06' }
        ]}
      />

      {/* The 6 Detailed Stages */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {stages.map((stage) => (
            <div
              key={stage.num}
              id={`stage-${stage.num}`}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 pt-16 first:pt-0 border-t border-[#E2DDD5] first:border-0 scroll-mt-28"
            >
              <div className="lg:col-span-4 space-y-3">
                <span className="font-serif italic text-4xl sm:text-5xl text-[#A67C52] block">
                  {stage.num}
                </span>
                <span className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase block">
                  {stage.tagline}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] font-normal">
                  {stage.title}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-normal">
                  {stage.desc}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-mono tracking-[0.2em] text-[#A67C52] uppercase font-semibold mb-3">
                    Stage Deliverables &amp; Controls:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.deliverables.map((del) => (
                      <div
                        key={del}
                        className="p-3.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#111111]/85 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#A67C52] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 4-Stage Transformation Portal */}
      <section className="py-20 md:py-32 bg-[#111111] text-[#F3EFEA] border-b border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
          <div className="text-[11px] font-mono tracking-[0.24em] text-white/50 uppercase mb-4">
            STRUCTURAL ENGINEERING
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-[1.05]">
            The Packaging <span className="italic text-[#C49A74]">Transformation Portal.</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mt-3">
            Interact with our 4 key engineering stages: CAD drafting, thermal matrix scoring, rigid fold integrity, and hot metallic gold monogramming.
          </p>
        </div>

        <PackagingTransformationSection />
      </section>

      {/* Engineering Tolerances Banner */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#F3EFEA] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
            VECTOR DIELINES
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
            Need a custom dieline for your product?
          </h2>
          <p className="text-base text-[#111111]/70 leading-relaxed">
            Send us your physical dimensions or 3D CAD files. Our engineering studio prepares production-ready vector dielines within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-8 py-4 transition-colors inline-block"
            >
              REQUEST CAD SPECIFICATION ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
