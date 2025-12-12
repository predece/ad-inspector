import { useState } from "react";
import "./Dashboard.css";
import "tailwindcss";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <section className="dashboard" id="dashboard" aria-labelledby="dashboard-title">
      <div className="container">
        <div className="section-title">
          <h2 id="dashboard-title">Интерфейс: вся информация в одном окне</h2>
          <p>Удобный дашборд для мониторинга состояния всего парка двигателей</p>
        </div>

        <div className="dashboard-preview" role="region" aria-label="Dashboard preview">
          <div className="dashboard-header">
            <div>
              <h3>Панель мониторинга АД-Инспектор</h3>
              <p>Предприятие: Нефтеперерабатывающий завод №3</p>
            </div>
            <div>
              <div className="btn upload" aria-hidden="true">
                Обновлено: 5 мин назад
              </div>
            </div>
          </div>

          <div className="dashboard-tabs" role="tablist" aria-label="Dashboard tabs">
            <div role="tab" aria-selected={activeTab === "map"} tabIndex={0} className={`dashboard-tab ${activeTab === "map" ? "active" : ""}`} onClick={() => setActiveTab("map")}>
              Карта двигателей
            </div>

            <div role="tab" aria-selected={activeTab === "analytics"} tabIndex={0} className={`dashboard-tab ${activeTab === "analytics" ? "active" : ""}`} onClick={() => setActiveTab("analytics")}>
              Аналитика
            </div>

            <div role="tab" aria-selected={activeTab === "reports"} tabIndex={0} className={`dashboard-tab ${activeTab === "reports" ? "active" : ""}`} onClick={() => setActiveTab("reports")}>
              Отчеты
            </div>

            <div role="tab" aria-selected={activeTab === "settings"} tabIndex={0} className={`dashboard-tab ${activeTab === "settings" ? "active" : ""}`} onClick={() => setActiveTab("settings")}>
              Настройки
            </div>
          </div>

          {/* Контейнер с фиксированной высотой -> внутренние блоки скроллятся */}
          <div className="dashboard-content" role="tabpanel">
            {/* Левая основная панель (карту/аналитику/отчёты) */}
            <div className="main-panel">
              {activeTab === "map" && (
                <div className="motor-map">
                  <div style={{ textAlign: "center" }}>
                    <i className="fas fa-industry" style={{ fontSize: 60, color: "#ccc", marginBottom: 20 }} />
                    <p>Интерактивная карта предприятия с двигателями</p>
                    <p style={{ fontSize: 14 }}>(Цветовая индикация: зелёный - норма, оранжевый - внимание, красный - критично)</p>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="analytics-panel">
                  <div className="analytics-grid">
                    <div className="analytics-card">
                      <h5>График вибрации</h5>
                      <div className="analytics-visual">[Здесь будет график — прокручивается]</div>
                    </div>
                    <div className="analytics-card">
                      <h5>График температуры</h5>
                      <div className="analytics-visual">[График температуры]</div>
                    </div>
                    <div className="analytics-card full-width">
                      <h5>Сводка по аномалиям</h5>
                      <ul className="anomaly-list">
                        <li>Двигатель #KT-342 — повышенная вибрация (3 события за 24ч)</li>
                        <li>Двигатель #RT-110 — скачки тока (2 события)</li>
                        <li>Двигатель #PL-77 — температура выше порога</li>
                        <li>... (и др.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reports" && (
                <div className="reports-panel">
                  <div className="reports-list">
                    <div className="report-item">
                      <strong>Еженедельный отчет — 2025-12-08</strong>
                      <p>Сводка по парку: 132 норма, 7 внимание, 1 критично</p>
                    </div>
                    <div className="report-item">
                      <strong>Инциденты — 2025-12-09</strong>
                      <p>Детализированный лог событий и рекомендации</p>
                    </div>
                    <div className="report-item">
                      <strong>Экспорт: CSV / PDF</strong>
                      <p>Сформировать полный отчет по выбранным машинам</p>
                    </div>
                    <div className="report-item">[Больше отчетов ...]</div>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="settings-panel">
                  <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                      <input type="checkbox" defaultChecked /> Включить уведомления Telegram
                    </label>
                    <label>
                      <input type="checkbox" /> Автоматическая генерация отчетов
                    </label>
                    <label>
                      Уровень оповещений
                      <select defaultValue="medium">
                        <option value="low">Низкий</option>
                        <option value="medium">Средний</option>
                        <option value="high">Высокий</option>
                      </select>
                    </label>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>
                      Сохранить
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Правая статус-панель */}
            <aside className="status-panel" aria-label="Status panel">
              <h3>Статус двигателей</h3>

              <div className="status-item status-normal">
                <div>
                  <strong>Норма</strong>
                  <p>132 двигателя</p>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "94%", background: "var(--success-green)" }}>
                    <span className="progress-text">94%</span>
                  </div>
                </div>
              </div>

              <div className="status-item status-warning">
                <div>
                  <strong>Требует внимания</strong>
                  <p>7 двигателей</p>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "5%", background: "var(--warning-orange)" }}>
                    <span className="progress-text">5%</span>
                  </div>
                </div>
              </div>

              <div className="status-item status-critical">
                <div>
                  <strong>Критично</strong>
                  <p>1 двигатель</p>
                  <p style={{ fontSize: 12 }}>Двигатель #KT-342: Повышенная вибрация</p>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "1%", background: "var(--danger-red)" }}>
                    <span className="progress-text">1%</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
