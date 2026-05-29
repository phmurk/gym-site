"use client";

import { motion } from "framer-motion";
import type { Trainer } from "./trainersData";

interface TrainerCardProps {
  trainer: Trainer;
  onOpenModal: (trainer: Trainer) => void;
}

export default function TrainerCard({
  trainer,
  onOpenModal,
}: TrainerCardProps) {
  return (
    <motion.article
      className="trainer-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="trainer-photo-wrap">
        <img src={trainer.photo} alt={trainer.name} className="trainer-photo" />
        <div className="trainer-photo-overlay" />
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <button
          className="trainer-btn"
          type="button"
          onClick={() => onOpenModal(trainer)}
        >
          Подробнее
        </button>
      </div>
    </motion.article>
  );
}
