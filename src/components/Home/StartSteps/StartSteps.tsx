import "./StartSteps.css";

function StartSteps() {
  const steps = [
    {
      number: "01",
      title: "Пробный пульс",
      text: "Оставь номер телефона — получи код на целый день в зал. Всё бесплатно, без автопродления и без просьб купить абонемент сразу. Приходи, пробуй, уходи — мы не обидимся.",
    },

    {
      number: "02",
      title: "Знакомство с железом",
      text: "Приходи в любое удобное время. Дежурный тренер за 15 минут покажет основные тренажёры, объяснит регулировки и ответит на вопросы.",
    },
    {
      number: "03",
      title: "Входи в ритм",
      text: "Понравилась атмосфера? Выбери тариф — помесячно или сразу на год. Цены честные, разница между помесячным и годовым минимальная. Оплати без процентов частями.",
    },
  ];

  return (
    <section className="start">
      <div className="container">
        <div className="start-head">
          <h2 className="start-title">Как Стать Частью FitPulse?</h2>
          <p className="start-subtitle">3 Простых Шага</p>
        </div>
        <div className="pulse-wrapper">
          <svg
            className="pulse-line"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 100
                L180 100
                L230 100
                L260 40
                L300 160
                L340 100
                L500 100
                L550 100
                L580 40
                L620 160
                L660 100
                L820 100
                L870 100
                L900 40
                L940 160
                L980 100
                L1200 100
              "
            />
          </svg>
          {steps.map((step, index) => (
            <div className={`step-card step-${index + 1}`} key={step.number}>
              <div className="step-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StartSteps;
