import React from "react";

function WelcomeSection() {
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
}

export default WelcomeSection;
