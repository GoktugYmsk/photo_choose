import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faUser,
  faSignOutAlt,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { mockAuthService } from "../../services/mockAuth";
import "./index.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme ? savedTheme === "dark" : false;
  });
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

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

  const handleLogout = async () => {
    await mockAuthService.logout();
    navigate("/auth/login");
  };

  useEffect(() => {
    const closeDropdown = () => setUserDropdownOpen(false);
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

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

            <div className="auth-section">
              {user ? (
                <div
                  className="user-dropdown"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserDropdownOpen(!userDropdownOpen);
                  }}
                >
                  <button className="user-button">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{user.name}</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </button>
                  {userDropdownOpen && (
                    <div className="dropdown-menu">
                      <Link to={user.role === "admin" ? "/admin" : "/profile"}>
                        <FontAwesomeIcon icon={faUser} />
                        Profilim
                      </Link>
                      <button onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/Login" className="login-btn">
                    Giriş Yap
                  </Link>
                  <Link to="/Register" className="register-btn">
                    Kayıt Ol
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
