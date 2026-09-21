import React, { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { whatsAppUrl, CONTACT_EMAIL, PHONE_NUMBER } from '@/lib/contact'
import IndustriesContactSection from '@/components/IndustriesContactSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    category: 'Luxury Rigid Boxes',
    quantity: '500 – 1,000 units',
    destination: 'United Kingdom / London',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Prepare luxury formatted WhatsApp message
    const msg = `*NEW ATELIER PROJECT ENQUIRY*\n\n` +
      `*Client:* ${formData.name}\n` +
      `*Brand:* ${formData.brand}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Category:* ${formData.category}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Brief:* ${formData.notes || 'None provided'}`
    
    window.open(whatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#111111]">
      <PageHeader
        eyebrow="CONTACT — PROJECT ENQUIRY"
        titleLine1="LET'S MAKE"
        titleLine2="SOMETHING"
        titleItalic="TANGIBLE."
        description="Tell us about your project, your product and what you have in mind."
      />

      {/* Main Enquiry Form & Atelier Channels Grid */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b border-[#E2DDD5]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Direct Atelier Information */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase">
                DIRECT CHANNELS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                Two production desks.<br />
                <span className="italic text-[#A67C52]">Global delivery.</span>
              </h2>
              <p className="text-base text-[#111111]/75 leading-relaxed">
                Connect directly with our packaging specialists for material advice, vector dielines, and international delivery schedules.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#E2DDD5]">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-wider text-[#A67C52] uppercase font-semibold">
                  London Atelier Desk
                </span>
                <p className="text-base text-[#111111] font-serif">United Kingdom &amp; Europe</p>
                <p className="text-xs font-mono text-[#111111]/60">Mon – Fri · 9:00 AM – 6:00 PM GMT</p>
                <p className="text-xs font-mono text-[#111111]/80 pt-1">{PHONE_NUMBER}</p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#E2DDD5]/70">
                <span className="text-xs font-mono tracking-wider text-[#A67C52] uppercase font-semibold">
                  Dubai Atelier Desk
                </span>
                <p className="text-base text-[#111111] font-serif">United Arab Emirates &amp; GCC</p>
                <p className="text-xs font-mono text-[#111111]/60">Mon – Sat · 9:00 AM – 7:00 PM GST</p>
                <p className="text-xs font-mono text-[#111111]/80 pt-1">Direct WhatsApp Available</p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#E2DDD5]/70">
                <span className="text-xs font-mono tracking-wider text-[#A67C52] uppercase font-semibold">
                  General Enquiries
                </span>
                <p className="text-base font-mono text-[#111111]">{CONTACT_EMAIL}</p>
                <p className="text-xs text-[#111111]/60">24-hour turnaround on CAD specifications</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsAppUrl("Hello Hannah Pixels, I'd like to consult with an atelier packaging specialist.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase px-8 py-3.5 transition-colors inline-flex items-center gap-2"
              >
                <span>OPEN WHATSAPP STUDIO DESK</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E2DDD5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal mb-8">
              Bespoke Project Brief
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <span className="text-4xl text-[#A67C52]">✓</span>
                <h4 className="font-serif text-2xl text-[#111111]">Enquiry Transmitted</h4>
                <p className="text-sm text-[#111111]/70 max-w-md mx-auto">
                  Thank you. Your project brief has been opened in the WhatsApp Studio Console. A specialist will confirm vector dielines and material availability shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono tracking-wider uppercase text-[#A67C52] border-b border-[#A67C52] pb-1 pt-4"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Victoria Sinclair"
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Brand / Studio Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="e.g. Maison Royale"
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@yourbrand.com"
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7... or +971 5..."
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Packaging Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    >
                      <option>Luxury Rigid Boxes</option>
                      <option>Product Packaging &amp; Mailers</option>
                      <option>Fragrance &amp; Beauty Coffrets</option>
                      <option>Chocolate &amp; Gourmet Boxes</option>
                      <option>Paper &amp; Boutique Carry Bags</option>
                      <option>Books &amp; Hardcover Publishing</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                      Target Production Volume
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                    >
                      <option>Prototype / Sample Run (1 – 50)</option>
                      <option>250 – 500 units</option>
                      <option>500 – 1,000 units</option>
                      <option>1,000 – 5,000 units</option>
                      <option>5,000+ units</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                    Delivery Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                  >
                    <option>United Kingdom (London &amp; Nationwide)</option>
                    <option>United Arab Emirates (Dubai &amp; Emirates)</option>
                    <option>GCC Countries (Saudi Arabia, Qatar, Kuwait)</option>
                    <option>European Union</option>
                    <option>United States &amp; Canada</option>
                    <option>Worldwide / Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-wider uppercase text-[#111111]/70 block">
                    Project Dimensions &amp; Material Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide estimated dimensions (Length × Width × Height mm), desired paper texture, foil finishes, insert cutouts, or timeline."
                    className="w-full bg-[#F3EFEA]/40 border border-[#E2DDD5] p-3 text-sm text-[#111111] focus:outline-none focus:border-[#A67C52]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111111] text-[#F3EFEA] hover:bg-[#A67C52] text-xs font-mono font-semibold tracking-[0.24em] uppercase py-4 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SUBMIT PROJECT BRIEF</span>
                  <span>↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Specifications Console */}
      <section className="border-b border-[#E2DDD5]">
        <IndustriesContactSection />
      </section>
    </div>
  )
}
