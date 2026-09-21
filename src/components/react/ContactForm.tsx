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
  'w-full bg-transparent border-b border-grid py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors'

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
    window.open(whatsAppUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 text-center space-y-4">
        <h3 className="font-serif text-3xl text-foreground">Enquiry sent.</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thank you — we'll be in touch about your project shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="type-label text-accent border-b border-accent pb-1 pt-2"
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
          <label className="type-label text-muted-foreground">Name *</label>
          <input required value={form.name} onChange={update('name')} className={fieldClass} type="text" />
        </div>
        <div className="space-y-2">
          <label className="type-label text-muted-foreground">Company</label>
          <input value={form.company} onChange={update('company')} className={fieldClass} type="text" />
        </div>
        <div className="space-y-2">
          <label className="type-label text-muted-foreground">Email *</label>
          <input required value={form.email} onChange={update('email')} className={fieldClass} type="email" />
        </div>
        <div className="space-y-2">
          <label className="type-label text-muted-foreground">Phone</label>
          <input value={form.phone} onChange={update('phone')} className={fieldClass} type="tel" />
        </div>
        <div className="space-y-2">
          <label className="type-label text-muted-foreground">Project Type</label>
          <select value={form.projectType} onChange={update('projectType')} className={fieldClass}>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="type-label text-muted-foreground">Approximate Quantity</label>
          <input value={form.quantity} onChange={update('quantity')} className={fieldClass} type="text" placeholder="e.g. 500 units" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="type-label text-muted-foreground">Message</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          className={fieldClass}
          placeholder="Tell us about your project, your product and what you have in mind."
        />
      </div>

      <button type="submit" className="type-label bg-ink text-ink-foreground hover:bg-accent px-8 py-4 transition-colors">
        Start a Project
      </button>
    </form>
  )
}
