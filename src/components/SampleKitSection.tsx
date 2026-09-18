import { useState } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

export default function SampleKitSection() {
  const [ordered, setOrdered] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    productInterest: 'Luxury Rigid Boxes'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrdered(true)
  }

  const sampleKitWhatsAppUrl = whatsAppUrl(
    `Hello Hannah Pixels, I'd like to request a Sample Swatch Box.
Name: ${formData.name || 'Not specified'}
Brand / Company: ${formData.company || 'Not specified'}
Email: ${formData.email || 'Not specified'}
Primary Interest: ${formData.productInterest}
Shipping Address: ${formData.address || 'Not specified'}`
  )

  return (
    <section id="sample-kit" className="py-24 md:py-32 bg-[#FBF9F4] relative overflow-hidden scroll-mt-28" aria-label="Sample Swatch Kit">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#0E1311] border border-[#202824] rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#F8BC23]">03</span>
              <span className="w-8 h-px bg-[#F8BC23]/40" />
              <span className="editorial-tag text-[#F8BC23]">PHYSICAL SAMPLE SWATCH BOX</span>
            </div>

            <h2 className="section-headline text-white text-3xl md:text-5xl font-medium tracking-tight">
              Test Our Materials in Person
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-relaxed font-normal">
              Packaging cannot be judged purely on a screen. Feel the 1800 GSM greyboard rigidity, examine multi-level foil debossing under natural light, and test lid snap magnetic resistance before placing a production run.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Swatch Box Photographic Showcase */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-[#F8BC23]/35 shadow-2xl group bg-[#0A0D0B]">
                <AppImage
                  src="/images/luxury-swatch-box.jpg"
                  alt="Hannah Pixels luxury sample swatch box with foil ribbons and textured cards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 bg-[#090B0A]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <span>Real Rigid Magnetic Box</span>
                  <span>12+ Tactile Card Finishes</span>
                  <span>Foil Swatch Ribbons</span>
                </div>
              </div>

              {/* What is in the box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090B0A]/70 border border-[#202824]">
                  <Icon name="CheckBadgeIcon" size={15} className="text-[#F8BC23] shrink-0" />
                  <span>Real 1800 GSM Magnetic Rigid Box Build</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090B0A]/70 border border-[#202824]">
                  <Icon name="CheckBadgeIcon" size={15} className="text-[#F8BC23] shrink-0" />
                  <span>Gold, Copper &amp; Silver Metallic Foil Swatches</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090B0A]/70 border border-[#202824]">
                  <Icon name="CheckBadgeIcon" size={15} className="text-[#F8BC23] shrink-0" />
                  <span>Plastic-Free Aqueous Food Cup Substrates</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090B0A]/70 border border-[#202824]">
                  <Icon name="CheckBadgeIcon" size={15} className="text-[#F8BC23] shrink-0" />
                  <span>High-Density Laser-Cut EVA &amp; Velvet Inlays</span>
                </div>
              </div>
            </div>

            {/* Right: Low-Friction Request Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#090B0A]/95 backdrop-blur-xl border border-[#F8BC23]/40 rounded-2xl p-7 md:p-8 shadow-2xl">
                {ordered ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#1E3A2F] border border-[#F8BC23]/50 flex items-center justify-center text-[#F8BC23] mx-auto">
                      <Icon name="MessageCircleIcon" size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-white">One Last Step</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Thanks, <strong className="text-white">{formData.name || 'valued brand partner'}</strong> — tap below to send these details to our team on WhatsApp so we can dispatch your swatch box.
                    </p>
                    <a
                      href={sampleKitWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-lg shadow-[#F8BC23]/20"
                    >
                      <Icon name="MessageCircleIcon" size={16} />
                      <span>Send Details via WhatsApp</span>
                    </a>
                    <div>
                      <button
                        onClick={() => setOrdered(false)}
                        className="text-xs font-bold text-[#F8BC23] underline hover:text-[#FFCB4D] cursor-pointer pt-2"
                      >
                        Submit another request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">Request Swatch Box</h3>
                        <span className="text-[10px] font-bold text-[#F8BC23] bg-[#141A17] border border-[#F8BC23]/30 px-2 py-0.5 rounded-full">
                          Complimentary B2B
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-1">Dispatched express to your studio in UK or UAE.</p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Oliver Sterling"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">Brand / Company</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Maison Oud Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">Work Email</label>
                          <input
                            type="email"
                            required
                            placeholder="oliver@brand.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">Primary Packaging Interest</label>
                        <select
                          value={formData.productInterest}
                          onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                          className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                        >
                          <option value="Luxury Rigid Boxes">Luxury Rigid Boxes (Magnetic / Drawer)</option>
                          <option value="Eco Food & Beverage">Eco Food &amp; Beverage Packaging (Cups / Bowls)</option>
                          <option value="Boutique Retail Bags">Boutique Bags &amp; Ribbons</option>
                          <option value="Roll Labels & Cartons">Custom Roll Labels &amp; Mono Cartons</option>
                          <option value="All Categories">Complete Sample Box (All Categories)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">Shipping Address (UK / UAE / Global)</label>
                        <input
                          type="text"
                          required
                          placeholder="Street, City, Postal Code & Country"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-[#141A17] border border-[#202824] focus:border-[#F8BC23] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-lg shadow-[#F8BC23]/20 cursor-pointer"
                    >
                      Dispatch Sample Swatch Box
                    </button>

                    <p className="text-[10px] text-white/40 text-center pt-1">
                      Includes 12+ paperboard grades, foil swatch ribbons &amp; physical sample builds.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
