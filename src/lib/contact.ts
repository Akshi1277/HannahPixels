export const CONTACT_DETAILS_CONFIRMED = true
export const WHATSAPP_NUMBER = '917039038842'
export const CONTACT_EMAIL = 'info@hannahpixels.com'
export const PHONE_DISPLAY = '+91 70390 38842'
export const PHONE_TEL = '+917039038842'

export function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
