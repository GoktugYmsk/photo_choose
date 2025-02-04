import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme ? savedTheme === "dark" : false;
  });
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(isDarkMode ? "dark-theme" : "light-theme");
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          PhotoContest
        </Link>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>

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
              <Link to="/Login" className="login-btn">
                Giriş Yap
              </Link>
              <Link to="/Register" className="register-btn">
                Kayıt Ol
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
