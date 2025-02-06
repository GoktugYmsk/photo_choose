import React from "react";

import { motion } from "framer-motion";

function InspirationSection() {
  const collections = [
    {
      id: 1,
      title: "Minimalist Anlar",
      description: "Sadeliğin güzelliği",
      imageCount: 12,
      curator: "Ayşe K.",
      coverImage: "url-to-image",
    },
  ];

  return (
    <section className="inspiration-section">
      <h2>İlham Verici Koleksiyonlar</h2>
      <div className="collections-grid">
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            className="collection-card"
            whileHover={{ y: -5 }}
          >
            <div className="collection-cover">
              <img src={collection.coverImage} alt={collection.title} />
              <span className="image-count">
                {collection.imageCount} Fotoğraf
              </span>
            </div>
            <div className="collection-info">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <span className="curator">Küratör: {collection.curator}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InspirationSection;
