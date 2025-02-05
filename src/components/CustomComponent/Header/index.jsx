import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faBars,
  faTimes,
  faHome,
  faImage,
  faCog,
  faSun,
  faMoon,
  faCloudUploadAlt,
  faCrown,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark-theme")
  );
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faImage} />
          PhotoContest
        </Link>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} />
            Ana Sayfa
          </NavLink>

          <NavLink to="/contests" className="nav-item">
            <FontAwesomeIcon icon={faTrophy} />
            Yarışmalar
          </NavLink>

          <NavLink
            to="/photos"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faImage} />
            Fotoğraflar
          </NavLink>

          {user && (
            <NavLink
              to="/upload"
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              Fotoğraf Yükle
            </NavLink>
          )}

          <button className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>

          {user ? (
            <div className="user-menu">
              <button
                className="user-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                </div>
                <span className="user-name">{user.name}</span>
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/profile"
                    className="dropdown-item"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    Profil
                  </Link>
                  <Link
                    to="/Plans"
                    className="dropdown-item"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faCrown} />
                    Ücretlendirme
                  </Link>
                  <Link
                    to="/settings"
                    className="dropdown-item"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faCog} />
                    Ayarlar
                  </Link>
                  <button
                    className="dropdown-item danger"
                    onClick={() => {
                      handleLogout();
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link
                to="/login"
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} />
                Giriş Yap
              </Link>
              <Link
                to="/register"
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} />
                Kayıt Ol
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
