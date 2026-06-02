"use client";

import "./PricesCard.css";
import type { PricesItem } from "./PricesData";

interface PricesCardProps {
  item: PricesItem;
  onOpenModal: (planName: string) => void;
}

export default function PricesCard({ item, onOpenModal }: PricesCardProps) {
  return (
    <div className="pricing-card">
      <h4 className="pricing-card-title">{item.title}</h4>
      <div className="pricing-card-price">{item.price}</div>

      <ul className="pricing-card-features">
        {item.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {item.note && <p className="pricing-card-note">{item.note}</p>}

      <button
        className="pricing-card-btn"
        onClick={() => onOpenModal(item.title)}
      >
        Выбрать
      </button>
    </div>
  );
}
