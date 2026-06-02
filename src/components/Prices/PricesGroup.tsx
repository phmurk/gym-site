"use client";

import "./PricesGroup.css";
import type { PricesCategory } from "./PricesData";
import PricesCard from "./PricesCard";

interface PricesGroupProps {
  category: PricesCategory;
  onOpenModal: (planName: string) => void;
}

export default function PricesGroup({
  category,
  onOpenModal,
}: PricesGroupProps) {
  return (
    <>
      <h3>{category.title}</h3>

      <div>
        <div className="pricing-group-grid">
          {category.items.map((item) => (
            <PricesCard key={item.id} item={item} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </>
  );
}
