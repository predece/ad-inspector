import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo.png";
export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e, sectionId) => {
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
              <img className={styles.logo} src={logo} />
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
              <a
                href="#dashboard" // Предполагаю, что у вас есть id="dashboard" для раздела с интерфейсом
                onClick={(e) => handleLinkClick(e, "#dashboard")}
              >
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
