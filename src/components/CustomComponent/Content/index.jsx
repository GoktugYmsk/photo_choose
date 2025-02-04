import React from "react";
import { useLocation } from "react-router-dom";
import image1 from "../../../assest/image1.jpeg";
import image2 from "../../../assest/image2.jpeg";
import image3 from "../../../assest/image3.jpeg";
import "./index.scss";

const Content = () => {
  const location = useLocation();

  const renderWelcomeSection = () => {
    return (
      <section className="welcome-section">
        <h1>Fotoğraf Yarışmalarına Hoş Geldiniz</h1>
        <p>
          Yeteneklerinizi gösterin, yarışmalara katılın ve ödüller kazanın. AI
          destekli değerlendirme sistemi ile objektif sonuçlar.
        </p>
        <div className="stats">
          <div className="stat-item">
            <span className="number">50+</span>
            <span className="label">Aktif Yarışma</span>
          </div>
          <div className="stat-item">
            <span className="number">1000+</span>
            <span className="label">Katılımcı</span>
          </div>
          <div className="stat-item">
            <span className="number">₺100K+</span>
            <span className="label">Ödül Havuzu</span>
          </div>
        </div>
      </section>
    );
  };

  const renderFeaturedContests = () => {
    const contests = [
      {
        id: 1,
        title: "Doğa Fotoğrafçılığı",
        category: "Doğa",
        deadline: "30 Nisan 2024",
        prize: "₺10,000",
        image: image1,
      },
      {
        id: 2,
        title: "Portre Fotoğrafçılığı",
        category: "Portre",
        deadline: "15 Mayıs 2024",
        prize: "₺15,000",
        image: image2,
      },
      {
        id: 3,
        title: "Sokak Fotoğrafçılığı",
        category: "Sokak",
        deadline: "1 Haziran 2024",
        prize: "₺12,000",
        image: image3,
      },
    ];

    return (
      <section className="featured-contests">
        <h2>Öne Çıkan Yarışmalar</h2>
        <div className="contests-grid">
          {contests.map((contest) => (
            <div key={contest.id} className="contest-card">
              <div className="contest-image">
                <img src={contest.image} alt={contest.title} />
              </div>
              <div className="contest-info">
                <h3>{contest.title}</h3>
                <div className="contest-details">
                  <span className="category">{contest.category}</span>
                  <span className="deadline">
                    Son Katılım: {contest.deadline}
                  </span>
                  <span className="prize">Ödül: {contest.prize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderHowItWorks = () => {
    const steps = [
      {
        icon: "📸",
        title: "Fotoğraf Yükle",
        description: "En iyi fotoğrafınızı seçin ve yarışmaya katılın",
      },
      {
        icon: "🤖",
        title: "AI Değerlendirme",
        description: "Fotoğrafınız yapay zeka tarafından değerlendirilir",
      },
      {
        icon: "🏆",
        title: "Ödül Kazanın",
        description: "Kazananlar değerli ödüllerin sahibi olur",
      },
    ];

    return (
      <section className="how-it-works">
        <h2>Nasıl Çalışır?</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="content">
      <div className="content-container">
        {location.pathname === "/" && (
          <>
            {renderWelcomeSection()}
            {renderFeaturedContests()}
            {renderHowItWorks()}
          </>
        )}
      </div>
    </main>
  );
};

export default Content;
