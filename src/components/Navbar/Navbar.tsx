import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Offcanvas } from "bootstrap";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { user, openAuthModal, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("mobileMenu");
    if (offcanvasElement) {
      const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
    setTimeout(() => {
      const backdrops = document.querySelectorAll(".offcanvas-backdrop");
      backdrops.forEach((backdrop) => backdrop.remove());

      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }, 300);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar ${
        showNavbar ? "navbar-show" : "navbar-hide"
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand logo" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-heart-pulse logo-icon"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
            <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
          </svg>
          <span>FitPulse</span>
        </NavLink>

        <button
          className="navbar-toggler custom-toggler"
          aria-label="Открыть меню"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="desktop-menu">
          <ul className="navbar-nav nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/schedule">
                Расписание
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/trainers">
                Тренеры
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prices">
                Цены
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="profile-wrapper">
          {user ? (
            <>
              <span className="navbar-greeting">Привет, {user.name}!</span>
              <NavLink className="profile-link" to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-circle profile-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <span>Профиль</span>
              </NavLink>
              <button className="navbar-auth-btn" onClick={logout}>
                Выйти
              </button>
            </>
          ) : (
            <button className="navbar-auth-btn-main" onClick={openAuthModal}>
              Войти
            </button>
          )}
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end mobile-offcanvas"
        tabIndex={-1}
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">FitPulse</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mobile-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeOffcanvas}>
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/schedule"
                onClick={closeOffcanvas}
              >
                Расписание
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/trainers"
                onClick={closeOffcanvas}
              >
                Тренеры
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/prices"
                onClick={closeOffcanvas}
              >
                Цены
              </NavLink>
            </li>

            <li className="nav-item auth-mobile-item">
              {user ? (
                <>
                  <span className="mobile-greeting">Привет, {user.name}!</span>
                  <NavLink
                    className="nav-link"
                    to="/profile"
                    onClick={closeOffcanvas}
                  >
                    Личный кабинет
                  </NavLink>
                  <button
                    className="mobile-auth-btn"
                    onClick={() => {
                      logout();
                      closeOffcanvas();
                    }}
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <button
                  className="mobile-auth-btn-main"
                  onClick={() => {
                    openAuthModal();
                    closeOffcanvas();
                  }}
                >
                  Войти / Регистрация
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
