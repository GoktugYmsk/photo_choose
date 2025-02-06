import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faTrophy,
  faFilter,
  faSearch,
  faMoneyBill,
  faCamera,
  faCalendarAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import LazyLoading from "../LazyLoading";
import "./index.scss";

function Contests() {
  const [loading, setLoading] = useState(true);
  const [contests, setContests] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [pastWinners, setPastWinners] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "Tümü",
    "Doğa",
    "Portre",
    "Sokak",
    "Mimari",
    "Seyahat",
    "Spor",
    "Makro",
  ];

  useEffect(() => {
    setTimeout(() => {
      setContests([
        {
          id: 1,
          title: "Doğa'nın Renkleri",
          description: "Doğanın en etkileyici anlarını yakalayın",
          category: "Doğa",
          prize: "₺15,000",
          deadline: "2024-05-01",
          participants: 156,
          status: "active",
          image: "https://picsum.photos/800/400?random=1",
          requirements: ["JPG/PNG format", "Min. 3000x2000px", "Max 10MB"],
          awards: [
            "Birinci: ₺15,000",
            "İkinci: ₺7,500",
            "Üçüncü: ₺3,500",
            "Mansiyon (2 adet): ₺1,000",
          ],
        },
        {
          id: 2,
          title: "Modern Portreler",
          description: "Modern yaşamın insan yüzündeki yansımaları",
          category: "Portre",
          prize: "₺12,000",
          deadline: "2024-05-15",
          participants: 89,
          status: "upcoming",
          image: "https://picsum.photos/800/400?random=2",
          requirements: ["JPG format", "Min. 2500x2000px", "Max 8MB"],
          awards: ["Birinci: ₺12,000", "İkinci: ₺6,000", "Üçüncü: ₺3,000"],
        },
      ]);
      setPastWinners([
        {
          id: 1,
          contestName: "Şehir Işıkları",
          date: "Mart 2024",
          winners: [
            {
              rank: 1,
              name: "Ahmet Yılmaz",
              photoUrl: "https://picsum.photos/400/300?random=10",
              photoTitle: "Gece Köprüsü",
              prize: "₺20,000",
            },
            {
              rank: 2,
              name: "Ayşe Kaya",
              photoUrl: "https://picsum.photos/400/300?random=11",
              photoTitle: "Metropol",
              prize: "₺10,000",
            },
            {
              rank: 3,
              name: "Mehmet Demir",
              photoUrl: "https://picsum.photos/400/300?random=12",
              photoTitle: "Gökdelenler",
              prize: "₺5,000",
            },
          ],
        },
        {
          id: 2,
          contestName: "Doğa'nın Sesi",
          date: "Şubat 2024",
          winners: [
            {
              rank: 1,
              name: "Can Yıldız",
              photoUrl: "https://picsum.photos/400/300?random=13",
              photoTitle: "Yağmur Sonrası",
              prize: "₺15,000",
            },
            {
              rank: 2,
              name: "Zeynep Ak",
              photoUrl: "https://picsum.photos/400/300?random=14",
              photoTitle: "Sis",
              prize: "₺7,500",
            },
            {
              rank: 3,
              name: "Ali Kara",
              photoUrl: "https://picsum.photos/400/300?random=15",
              photoTitle: "Orman",
              prize: "₺3,500",
            },
          ],
        },
        {
          id: 3,
          contestName: "Portreler",
          date: "Ocak 2024",
          winners: [
            {
              rank: 1,
              name: "Elif Yılmaz",
              photoUrl: "https://picsum.photos/400/300?random=16",
              photoTitle: "Yaşlı Balıkçı",
              prize: "₺18,000",
            },
            {
              rank: 2,
              name: "Murat Şen",
              photoUrl: "https://picsum.photos/400/300?random=17",
              photoTitle: "Çocuk Gülüşü",
              prize: "₺9,000",
            },
            {
              rank: 3,
              name: "Seda Demir",
              photoUrl: "https://picsum.photos/400/300?random=18",
              photoTitle: "Sokak Müzisyeni",
              prize: "₺4,500",
            },
          ],
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredContests = contests.filter((contest) => {
    const matchesFilter = filter === "all" || contest.status === filter;
    const matchesCategory =
      selectedCategory === "all" ||
      selectedCategory.toLowerCase() === contest.category.toLowerCase();
    const matchesSearch =
      contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="contests-container">
        <div className="contests-header">
          <LazyLoading height="60px" />
        </div>
        <div className="contests-filters">
          <LazyLoading height="50px" />
        </div>
        <div className="contests-grid">
          {[1, 2, 3, 4].map((i) => (
            <LazyLoading key={i} height="400px" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="contests-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contests-header">
        <h1>Aktif Yarışmalar</h1>
        <p>Katılabileceğiniz yarışmaları keşfedin</p>
      </div>

      <div className="contests-filters">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Yarışma ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category.toLowerCase() ? "active" : ""
              }
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            <FontAwesomeIcon icon={faFilter} />
            Tümü
          </button>
          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            <FontAwesomeIcon icon={faClock} />
            Aktif
          </button>
          <button
            className={filter === "upcoming" ? "active" : ""}
            onClick={() => setFilter("upcoming")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            Yaklaşan
          </button>
        </div>
      </div>
      <div className="contests-grid">
        {filteredContests.map((contest) => (
          <motion.div
            key={contest.id}
            className={`contest-card ${contest.status}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contest-image">
              <img src={contest.image} alt={contest.title} />
              <div className="contest-status">{contest.status}</div>
              <div className="contest-prize">
                <FontAwesomeIcon icon={faTrophy} />
                {contest.prize}
              </div>
            </div>
            <div className="contest-content">
              <div className="contest-category">
                <FontAwesomeIcon icon={faTag} />
                {contest.category}
              </div>
              <h3>{contest.title}</h3>
              <p>{contest.description}</p>

              <div className="contest-details">
                <div className="detail-item">
                  <FontAwesomeIcon icon={faClock} />
                  <span>Son: {contest.deadline}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>{contest.participants} Katılımcı</span>
                </div>
              </div>

              <div className="contest-requirements">
                <h4>Gereksinimler:</h4>
                <ul>
                  {contest.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="contest-awards">
                <h4>Ödüller:</h4>
                <ul>
                  {contest.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`apply-button ${
                  contest.status === "upcoming" ? "disabled" : ""
                }`}
                disabled={contest.status === "upcoming"}
              >
                {contest.status === "upcoming" ? "Yakında" : "Hemen Katıl"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="past-winners-section">
        <h2>
          <FontAwesomeIcon icon={faTrophy} />
          Son Yarışma Kazananları
        </h2>
        {pastWinners.length > 0 ? (
          <div className="winners-grid">
            {pastWinners.map((contest) => (
              <div key={contest.id} className="winner-contest-card">
                <div className="contest-info">
                  <h3>{contest.contestName}</h3>
                  <span className="date">{contest.date}</span>
                </div>
                <div className="winners-list">
                  {contest.winners.map((winner) => (
                    <motion.div
                      key={winner.rank}
                      className="winner-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="winner-photo">
                        <img src={winner.photoUrl} alt={winner.photoTitle} />
                        <div className="winner-rank">
                          {winner.rank === 1 && "🥇"}
                          {winner.rank === 2 && "🥈"}
                          {winner.rank === 3 && "🥉"}
                        </div>
                      </div>
                      <div className="winner-info">
                        <h4>{winner.photoTitle}</h4>
                        <p className="photographer">{winner.name}</p>
                        <p className="prize">{winner.prize}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-winners">
            <p>Henüz sonuçlanmış yarışma bulunmuyor.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Contests;
