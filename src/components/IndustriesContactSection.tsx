import React, { useState, useEffect } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import MagneticButton from '@/components/ui/MagneticButton'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsAppUrl } from '@/lib/contact'

const industriesData = [
  {
    label: 'Fragrance & Beauty',
    mappingType: 'Perfumery & Fragrance',
    icon: 'BeakerIcon',
    image: '/images/fragrance-luxury-packaging.jpg',
    products: 'Perfume Boxes, Molded Velvet Inserts & Multi-Level Hot Foil Badging',
    highlight: 'Flacon Protection',
    technicalSpec: 'Shatter-tested flacon cavities with flush magnetic closures'
  },
  {
    label: 'Luxury Packaging',
    mappingType: 'Luxury Rigid Boxes',
    icon: 'SparklesIcon',
    image: '/images/luxury-rigid-box.jpg',
    products: 'Shoulder-and-Neck Boxes, Magnetic Flap Closures & Bespoke Drawer Builds',
    highlight: '1800 GSM Greyboard',
    technicalSpec: 'Crisp 90° V-grooved edges with zero board warping'
  },
  {
    label: 'Chocolate & Gourmet',
    mappingType: 'Chocolate & Confectionery',
    icon: 'HeartIcon',
    image: '/images/luxury-chocolate-packaging.jpg',
    products: 'Ballotin Boxes, Gold Foil Divider Trays & Airtight Luxury Packaging',
    highlight: 'Food-Grade Certified',
    technicalSpec: 'Grease-resistant barrier liners preserving confectionery aroma'
  },
  {
    label: 'Product & E-Commerce',
    mappingType: 'Product Packaging & Mailers',
    icon: 'CubeIcon',
    image: '/images/product-packaging-mailers.jpg',
    products: 'Reinforced E-Flute Mailers, Tamper-Evident Peel Strips & Internal Product Dividers',
    highlight: 'Drop-Tested Fluting',
    technicalSpec: 'Engineered unboxing fluting with tamper-evident tear strips'
  },
  {
    label: 'Books & Publishing',
    mappingType: 'Books & Editorial Publishing',
    icon: 'BookOpenIcon',
    image: '/images/editorial-publishing-books.jpg',
    products: 'Hardcover Slipcases, Thread-Sewn Cloth Spines & Lay-Flat Archival Lookbooks',
    highlight: 'Smyth-Sewn Binding',
    technicalSpec: 'Acid-free archival text papers with foil-stamped buckram'
  }
]

type PricingState = {
  step: number
  productType: string
  quantity: string
  finishes: string[]
  dimensions: string
  name: string
  email: string
  phone: string
  company: string
}

export default function IndustriesContactSection() {
  const [form, setForm] = useState<PricingState>({
    step: 1,
    productType: 'Luxury Rigid Boxes',
    quantity: '500-2000',
    finishes: ['Hot Foil Stamping (Gold / Bronze / Silver)'],
    dimensions: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  // Listen for product pre-selection from Services section
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      if (customEvent.detail) {
        setForm(p => ({ ...p, productType: customEvent.detail, step: 2 }))
        const formEl = document.getElementById('quote-builder')
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    window.addEventListener('selectProduct', handler)
    return () => window.removeEventListener('selectProduct', handler)
  }, [])

  const handleNext = () => setForm(p => ({ ...p, step: p.step + 1 }))
  const handleBack = () => setForm(p => ({ ...p, step: p.step - 1 }))

  const toggleFinish = (finishName: string) => {
    setForm(p => ({
      ...p,
      finishes: p.finishes.includes(finishName)
        ? p.finishes.filter(f => f !== finishName)
        : [...p.finishes, finishName]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const getDossierText = () => {
    return `Hello Hannah Pixels! I would like to request an official quotation & CAD dieline:
• Product Category: ${form.productType}
• Order Volume Tier: ${form.quantity} Units
• Selected Finishes: ${form.finishes.length ? form.finishes.join(', ') : 'Standard Finishing'}
• Dimensions (LxWxH): ${form.dimensions || 'Standard size / dieline assistance needed'}
• Brand / Company: ${form.company || 'Not specified'}
• Contact Name: ${form.name || 'Not specified'}
• Corporate Email: ${form.email || 'Not specified'}
• Contact Phone: ${form.phone || 'Not specified'}

Please share specification options and turnaround schedule.`
  }

  const generateWhatsAppUrl = () => {
    return whatsAppUrl(getDossierText())
  }

  const handleCopyDossier = () => {
    navigator.clipboard.writeText(getDossierText())
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const selectIndustryForQuote = (mappingType: string) => {
    setForm(p => ({ ...p, productType: mappingType, step: 2 }))
    const formEl = document.getElementById('quote-builder')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="bg-[#FBF9F4] text-[#181A16]">
      {/* Industries Sector Specialization */}
      <div id="industries" className="pt-10 md:pt-14 pb-16 border-t border-[#E6E0D2] bg-[#FBF9F4] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">07</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">SECTOR SPECIALIZATIONS</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                Specialized Packaging for Demanding Sectors
              </h2>
            </div>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed max-w-md font-normal">
              Engineered for international food compliance, fragile flacon protection, and unboxing rituals across the UK, UAE, and global markets.
            </p>
          </motion.div>

          {/* 5-Card Visual Grid with Interactive Selector (Horizontal Snap Carousel on Mobile, Grid on Tablet/Desktop) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-5 no-scrollbar">
            {industriesData.map((ind, idx) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => selectIndustryForQuote(ind.mappingType)}
                className="group relative rounded-3xl overflow-hidden border border-[#E6E0D2] hover:border-[#F8BC23] transition-all duration-500 flex flex-col justify-between h-[390px] sm:h-[410px] w-[84vw] sm:w-auto shrink-0 snap-center shadow-md hover:shadow-2xl cursor-pointer bg-[#0A0D0B]"
                role="button"
                tabIndex={0}
                aria-label={`Configure ${ind.label} packaging`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    selectIndustryForQuote(ind.mappingType)
                  }
                }}
              >
                {/* Image background */}
                <div className="absolute inset-0 z-0">
                  <AppImage
                    src={ind.image}
                    alt={`${ind.label} luxury packaging`}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 group-hover:via-black/65 transition-colors duration-500" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-[#F8BC23]/40 flex items-center justify-center text-[#F8BC23] group-hover:scale-110 group-hover:bg-[#F8BC23] group-hover:text-black transition-all duration-300">
                    <Icon name={ind.icon as any} size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-[#F8BC23] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#F8BC23]/20">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-5 space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8BC23] bg-black/60 backdrop-blur-md border border-[#F8BC23]/30 px-2.5 py-0.5 rounded-full inline-block">
                    {ind.highlight}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white leading-snug">
                    {ind.label}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                    {ind.technicalSpec}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#F8BC23] group-hover:translate-x-1 transition-transform">
                    <span>Configure Specification</span>
                    <Icon name="ArrowRightIcon" size={11} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Guidance Indicator */}
          <div className="flex sm:hidden items-center justify-center gap-2 pt-3 text-[11px] font-mono text-[#93660C] uppercase tracking-wider">
            <span>← Swipe to explore 5 sectors →</span>
          </div>
        </div>
      </div>

      {/* Interactive Quotation & Specification Builder with Double-Bezel Framing */}
      <div id="quote-builder" className="pt-14 pb-12 md:pb-16 border-t border-[#E6E0D2] bg-[#F3EEE3] scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">08</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">SPECIFICATION &amp; QUOTE BUILDER</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Request a Production Quotation &amp; CAD Dieline
            </h2>
            <p className="text-[#4A4E43] text-sm md:text-base max-w-lg mx-auto">
              Configure your packaging parameters to generate an official manufacturing specification, vector dieline template, and delivery timetable.
            </p>
          </div>

          {/* Double-Bezel Outer Frame */}
          <div className="rounded-[2.25rem] p-2 sm:p-2.5 bg-[#181A16]/10 ring-1 ring-[#93660C]/25 shadow-2xl">
            <div id="form" className="bg-[#0E1311] border border-[#202824] rounded-[calc(2.25rem-0.375rem)] p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F8BC23]/10 to-transparent pointer-events-none rounded-bl-full" />

              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#202824] relative z-10">
                {[1, 2, 3].map((s) => {
                  const isCurrent = form.step === s
                  const isPassed = form.step > s
                  return (
                    <div key={s} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isCurrent
                          ? 'bg-[#F8BC23] text-[#090B0A] shadow-md shadow-[#F8BC23]/25 scale-105'
                          : isPassed
                          ? 'bg-[#93660C]/30 text-[#F8BC23] border border-[#93660C]/50'
                          : 'bg-[#141A17] text-white/40 border border-[#202824]'
                      }`}>
                        {isPassed ? '✓' : s}
                      </div>
                      <span className={`text-xs font-semibold hidden sm:inline ${
                        isCurrent ? 'text-[#F8BC23]' : isPassed ? 'text-white/80' : 'text-white/40'
                      }`}>
                        {s === 1 ? 'Product & Volume' : s === 2 ? 'Finishes & Dielines' : 'Brand Details'}
                      </span>
                    </div>
                  )
                })}
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#93660C]/20 border border-[#F8BC23]/50 flex items-center justify-center text-[#F8BC23] mx-auto shadow-lg shadow-[#93660C]/20">
                    <Icon name="MessageCircleIcon" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-white">
                      Specification Dossier Compiled
                    </h3>
                    <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Your build sheet for <strong className="text-white font-semibold">{form.productType}</strong> ({form.quantity} units) is ready. Transmit directly to our senior structural desk on WhatsApp for 24-hour CAD dieline generation.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <MagneticButton strength={20}>
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group pl-6 pr-2.5 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] flex items-center gap-3 shadow-xl shadow-[#F8BC23]/25 w-full sm:w-auto justify-center"
                      >
                        <Icon name="MessageCircleIcon" size={16} />
                        <span>Transmit Dossier via WhatsApp</span>
                        <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                          <Icon name="ArrowRightIcon" size={11} />
                        </span>
                      </a>
                    </MagneticButton>

                    <button
                      type="button"
                      onClick={handleCopyDossier}
                      className="px-6 py-3 rounded-full border border-[#E6E0D2]/30 text-white/90 hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                    >
                      <Icon name="ClipboardIcon" size={14} />
                      <span>{copied ? 'Copied to Clipboard! ✓' : 'Copy Dossier for Email / RFP'}</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => { setSubmitted(false); setForm(p => ({ ...p, step: 1 })) }}
                      className="text-xs text-white/50 hover:text-white underline cursor-pointer"
                    >
                      Configure Another Product Specification
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <AnimatePresence mode="wait">
                    {form.step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        {/* Product Type selection */}
                        <div className="space-y-3">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                            1. Select Product Collection
                          </label>
                          <div role="radiogroup" aria-label="Product Collection" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {[
                              'Luxury Rigid Boxes',
                              'Product Packaging & Mailers',
                              'Perfumery & Fragrance',
                              'Chocolate & Confectionery',
                              'Luxury Paper & Carry Bags',
                              'Books & Editorial Publishing'
                            ].map((type) => {
                              const isSelected = form.productType === type
                              return (
                                <button
                                  type="button"
                                  key={type}
                                  role="radio"
                                  aria-checked={isSelected}
                                  onClick={() => setForm({ ...form, productType: type })}
                                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#141A17] border-[#F8BC23] text-[#F8BC23] shadow-md shadow-[#F8BC23]/15 ring-2 ring-[#F8BC23]/25'
                                      : 'bg-[#141A17]/50 border-[#202824] text-white/80 hover:border-white/25 hover:bg-[#141A17]'
                                  }`}
                                >
                                  <p className="font-bold text-sm text-white">{type}</p>
                                  <p className="text-[11px] text-white/50 mt-0.5">Hannah Pixels Collection</p>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Quantity Tiers */}
                        <div className="space-y-3 pt-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                            2. Target Production Volume
                          </label>
                          <div role="radiogroup" aria-label="Volume Tier" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                              { label: '100 - 500', note: 'Boutique MOQ' },
                              { label: '500 - 2000', note: 'Most Selected' },
                              { label: '2000 - 5000', note: 'Commercial Run' },
                              { label: '5000+', note: 'Enterprise Volume' }
                            ].map((q) => {
                              const isSelected = form.quantity === q.label
                              return (
                                <button
                                  type="button"
                                  key={q.label}
                                  role="radio"
                                  aria-checked={isSelected}
                                  onClick={() => setForm({ ...form, quantity: q.label })}
                                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#141A17] border-[#F8BC23] text-[#F8BC23] shadow-md shadow-[#F8BC23]/15 ring-2 ring-[#F8BC23]/25'
                                      : 'bg-[#141A17]/50 border-[#202824] text-white/70 hover:border-white/25'
                                  }`}
                                >
                                  <p className="font-bold text-sm text-white">{q.label}</p>
                                  <p className="text-[10px] text-white/50 mt-0.5">{q.note}</p>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <MagneticButton strength={15}>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="group pl-7 pr-2.5 py-2.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] flex items-center gap-3 shadow-lg shadow-[#F8BC23]/20 cursor-pointer"
                            >
                              <span>Next: Finishes &amp; Dimensions</span>
                              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                                <Icon name="ArrowRightIcon" size={11} />
                              </span>
                            </button>
                          </MagneticButton>
                        </div>
                      </motion.div>
                    )}

                    {form.step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        {/* Finishes Checkboxes */}
                        <div className="space-y-3">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                            Specialist Finishes &amp; Inlay Constructions
                          </label>
                          <div role="group" aria-label="Finishes selection" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              'Hot Foil Stamping (Gold / Bronze / Silver)',
                              'Sculpted 3D Emboss / Blind Deboss',
                              'Curated Speciality Papers & Textures',
                              'Bespoke Velvet / Foam Fitted Inlays',
                              'Soft-Touch Peach-Skin Velvet Matte',
                              'Die-Cut Architectural Reveal Window'
                            ].map((finish) => {
                              const isChecked = form.finishes.includes(finish)
                              return (
                                <button
                                  type="button"
                                  key={finish}
                                  role="checkbox"
                                  aria-checked={isChecked}
                                  onClick={() => toggleFinish(finish)}
                                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                                    isChecked
                                      ? 'bg-[#141A17] border-[#F8BC23] text-white ring-2 ring-[#F8BC23]/20 shadow-md shadow-[#F8BC23]/10'
                                      : 'bg-[#141A17]/50 border-[#202824] text-white/70 hover:border-white/25'
                                  }`}
                                >
                                  <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                    isChecked ? 'bg-[#F8BC23] text-[#090B0A] font-bold' : 'border border-white/30'
                                  }`}>
                                    {isChecked && '✓'}
                                  </div>
                                  <span className="text-xs font-medium text-white/90">{finish}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Dimensions or Notes */}
                        <div className="space-y-2 pt-2">
                          <label htmlFor="quote-dimensions" className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                            Approximate Dimensions (L × W × H) or Structural Notes
                          </label>
                          <input
                            id="quote-dimensions"
                            name="dimensions"
                            type="text"
                            value={form.dimensions}
                            onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                            placeholder="e.g. 120 × 80 × 40 mm for 100ml perfume flacon with drop protection requirement"
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] focus-visible:ring-2 focus-visible:ring-[#F8BC23]/40 text-sm text-white px-4 py-3 rounded-xl outline-none transition-colors"
                          />
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="px-6 py-2.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                          >
                            Back
                          </button>
                          <MagneticButton strength={15}>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="group pl-7 pr-2.5 py-2.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] flex items-center gap-3 shadow-lg shadow-[#F8BC23]/20 cursor-pointer"
                            >
                              <span>Next: Brand Details</span>
                              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                                <Icon name="ArrowRightIcon" size={11} />
                              </span>
                            </button>
                          </MagneticButton>
                        </div>
                      </motion.div>
                    )}

                    {form.step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        <div className="p-4 rounded-xl bg-[#141A17] border border-[#93660C]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div>
                            <span className="text-white/60">Configured: </span>
                            <strong className="text-[#F8BC23]">{form.productType}</strong> ({form.quantity} units)
                          </div>
                          <span className="text-[#F8BC23] font-semibold">{form.finishes.length} Finishes Selected</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                            <input
                              id="quote-name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="e.g. Oliver Sterling"
                              className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] focus-visible:ring-2 focus-visible:ring-[#F8BC23]/40 text-sm text-white px-4 py-3 rounded-xl outline-none"
                            />
                          </div>
                          <div>
                            <label htmlFor="quote-company" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Brand / Company Name</label>
                            <input
                              id="quote-company"
                              name="company"
                              type="text"
                              required
                              autoComplete="organization"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              placeholder="e.g. Maison Oud Ltd"
                              className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] focus-visible:ring-2 focus-visible:ring-[#F8BC23]/40 text-sm text-white px-4 py-3 rounded-xl outline-none"
                            />
                          </div>
                          <div>
                            <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Corporate Email</label>
                            <input
                              id="quote-email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              spellCheck={false}
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="procurement@company.com"
                              className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] focus-visible:ring-2 focus-visible:ring-[#F8BC23]/40 text-sm text-white px-4 py-3 rounded-xl outline-none"
                            />
                          </div>
                          <div>
                            <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Phone / WhatsApp Number</label>
                            <input
                              id="quote-phone"
                              name="phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+44 or +971 number"
                              className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] focus-visible:ring-2 focus-visible:ring-[#F8BC23]/40 text-sm text-white px-4 py-3 rounded-xl outline-none"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="px-6 py-2.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-all w-full sm:w-auto cursor-pointer"
                          >
                            Back
                          </button>

                          <MagneticButton strength={16}>
                            <button
                              type="submit"
                              className="group pl-8 pr-3 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] shadow-xl shadow-[#F8BC23]/25 flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
                            >
                              <span>Compile Specification Dossier</span>
                              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                                <Icon name="ArrowRightIcon" size={11} />
                              </span>
                            </button>
                          </MagneticButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

