import { useState } from 'react'
import { contactInfo } from '../data'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckIcon,
} from './Icons'

const icons = {
  map: MapPinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  clock: ClockIcon,
}

const emptyForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(emptyForm)
    window.setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Bog'lanish</span>
          <h2>Savolingiz bormi?</h2>
          <p>
            Koordinatorlarga xabar yuboring — imkon qadar tez javob berishga
            harakat qilamiz.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((item) => {
              const Icon = icons[item.icon]
              return (
                <div className="info-card" key={item.label}>
                  <span className="info-icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              )
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Ismingiz</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ism va familiya"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Elektron pochta</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="siz@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Xabar</label>
              <textarea
                id="message"
                name="message"
                placeholder="Savolingizni qisqacha yozing..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Xabar yuborish
              <SendIcon size={18} />
            </button>

            {sent && (
              <div className="form-success" role="status">
                <CheckIcon size={18} />
                Xabaringiz yuborildi. Tez orada javob beramiz.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
