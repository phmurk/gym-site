"use client";

import { useState, type FormEvent } from "react";
import "./Hero.css";
import heroImage from "../../../assets/images/home_hero_copy.png";

const TRAINERS_LIST = [
  "Не определился",
  "Андрей Бурмейстер",
  "Ольга Лобацкая",
  "Сергей Клавсуть",
  "Демидович Кристина",
  "Евгения Журок",
  "Иван Мартехов",
  "Геннадий Деменов",
  "Конопелько Любовь",
  "Дмитрий Трубило",
  "Ольга Никоноренкова",
  "Ульяна Гутько",
];

const GOALS_LIST = [
  "Похудеть",
  "Набрать мышечную массу",
  "Улучшить здоровье",
  "Повысить выносливость",
  "Пока не знаю",
];

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Состояния полей формы
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [phone, setPhone] = useState("+375");
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [preferredTime, setPreferredTime] = useState("Без разницы");

  const [needTrainer, setNeedTrainer] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const [needMembershipHelp, setNeedMembershipHelp] = useState(false);

  // Обработчик выбора целей
  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    // Сброс формы при открытии
    setName("");
    setNameError("");
    setPhone("+375");
    setPhoneError("");
    setEmail("");
    setEmailError("");
    setSelectedGoals([]);
    setPreferredTime("Без разницы");
    setNeedTrainer(false);
    setSelectedTrainer("");
    setNeedMembershipHelp(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let isValid = true;

    // 1. Валидация Имени
    if (name.trim().length < 2) {
      setNameError("Введите корректное имя");
      isValid = false;
    } else {
      setNameError("");
    }

    // 2. Валидация Телефона РБ
    const cleanedPhone = phone.replace(/\D/g, "");
    if (!/^375(17|25|29|33|44)\d{7}$/.test(cleanedPhone)) {
      setPhoneError("Некорректный номер РБ (пример: +375 29 123-45-67)");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // 3. Валидация Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Некорректный email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) return;

    // Если всё правильно, показываем сообщение об успехе
    setIsSubmitted(true);
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          ПОЧУВСТВУЙ ПУЛЬС,
          <br />
          КОТОРЫЙ БЬЁТСЯ В ТАКТ ТВОИМ АМБИЦИЯМ.
        </h1>
        <p className="hero-subtitle">FitPulse. Место, где железо оживает.</p>

        {/* Кнопка открытия модального окна */}
        <button className="hero-button" onClick={openModal}>
          ВОЙТИ В РИТМ
        </button>

        <p className="hero-button-text">
          Остальное — просто спортзалы. FitPulse — твоя сборка лучшей версии.
        </p>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="hero-modal-overlay" onClick={closeModal}>
          <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hero-modal-close" onClick={closeModal}>
              ×
            </button>

            {isSubmitted ? (
              <div className="hero-success-message">
                <h3>Заявка успешно отправлена!</h3>
                <p>
                  Спасибо, <span>{name}</span>! Наш менеджер свяжется с вами в
                  ближайшее время для обсуждения деталей.
                </p>
                <button className="hero-submit-btn" onClick={closeModal}>
                  Отлично
                </button>
              </div>
            ) : (
              <>
                <div className="hero-modal-header">
                  <h2>Сделаем первый шаг вместе.</h2>
                  <p>
                    Оставьте заявку, и мы поможем подобрать абонемент, программу
                    тренировок и тренера под ваши цели.
                  </p>
                </div>

                <form className="hero-form" onSubmit={handleSubmit}>
                  {/* Персональные данные */}
                  <div className="hero-input-group">
                    <input
                      type="text"
                      placeholder="Ваше имя *"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameError("");
                      }}
                      className={nameError ? "error-input" : ""}
                    />
                    {nameError && (
                      <span className="hero-error-text">{nameError}</span>
                    )}
                  </div>

                  <div className="hero-input-group">
                    <input
                      type="tel"
                      placeholder="+375 (XX) XXX-XX-XX *"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError("");
                      }}
                      className={phoneError ? "error-input" : ""}
                    />
                    {phoneError && (
                      <span className="hero-error-text">{phoneError}</span>
                    )}
                  </div>

                  <div className="hero-input-group">
                    <input
                      type="email"
                      placeholder="Ваш Email *"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      className={emailError ? "error-input" : ""}
                    />
                    {emailError && (
                      <span className="hero-error-text">{emailError}</span>
                    )}
                  </div>

                  {/* Цели (Несколько вариантов) */}
                  <div className="hero-form-section">
                    <label className="hero-section-label">
                      Какая у вас цель?
                    </label>
                    <div className="hero-checkbox-grid">
                      {GOALS_LIST.map((goal) => (
                        <label key={goal} className="hero-checkbox-label">
                          <input
                            type="checkbox"
                            checked={selectedGoals.includes(goal)}
                            onChange={() => toggleGoal(goal)}
                          />
                          <span className="hero-checkmark"></span>
                          {goal}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Время тренировок */}
                  <div className="hero-form-section">
                    <label className="hero-section-label">
                      Предпочитаемое время тренировок:
                    </label>
                    <select
                      className="hero-select"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                    >
                      <option value="Утро">Утро</option>
                      <option value="День">День</option>
                      <option value="Вечер">Вечер</option>
                      <option value="Без разницы">Без разницы</option>
                    </select>
                  </div>

                  {/* Выбор тренера (Условный рендеринг) */}
                  <div className="hero-form-section">
                    <label className="hero-checkbox-label hero-checkbox-main">
                      <input
                        type="checkbox"
                        checked={needTrainer}
                        onChange={(e) => setNeedTrainer(e.target.checked)}
                      />
                      <span className="hero-checkmark"></span>
                      Нужен персональный тренер?
                    </label>

                    {needTrainer && (
                      <select
                        className="hero-select hero-select-animate"
                        value={selectedTrainer}
                        onChange={(e) => setSelectedTrainer(e.target.value)}
                        required={needTrainer}
                      >
                        <option value="" disabled>
                          Выберите тренера из списка
                        </option>
                        {TRAINERS_LIST.map((trainer) => (
                          <option key={trainer} value={trainer}>
                            {trainer}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  {/* Помощь с абонементом (Условный рендеринг) */}
                  <div className="hero-form-section">
                    <label className="hero-checkbox-label hero-checkbox-main">
                      <input
                        type="checkbox"
                        checked={needMembershipHelp}
                        onChange={(e) =>
                          setNeedMembershipHelp(e.target.checked)
                        }
                      />
                      <span className="hero-checkmark"></span>
                      Нужна помощь с выбором абонемента?
                    </label>

                    {needMembershipHelp && (
                      <div className="hero-help-alert">
                        <span className="hero-help-icon">ℹ️</span>
                        Наш менеджер подберёт оптимальный вариант с учётом ваших
                        целей и графика.
                      </div>
                    )}
                  </div>

                  <button type="submit" className="hero-submit-btn">
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
