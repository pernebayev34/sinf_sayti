import { features } from '../data'
import {
  PhoneIcon,
  CalendarIcon,
  BellIcon,
  UsersIcon,
} from './Icons'

const icons = {
  phone: PhoneIcon,
  calendar: CalendarIcon,
  bell: BellIcon,
  users: UsersIcon,
}

function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Imkoniyatlar</span>
          <h2>Kerakli ma'lumot — bir joyda</h2>
          <p>
            Koordinatorlar jamoasi sinf hayotini qulay va tartibli qilish uchun
            barcha muhim narsalarni bir sahifada jamladi.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = icons[feature.icon]
            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">
                  <Icon size={22} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
