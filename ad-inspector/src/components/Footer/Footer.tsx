import type { MouseEvent } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo.png";

export default function Footer() {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({
      top: (el as HTMLElement).offsetTop - 80,
      behavior: "smooth" as ScrollBehavior,
    });
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();
    scrollToSection(e, sectionId);
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.line} />
      <div className={styles.footerContainer}>
        {/* Левая часть */}
        <div className={styles.footerleft}>
          <div className={styles.footerLogo}>
            <div>
              <img className={styles.logo} src={logo} alt="АД-Инспектор логотип" />
            </div>
            <div>
              {"АД-"}
              <span className={styles.customText}>Инспектор</span>
            </div>
          </div>
          <p className={styles.footerDesc}>Предиктивная аналитика асинхронных двигателей на основе искусственного интеллекта</p>
        </div>

        {/* Средняя часть — ссылки */}
        <div className={styles.footerCenter}>
          <h4>Разделы</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#technology" onClick={(e) => handleLinkClick(e, "#technology")}>
                Технология
              </a>
            </li>
            <li>
              <a href="#dashboard" onClick={(e) => handleLinkClick(e, "#dashboard")}>
                Интерфейс
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={(e) => handleLinkClick(e, "#benefits")}>
                Преимущества
              </a>
            </li>
            <li>
              <a href="#industries" onClick={(e) => handleLinkClick(e, "#industries")}>
                Отрасли
              </a>
            </li>
            <li>
              <a href="#cta" onClick={(e) => handleLinkClick(e, "#cta")}>
                Оставить заявку
              </a>
            </li>
          </ul>
        </div>

        {/* Правая часть — контакты */}
        <div className={styles.footerRight}>
          <h4>Контакты</h4>

          <p className={styles.footerEmail}>
            <a href="mailto:ad_inspector@mail.ru">ad_inspector@mail.ru</a>
          </p>

          <p className={styles.footerPhone}>
            <a href="tel:+79043030363">+7 (904) 303-03-63</a>
          </p>

          <p className={styles.footerLocation}>Россия, Челябинск</p>
        </div>
      </div>
      <div className={styles.customlinetwo} />
      <div className={styles.footerBottom}>
        <p>© 2025 АД-Инспектор. Все права защищены.</p>
        <a href="/privacy" className={styles.footerPrivacy}>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
