"use client";

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Защита роута: если юзера нет, выкидываем на главную
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Пока хук редиректит, ничего не рендерим, чтобы избежать ошибок
  if (!user) return null;

  return (
    <main className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1 className="profile-title">
            Личный <span>Кабинет</span>
          </h1>
          <p className="profile-subtitle">
            Управляйте своими тренировками и абонементами
          </p>
        </div>

        <div className="profile-content">
          {/* ЛЕВАЯ КОЛОНКА - ИНФОРМАЦИЯ ОБ АККАУНТЕ */}
          <aside className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">
                <span>{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <h2 className="profile-name">{user.name}</h2>
              <div className="profile-info-list">
                <div className="profile-info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Телефон:</span>
                  <span className="info-value">{user.phone}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">В клубе с:</span>
                  <span className="info-value">
                    {user.createdAt || "Неизвестно"}
                  </span>
                </div>
              </div>
              <button className="profile-logout-btn" onClick={logout}>
                Выйти из аккаунта
              </button>
            </div>
          </aside>

          {/* ПРАВАЯ КОЛОНКА - ИСТОРИЯ ЗАПИСЕЙ */}
          <section className="profile-main">
            <div className="profile-bookings-header">
              <h3>История записей</h3>
              <span className="bookings-count">
                Всего записей: {user.bookings.length}
              </span>
            </div>

            {user.bookings.length > 0 ? (
              <div className="bookings-grid">
                {/* Переворачиваем массив, чтобы новые записи были сверху */}
                {[...user.bookings].reverse().map((booking) => (
                  <div key={booking.id} className="booking-card">
                    <div className="booking-badge">{booking.type}</div>
                    <h4 className="booking-title">{booking.title}</h4>
                    <div className="booking-details">
                      <p>
                        <span>📅 Дата:</span> {booking.date}
                      </p>
                      <p>
                        <span>🕒 Время:</span> {booking.time}
                      </p>
                      <p>
                        <span>👤 Тренер:</span> {booking.trainer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bookings-empty">
                <div className="empty-icon">🏋️‍♂️</div>
                <h4>Вы еще никуда не записались</h4>
                <p>
                  Самое время выбрать свою первую тренировку и начать путь к
                  цели!
                </p>
                <Link to="/schedule" className="empty-btn">
                  Перейти к расписанию
                </Link>
              </div>
            )}
            {/* --- СЕКЦИЯ ОТЗЫВОВ В ПРОФИЛЕ --- */}
            <div
              className="profile-reviews-section"
              style={{ marginTop: "50px" }}
            >
              <div className="profile-bookings-header">
                <h3>Ваши отзывы</h3>
                <span className="bookings-count">
                  {user.reviews?.length || 0}
                </span>
              </div>

              {user.reviews && user.reviews.length > 0 ? (
                <div className="bookings-grid">
                  {[...user.reviews].reverse().map((review) => (
                    <div
                      key={review.id}
                      className="booking-card"
                      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <div
                        className="booking-badge"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "#fff",
                        }}
                      >
                        Мой отзыв
                      </div>
                      <p
                        className="booking-details"
                        style={{
                          fontSize: "16px",
                          color: "#fff",
                          fontStyle: "italic",
                          marginTop: "10px",
                        }}
                      >
                        "{review.text}"
                      </p>
                      <p
                        style={{
                          color: "#ff3b3b",
                          fontSize: "13px",
                          marginTop: "15px",
                          fontWeight: "600",
                        }}
                      >
                        {review.date}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bookings-empty" style={{ padding: "20px" }}>
                  <p>Вы еще не оставляли отзывы.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
