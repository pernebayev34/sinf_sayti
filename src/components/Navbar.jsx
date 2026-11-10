import { useState } from 'react'
import { navLinks, classInfo } from '../data'
import { MenuIcon, CloseIcon, ArrowRightIcon, GraduationIcon } from './Icons'

function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={close}>
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

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-mobile-cta" onClick={close}>
            Bog'lanish
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Bog'lanish
          <ArrowRightIcon size={16} />
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
