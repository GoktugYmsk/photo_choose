import React from "react";
import { useNavigate } from "react-router-dom";
import { mockAuthService } from "../../../services/mockAuth";
import "./index.scss";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    await mockAuthService.logout();
    navigate("/auth/login");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-info">
          <span>Hoş geldiniz, {user.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            Çıkış Yap
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>Toplam Kullanıcı</h3>
          <span className="stat-number">1,234</span>
        </div>
        <div className="stat-card">
          <h3>Aktif Yarışmalar</h3>
          <span className="stat-number">12</span>
        </div>
        <div className="stat-card">
          <h3>Toplam Fotoğraf</h3>
          <span className="stat-number">5,678</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
