"use client";

import "./TopHits.css";
import { topHits } from "./PricesData";

export default function TopHits() {
  return (
    <section className="top-hits-section">
      <div className="top-hits-grid">
        {topHits.map((hit, index) => (
          <div key={hit.id} className={`hit-card hit-card-${index + 1}`}>
            <div className="hit-badge">{hit.badge}</div>
            <h3 className="hit-title">{hit.title}</h3>
            <div className="hit-price">{hit.price}</div>

            <ul className="hit-features">
              {hit.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="hit-audience">
              <strong>Для кого:</strong> {hit.targetAudience}
            </div>

            <button className="hit-btn">Купить абонемент</button>
          </div>
        ))}
      </div>
    </section>
  );
}
