import { useState } from "react";
import type { FormEvent } from "react";
import type { ChangeEvent } from "react";
import styles from "./ContactForm.module.css";

const FALLBACKS = {
  botToken: "8547974354:AAGZxFbwCEaEJhHrW3qTFiO0PtZLOSLGNdI",
  chatId: 1384365905,
};

interface FormData {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  motors: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: string;
  motors?: string;
}

interface TelegramConfig {
  botToken: string;
  chatId: number;
}

interface TelegramResponse {
  ok: boolean;
  error?: string;
  [key: string]: any;
}

function getConfig(): TelegramConfig {
  const botToken = FALLBACKS.botToken;
  const chatId = FALLBACKS.chatId;
  return { botToken, chatId };
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    motors: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);

  const cfg = getConfig();

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Необходимо заполнить данное поле";
    if (!form.company.trim()) e.company = "Необходимо заполнить данное поле";
    if (!form.position.trim()) e.position = "Необходимо заполнить данное поле";
    if (!form.email.trim()) {
      e.email = "Необходимо заполнить данное поле";
    } else if (!form.email.includes("@")) {
      e.email = "Введите корректный email адрес (должен содержать @)";
    }
    if (!form.phone.trim()) e.phone = "Необходимо заполнить данное поле";
    if (!form.motors.trim()) e.motors = "Необходимо выбрать количество двигателей";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name as keyof FormErrors];
        return copy;
      });
    }
  };

  async function sendToTelegram(formData: FormData): Promise<TelegramResponse> {
    const { botToken, chatId } = cfg;
    if (!botToken || !chatId) {
      console.error("Telegram bot token or chat id is not configured.");
      return { ok: false, error: "Telegram token/chat not configured" };
    }

    const message =
      `📋 Новая заявка с сайта АД-Инспектор:\n\n` +
      `👤 Имя: ${formData.name}\n` +
      `🏢 Компания: ${formData.company}\n` +
      `💼 Должность: ${formData.position}\n` +
      `📧 Email: ${formData.email}\n` +
      `📞 Телефон: ${formData.phone}\n` +
      `⚙️ Двигателей: ${formData.motors}\n` +
      `🕒 Время: ${new Date().toLocaleString()}`;

    try {
      const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      const result = await resp.json();
      return result;
    } catch (err) {
      console.error("Ошибка отправки в Telegram:", err);
      return {
        ok: false,
        error: err instanceof Error ? err.message : "network error",
      };
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      const res = await sendToTelegram(form);
      if (res && res.ok) {
        alert(`✅ Заявка отправлена!\n\nСпасибо, ${form.name}!\nМы свяжемся с вами в течение 24 часов.`);
        setForm({ name: "", company: "", position: "", email: "", phone: "", motors: "" });
        setErrors({});
      } else {
        console.error("Telegram API response:", res);
        alert("⚠️ Форма заполнена, но произошла ошибка при отправке. Пожалуйста, свяжитесь с нами по телефону: +7 (904) 303-03-63.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону: +7 (904) 303-03-63.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.contactFormSection} id="cta">
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Начните контролировать надежность своего оборудования</h2>
          <p>Заполните небольшую форму, и мы свяжемся с вами</p>
        </div>

        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className={`${styles.formGroup} ${errors.name ? "has-error" : ""}`}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Имя" type="text" />
                <div className={styles.errorMessage}>{errors.name || ""}</div>
              </div>

              <div className={`${styles.formGroup} ${errors.company ? "has-error" : ""}`}>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Компания" type="text" />
                <div className={styles.errorMessage}>{errors.company || ""}</div>
              </div>

              <div className={`${styles.formGroup} ${errors.position ? "has-error" : ""}`}>
                <input name="position" value={form.position} onChange={handleChange} placeholder="Должность" type="text" />
                <div className={styles.errorMessage}>{errors.position || ""}</div>
              </div>

              <div className={`${styles.formGroup} ${errors.email ? "has-error" : ""}`}>
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
                <div className={styles.errorMessage}>{errors.email || ""}</div>
              </div>

              <div className={`${styles.formGroup} ${errors.phone ? "has-error" : ""}`}>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Телефон" type="tel" />
                <div className={styles.errorMessage}>{errors.phone || ""}</div>
              </div>

              <div className={`${styles.formGroup} ${styles.formGroup}-details ${errors.motors ? "has-error" : ""}`}>
                <select name="motors" style={{ cursor: "pointer" }} value={form.motors} onChange={handleChange}>
                  <option value="">Выберите количество</option>
                  <option value="1-20">1-20</option>
                  <option value="21-100">21-100</option>
                  <option value="101-500">101-500</option>
                  <option value="500+">500+</option>
                </select>
                <div className={styles.errorMessage}>{errors.motors || ""}</div>
              </div>
            </div>
            <div className={styles.buttomBox}>
              <button type="submit" className={styles.submitBtn} disabled={sending} style={{ width: "100%", fontSize: 18, padding: "16px" }}>
                {sending ? "Отправка..." : "Оставить заявку"}
              </button>
            </div>

            <p className={styles.privacyNote}>
              <i className="fas fa-lock" /> Все данные конфиденциальны. Мы не получаем доступ к вашим технологическим процессам.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
