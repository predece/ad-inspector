import "./Technology.css";

export default function Technology() {
  return (
    <section className="technology" id="technology">
      <div className="container">
        <div className="section-title">
          <h2>Научное превосходство: GAF, MTF и нейросети</h2>
          <p>Основано на передовых исследованиях в области машинного обучения</p>
        </div>

        <div className="tech-content">
          {/* Левый визуальный блок */}
          <div className="tech-visual">
            <h3>Преобразование данных</h3>

            <div className="gaf-mtf">
              <div className="transformation">
                <i className="fas fa-chart-line"></i>
                <p>Временной ряд</p>
              </div>

              <div className="transformation">
                <i className="fas fa-long-arrow-alt-right"></i>
                <p>GAF/MTF</p>
              </div>

              <div className="transformation">
                <i className="fas fa-image"></i>
                <p>2D-изображение</p>
              </div>
            </div>

            <div className="autoencoder">
              <i className="fas fa-gears"></i>
              <p>Сверточный автоэнкодер анализирует изображения для выявления аномалий</p>
            </div>
          </div>

          {/* Правый текстовый блок */}
          <div className="tech-description">
            <h3>Почему это точнее традиционных методов?</h3>

            <p>
              Мы преобразуем одномерные сигналы с датчиков в двумерные изображения с помощью методов
              <strong> GAF (Gramian Angular Field)</strong> и <strong> MTF (Markov Transition Field)</strong>.
            </p>

            <p>
              Это позволяет нашей глубокой нейронной сети (сверточному автоэнкодеру) находить сложные, неочевидные паттерны аномалий, которые не видны при пороговом анализе или статистических методах.
            </p>

            <p>
              Методология основана на исследованиях, опубликованных в рецензируемом научном журнале
              <em> Algorithms</em> и адаптирована для промышленного применения.
            </p>

            <a href="https://www.mdpi.com/1999-4893/18/11/722" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: 20 }}>
              Читать исследование
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
