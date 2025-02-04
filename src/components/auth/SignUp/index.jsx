import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
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
    console.log("Google signup");
  };

  const handleAppleLogin = () => {
    console.log("Apple signup");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Kayıt Ol</h1>
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google ile kayıt ol</span>
          </button>
          <button className="apple-btn" onClick={handleAppleLogin}>
            <FontAwesomeIcon icon={faApple} />
            <span>Apple ile kayıt ol</span>
          </button>
        </div>

        <div className="divider">
          <span>veya</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Ad Soyad</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirmPassword">Şifre Tekrar</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <span>
                <Link to="/terms" target="_blank">
                  Kullanım şartlarını
                </Link>{" "}
                kabul ediyorum
              </span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Kayıt Ol
          </button>
        </form>

        <p className="auth-switch">
          Zaten hesabınız var mı? <Link to="/Login">Giriş yapın</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
