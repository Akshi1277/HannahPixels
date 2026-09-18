import React, { useState, useEffect } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsAppUrl } from '@/lib/contact'

const industriesData = [
  {
    label: 'Niche Perfumery, Oud & Fragrance',
    icon: 'BeakerIcon',
    image: '/images/luxury-packaging-hero.jpg',
    products: 'Perfume Rigid Cases, Drawer Boxes, Custom Laser Velvet Foam Inserts',
    highlight: 'Gold Foil & Deep Deboss'
  },
  {
    label: 'Specialty Coffee & Food-to-Go',
    icon: 'CakeIcon',
    image: '/images/eco-packaging-clean.jpg',
    products: 'Double-Wall Coffee Cups, Kraft Salad Bowls, Printed Greaseproof Sheets',
    highlight: '100% Aqueous & Compostable'
  },
  {
    label: 'Dates, Chocolates & Confectionery',
    icon: 'HeartIcon',
    image: '/images/luxury-swatch-box.jpg',
    products: 'Partitioned Gifting Trays, Book-Style Rigid Cases, Window Cartons',
    highlight: 'Food-Grade Certified'
  },
  {
    label: 'Boutique Fashion & E-Commerce',
    icon: 'ShoppingBagIcon',
    image: '/images/atelier-craft-emboss.jpg',
    products: 'Grosgrain Ribbon Bags, Self-Seal Shipping Mailers, Embossed Hangtags',
    highlight: 'Laminated & Heavy Kraft'
  },
  {
    label: 'Corporate VIP Gifting & Publishing',
    icon: 'BookOpenIcon',
    image: 'https://printfix.co.in/wp-content/uploads/2026/04/Books-main.jpg',
    products: 'Hardcover Lookbooks, Annual Reports, Gilded Edges, Presentation Hampers',
    highlight: 'Swiss & Case Binding'
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
    productType: 'Rigid Boxes',
    quantity: '500-2000',
    finishes: ['Hot Foil Stamping'],
    dimensions: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [submitted, setSubmitted] = useState(false)

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

  const generateWhatsAppUrl = () => {
    const text = `Hello Hannah Pixels! I would like to request an official quotation & 3D dieline:
• Product Category: ${form.productType}
• Order Volume Tier: ${form.quantity} Units
• Selected Finishes: ${form.finishes.length ? form.finishes.join(', ') : 'Standard Finishing'}
• Dimensions (LxWxH): ${form.dimensions || 'Standard size'}
• Brand/Company: ${form.company || 'Not specified'}
• Contact Name: ${form.name || 'Not specified'}
• Email: ${form.email || 'Not specified'}

Please share specification options and turnaround plan!`
    return whatsAppUrl(text)
  }

  return (
    <section id="contact" className="bg-[#FBF9F4] text-[#181A16]">
      {/* Industries Sector Specialization */}
      <div id="industries" className="py-24 border-t border-[#E6E0D2] bg-[#FBF9F4] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BC23]/40">
                <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
                <span className="label-tag text-[#93660C]">Sector Specialization</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                Specialist Sectors.<br />
                <span className="text-[#93660C] font-normal italic">Tailored Manufacturing.</span>
              </h2>
            </div>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed max-w-sm font-normal">
              Engineered for international food compliance, retail distinction, and unboxing experience across the UK, UAE, and worldwide.
            </p>
          </motion.div>

          {/* 5-Card Visual Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {industriesData.map((ind, idx) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="group relative rounded-3xl overflow-hidden border border-black/5 hover:border-[#F8BC23]/50 transition-all duration-300 flex flex-col justify-between h-[390px] shadow-lg"
              >
                {/* Image background */}
                <div className="absolute inset-0 z-0">
                  <AppImage
                    src={ind.image}
                    alt={ind.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5">
                  <div className="w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-[#F8BC23]/40 flex items-center justify-center text-[#F8BC23]">
                    <Icon name={ind.icon as any} size={18} />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8BC23] bg-black/50 border border-[#F8BC23]/30 px-2.5 py-0.5 rounded-full inline-block">
                    {ind.highlight}
                  </span>
                  <h3 className="text-base font-extrabold text-white leading-snug">
                    {ind.label}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                    {ind.products}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Quotation & Specification Builder */}
      <div id="quote-builder" className="py-24 border-t border-[#E6E0D2] bg-[#F3EEE3] scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BC23]/40">
              <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
              <span className="label-tag text-[#93660C]">Packaging Inquiry</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Request Your<br />
              <span className="text-[#93660C] font-normal italic">Quotation &amp; 3D Dieline.</span>
            </h2>
            <p className="text-[#4A4E43] text-sm md:text-base max-w-lg mx-auto">
              Select your specifications to receive a direct manufacturer quotation, structural mockup, and production timeline.
            </p>
          </div>

          <div id="form" className="bg-gradient-to-br from-[#141A17] via-[#0F1412] to-[#090B0A] border border-[#F8BC23]/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#202824]">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    form.step === s
                      ? 'bg-[#F8BC23] text-[#090B0A]'
                      : form.step > s
                      ? 'bg-[#1E3A2F] text-[#F8BC23]'
                      : 'bg-[#141A17] text-white/40 border border-[#202824]'
                  }`}>
                    {form.step > s ? '✓' : s}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:inline ${
                    form.step === s ? 'text-[#F8BC23]' : 'text-white/40'
                  }`}>
                    {s === 1 ? 'Product & Volume' : s === 2 ? 'Finishes & Dielines' : 'Brand Details'}
                  </span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#1E3A2F] border border-[#F8BC23]/50 flex items-center justify-center text-[#F8BC23] mx-auto">
                  <Icon name="MessageCircleIcon" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">One Last Step</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto">
                    Your specification for <strong className="text-white">{form.productType}</strong> ({form.quantity} units) is ready. Tap below to send it to our team on WhatsApp — that's how requests reach us directly right now.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] hover:bg-[#FFCB4D] text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#F8BC23]/20"
                  >
                    <Icon name="MessageCircleIcon" size={16} />
                    <span>Send Details via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm(p => ({ ...p, step: 1 })) }}
                    className="text-xs text-white/60 hover:text-white underline"
                  >
                    Start New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {form.step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Product Type selection */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                          1. Select Product Category
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {[
                            'Rigid Boxes',
                            'Food & Beverage',
                            'Paper Bags',
                            'Custom Labels',
                            'Corrugated Boxes',
                            'Publishing'
                          ].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setForm({ ...form, productType: type })}
                              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                                form.productType === type
                                  ? 'bg-[#141A17] border-[#F8BC23] text-[#F8BC23] shadow-md shadow-[#F8BC23]/15'
                                  : 'bg-[#141A17]/40 border-[#202824] text-white/80 hover:border-white/20'
                              }`}
                            >
                              <p className="font-bold text-sm text-white">{type}</p>
                              <p className="text-[11px] text-white/50 mt-1">Custom Manufacturing</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quantity Tiers */}
                      <div className="space-y-3 pt-4">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                          2. Target Volume Tier
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { label: '100 - 500', note: 'Boutique MOQ' },
                            { label: '500 - 2000', note: 'Popular' },
                            { label: '2000 - 5000', note: 'Commercial' },
                            { label: '5000+', note: 'Enterprise Bulk' }
                          ].map((q) => (
                            <button
                              type="button"
                              key={q.label}
                              onClick={() => setForm({ ...form, quantity: q.label })}
                              className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                                form.quantity === q.label
                                  ? 'bg-[#141A17] border-[#F8BC23] text-[#F8BC23] shadow-md shadow-[#F8BC23]/15'
                                  : 'bg-[#141A17]/40 border-[#202824] text-white/70 hover:border-white/20'
                              }`}
                            >
                              <p className="font-bold text-sm text-white">{q.label}</p>
                              <p className="text-[10px] text-white/50 mt-0.5">{q.note}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-widest hover:bg-[#FFCB4D] transition-all flex items-center gap-2"
                        >
                          <span>Next: Finishes &amp; Specs</span>
                          <Icon name="ArrowRightIcon" size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {form.step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Finishes Checkboxes */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                          Specialist Finishes &amp; Add-ons
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Hot Foil Stamping (Gold / Bronze / Copper)',
                            'Multi-Level 3D Emboss / Deboss',
                            'Soft-Touch Matte Velvet Lamination',
                            'Spot UV / Raised Varnish Accent',
                            'Laser-Cut Velvet / EVA Foam Insert',
                            'Die-Cut Clear Viewing Window'
                          ].map((finish) => {
                            const isChecked = form.finishes.includes(finish)
                            return (
                              <button
                                type="button"
                                key={finish}
                                onClick={() => toggleFinish(finish)}
                                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                                  isChecked
                                    ? 'bg-[#141A17] border-[#F8BC23] text-white'
                                    : 'bg-[#141A17]/40 border-[#202824] text-white/60 hover:border-white/20'
                                }`}
                              >
                                <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                  isChecked ? 'bg-[#F8BC23] text-[#090B0A] font-bold' : 'border border-white/20'
                                }`}>
                                  {isChecked && '✓'}
                                </div>
                                <span className="text-xs font-medium">{finish}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Dimensions or Notes */}
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
                          Approximate Dimensions (L × W × H) or Packaging Notes
                        </label>
                        <input
                          type="text"
                          value={form.dimensions}
                          onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                          placeholder="e.g. 120 x 80 x 40 mm for 50ml perfume bottle with dieline requirement"
                          className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] text-sm text-white px-4 py-3 rounded-xl outline-none transition-colors"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-widest hover:bg-[#FFCB4D] transition-all flex items-center gap-2"
                        >
                          <span>Next: Contact Details</span>
                          <Icon name="ArrowRightIcon" size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {form.step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-4 rounded-xl bg-[#141A17] border border-[#264A38]/50 flex items-center justify-between text-xs">
                        <div>
                          <span className="text-white/60">Selected: </span>
                          <strong className="text-[#F8BC23]">{form.productType}</strong> ({form.quantity} units)
                        </div>
                        <span className="text-[#F8BC23] font-semibold">{form.finishes.length} Finishes Selected</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Your Full Name</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Full Name"
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] text-sm text-white px-4 py-3 rounded-xl outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Company / Brand Name</label>
                          <input
                            type="text"
                            required
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Brand Name"
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] text-sm text-white px-4 py-3 rounded-xl outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Corporate Email</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="procurement@company.com"
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] text-sm text-white px-4 py-3 rounded-xl outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Phone / WhatsApp Number</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+44 or +971 number"
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] text-sm text-white px-4 py-3 rounded-xl outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all w-full sm:w-auto"
                        >
                          Back
                        </button>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                          <button
                            type="submit"
                            className="px-8 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-widest hover:bg-[#FFCB4D] transition-all shadow-xl shadow-[#F8BC23]/20 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                          >
                            <span>Review &amp; Send Request</span>
                            <Icon name="ArrowRightIcon" size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
