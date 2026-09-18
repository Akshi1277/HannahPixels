// TODO(launch-blocker): replace with the real, verified WhatsApp Business number and inbox
// before going live. Every WhatsApp/email link in the site reads from here so a real number
// only needs to be swapped in once.
export const WHATSAPP_NUMBER = '447400000000'
export const CONTACT_EMAIL = 'atelier@hannahpixels.com'

export function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
