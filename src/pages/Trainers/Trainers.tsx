"use client";

import { useState } from "react";
import "./Trainers.css";

import type { Trainer } from "./trainersData";
import { trainers } from "./trainersData";

import TrainerCard from "./trainerCard";
import TrainerModal from "./TrainerModal";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTrainer(null), 300);
  };

  return (
    <>
      <section className="trainers">
        <div className="container">
          <div className="trainers-head">
            <h2 className="trainers-title">
              Люди, которые не бросят на полпути
            </h2>
            <p className="trainers-subtitle">
              Тренеры FitPulse. Здесь не учат «терпеть и бить рекорды». Учат не
              навредить себе и получать удовольствие от силы.
            </p>
          </div>

          <div className="trainers-grid">
            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </section>

      <TrainerModal
        isOpen={isModalOpen}
        trainer={selectedTrainer}
        onClose={handleCloseModal}
      />
    </>
  );
}
