"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import "./Prices.css";
import { PricesCategories } from "../../components/Prices/PricesData";
import TopHits from "../../components/Prices/TopHits";
import PricesGroup from "../../components/Prices/PricesGroup";
import PricesInfo from "../../components/Prices/PricesInfo";
import { useAuth } from "../../context/AuthContext";

function PurchaseModal({
  isOpen,
  onClose,
  planName,
}: {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}) {
  const { user, addBooking } = useAuth();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [phone, setPhone] = useState("+375");
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName(user?.name || "");
      setNameError("");
      setPhone(user?.phone || "+375");
      setPhoneError("");
      setEmail(user?.email || "");
      setEmailError("");
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim().length < 2) {
      setNameError("Введите корректное имя");
      isValid = false;
    } else {
      setNameError("");
    }

    const cleanedPhone = phone.replace(/\D/g, "");
    if (!/^375(17|25|29|33|44)\d{7}$/.test(cleanedPhone)) {
      setPhoneError("Некорректный номер РБ (пример: +375 29 123-45-67)");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Некорректный email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) return;

    if (user) {
      addBooking({
        id: Date.now().toString(),
        type: "Абонемент",
        title: planName,
        date: new Date().toLocaleDateString("ru-RU"),
        time: "—",
        trainer: "—",
        timestamp: new Date().toISOString(),
      });
    }

    setIsSubmitted(true);
  };

  return (
    <div className="prices-modal-overlay" onClick={onClose}>
      <div className="prices-modal" onClick={(e) => e.stopPropagation()}>
        <button className="prices-modal-close" onClick={onClose}>
          ×
        </button>

        {isSubmitted ? (
          <div className="prices-success-message">
            <h3>Заявка отправлена!</h3>
            <p>
              Вы успешно оставили заявку на абонемент: <span>{planName}</span>.
            </p>
            <p>Наш менеджер скоро свяжется с вами по указанному номеру.</p>
            <button className="prices-submit-btn" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="prices-modal-header">
              <h2>Оформление абонемента</h2>
              <p>
                Вы выбрали: <strong>{planName}</strong>
              </p>
            </div>

            <form className="prices-form" onSubmit={handleSubmit}>
              <div className="prices-input-group">
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
                  <span className="prices-error-text">{nameError}</span>
                )}
              </div>

              <div className="prices-input-group">
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
                  <span className="prices-error-text">{phoneError}</span>
                )}
              </div>

              <div className="prices-input-group">
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
                  <span className="prices-error-text">{emailError}</span>
                )}
              </div>

              <button type="submit" className="prices-submit-btn">
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Prices() {
  const accordionRef = useRef<HTMLDivElement>(null);

  const { user, openAuthModal } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpenModal = (planName: string) => {
    if (!user) {
      openAuthModal();
      return;
    }

    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

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

        <TopHits onOpenModal={handleOpenModal} />

        <div className="all-prices-section">
          <h2 className="all-prices-title">Все тарифы</h2>

          <div ref={accordionRef} className="jquery-ui-accordion">
            {PricesCategories.map((category) => (
              <PricesGroup
                key={category.id}
                category={category}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
        <PricesInfo />
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </main>
  );
}
