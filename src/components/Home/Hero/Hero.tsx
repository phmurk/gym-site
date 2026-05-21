import "./Hero.css";
import heroImage from "../../../assets/images/home_hero_copy.png";

function Hero() {
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
        <button className="hero-button">ВОЙТИ В РИТМ</button>
        <p className="hero-button-text">
          Остальное — просто спортзалы. FitPulse — твоя сборка лучшей версии.
        </p>
      </div>
    </section>
  );
}

export default Hero;
