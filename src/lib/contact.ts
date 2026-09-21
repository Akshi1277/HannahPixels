// Placeholder contact channel — no real inbox/number has been supplied yet.
// The UI renders these as visibly marked placeholders (see Contact page) rather
// than presenting them as live, verified contact details.
export const CONTACT_DETAILS_CONFIRMED = false
export const WHATSAPP_NUMBER = '447400000000'
export const CONTACT_EMAIL = 'studio@hannahpixels.com'
export const PHONE_DISPLAY = 'To be confirmed'

export function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
