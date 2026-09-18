import Icon from './AppIcon'
import { whatsAppUrl } from '@/lib/contact'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 group">
      <span className="hidden sm:inline-block bg-[#141A17] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
      <a
        href={whatsAppUrl('Hello Hannah Pixels team, I am inquiring about custom packaging specs and quotation.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hannah Pixels on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#141A17] hover:bg-[#1E3A2F] border border-[#F8BC23]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95"
      >
        <Icon name="MessageCircleIcon" size={24} className="text-[#F8BC23]" />
      </a>
    </div>
  )
}
