import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="title">
      <div className="hero-inner">
        <div className="hero-container">
          {/* Текстовая часть */}
          <div className="hero-content">
            <h1>
              АД-Инспектор — <span>предотвращайте остановки производства до их начала</span>
            </h1>
            <p>Предиктивная диагностика асинхронных двигателей на основе сверточных автоэнкодеров. Анализируем ток, вибрацию, температуру и выявляем аномалии на ранней стадии.</p>

            <div className="hero-buttons">
              <a href="#cta" className="btn btn-primary">
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
