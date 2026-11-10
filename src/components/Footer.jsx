import { classInfo, navLinks, contactInfo } from '../data'
import { GraduationIcon } from './Icons'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">
                <GraduationIcon size={22} />
              </span>
              <span className="brand-text">
                Sinf Koordinatorlari
                <small>
                  {classInfo.className} · {classInfo.school}
                </small>
              </span>
            </a>
            <p className="footer-about">
              O'quvchilar, ota-onalar va koordinatorlar o'rtasida ishonchli
              aloqa. Sinf hayotini birga yanada yaxshi qilamiz.
            </p>
          </div>

          <div>
            <h4>Sahifalar</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Aloqa</h4>
            <ul>
              {contactInfo.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {classInfo.className} koordinatorlari. Barcha huquqlar
            himoyalangan.
          </span>
          <span>O'zbek tilida yaratilgan</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
