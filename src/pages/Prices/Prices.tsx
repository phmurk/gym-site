"use client";

import { useEffect, useRef } from "react";

import "./Prices.css";
import { PricesCategories } from "../../components/Prices/PricesData";
import TopHits from "../../components/Prices/TopHits";
import PricesGroup from "../../components/Prices/PricesGroup";
import PricesInfo from "../../components/Prices/PricesInfo";

export default function Prices() {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const initAccordion = async () => {
      if (typeof window !== "undefined" && accordionRef.current) {
        const jqModule = await import("jquery");
        const $ = jqModule.default || jqModule;

        (window as any).$ = (window as any).jQuery = $;

        await import("jquery-ui-dist/jquery-ui");

        if (isMounted) {
          ($(accordionRef.current) as any).accordion({
            collapsible: true,
            active: 0,
            heightStyle: "content",
            animate: 300,
          });
        }
      }
    };

    initAccordion();

    return () => {
      isMounted = false;
      if (
        accordionRef.current &&
        typeof window !== "undefined" &&
        (window as any).$
      ) {
        try {
          ((window as any).$(accordionRef.current) as any).accordion("destroy");
        } catch (e) {}
      }
    };
  }, []);

  return (
    <main className="prices-page">
      <div className="container">
        <div className="prices-header">
          <h1 className="prices-main-title">
            Абонементы <span>FitPulse</span>
          </h1>
          <p className="prices-subtitle">
            Выберите формат, который подходит именно вам
          </p>
        </div>

        <TopHits />

        <div className="all-prices-section">
          <h2 className="all-prices-title">Все тарифы</h2>

          <div ref={accordionRef} className="jquery-ui-accordion">
            {PricesCategories.map((category) => (
              <PricesGroup key={category.id} category={category} />
            ))}
          </div>
        </div>
        <PricesInfo />
      </div>
    </main>
  );
}
