import { schedule, lessonTimes } from '../data'
import { ClockIcon, CheckIcon } from './Icons'

function Schedule() {
  return (
    <section id="schedule" className="section schedule-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Dars jadvali</span>
          <h2>Haftalik jadval</h2>
          <p>
            Birinchi darsdan oxirgi darsgacha — haftaning barcha kunlari uchun
            aniq va yangilangan jadval.
          </p>
        </div>

        <div className="schedule-wrap">
          <div className="schedule-scroll">
            <table className="schedule">
              <thead>
                <tr>
                  <th>Vaqt</th>
                  {schedule.map((day) => (
                    <th key={day.day}>{day.day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lessonTimes.map((time, index) => (
                  <tr key={time}>
                    <td className="time-cell">
                      {index + 1}-dars
                      <small>{time}</small>
                    </td>
                    {schedule.map((day) => (
                      <td key={day.day} className="subject">
                        {day.lessons[index]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="schedule-mobile">
            {schedule.map((day) => (
              <div className="schedule-day" key={day.day}>
                <h3>{day.day}</h3>
                <ul>
                  {day.lessons.map((lesson, index) => (
                    <li key={`${day.day}-${index}`}>
                      <span className="schedule-day-time">
                        {lessonTimes[index]}
                      </span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="schedule-note">
            <ClockIcon size={16} />
            <span>
              Jadval o'zgarishi mumkin. Yangilanishlar har hafta dushanba kuni
              e'lon qilinadi.
            </span>
            <CheckIcon size={16} className="schedule-note-check" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
