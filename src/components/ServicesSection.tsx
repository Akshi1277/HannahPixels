import { useState } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsAppUrl } from '@/lib/contact'

const services = [
  {
    id: 'service-rigid-box',
    category: 'luxury',
    title: 'Luxury Rigid & VIP Presentation Boxes',
    subtitle: 'Perfumes, Oud, Fine Jewelry & VIP Gifting',
    description:
      'Architectural magnetic closure boxes, neck-and-shoulder builds, and drawer cases. Hand-wrapped in FSC-certified tactile papers, fitted with precision laser-cut high-density EVA or velvet-flocked trays, and adorned with hot foil stamping for commanding shelf presence.',
    image: '/images/luxury-packaging-hero.jpg',
    alt: 'Luxury rigid presentation boxes with gold foiling and magnetic flap',
    tag: 'Luxury',
    specs: ['1200–2400 GSM Rigid Greyboard', 'Neodymium Magnetic Snap Closures', 'Laser-Cut Velvet & EVA Inlays', 'Precision Hot Foil & 3D Deboss'],
    formType: 'Rigid Boxes',
    dielineFormats: 'AI, PDF & 3D Interactive Render'
  },
  {
    id: 'service-food-packaging',
    category: 'hospitality',
    title: 'Eco Hospitality & Food-to-Go Packaging',
    subtitle: 'Artisan Coffee Roasters, Deli Bowls & Bakery',
    description:
      'Certified sustainable single and double-wall hot beverage cups, leakproof virgin kraft deli bowls, custom greaseproof wraps, and compostable bagasse containers. Formulated with plastic-free aqueous barriers fully compliant with UK Plastic Packaging Tax (PPT) and Dubai Municipality Food Safety standards.',
    image: '/images/eco-packaging-clean.jpg',
    alt: 'Eco friendly custom printed coffee cups and food packaging on warm stone',
    tag: 'FSC® Certified',
    specs: ['Plastic-Free Aqueous Water Barrier', 'Soy-Based Food-Safe Inks', 'Double-Wall Thermal Insulation', 'UK PPT Exemption Certified'],
    formType: 'Food & Beverage',
    dielineFormats: 'Standard 8oz, 12oz, 16oz + Custom Bowls'
  },
  {
    id: 'service-paper-bags',
    category: 'retail',
    title: 'Boutique Retail Bags',
    subtitle: 'Fashion, Jewelry & Event Carriers',
    description:
      'Heavyweight 250–350 GSM laminated art paper, virgin natural ribbed kraft, and tactile textured paper carriers. Hand-assembled with dyed-to-match grosgrain ribbon, knotted Japanese cotton cord, or concealed magnetic flap closures with reinforced baseboards.',
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/paper-bags-2.jpg.jpeg',
    alt: 'Boutique paper carrier bags with ribbon handles and foil branding',
    tag: 'Retail & Fashion',
    specs: ['Grosgrain Ribbon & Cord Handles', 'Reinforced 400 GSM Base Board', 'Precision Foil Stamped & Blind Debossed'],
    formType: 'Paper Bags',
    dielineFormats: 'Custom Sizing Available'
  },
  {
    id: 'service-custom-labels',
    category: 'retail',
    title: 'High-Speed Automated Roll Labels',
    subtitle: 'Perfumes, Bottling Lines & Cosmetic Jars',
    description:
      'Scratch, oil, and moisture-resistant roll labels engineered for automated high-speed labelling machinery. Printed on metallic gold BOPP, natural textured unbleached wine stocks, or ultra-clear film with raised tactile UV varnishes.',
    image: '/images/custom_labels.png',
    alt: 'Custom printed roll labels and embossed foil decals',
    tag: 'Industrial Bottling & Jars',
    specs: ['Water, Oil & Alcohol Proof', 'Metallic Foil BOPP & Unbleached Stock', 'Machine Roll Core Spec 76mm'],
    formType: 'Custom Labels',
    dielineFormats: 'Roll & Sheet Formats'
  },
  {
    id: 'service-corrugated-box',
    category: 'ecommerce',
    title: 'E-Commerce Postal Shippers & Mailers',
    subtitle: 'Crash-Lock & Peel-and-Seal Logistics',
    description:
      'Durable micro-flute E and B-flute corrugated mailer boxes engineered to withstand cross-continental courier transit without crushing. Custom printed inside and out with vegetable-based inks and integrated double peel-and-seal return adhesive strips.',
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/corrugated-new.jpg',
    alt: 'Custom printed e-commerce shipping boxes with self-seal tape',
    tag: 'Freight & Postal Delivery',
    specs: ['High Burst-Strength E/B Flute', 'Integrated Double Tear-Tape Strips', 'Full Interior & Exterior CMYK'],
    formType: 'Corrugated Boxes',
    dielineFormats: 'Standard Royal Mail / FedEx Parcel Sizes'
  },
  {
    id: 'service-books-publishing',
    category: 'luxury',
    title: 'Lookbooks, Hardcovers & Menus',
    subtitle: 'Hospitality Menus & Brand Books',
    description:
      'Custom bound lookbooks, hardcover investor cases, real-leather and linen restaurant menus, and gold-gilded lookbooks. Suited to hospitality venues, resorts, and premium brand presentations across London and Dubai.',
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/Books-main.jpg',
    alt: 'Luxury hardcover books with custom binding and foil finishing',
    tag: 'Publishing & Hospitality',
    specs: ['Section-Sewn Case Binding', 'Gold & Copper Foil Gilded Edges', 'Custom Cloth & Leather Binding'],
    formType: 'Publishing & Books',
    dielineFormats: 'Custom Page Configurations'
  }
]

const categories = [
  { id: 'all', label: 'All Packaging' },
  { id: 'luxury', label: 'Luxury & VIP' },
  { id: 'hospitality', label: 'Eco Hospitality & Food' },
  { id: 'retail', label: 'Boutique Retail & Bags' },
  { id: 'ecommerce', label: 'E-Commerce Shippers' }
]

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory)

  // Flagship featured product (first in filtered list)
  const flagship = filteredServices[0] || services[0]
  const companionServices = filteredServices.slice(1)

  const handleSelectProduct = (productType: string) => {
    const el = document.getElementById('quote-builder')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('selectProduct', { detail: productType }))
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FBF9F4] relative overflow-hidden scroll-mt-28" aria-label="Packaging Collections">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 blob-primary opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 blob-accent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE3] border border-[#F8BC23]/40">
              <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
              <span className="label-tag text-[#93660C] text-[11px]">Packaging Collections</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Complete Packaging Range.<br />
              <span className="text-[#93660C] font-normal italic">Engineered with Precision.</span>
            </h2>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              Every box, cup, and carrier is custom manufactured to your millimeter specifications. Low minimum order runs from 100 units with complete in-house tooling.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pb-12 border-b border-[#E6E0D2]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F8BC23] text-[#181A16] shadow-lg shadow-[#F8BC23]/25 scale-105'
                  : 'bg-white text-[#4A4E43] hover:text-[#181A16] hover:bg-[#F3EEE3] border border-[#E6E0D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flagship Spotlight Feature (Breaks the Monotony) */}
        <div className="my-12">
          <div className="bg-white border border-[#F8BC23]/30 rounded-3xl overflow-hidden shadow-xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Flagship Visual */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden group bg-[#F3EEE3]">
                <AppImage
                  src={flagship.image}
                  alt={flagship.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="label-tag bg-[#090B0A]/85 backdrop-blur-md border border-[#F8BC23]/40 text-[#F8BC23] px-4 py-1.5 rounded-full text-[11px] shadow-lg inline-flex items-center gap-1.5">
                    <Icon name="StarIcon" size={11} variant="solid" />
                    Featured Collection · {flagship.tag}
                  </span>
                </div>
              </div>

              {/* Flagship Technical Details & Dieline Hub */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <p className="text-xs font-bold text-[#93660C] uppercase tracking-widest">{flagship.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#181A16] tracking-tight leading-snug">
                    {flagship.title}
                  </h3>
                  <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                    {flagship.description}
                  </p>

                  <div className="pt-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#181A16]">Specifications:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {flagship.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-2.5 text-xs text-[#4A4E43]">
                          <Icon name="CheckBadgeIcon" size={14} className="text-[#3B6A3E] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E6E0D2] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="#quote-builder"
                    onClick={() => handleSelectProduct(flagship.formType)}
                    className="flex-1 text-center py-3.5 px-6 rounded-xl bg-[#F8BC23] text-[#181A16] hover:bg-[#FFCB4D] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    Configure {flagship.formType}
                  </a>
                  <a
                    href={whatsAppUrl(`Hello Hannah Pixels, I'd like to request the CAD dieline for ${flagship.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl border border-[#E6E0D2] hover:border-[#F8BC23]/50 hover:bg-[#F3EEE3] text-[#4A4E43] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Icon name="ArrowDownIcon" size={14} className="text-[#93660C]" />
                    <span>Request CAD Dieline</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companion Collection Cards */}
        {companionServices.length > 0 && (
          <div className="pt-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#181A16] mb-6">
              More Packaging Formats ({companionServices.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {companionServices.map((service, idx) => (
                  <motion.div
                    id={service.id}
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <ServiceCard service={service} onSelectProduct={handleSelectProduct} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  onSelectProduct
}: {
  service: (typeof services)[0]
  onSelectProduct: (productType: string) => void
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-[#E6E0D2] bg-white hover:border-[#F8BC23]/50 transition-all duration-300 flex flex-col h-full shadow-md hover:shadow-xl">
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F3EEE3]">
        <AppImage
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 z-10">
          <span className="label-tag bg-[#090B0A]/85 backdrop-blur-md border border-[#F8BC23]/40 text-[#F8BC23] px-3 py-1 rounded-full text-[10px]">
            {service.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2.5">
          <div>
            <p className="text-[11px] font-bold text-[#93660C] uppercase tracking-wider">{service.subtitle}</p>
            <h3 className="text-xl font-bold text-[#181A16] tracking-tight mt-1">
              {service.title}
            </h3>
          </div>

          <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
            {service.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-1.5">
            {service.specs.slice(0, 2).map(spec => (
              <span
                key={spec}
                className="text-[10px] font-medium text-[#3B6A3E] bg-[#F3EEE3] border border-[#538B56]/30 px-2 py-0.5 rounded-md"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#E6E0D2] flex items-center justify-between">
          <a
            href="#quote-builder"
            onClick={() => onSelectProduct(service.formType)}
            className="inline-flex items-center gap-1.5 text-[#93660C] font-bold text-xs uppercase tracking-wider hover:text-[#181A16] transition-colors"
          >
            <span>Configure Packaging</span>
            <Icon name="ArrowRightIcon" size={12} />
          </a>

          <a
            href={whatsAppUrl(`Hello Hannah Pixels, I'm inquiring about ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#F3EEE3] border border-[#F8BC23]/40 flex items-center justify-center text-[#93660C] hover:bg-[#F8BC23] hover:text-[#181A16] transition-all"
            aria-label={`Ask about ${service.title} on WhatsApp`}
          >
            <Icon name="MessageCircleIcon" size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
