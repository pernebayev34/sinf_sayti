import { coordinators } from '../data'
import { PhoneIcon, MailIcon } from './Icons'

function Coordinators() {
  return (
    <section id="coordinators" className="section coordinators">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Jamoa</span>
          <h2>Sinf koordinatorlari</h2>
          <p>
            Sinfingiz uchun mas'ul, tajribali va doim yordamga tayyor
            koordinatorlar bilan tanishing.
          </p>
        </div>

        <div className="coordinator-grid">
          {coordinators.map((person) => (
            <article
              className="coordinator-card"
              key={person.email}
              style={{ '--card-accent': person.accent }}
            >
              <div className="coordinator-top">
                <span
                  className="coordinator-avatar"
                  style={{ background: person.accent }}
                >
                  {person.initials}
                </span>
                <div>
                  <h3>{person.name}</h3>
                  <span className="coordinator-role">{person.role}</span>
                </div>
              </div>

              <span className="subject-chip">{person.subject}</span>

              <div className="coordinator-links">
                <a
                  href={`tel:${person.phone.replace(/\s/g, '')}`}
                  className="icon-btn"
                  aria-label={`${person.name}ga qo'ng'iroq qilish`}
                >
                  <PhoneIcon size={18} />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="icon-btn"
                  aria-label={`${person.name}ga xat yozish`}
                >
                  <MailIcon size={18} />
                </a>
                <a href={`mailto:${person.email}`} className="coordinator-mail">
                  {person.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coordinators
