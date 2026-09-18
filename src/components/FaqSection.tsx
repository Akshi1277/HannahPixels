import { useState } from 'react'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsAppUrl } from '@/lib/contact'

const faqs = [
  {
    q: 'What is your standard production turnaround time?',
    a: 'Digital 3D proofs and CAD dielines are provided within 24 to 48 hours of receiving your artwork. Once approved, production typically takes 7 to 10 working days depending on finish complexity (hot foil stamping, velvet inlays, etc.). Express priority manufacturing options are available upon request.'
  },
  {
    q: 'What are your Minimum Order Quantities (MOQs)?',
    a: 'Unlike traditional industrial converters that require 5,000+ units, Hannah Pixels offers flexible order runs starting from as low as 100 to 250 units for rigid boxes, carrier bags, and food-grade packaging. This lets new launches and growing D2C brands access quality packaging with minimal inventory risk.'
  },
  {
    q: 'Do you deliver across both the United Kingdom and Dubai / GCC?',
    a: 'Yes. Hannah Pixels serves the UK (London, England, Scotland, Wales) and the UAE (Dubai, Abu Dhabi, Sharjah) with consolidated cross-border export into Saudi Arabia, Qatar, and Kuwait. All shipments are dispatched door-to-door with complete VAT / TRN invoicing.'
  },
  {
    q: 'Can your in-house packaging studio prepare structural dielines and 3D renders?',
    a: 'Yes. If you only have product dimensions or a sample bottle/jar, our packaging engineers will generate custom vector dielines (PDF/AI format) and provide interactive 3D folding renders so you can inspect artwork alignment before die-making.'
  },
  {
    q: 'Are your food and hospitality containers certified safe and eco-friendly?',
    a: 'All our food-to-go cups, deli bowls, and greaseproof wraps are manufactured from 100% FSC®-certified virgin boards, printed with vegetable/soy-based inks, and utilize plastic-free water-based aqueous coatings. They fully comply with UK Plastic Packaging Tax (PPT) exemptions and Dubai Municipality Food Safety regulations.'
  },
  {
    q: 'What details do you need to send an instant quote?',
    a: 'Simply share your product category, estimated dimensions (Length × Width × Height), target order volume tier, and any preferred finishes (e.g., gold hot foil, velvet foam insert). A reference photo or sketch helps our team recommend the most cost-effective structural build.'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F3EEE3] border-t border-[#E6E0D2] relative scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">08</span>
            <span className="w-8 h-px bg-[#93660C]/40" />
            <span className="editorial-tag text-[#93660C]">PROCUREMENT FAQ</span>
          </div>
          <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
            Frequently Asked Procurement Questions
          </h2>
          <p className="text-[#4A4E43] text-sm md:text-base max-w-lg mx-auto">
            Everything you need to know about turnaround times, dielines, low MOQs, and international delivery.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#E6E0D2] bg-white overflow-hidden transition-colors hover:border-[#F8BC23]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-[#181A16]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#F8BC23] text-[#181A16] rotate-180' : 'bg-[#F3EEE3] text-[#93660C]'
                  }`}>
                    <Icon name="ChevronDownIcon" size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#4A4E43] leading-relaxed border-t border-[#E6E0D2]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#538B56]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#181A16]">Have a custom technical inquiry or bespoke dimensions?</h4>
            <p className="text-xs text-[#6B6F62]">Our packaging consultant will review your specifications directly.</p>
          </div>
          <a
            href={whatsAppUrl("Hello Hannah Pixels, I'd like to ask a question about custom packaging.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#F8BC23] text-[#181A16] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shrink-0 flex items-center gap-2"
          >
            <Icon name="MessageCircleIcon" size={14} />
            <span>Chat with an Expert</span>
          </a>
        </div>
      </div>
    </section>
  )
}
