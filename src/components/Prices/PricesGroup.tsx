"use client";

import "./PricesGroup.css";
import type { PricesCategory } from "./PricesData";
import PricesCard from "./PricesCard";

interface PricesGroupProps {
  category: PricesCategory;
}

export default function PricesGroup({ category }: PricesGroupProps) {
  return (
    <>
      <h3>{category.title}</h3>

      <div>
        <div className="pricing-group-grid">
          {category.items.map((item) => (
            <PricesCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
