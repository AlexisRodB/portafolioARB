import { useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { useScrollSpy } from '@/presentation/hooks/useScrollSpy';
import './Header.css';

import { NAV_ITEMS, SECTION_ORDER } from '@/config/navigation';

const SECTION_IDS = SECTION_ORDER;

function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Alexis, ir al inicio">
            <span className="brand__name">Alexis</span>
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav id="main-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`site-nav__link ${activeId === item.id ? 'is-active' : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="site-nav__cta" onClick={closeMenu}>
            Hablemos <FiArrowRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
