import "./Industries.css";

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-title">
          <h2>Для кого это работает</h2>
          <p>Решение "АД-Инспектор" применяется в ключевых отраслях промышленности</p>
        </div>

        <div className="industries-grid">
          <div className="industry-item">
            <h3>Нефтегаз</h3>
          </div>

          <div className="industry-item">
            <h3>Металлургия</h3>
          </div>

          <div className="industry-item">
            <h3>Горнодобыча</h3>
          </div>

          <div className="industry-item">
            <h3>ЦБК</h3>
          </div>

          <div className="industry-item">
            <h3>Водоканалы</h3>
          </div>

          <div className="industry-item">
            <h3>ТЭЦ</h3>
          </div>

          <div className="industry-item">
            <h3>Машиностроение</h3>
          </div>

          <div className="industry-item">
            <h3>Химическая</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
