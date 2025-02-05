import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCamera,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../assest/image1.jpeg";
import image2 from "../../../assest/image2.jpeg";
import image3 from "../../../assest/image3.jpeg";
import "./index.scss";
import { motion } from "framer-motion";

const Content = ({ children }) => {
  const location = useLocation();
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockWinners = [
    {
      id: 1,
      category: "Doğa",
      period: "Haftalık",
      date: "15-21 Mart 2024",
      photo: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      title: "Gün Batımında Dağlar",
      photographer: {
        name: "Ahmet Yılmaz",
        avatar:
          "https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=random",
      },
      votes: 245,
    },
    {
      id: 2,
      category: "Portre",
      period: "Haftalık",
      date: "15-21 Mart 2024",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      title: "Işık ve Gölge",
      photographer: {
        name: "Ayşe Kaya",
        avatar: "https://ui-avatars.com/api/?name=Ayse+Kaya&background=random",
      },
      votes: 232,
    },
    {
      id: 3,
      category: "Sokak",
      period: "Aylık",
      date: "Mart 2024",
      photo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      title: "Şehrin Ritmi",
      photographer: {
        name: "Mehmet Demir",
        avatar:
          "https://ui-avatars.com/api/?name=Mehmet+Demir&background=random",
      },
      votes: 892,
    },
    {
      id: 4,
      category: "Mimari",
      period: "Aylık",
      date: "Mart 2024",
      photo: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
      title: "Modern Çizgiler",
      photographer: {
        name: "Can Öztürk",
        avatar: "https://ui-avatars.com/api/?name=Can+Ozturk&background=random",
      },
      votes: 756,
    },
  ];

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        setWinners(mockWinners);
      } catch (error) {
        console.error("Kazananlar yüklenirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const renderWinners = () => {
    if (loading) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="loading"
        >
          <FontAwesomeIcon icon={faCamera} spin />
          <span>Yükleniyor...</span>
        </motion.div>
      );
    }

    return (
      <motion.section
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="winners-section"
      >
        <motion.div className="section-header" variants={pageVariants}>
          <h2>
            <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
            Kazanan Fotoğraflar
          </h2>
          <p>Son dönemin en iyi fotoğrafları ve sanatçıları</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="winners-grid"
        >
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              variants={pageVariants}
              className="winner-card"
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div className="winner-image">
                <img src={winner.photo} alt={winner.title} />
                <div className="winner-badge">
                  <FontAwesomeIcon icon={faTrophy} />
                  1. Sıra
                </div>
              </div>
              <div className="winner-info">
                <div className="category">
                  <FontAwesomeIcon icon={faCamera} />
                  {winner.category}
                </div>
                <h3>{winner.title}</h3>
                <div className="photographer">
                  <img
                    src={winner.photographer.avatar}
                    alt={winner.photographer.name}
                    className="avatar"
                  />
                  <span>{winner.photographer.name}</span>
                </div>
                <div className="period">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>
                    {winner.period} • {winner.date}
                  </span>
                </div>
                <div className="votes">{winner.votes} oy</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    );
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="content"
    >
      <div className="content-container">
        {location.pathname === "/" && (
          <>
            {renderWelcomeSection()}
            {renderWinners()}
            {renderFeaturedContests()}
            {renderHowItWorks()}
          </>
        )}
        {children}
      </div>
    </motion.main>
  );
};

export default Content;
