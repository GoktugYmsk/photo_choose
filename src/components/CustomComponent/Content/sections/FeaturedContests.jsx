import React, { lazy } from "react";

import image1 from "../../../../assest/image1.jpeg";
import image2 from "../../../../assest/image2.jpeg";
import image3 from "../../../../assest/image3.jpeg";

const FeaturedContests = () => {
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

export default FeaturedContests;
