import { classInfo, coordinators, heroStats } from '../data'
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  StarIcon,
  UsersIcon,
} from './Icons'

function Hero() {
  return (
    <section id="home" className="hero">
      <span className="hero-blob blob-1" />
      <span className="hero-blob blob-2" />
      <span className="hero-blob blob-3" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            {classInfo.year} o'quv yili
          </span>

          <h1>
            Sinfingizni <span className="gradient-text">birga</span> boshqaramiz
          </h1>

          <p>
            Bu {classInfo.className} ning rasmiy sahifasi. Koordinatorlar,
            dars jadvali va muhim e'lonlar — barchasi bir joyda, sodda va
            tushunarli ko'rinishda.
          </p>

          <div className="hero-actions">
            <a href="#coordinators" className="btn btn-primary">
              Koordinatorlar
              <ArrowRightIcon size={18} />
            </a>
            <a href="#schedule" className="btn btn-ghost">
              Dars jadvali
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-badge fb-1">
            <span className="fb-icon fb-icon-star">
              <StarIcon size={16} />
            </span>
            5.0 reyting
          </div>

          <div className="class-card">
            <div className="class-card-top">
              <div>
                <span className="class-card-label">Faol sinf</span>
                <h3>{classInfo.className}</h3>
              </div>
              <span className="status-pill">
                <span className="pulse" />
                Online
              </span>
            </div>

            <div className="class-card-body">
              <div className="big-stat">
                <span>{classInfo.students}</span>
                <small>o'quvchi</small>
              </div>
              <div className="mini-stats">
                <div>
                  <strong>{classInfo.coordinators}</strong>
                  <small>Koordinator</small>
                </div>
                <div>
                  <strong>{classInfo.rating}</strong>
                  <small>Reyting</small>
                </div>
              </div>
            </div>

            <div className="avatar-row">
              {coordinators.slice(0, 4).map((person) => (
                <span
                  key={person.initials}
                  className="avatar"
                  style={{ background: person.accent }}
                  title={person.name}
                >
                  {person.initials}
                </span>
              ))}
              <span className="avatar avatar-more">+2</span>
            </div>

            <div className="next-event">
              <span className="next-event-icon">
                <CalendarIcon size={18} />
              </span>
              <div>
                <strong>Ota-onalar yig'ilishi</strong>
                <small>5-noyabr, 15:00 · fizika xonasi</small>
              </div>
              <CheckIcon size={20} />
            </div>
          </div>

          <div className="floating-badge fb-2">
            <span className="fb-icon fb-icon-users">
              <UsersIcon size={16} />
            </span>
            Do'stona jamoa
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
