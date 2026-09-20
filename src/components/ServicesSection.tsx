import { useState } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'

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
    image: '/images/luxury-rigid-box.jpg',
    alt: 'Hannah Pixels luxury matte rigid presentation drawer box with gold monogram and silk pull tab',
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
    image: '/images/product-packaging-mailers.jpg',
    alt: 'Hannah Pixels custom printed corrugated product boxes and retail packaging',
    tag: 'Structural Craft',
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
    image: '/images/fragrance-luxury-packaging.jpg',
    alt: 'Hannah Pixels bespoke perfume presentation box with custom velvet inserts',
    tag: 'Perfume & Beauty',
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
    image: '/images/luxury-paper-carry-bags.jpg',
    alt: 'Hannah Pixels luxury retail paper carrier bags with custom handles',
    tag: 'Retail & Carry',
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
    image: '/images/editorial-publishing-books.jpg',
    alt: 'Hannah Pixels bespoke linen hardcover coffee table art books and editorial monographs with gold foil debossing',
    tag: 'Editorial & Books',
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

  const handleSelectProduct = (productType: string) => {
    const el = document.getElementById('quote-builder')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('selectProduct', { detail: productType }))
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Packaging Collections">
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
              Packaging Crafted for Brands with a Point of View.
            </h2>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              Thoughtful design, exceptional materials and precise production across six core disciplines.
            </p>
          </div>
        </div>

        {/* Category Filter Pills - Horizontal swipe on mobile, wrap on desktop */}
        <div className="flex items-center gap-2.5 pb-6 sm:pb-10 border-b border-[#E6E0D2] overflow-x-auto no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#181A16] text-[#F8BC23] shadow-md shadow-[#181A16]/20 font-bold ring-2 ring-[#F8BC23]/40'
                  : 'bg-white text-[#4A4E43] hover:text-[#181A16] hover:bg-[#F3EEE3] border border-[#E6E0D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Balanced 3×2 Grid with Double-Bezel Hardware Enclosures */}
        <div className="mt-12">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredServices.map((service, idx) => (
                <motion.div
                  id={service.id}
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col"
                >
                  {/* Double-Bezel Outer Shell */}
                  <div className="p-1.5 rounded-[2.25rem] bg-[#181A16]/5 ring-1 ring-[#93660C]/10 shadow-xs hover:shadow-xl hover:ring-[#93660C]/30 hover:-translate-y-1 transition-all duration-400 group flex flex-col h-full">
                    {/* Double-Bezel Inner Core */}
                    <div className="rounded-[calc(2.25rem-0.375rem)] bg-white border border-[#E6E0D2] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden flex flex-col h-full justify-between">
                      
                      {/* Top: Image & Header Info */}
                      <div>
                        {/* Image Container with Ambient Scrim */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F3EEE3]">
                          <AppImage
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Top floating discipline tag */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="label-tag bg-[#090B0A]/85 backdrop-blur-md border border-[#F8BC23]/40 text-[#F8BC23] px-3.5 py-1 rounded-full text-[10px] font-mono tracking-wider shadow-md inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
                              {service.tag}
                            </span>
                          </div>
                        </div>

                        {/* Content Details */}
                        <div className="p-6 md:p-8 space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-serif font-bold text-[#181A16] tracking-tight group-hover:text-[#93660C] transition-colors leading-snug">
                              {service.title}
                            </h3>
                            <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                              {service.subtitle}
                            </p>
                          </div>

                          {/* Formats & Specifications Tags */}
                          <div className="pt-2">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#93660C] mb-2.5 font-bold">
                              Formats &amp; Specifications
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {service.subItems.map(item => (
                                <span
                                  key={item}
                                  className="text-[11px] font-mono text-[#2D3129] bg-[#FBF9F4] border border-[#E6E0D2] px-2.5 py-1 rounded-lg"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom: Single Clear Primary Action */}
                      <div className="p-6 md:p-8 pt-0 border-t border-[#E6E0D2]/60 mt-4">
                        <button
                          onClick={() => handleSelectProduct(service.formType)}
                          className="w-full group/btn flex items-center justify-between bg-[#181A16] hover:bg-[#202824] text-[#F8BC23] px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <span>Configure {service.title}</span>
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:translate-x-0.5 transition-transform duration-200">
                            <Icon name="ArrowRightIcon" size={11} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
