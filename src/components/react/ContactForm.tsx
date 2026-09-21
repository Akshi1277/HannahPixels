import { useState, type FormEvent, type ChangeEvent } from 'react'
import { whatsAppUrl } from '@/lib/contact'

const projectTypes = [
  'Luxury Packaging',
  'Product Packaging',
  'Fragrance & Beauty',
  'Chocolate & Confectionery',
  'Paper & Carry',
  'Books & Publishing',
  'Other',
]

const fieldClass =
  'w-full bg-transparent border-b border-grid py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-accent-ink transition-colors'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: projectTypes[0],
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [blockedUrl, setBlockedUrl] = useState<string | null>(null)

  const update = (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const message =
      `New project enquiry\n\n` +
      `Name: ${form.name}\n` +
      `Company: ${form.company}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Project Type: ${form.projectType}\n` +
      `Approximate Quantity: ${form.quantity || 'Not specified'}\n\n` +
      `${form.message}`
    const url = whatsAppUrl(message)
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) {
      // Popup blocked — don't claim success. Offer a direct link instead.
      setBlockedUrl(url)
      return
    }
    setBlockedUrl(null)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div role="status" className="py-16 text-center space-y-4">
        <h3 className="font-serif text-3xl text-foreground">Enquiry sent.</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thank you — we'll be in touch about your project shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="type-label text-accent-ink border-b border-accent-ink pb-1 pt-2"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        <div className="space-y-2">
          <label htmlFor="field-name" className="type-label text-muted-foreground">Name *</label>
          <input id="field-name" name="name" autoComplete="name" required value={form.name} onChange={update('name')} className={fieldClass} type="text" />
        </div>
        <div className="space-y-2">
          <label htmlFor="field-company" className="type-label text-muted-foreground">Company</label>
          <input id="field-company" name="organization" autoComplete="organization" value={form.company} onChange={update('company')} className={fieldClass} type="text" />
        </div>
        <div className="space-y-2">
          <label htmlFor="field-email" className="type-label text-muted-foreground">Email *</label>
          <input id="field-email" name="email" autoComplete="email" required value={form.email} onChange={update('email')} className={fieldClass} type="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="field-phone" className="type-label text-muted-foreground">Phone</label>
          <input id="field-phone" name="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} className={fieldClass} type="tel" />
        </div>
        <div className="space-y-2">
          <label htmlFor="field-project-type" className="type-label text-muted-foreground">Project Type</label>
          <select id="field-project-type" name="project-type" value={form.projectType} onChange={update('projectType')} className={fieldClass}>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="field-quantity" className="type-label text-muted-foreground">Approximate Quantity</label>
          <input id="field-quantity" name="quantity" value={form.quantity} onChange={update('quantity')} className={fieldClass} type="text" placeholder="e.g. 500 units" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="field-message" className="type-label text-muted-foreground">Message</label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          className={fieldClass}
          placeholder="Tell us about your project, your product and what you have in mind."
        />
      </div>

      {blockedUrl && (
        <p role="alert" className="text-sm text-accent-ink">
          Your browser blocked the WhatsApp popup.{' '}
          <a href={blockedUrl} target="_blank" rel="noopener noreferrer" className="underline">
            Tap here to send your enquiry
          </a>
          .
        </p>
      )}

      <button type="submit" className="type-label bg-ink text-ink-foreground hover:bg-accent px-8 py-4 transition-colors">
        Start a Project
      </button>
    </form>
  )
}
