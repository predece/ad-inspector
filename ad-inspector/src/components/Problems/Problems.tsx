import "./Problems.css";

export default function Problems() {
  return (
    <section className="problems" id="problems">
      <div className="container">
        <div className="section-title">
          <h2>Потери из-за неожиданного выхода двигателей из строя — это дорого</h2>
          <p>Традиционный реактивный подход к обслуживанию устарел и ведет к значительным финансовым потерям</p>
        </div>

        <div className="problems-grid">
          <div className="problem-card">
            <i className="fas fa-clock"></i>
            <h3>Простои производства</h3>
            <p>Миллионы рублей убытка при остановке критического оборудования</p>
          </div>

          <div className="problem-card">
            <i className="fas fa-tools"></i>
            <h3>Дорогой внеплановый ремонт</h3>
            <p>Срочные ремонтные работы стоят в 3–5 раз дороже планового обслуживания</p>
          </div>

          <div className="problem-card">
            <i className="fas fa-exclamation-triangle"></i>
            <h3>Катастрофические последствия</h3>
            <p>Выход из строя одного двигателя может повредить смежное оборудование</p>
          </div>

          <div className="problem-card">
            <i className="fas fa-history"></i>
            <h3>Реактивный подход</h3>
            <p>«Починим, когда сломается» вместо профилактики</p>
          </div>
        </div>
      </div>
    </section>
  );
}
