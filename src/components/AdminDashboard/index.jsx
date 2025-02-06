import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTrophy,
  faImages,
  faMoneyBill,
  faExclamationTriangle,
  faCheckCircle,
  faChartLine,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function AdminDashboard() {
  const stats = [
    { title: "Toplam Kullanıcı", value: "5,234", trend: "+12%", icon: faUsers },
    { title: "Aktif Yarışmalar", value: "24", trend: "+5%", icon: faTrophy },
    {
      title: "Yüklenen Fotoğraflar",
      value: "12,456",
      trend: "+18%",
      icon: faImages,
    },
    { title: "Aylık Gelir", value: "₺45,678", trend: "+8%", icon: faMoneyBill },
  ];

  const upcomingContests = [
    {
      title: "Doğa Fotoğrafçılığı",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      participants: 156,
      status: "Aktif",
    },
    {
      title: "Portre Yarışması",
      startDate: "2024-04-15",
      endDate: "2024-05-15",
      participants: 89,
      status: "Yakında",
    },
  ];

  const recentActivities = [
    {
      user: "Ahmet Yılmaz",
      action: "yeni üye oldu",
      time: "5 dakika önce",
      type: "user",
    },
    {
      user: "Ayşe Kaya",
      action: "yarışmaya fotoğraf yükledi",
      time: "15 dakika önce",
      type: "upload",
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* İstatistikler */}
      <section className="stats-section">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="stat-icon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">
                <span className="value">{stat.value}</span>
                <span className="trend positive">{stat.trend}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Yarışma Takvimi */}
      <section className="contests-calendar">
        <h2>
          <FontAwesomeIcon icon={faCalendarAlt} /> Yarışma Takvimi
        </h2>
        <div className="contests-grid">
          {upcomingContests.map((contest, index) => (
            <div key={index} className="contest-card">
              <h3>{contest.title}</h3>
              <div className="contest-info">
                <p>
                  <span>Başlangıç:</span> {contest.startDate}
                </p>
                <p>
                  <span>Bitiş:</span> {contest.endDate}
                </p>
                <p>
                  <span>Katılımcı:</span> {contest.participants}
                </p>
                <span className={`status ${contest.status.toLowerCase()}`}>
                  {contest.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aktivite Akışı */}
      <section className="activity-feed">
        <h2>
          <FontAwesomeIcon icon={faChartLine} /> Son Aktiviteler
        </h2>
        <div className="activities">
          {recentActivities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">
                <FontAwesomeIcon
                  icon={activity.type === "user" ? faUsers : faImages}
                />
              </div>
              <div className="activity-info">
                <strong>{activity.user}</strong> {activity.action}
                <span className="time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sistem Durumu */}
      <section className="system-status">
        <h2>Sistem Durumu</h2>
        <div className="status-grid">
          <div className="status-card">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="status-icon active"
            />
            <div className="status-info">
              <h3>AI Sistemi</h3>
              <p>Aktif - Son güncelleme: 5 dk önce</p>
            </div>
          </div>
          <div className="status-card">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="status-icon warning"
            />
            <div className="status-info">
              <h3>Depolama Alanı</h3>
              <p>%85 Dolu - 50GB Kaldı</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
