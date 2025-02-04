import React, { useState } from "react";
import { Link } from "react-router-dom";
import "index.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`login-container ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>
      <div className="login-box">
        <h1>Giriş Yap</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email adresinizi girin"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              required
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Beni hatırla
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Şifremi Unuttum
            </Link>
          </div>
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
        <div className="register-link">
          Hesabınız yok mu? <Link to="/register">Hemen Kaydolun</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
