import "./Benefist.css";

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="section-title">
          <h2>Преимущества и выгоды</h2>
          <p>Конкретные результаты, которые получают наши клиенты</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Снижение рисков</h3>
            <p>На 70% меньше внеплановых простоев благодаря раннему выявлению аномалий</p>
          </div>

          <div className="benefit-item">
            <h3>Экономия</h3>
            <p>Сокращение затрат на ремонт и обслуживание до 40% за счет перехода на предиктивное ТО</p>
          </div>

          <div className="benefit-item">
            <h3>Безопасность</h3>
            <p>Предотвращение катастрофических отказов и аварийных ситуаций</p>
          </div>

          <div className="benefit-item">
            <h3>Интеграция</h3>
            <p>Работа с существующими SCADA, АСУ ТП и IoT-платформами</p>
          </div>

          <div className="benefit-item">
            <h3>Простота</h3>
            <p>Не требует глубоких знаний в Data Science от обслуживающего персонала</p>
          </div>

          <div className="benefit-item">
            <h3>Масштаб</h3>
            <p>Контроль за парком из сотен двигателей с одного дашборда</p>
          </div>
        </div>
      </div>
    </section>
  );
}
