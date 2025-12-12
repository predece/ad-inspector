import "./Solution.css";

export default function Solution() {
  return (
    <section className="solution" id="solution">
      <div className="container_x">
        <div className="section-title">
          <h2>Как работает "АД-Инспектор": от данных к прогнозу</h2>
          <p>Четыре ключевых этапа преобразования сырых данных в точные прогнозы</p>
        </div>

        <div className="solution-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Сбор данных</h3>
              <p>Интеграция с любыми датчиками и системами: ток, вибрация, температура</p>
              <div className="tech-badge">SCADA • IoT • АСУ ТП</div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Преобразование сигналов</h3>
              <p>
                Преобразование временных рядов в 2D-изображения с помощью методов
                <strong> GAF (Gramian Angular Field)</strong> и<strong> MTF (Markov Transition Field)</strong>
              </p>
              <div className="tech-badge">GAF • MTF • Преобразование данных</div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Диагностика аномалий</h3>
              <p>
                Выявление даже незначительных отклонений с помощью
                <strong> сверточного автоэнкодера</strong>, обученного на нормальной работе
              </p>
              <div className="tech-badge">ConvAutoencoder • Глубинное обучение</div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Визуализация и рекомендации</h3>
              <p>Дашборд с приоритизацией рисков и рекомендациями. Предупреждение за дни или недели до возможного отказа.</p>
              <div className="tech-badge">Дашборд • Прогнозы • Рекомендации</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
