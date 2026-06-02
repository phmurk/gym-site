"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg("Пожалуйста, введите корректный Email");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        "service_octaeni",
        "template_ly47k3z",
        {
          to_email: email,
        },
        "PP8knVFMy_NOV5S2S",
      );

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setStatus("error");
      setErrorMsg("Произошла ошибка при подписке. Попробуйте позже.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-wrapper">
          <div className="newsletter-content">
            <h2>Будьте в курсе событий</h2>
            <p>
              Подпишитесь на нашу рассылку, чтобы первыми получать уведомления о
              новых акциях, скидках и сюрпризах от FitPulse.
            </p>
          </div>

          <div className="newsletter-form-container">
            {status === "success" ? (
              <div className="newsletter-success">
                <span className="success-icon">✉️</span>
                <h4>Отлично! Вы в команде.</h4>
                <p>
                  Проверьте вашу почту, мы уже отправили вам приветственное
                  письмо!
                </p>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Введите ваш Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className={errorMsg ? "input-error" : ""}
                  />
                  <button
                    type="submit"
                    className="newsletter-btn"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Отправка..." : "ПОДПИСАТЬСЯ"}
                  </button>
                </div>
                {errorMsg && <div className="newsletter-error">{errorMsg}</div>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
