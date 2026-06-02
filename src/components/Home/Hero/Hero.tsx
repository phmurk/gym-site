"use client";

import { useState, type FormEvent } from "react";
import "./Hero.css";
import heroImage from "../../../assets/images/home_hero_copy.webp";

const TRAINERS_LIST = [
  "Любой тренер",
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
  "Поддерживать форму",
  "Улучшить здоровье",
  "Увеличить выносливость",
];

const TIMES_LIST = ["🌅 Утром", "🌞 Днём", "🌙 Вечером"];

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [needTrainer, setNeedTrainer] = useState<boolean | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState("Любой тренер");

  const [phone, setPhone] = useState("+375");
  const [email, setEmail] = useState("");
  const [wantConsultation, setWantConsultation] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
    setStep(1);
    setName("");
    setHeight("");
    setWeight("");
    setGoal("");
    setTime("");
    setNeedTrainer(null);
    setSelectedTrainer("Любой тренер");
    setPhone("+375");
    setEmail("");
    setWantConsultation(false);
    setErrorMsg("");
  };

  const closeModal = () => setIsModalOpen(false);

  const handleNext = () => {
    setErrorMsg("");

    if (step === 2) {
      const nameRegex = /^[A-Za-zА-Яа-яЁё\s]{2,}$/;
      if (!nameRegex.test(name.trim())) {
        return setErrorMsg("Имя должно содержать минимум 2 буквы (без цифр)");
      }
    }

    if (step === 3) {
      const h = Number(height);
      const w = Number(weight);
      if (!h || h < 120 || h > 250)
        return setErrorMsg("Введите корректный рост (120 - 250 см)");
      if (!w || w < 30 || w > 250)
        return setErrorMsg("Введите корректный вес (30 - 250 кг)");
    }

    if (step === 5 && !goal) return setErrorMsg("Пожалуйста, выберите цель");
    if (step === 6 && !time) return setErrorMsg("Пожалуйста, выберите время");
    if (step === 7 && needTrainer === null)
      return setErrorMsg("Пожалуйста, сделайте выбор");

    setStep(step + 1);
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const getBMI = () => {
    const h = Number(height) / 100;
    const w = Number(weight);
    return (w / (h * h)).toFixed(1);
  };

  const getBMICategory = (bmiStr: string) => {
    const bmi = Number(bmiStr);
    if (bmi < 18.5)
      return {
        text: "Недостаточный вес",
        desc: "Вам стоит сфокусироваться на наборе массы и правильном питании.",
      };
    if (bmi >= 18.5 && bmi <= 24.9)
      return {
        text: "Нормальный вес",
        desc: "Отличный показатель 👍 Ваш вес находится в пределах нормы.",
      };
    if (bmi >= 25 && bmi <= 29.9)
      return {
        text: "Избыточный вес",
        desc: "Рекомендуем добавить кардио-нагрузки и скорректировать рацион.",
      };
    return {
      text: "Ожирение",
      desc: "Вам подойдет бережный старт под контролем тренера без ударных нагрузок на суставы.",
    };
  };

  const getRecommendation = () => {
    if (goal === "Похудеть" || goal === "Увеличить выносливость") {
      return (
        <ul className="quiz-rec-list">
          <li>3-4 тренировки в неделю</li>
          <li>Кардио + интервальные силовые тренировки (FITNESS MIX)</li>
          <li>Персональный тренер ускорит результат и поможет с диетой</li>
        </ul>
      );
    }
    if (goal === "Набрать мышечную массу") {
      return (
        <ul className="quiz-rec-list">
          <li>3-4 силовые тренировки в неделю (тренажерный зал)</li>
          <li>Профицит калорий и контроль белка в питании</li>
          <li>Работа с тренером для постановки базовой техники</li>
        </ul>
      );
    }
    return (
      <ul className="quiz-rec-list">
        <li>2-3 тренировки в неделю (Йога, Здоровая спина, Пилатес)</li>
        <li>Умеренные нагрузки для поддержания тонуса</li>
        <li>Бассейн и растяжка для расслабления</li>
      </ul>
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanedPhone = phone.replace(/\D/g, "");
    if (!/^375(17|25|29|33|44)\d{7}$/.test(cleanedPhone)) {
      return setErrorMsg("Некорректный номер РБ (пример: +375 29 123-45-67)");
    }

    if (
      email.trim().length > 0 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return setErrorMsg("Некорректный формат Email");
    }

    setStep(9);
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          ПОЧУВСТВУЙ ПУЛЬС,
          <br />
          КОТОРЫЙ БЬЁТСЯ В ТАКТ ТВОИМ АМБИЦИЯМ.
        </h1>
        <p className="hero-subtitle">FitPulse. Место, где железо оживает.</p>
        <button className="hero-button" onClick={openModal}>
          ВОЙТИ В РИТМ
        </button>
        <p className="hero-button-text">
          Остальное — просто спортзалы. FitPulse — твоя сборка лучшей версии.
        </p>
      </div>

      {isModalOpen && (
        <div className="hero-modal-overlay" onClick={closeModal}>
          <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hero-modal-close" onClick={closeModal}>
              ×
            </button>

            {step > 1 && step < 9 && (
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${(step / 8) * 100}%` }}
                ></div>
              </div>
            )}

            <div className="quiz-body">
              {step === 1 && (
                <div className="quiz-step-center">
                  <span className="quiz-emoji">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="#ff3b3b"
                      className="bi bi-heart-pulse logo-icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                      <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                    </svg>
                  </span>
                  <h2>Привет!</h2>
                  <p>
                    Давай подберём для тебя подходящий формат тренировок всего
                    за 30 секунд.
                  </p>
                  <button className="hero-submit-btn mt-4" onClick={handleNext}>
                    Начать →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="quiz-step">
                  <h2>Как тебя зовут?</h2>
                  <input
                    type="text"
                    className={`quiz-input ${errorMsg ? "error-input" : ""}`}
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrorMsg("");
                    }}
                    autoFocus
                  />
                  {errorMsg && <p className="hero-error-text">{errorMsg}</p>}
                </div>
              )}

              {step === 3 && (
                <div className="quiz-step">
                  <h2>Твои параметры</h2>
                  <p className="quiz-hint">
                    Это нужно для расчета индекса массы тела (ИМТ)
                  </p>
                  <div className="quiz-input-row">
                    <input
                      type="number"
                      className="quiz-input"
                      placeholder="Рост (см)"
                      value={height}
                      onChange={(e) => {
                        setHeight(e.target.value);
                        setErrorMsg("");
                      }}
                    />
                    <input
                      type="number"
                      className="quiz-input"
                      placeholder="Вес (кг)"
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.target.value);
                        setErrorMsg("");
                      }}
                    />
                  </div>
                  {errorMsg && <p className="hero-error-text">{errorMsg}</p>}
                </div>
              )}

              {step === 4 && (
                <div className="quiz-step-center">
                  <h2>Результат ИМТ</h2>
                  <div className="quiz-bmi-result">
                    <span className="bmi-number">{getBMI()}</span>
                    <span className="bmi-category">
                      {getBMICategory(getBMI()).text}
                    </span>
                  </div>
                  <p className="bmi-desc">{getBMICategory(getBMI()).desc}</p>
                  <button className="hero-submit-btn mt-4" onClick={handleNext}>
                    Продолжить
                  </button>
                </div>
              )}

              {step === 5 && (
                <div className="quiz-step">
                  <h2>{name}, какая у тебя главная цель?</h2>
                  <div className="quiz-grid">
                    {GOALS_LIST.map((g) => (
                      <button
                        key={g}
                        className={`quiz-card-btn ${goal === g ? "active" : ""}`}
                        onClick={() => {
                          setGoal(g);
                          setErrorMsg("");
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  {errorMsg && <p className="hero-error-text">{errorMsg}</p>}
                </div>
              )}

              {step === 6 && (
                <div className="quiz-step">
                  <h2>Когда удобнее заниматься?</h2>
                  <div className="quiz-grid">
                    {TIMES_LIST.map((t) => (
                      <button
                        key={t}
                        className={`quiz-card-btn ${time === t ? "active" : ""}`}
                        onClick={() => {
                          setTime(t);
                          setErrorMsg("");
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errorMsg && <p className="hero-error-text">{errorMsg}</p>}
                </div>
              )}

              {step === 7 && (
                <div className="quiz-step">
                  <h2>Нужен ли персональный тренер?</h2>
                  <p className="quiz-hint">
                    Тренер ставит технику и мотивирует
                  </p>
                  <div
                    className="quiz-grid"
                    style={{ gridTemplateColumns: "1fr 1fr" }}
                  >
                    <button
                      className={`quiz-card-btn ${needTrainer === true ? "active" : ""}`}
                      onClick={() => {
                        setNeedTrainer(true);
                        setErrorMsg("");
                      }}
                    >
                      Да
                    </button>
                    <button
                      className={`quiz-card-btn ${needTrainer === false ? "active" : ""}`}
                      onClick={() => {
                        setNeedTrainer(false);
                        setErrorMsg("");
                      }}
                    >
                      Нет
                    </button>
                  </div>

                  {needTrainer && (
                    <div className="quiz-fade-in mt-3">
                      <select
                        className="hero-select"
                        value={selectedTrainer}
                        onChange={(e) => setSelectedTrainer(e.target.value)}
                      >
                        {TRAINERS_LIST.map((tr) => (
                          <option key={tr} value={tr}>
                            {tr}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  {errorMsg && (
                    <p className="hero-error-text mt-2">{errorMsg}</p>
                  )}
                </div>
              )}

              {step === 8 && (
                <div className="quiz-step">
                  <div className="quiz-recommendation">
                    <h3>Для цели: {goal.toLowerCase()}</h3>
                    <p>
                      <strong>{name}</strong>, рекомендуем:
                    </p>
                    {getRecommendation()}
                  </div>

                  <h4 style={{ marginTop: "25px", marginBottom: "15px" }}>
                    Оставить заявку
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="hero-input-group">
                      <input
                        type="text"
                        value={name}
                        disabled
                        className="quiz-input-disabled"
                      />
                    </div>
                    <div className="hero-input-group">
                      <input
                        type="tel"
                        placeholder="+375 (XX) XXX-XX-XX *"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrorMsg("");
                        }}
                      />
                    </div>
                    <div className="hero-input-group">
                      <input
                        type="email"
                        placeholder="Email (необязательно)"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrorMsg("");
                        }}
                      />
                    </div>
                    <label
                      className="hero-checkbox-label"
                      style={{ marginTop: "15px", marginBottom: "20px" }}
                    >
                      <input
                        type="checkbox"
                        checked={wantConsultation}
                        onChange={(e) => setWantConsultation(e.target.checked)}
                      />
                      <span className="hero-checkmark"></span>
                      Хочу получить вводную консультацию
                    </label>

                    {errorMsg && (
                      <p className="hero-error-text mb-2">{errorMsg}</p>
                    )}
                    <button type="submit" className="hero-submit-btn">
                      Получить персональную рекомендацию
                    </button>
                  </form>
                </div>
              )}

              {step === 9 && (
                <div className="quiz-step-center">
                  <span className="quiz-emoji">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="#ff3b3b"
                      className="bi bi-heart-pulse logo-icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                      <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                    </svg>
                  </span>
                  <h2 style={{ color: "#ffffff" }}>Спасибо, {name}!</h2>
                  <p>
                    Мы свяжемся с вами в ближайшее время и поможем подобрать
                    оптимальный формат тренировок.
                  </p>
                  <button className="hero-submit-btn mt-4" onClick={closeModal}>
                    Закрыть
                  </button>
                </div>
              )}
            </div>

            {step > 1 && step < 8 && step !== 4 && (
              <div className="quiz-navigation">
                <button
                  className="quiz-nav-btn quiz-nav-back"
                  onClick={handleBack}
                >
                  ← Назад
                </button>
                <button
                  className="quiz-nav-btn quiz-nav-next"
                  onClick={handleNext}
                >
                  Далее →
                </button>
              </div>
            )}

            {step === 4 && (
              <div
                className="quiz-navigation"
                style={{ justifyContent: "flex-start", marginTop: "-15px" }}
              >
                <button
                  className="quiz-nav-btn quiz-nav-back"
                  onClick={handleBack}
                >
                  ← Назад
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
