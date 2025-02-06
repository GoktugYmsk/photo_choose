import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faBell,
  faShield,
  faPalette,
  faLanguage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const isAdmin = user.role === "admin";

  const tabs = [
    { id: "profile", label: "Profil", icon: faUser },
    { id: "security", label: "Güvenlik", icon: faLock },
    { id: "notifications", label: "Bildirimler", icon: faBell },
    { id: "appearance", label: "Görünüm", icon: faPalette },
    { id: "language", label: "Dil", icon: faLanguage },
    ...(isAdmin
      ? [
          { id: "admin", label: "Admin Ayarları", icon: faShield },
          { id: "email", label: "E-posta Şablonları", icon: faEnvelope },
        ]
      : []),
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="profile-settings">
            <h3>Profil Ayarları</h3>
            <form>
              <div className="form-group">
                <label>Profil Fotoğrafı</label>
                <div className="avatar-upload">
                  <img
                    src={user.avatar || "default-avatar.png"}
                    alt="Profil"
                    className="avatar-preview"
                  />
                  <button type="button">Fotoğraf Değiştir</button>
                </div>
              </div>
              <div className="form-group">
                <label>Ad Soyad</label>
                <input type="text" defaultValue={user.name} />
              </div>
              <div className="form-group">
                <label>E-posta</label>
                <input type="email" defaultValue={user.email} />
              </div>
              <div className="form-group">
                <label>Biyografi</label>
                <textarea defaultValue={user.bio} rows={4} />
              </div>
              <button type="submit" className="save-button">
                Değişiklikleri Kaydet
              </button>
            </form>
          </div>
        );

      case "security":
        return (
          <div className="security-settings">
            <h3>Güvenlik Ayarları</h3>
            <form>
              <div className="form-group">
                <label>Mevcut Şifre</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>Yeni Şifre</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>Yeni Şifre (Tekrar)</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  İki Faktörlü Doğrulama
                </label>
              </div>
              <button type="submit" className="save-button">
                Şifreyi Güncelle
              </button>
            </form>
          </div>
        );

      case "notifications":
        return (
          <div className="notification-settings">
            <h3>Bildirim Ayarları</h3>
            <div className="notification-options">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Yeni Yarışma Bildirimleri
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Oy Bildirimleri
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Kazanan Duyuruları
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                Promosyon E-postaları
              </label>
            </div>
            <button className="save-button">Ayarları Kaydet</button>
          </div>
        );

      case "appearance":
        return (
          <div className="appearance-settings">
            <h3>Görünüm Ayarları</h3>
            <div className="theme-options">
              <label className="radio-label">
                <input type="radio" name="theme" value="light" defaultChecked />
                Açık Tema
              </label>
              <label className="radio-label">
                <input type="radio" name="theme" value="dark" />
                Koyu Tema
              </label>
              <label className="radio-label">
                <input type="radio" name="theme" value="system" />
                Sistem Teması
              </label>
            </div>
            <button className="save-button">Ayarları Kaydet</button>
          </div>
        );

      case "language":
        return (
          <div className="language-settings">
            <h3>Dil Ayarları</h3>
            <div className="language-options">
              <select defaultValue="tr">
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <button className="save-button">Dili Değiştir</button>
          </div>
        );

      case "admin":
        return (
          <div className="admin-settings">
            <h3>Admin Ayarları</h3>
            <div className="admin-options">
              <div className="form-group">
                <label>Yarışma Onay Süreci</label>
                <select defaultValue="manual">
                  <option value="manual">Manuel Onay</option>
                  <option value="auto">Otomatik Onay</option>
                </select>
              </div>
              <div className="form-group">
                <label>Maksimum Dosya Boyutu (MB)</label>
                <input type="number" defaultValue={10} />
              </div>
              <div className="form-group">
                <label>AI Değerlendirme Hassasiyeti</label>
                <select defaultValue="medium">
                  <option value="low">Düşük</option>
                  <option value="medium">Orta</option>
                  <option value="high">Yüksek</option>
                </select>
              </div>
            </div>
            <button className="save-button">Ayarları Kaydet</button>
          </div>
        );

      case "email":
        return (
          <div className="email-settings">
            <h3>E-posta Şablonları</h3>
            <div className="email-templates">
              <div className="form-group">
                <label>Hoş Geldin E-postası</label>
                <textarea rows={4} defaultValue="Hoş geldiniz..." />
              </div>
              <div className="form-group">
                <label>Yarışma Kazananı Bildirimi</label>
                <textarea rows={4} defaultValue="Tebrikler..." />
              </div>
            </div>
            <button className="save-button">Şablonları Kaydet</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="settings-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="settings-container">
        <div className="settings-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} />
              {tab.label}
            </button>
          ))}
        </div>
        <div className="settings-content">{renderTabContent()}</div>
      </div>
    </motion.div>
  );
}

export default Settings;
