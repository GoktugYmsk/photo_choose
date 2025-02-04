import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { mockAuthService } from "../../services/mockAuth";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await mockAuthService.login(
        formData.email,
        formData.password
      );

      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);

      if (response.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

        {error && <div className="error-message">{error}</div>}

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
              disabled={loading}
              placeholder="örn: client@example.com veya admin@example.com"
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
              disabled={loading}
              placeholder="örn: client123 veya admin123"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={loading}
              />
              <span>Beni hatırla</span>
            </label>
            <Link to="/auth/forgot-password" className="forgot-password">
              Şifremi unuttum
            </Link>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        {/* <div className="demo-credentials">
          <p>Demo Hesapları:</p>
          <div className="credential">
            <strong>Client:</strong> client@example.com / client123
          </div>
          <div className="credential">
            <strong>Admin:</strong> admin@example.com / admin123
          </div>
        </div> */}

        <p className="auth-switch">
          Hesabınız yok mu? <Link to="/Register">Hemen kaydolun</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
