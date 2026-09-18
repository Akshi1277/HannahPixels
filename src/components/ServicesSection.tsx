import { useState } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsAppUrl } from '@/lib/contact'

export interface ServiceItem {
  id: string
  category: string
  title: string
  subtitle: string
  subItems: string[]
  image: string
  alt: string
  tag: string
  formType: string
}

const services: ServiceItem[] = [
  {
    id: 'service-luxury-packaging',
    category: 'luxury',
    title: 'Luxury Packaging',
    subtitle: 'Packaging designed for brands where every detail matters.',
    subItems: [
      'Rigid Boxes',
      'Luxury Gift Boxes',
      'Magnetic Closure Boxes',
      'Drawer Boxes',
      'Presentation Boxes',
      'Bespoke Packaging'
    ],
    image: '/images/luxury-packaging-hero.jpg',
    alt: 'Hannah Pixels luxury rigid gift box with magnetic closure and hot foil stamping',
    tag: 'Atelier Grade',
    formType: 'Luxury Packaging'
  },
  {
    id: 'service-product-packaging',
    category: 'product',
    title: 'Product Packaging',
    subtitle: 'Functional, distinctive packaging created around your product and brand.',
    subItems: [
      'Corrugated Boxes',
      'Folding Cartons',
      'Product Boxes',
      'Custom Printed Boxes',
      'E-commerce Packaging',
      'Retail Packaging'
    ],
    image: '/images/packaging_boxes.png',
    alt: 'Hannah Pixels custom printed corrugated and product packaging boxes',
    tag: 'Structural Engineering',
    formType: 'Product Packaging'
  },
  {
    id: 'service-fragrance-beauty',
    category: 'fragrance',
    title: 'Fragrance & Beauty',
    subtitle: 'Packaging created for the worlds of fragrance, beauty and personal care.',
    subItems: [
      'Perfume Boxes',
      'Fragrance Packaging',
      'Cosmetic Boxes',
      'Beauty Packaging',
      'Premium Presentation Sets'
    ],
    image: '/images/luxury-swatch-box.jpg',
    alt: 'Hannah Pixels bespoke perfume and fragrance presentation packaging',
    tag: 'Perfume & Cosmetics',
    formType: 'Fragrance & Beauty'
  },
  {
    id: 'service-chocolate-confectionery',
    category: 'chocolate',
    title: 'Chocolate & Confectionery',
    subtitle: 'Packaging that makes indulgence part of the experience.',
    subItems: [
      'Chocolate Boxes',
      'Confectionery Packaging',
      'Gift Boxes',
      'Premium Food Packaging',
      'Seasonal Packaging',
      'Bespoke Collections'
    ],
    image: '/images/atelier-craft-emboss.jpg',
    alt: 'Hannah Pixels artisan chocolate and confectionery gift packaging',
    tag: 'Gourmet & Gifting',
    formType: 'Chocolate & Confectionery'
  },
  {
    id: 'service-paper-carry',
    category: 'paper',
    title: 'Paper & Carry',
    subtitle: 'Paper products that extend your brand beyond the package.',
    subItems: [
      'Luxury Paper Bags',
      'Retail Bags',
      'Gift Bags',
      'Custom Printed Bags',
      'Tissue & Wrapping Paper',
      'Brand Collateral'
    ],
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/paper-bags-2.jpg.jpeg',
    alt: 'Hannah Pixels luxury retail paper carrier bags with custom handles',
    tag: 'Retail & Collateral',
    formType: 'Paper & Carry'
  },
  {
    id: 'service-books-publishing',
    category: 'publishing',
    title: 'Books & Publishing',
    subtitle: 'Print created for stories, ideas and objects worth keeping.',
    subItems: [
      'Books',
      'Coffee Table Books',
      'Art Books',
      'Notebooks & Journals',
      'Catalogues',
      'Editorial Publishing',
      'Corporate Publishing'
    ],
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/Books-main.jpg',
    alt: 'Hannah Pixels custom bound hardback books, catalogues and editorial publishing',
    tag: 'Editorial & Publishing',
    formType: 'Books & Publishing'
  }
]

const categories = [
  { id: 'all', label: 'All Collections' },
  { id: 'luxury', label: 'Luxury Packaging' },
  { id: 'product', label: 'Product Packaging' },
  { id: 'fragrance', label: 'Fragrance & Beauty' },
  { id: 'chocolate', label: 'Chocolate & Confectionery' },
  { id: 'paper', label: 'Paper & Carry' },
  { id: 'publishing', label: 'Books & Publishing' }
]

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory)

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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">01</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">WHAT WE CREATE</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Print &amp; Packaging Engineered for Enduring Brands.
            </h2>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              Thoughtful design, exceptional materials and precise production across six core disciplines.
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
                  ? 'bg-[#F8BC23] text-[#181A16] shadow-lg shadow-[#F8BC23]/25 scale-105 font-bold'
                  : 'bg-white text-[#4A4E43] hover:text-[#181A16] hover:bg-[#F3EEE3] border border-[#E6E0D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flagship Spotlight Feature */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="label-tag bg-[#090B0A]/85 backdrop-blur-md border border-[#F8BC23]/40 text-[#F8BC23] px-4 py-1.5 rounded-full text-[11px] shadow-lg inline-flex items-center gap-1.5">
                    <Icon name="SparklesIcon" size={12} />
                    Featured Collection · {flagship.tag}
                  </span>
                </div>
              </div>

              {/* Flagship Technical Details & Items */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
                    <span className="text-xs font-bold text-[#93660C] uppercase tracking-widest">{flagship.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#181A16] tracking-tight leading-snug">
                    {flagship.title}
                  </h3>
                  <p className="text-base text-[#4A4E43] leading-relaxed font-normal">
                    {flagship.subtitle}
                  </p>

                  <div className="pt-4 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#181A16]">Formats &amp; Applications:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {flagship.subItems.map(item => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#2D3129] bg-[#FBF9F4] border border-[#E6E0D2] p-2 rounded-lg">
                          <Icon name="CheckIcon" size={13} className="text-[#93660C] shrink-0" />
                          <span className="font-medium">{item}</span>
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
                    Configure {flagship.title}
                  </a>
                  <a
                    href={whatsAppUrl(`Hello Hannah Pixels, I'd like to inquire about ${flagship.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl border border-[#E6E0D2] hover:border-[#F8BC23]/50 hover:bg-[#F3EEE3] text-[#4A4E43] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Icon name="MessageCircleIcon" size={14} className="text-[#93660C]" />
                    <span>Inquire</span>
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
              All Brand Packaging Collections ({companionServices.length})
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
  service: ServiceItem
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 z-10">
          <span className="label-tag bg-[#090B0A]/85 backdrop-blur-md border border-[#F8BC23]/40 text-[#F8BC23] px-3 py-1 rounded-full text-[10px]">
            {service.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-[#181A16] tracking-tight">
              {service.title}
            </h3>
            <p className="text-xs text-[#93660C] font-semibold mt-1">
              {service.subtitle}
            </p>
          </div>

          {/* Sub-items Tags */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {service.subItems.map(item => (
              <span
                key={item}
                className="text-[11px] font-medium text-[#2D3129] bg-[#FBF9F4] border border-[#E6E0D2] px-2 py-0.5 rounded-md"
              >
                {item}
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
            <span>Configure Collection</span>
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

