"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Trainer } from "./trainersData";

type ModalTab = "achievements" | "education" | "directions";

interface TrainerModalProps {
  isOpen: boolean;
  trainer: Trainer | null;
  onClose: () => void;
}

export default function TrainerModal({
  isOpen,
  trainer,
  onClose,
}: TrainerModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<ModalTab>("achievements");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveTab("achievements");
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!mounted || !isOpen || !trainer) return null;

  const contentMap: Record<ModalTab, string[]> = {
    achievements: trainer.achievements,
    education: trainer.education,
    directions: trainer.directions,
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="trainer-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="modal-header">
          <img src={trainer.photo} alt={trainer.name} className="modal-photo" />
          <div className="modal-header-text">
            <h3 className="modal-name">{trainer.name}</h3>
            <p className="modal-role">Персональный тренер</p>
          </div>
        </div>

        <div className="modal-tabs">
          {(["achievements", "education", "directions"] as ModalTab[]).map(
            (tab) => (
              <button
                key={tab}
                className={`modal-tab ${activeTab === tab ? "modal-tab--active" : ""}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab === "achievements" && "Достижения"}
                {tab === "education" && "Образование"}
                {tab === "directions" && "Направления"}
              </button>
            ),
          )}
        </div>

        <div className="modal-content">
          <ul className="modal-list">
            {contentMap[activeTab]?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}
