import { announcements } from '../data'
import { ArrowRightIcon } from './Icons'

function Announcements() {
  return (
    <section id="announcements" className="section announcements">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">E'lonlar</span>
          <h2>So'nggi yangiliklar</h2>
          <p>
            Yig'ilishlar, olimpiadalar va tadbirlar haqidagi muhim xabarlarni
            shu yerdan kuzatib boring.
          </p>
        </div>

        <div className="announcement-list">
          {announcements.map((item) => (
            <article className="announcement" key={item.title}>
              <div className="date-block">
                <strong>{item.day}</strong>
                <small>{item.month}</small>
              </div>
              <div className="announcement-body">
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="announcement-more">
          <a href="#contact" className="link-arrow">
            Barcha e'lonlarni so'rash
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Announcements
