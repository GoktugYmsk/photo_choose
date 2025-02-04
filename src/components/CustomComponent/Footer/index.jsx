import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PhotoContest</h3>
            <p>
              Fotoğraflarınızı paylaşın, yarışmalara katılın ve ödüller kazanın.
            </p>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/contests">Yarışmalar</Link>
              </li>
              <li>
                <Link to="/winners">Kazananlar</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Yardım</h4>
            <ul>
              <li>
                <Link to="/faq">SSS</Link>
              </li>
              <li>
                <Link to="/rules">Kurallar</Link>
              </li>
              <li>
                <Link to="/privacy">Gizlilik Politikası</Link>
              </li>
              <li>
                <Link to="/terms">Kullanım Şartları</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Bizi Takip Edin</h4>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 PhotoContest. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
