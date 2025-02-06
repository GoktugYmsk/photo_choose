import React from "react";
import { motion } from "framer-motion";

function TrendingSection() {
  const trendingData = {
    weekly: [
      {
        id: 1,
        title: "En Çok Oy Alan Kategoriler",
        data: [
          { name: "Doğa", count: 2500, trend: "+15%" },
          { name: "Portre", count: 2100, trend: "+12%" },
          { name: "Sokak", count: 1800, trend: "+8%" },
        ],
      },
      {
        id: 2,
        title: "Popüler Teknikler",
        data: [
          { name: "Uzun Pozlama", count: 1200, trend: "+20%" },
          { name: "Minimalizm", count: 950, trend: "+10%" },
          { name: "Drone", count: 850, trend: "+25%" },
        ],
      },
    ],
  };

  return (
    <>
      <motion.section className="trending-section">
        <h2>Haftalık Trendler</h2>
        <div className="trend-cards">
          {trendingData.weekly.map((trend) => (
            <motion.div
              key={trend.id}
              className="trend-card"
              whileHover={{ scale: 1.02 }}
            >
              <h3>{trend.title}</h3>
              <div className="trend-items">
                {trend.data.map((item, index) => (
                  <div key={index} className="trend-item">
                    <span className="name">{item.name}</span>
                    <span className="count">{item.count}</span>
                    <span className="trend positive">{item.trend}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default TrendingSection;
