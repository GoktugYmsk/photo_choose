import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          PhotoContest
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                to="/contests"
                className={location.pathname === "/contests" ? "active" : ""}
              >
                Yarışmalar
              </Link>
            </li>
            <li>
              <Link
                to="/upload"
                className={location.pathname === "/upload" ? "active" : ""}
              >
                Fotoğraf Yükle
              </Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link to="/login" className="login-btn">
              Giriş Yap
            </Link>
            <Link to="/register" className="register-btn">
              Kayıt Ol
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
