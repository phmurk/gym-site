"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./AuthModal.css";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login, register } = useAuth();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+375");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (isLoginMode) {
      const error = login(email, password);
      if (error) setErrorMsg(error);
    } else {
      if (name.trim().length < 2) {
        return setErrorMsg("Имя должно содержать минимум 2 символа");
      }
      if (password.length < 5) {
        return setErrorMsg("Пароль должен быть не короче 5 символов");
      }

      const cleanedPhone = phone.replace(/\D/g, "");
      if (!/^375(17|25|29|33|44)\d{7}$/.test(cleanedPhone)) {
        return setErrorMsg("Некорректный номер телефона РБ");
      }

      const error = register(name, email, phone, password);
      if (error) setErrorMsg(error);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrorMsg("");
  };

  return (
    <div className="auth-overlay" onClick={closeAuthModal}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={closeAuthModal}>
          ×
        </button>

        <div className="auth-header">
          <h2>{isLoginMode ? "С возвращением!" : "Стать частью клуба"}</h2>
          <p>
            {isLoginMode
              ? "Войдите, чтобы записаться на тренировку"
              : "Зарегистрируйтесь, чтобы открыть все возможности FitPulse"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="auth-input-group">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLoginMode}
              />
            </div>
          )}

          <div className="auth-input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {!isLoginMode && (
            <div className="auth-input-group">
              <input
                type="tel"
                placeholder="+375 (XX) XXX-XX-XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={!isLoginMode}
              />
            </div>
          )}

          <div className="auth-input-group">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <div className="auth-error">{errorMsg}</div>}

          <button type="submit" className="auth-submit-btn">
            {isLoginMode ? "ВОЙТИ" : "ЗАРЕГИСТРИРОВАТЬСЯ"}
          </button>
        </form>

        <div className="auth-footer">
          {isLoginMode ? "Еще нет аккаунта? " : "Уже есть аккаунт? "}
          <span onClick={toggleMode} className="auth-switch-btn">
            {isLoginMode ? "Создать аккаунт" : "Войти"}
          </span>
        </div>
      </div>
    </div>
  );
}
