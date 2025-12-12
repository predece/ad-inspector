import { useState, useEffect, useRef } from "react";
import "./Header.css";

import logo from "../../assets/icons/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMenuOpen((p) => !p);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      const navEl = navRef.current;
      const btnEl = document.querySelector(".mobile-menu-btn");

      if (!navEl || !btnEl) return;

      // Клик вне меню и вне кнопки
      if (menuOpen && !navEl.contains(e.target) && !btnEl.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Закрытие при ресайзе
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container header-container">
        {/* Логотип */}
        <a className="logo" href="#title" onClick={(e) => scrollToSection(e, "#title")}>
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-text">
            АД<span>-Инспектор</span>
          </div>
        </a>

        {/* Кнопка меню */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars" />
        </button>

        {/* Навигация */}
        <nav ref={navRef} className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <a href="#solution" onClick={(e) => scrollToSection(e, "#solution")}>
                Технология
              </a>
            </li>
            <li>
              <a href="#dashboard" onClick={(e) => scrollToSection(e, "#dashboard")}>
                Интерфейс
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={(e) => scrollToSection(e, "#benefits")}>
                Преимущества
              </a>
            </li>
            <li>
              <a href="#industries" onClick={(e) => scrollToSection(e, "#industries")}>
                Отрасли
              </a>
            </li>
            <li>
              <a href="#cta" onClick={(e) => scrollToSection(e, "#cta")}>
                Оставить заявку
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
