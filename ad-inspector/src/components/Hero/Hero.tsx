import "./Hero.css";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({
      top: (el as HTMLElement).offsetTop - 80,
      behavior: "smooth" as ScrollBehavior,
    });
  };

  return (
    <section className="hero" id="title">
      <div className="hero-inner">
        <div className="hero-container">
          {/* Текстовая часть */}
          <div className="hero-content">
            <h1>
              АД-Инспектор — <span className="span_x">предотвращайте остановки производства до их начала</span>
            </h1>
            <p>Предиктивная диагностика асинхронных двигателей на основе сверточных автоэнкодеров. Анализируем ток, вибрацию, температуру и выявляем аномалии на ранней стадии.</p>

            <div className="hero-buttons">
              <a href="#cta" onClick={(e) => scrollToSection(e, "#cta")} className="btn btn-primary">
                Начать использование
              </a>
            </div>
          </div>

          {/* Визуальная часть */}
          <div className="hero-visual">
            <div className="motor-diagram">
              <div className="motor-core"></div>

              <div className="sensor">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="sensor">
                <i className="fas fa-wave-square"></i>
              </div>
              <div className="sensor">
                <i className="fas fa-thermometer-half"></i>
              </div>
              <div className="sensor">
                <i className="fas fa-tachometer-alt"></i>
              </div>
            </div>

            <div className="data-flow data-flow-1"></div>
            <div className="data-flow data-flow-2"></div>

            <div className="ai-processor">
              <i className="fas fa-brain"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
