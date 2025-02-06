import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faAward,
  faUsers,
  faRobot,
  faHeart,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: faCamera,
      title: "Profesyonel Yarışmalar",
      description:
        "Her ay düzenlenen tematik fotoğraf yarışmaları ile yeteneklerinizi sergileme fırsatı.",
    },
    {
      icon: faRobot,
      title: "AI Değerlendirme",
      description:
        "Yapay zeka destekli objektif değerlendirme sistemi ile adil sonuçlar.",
    },
    {
      icon: faAward,
      title: "Değerli Ödüller",
      description:
        "Kazananlara sunulan para ödülleri ve profesyonel fotoğraf ekipmanları.",
    },
    {
      icon: faUsers,
      title: "Fotoğrafçı Topluluğu",
      description:
        "Deneyimli fotoğrafçılarla etkileşim kurma ve tecrübe paylaşma imkanı.",
    },
    {
      icon: faHeart,
      title: "İlham Verici İçerik",
      description:
        "Küratörlü koleksiyonlar ve trend olan fotoğraflar ile ilham kaynağı.",
    },
    {
      icon: faShieldAlt,
      title: "Telif Hakları Koruması",
      description:
        "Fotoğraflarınızın telif haklarının güvence altına alınması.",
    },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <section className="hero-section">
        <h1>Hakkımızda</h1>
        <p>
          PhotoContest, fotoğraf tutkunlarını bir araya getiren ve yeteneklerini
          sergilemelerine olanak sağlayan yenilikçi bir platformdur.
        </p>
      </section>

      <section className="mission-section">
        <h2>Misyonumuz</h2>
        <p>
          Fotoğraf sanatını destekleyerek, fotoğrafçıların yeteneklerini
          geliştirmelerine ve global bir toplulukta tanınmalarına yardımcı
          olmak.
        </p>
      </section>

      <section className="features-section">
        <h2>Özelliklerimiz</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="number">50K+</span>
          <span className="label">Fotoğrafçı</span>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="number">100+</span>
          <span className="label">Yarışma</span>
        </motion.div>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="number">₺1M+</span>
          <span className="label">Ödül</span>
        </motion.div>
      </section>

      <section className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>İletişim</h2>
          <p>
            Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="contact-info">
            <a href="mailto:info@photocontest.com">info@photocontest.com</a>
            <a href="tel:+902121234567">+90 (212) 123 45 67</a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default About;
