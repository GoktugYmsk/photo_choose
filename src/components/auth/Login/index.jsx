import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleAppleLogin = () => {
    console.log("Apple login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Giriş Yap</h1>
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google ile devam et</span>
          </button>
          <button className="apple-btn" onClick={handleAppleLogin}>
            <FontAwesomeIcon icon={faApple} />
            <span>Apple ile devam et</span>
          </button>
        </div>

        <div className="divider">
          <span>veya</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Beni hatırla</span>
            </label>
            <Link to="/auth/forgot-password" className="forgot-password">
              Şifremi unuttum
            </Link>
          </div>

          <button type="submit" className="submit-btn">
            Giriş Yap
          </button>
        </form>

        <p className="auth-switch">
          Hesabınız yok mu? <Link to="/Register">Hemen kaydolun</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
