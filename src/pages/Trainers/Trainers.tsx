"use client";

import { useState, useMemo } from "react";
import "./Trainers.css";

import type { Trainer } from "./trainersData";
import { trainers } from "./trainersData";

import TrainerCard from "./trainerCard";
import TrainerModal from "./TrainerModal";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTrainer(null), 300);
  };

  const filteredTrainers = useMemo(() => {
    return trainers.filter((trainer) =>
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

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

          <div className="trainers-search-wrap">
            <input
              type="text"
              className="trainers-search-input"
              placeholder="Поиск тренера по имени..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="trainers-grid">
            {filteredTrainers.length > 0 ? (
              filteredTrainers.map((trainer) => (
                <TrainerCard
                  key={trainer.id}
                  trainer={trainer}
                  onOpenModal={handleOpenModal}
                />
              ))
            ) : (
              <p className="trainers-no-results">
                По запросу «{searchQuery}» тренеры не найдены.
              </p>
            )}
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
