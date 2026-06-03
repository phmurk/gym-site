import "./OurMission.css";

// import { motion } from "framer-motion";
import "./OurMission.css";

function OurMission() {
  const stats = [
    { value: "5 000+", label: "довольных клиентов" },
    { value: "5", label: "лет успешной работы" },
    { value: "10+", label: "профессиональных тренеров" },
    { value: "97%", label: "клиентов рекомендуют нас" },
  ];

  return (
    <section className="mission">
      <div className="container mission-container">
        <div className="mission-description">
          <h2 className="mission-title">Наша Миссия</h2>
          <p className="mission-text">
            Мы заметили главную проблему современных залов: они либо пугают
            «качками», либо расслабляют до зевоты. В FitPulse мы создали
            пространство, где железо перестаёт быть мёртвым грузом. Наша миссия
            — чтобы каждый, кто переступил порог, почувствовал: здесь его пульс
            совпадает с пульсом зала. Мы возвращаем людям радость от движения,
            силы и честного пота.
          </p>
        </div>
        <div className="mission-stats">
          {stats.map((s) => (
            <div className="mission-stat" key={s.label}>
              <div className="mission-stat-value">{s.value}</div>
              <div className="mission-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMission;
