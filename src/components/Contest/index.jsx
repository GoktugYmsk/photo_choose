import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faMedal,
  faCalendarAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import image4 from "../../assest/image4.jpeg";
import image5 from "../../assest/image5.jpeg";
import image6 from "../../assest/image6.jpeg";
import image7 from "../../assest/image7.jpeg";
import "./index.scss";

const Contests = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [selectedCategory, setSelectedCategory] = useState("nature");

  const categories = [
    { id: "nature", name: "Doğa" },
    { id: "portrait", name: "Portre" },
    { id: "street", name: "Sokak" },
    { id: "architecture", name: "Mimari" },
    { id: "abstract", name: "Soyut" },
  ];

  const results = {
    weekly: {
      nature: [
        {
          id: 1,
          title: "Yağmur Sonrası",
          photographer: "Ahmet Yılmaz",
          image: image4,
          votes: 245,
          rank: 1,
        },
        {
          id: 2,
          title: "Dağ Manzarası",
          photographer: "Mehmet Demir",
          image: image5,
          votes: 198,
          rank: 2,
        },
        {
          id: 3,
          title: "Göl Kenarı",
          photographer: "Ayşe Kaya",
          image: image6,
          votes: 156,
          rank: 3,
        },
      ],
    },
    monthly: {
      nature: [
        {
          id: 4,
          title: "Sonbahar",
          photographer: "Ali Yıldız",
          image: image7,
          votes: 892,
          rank: 1,
        },
      ],
    },
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <FontAwesomeIcon icon={faTrophy} className="gold" />;
      case 2:
        return <FontAwesomeIcon icon={faMedal} className="silver" />;
      case 3:
        return <FontAwesomeIcon icon={faMedal} className="bronze" />;
      default:
        return null;
    }
  };

  return (
    <div className="contests-container">
      <div className="contests-header">
        <h1>Yarışma Sonuçları</h1>
        <p>Her hafta ve ay güncellenen en iyi fotoğraflar</p>
      </div>

      <div className="contests-nav">
        <div className="period-tabs">
          <button
            className={`tab ${activeTab === "weekly" ? "active" : ""}`}
            onClick={() => setActiveTab("weekly")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            Haftalık
          </button>
          <button
            className={`tab ${activeTab === "monthly" ? "active" : ""}`}
            onClick={() => setActiveTab("monthly")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            Aylık
          </button>
        </div>

        <div className="category-select">
          <FontAwesomeIcon icon={faCamera} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contest-results">
        {results[activeTab][selectedCategory]?.map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="rank-badge">{getRankIcon(photo.rank)}</div>
            <div className="photo-image">
              <img src={photo.image} alt={photo.title} />
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p className="photographer">{photo.photographer}</p>
              <p className="votes">{photo.votes} oy</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;
