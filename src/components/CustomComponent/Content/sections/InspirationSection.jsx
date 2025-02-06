import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function InspirationSection() {
  const navigate = useNavigate();
  const collections = [
    {
      id: 1,
      title: "Minimalist Anlar",
      description: "Sadeliğin güzelliği",
      imageCount: 12,
      curator: "Ayşe K.",
      coverImage: "https://picsum.photos/seed/picsum/200/300",
      slug: "minimalist-anlar",
    },
    {
      id: 2,
      title: "Doğanın Renkleri",
      description: "Doğal yaşamın en güzel kareleri",
      imageCount: 18,
      curator: "Mehmet D.",
      coverImage: "https://picsum.photos/seed/nature/200/300",
      slug: "doganin-renkleri",
    },
  ];

  const handleCollectionClick = (slug) => {
    navigate(`/Inspirations/${slug}`);
  };

  return (
    <section className="inspiration-section">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        İlham Verici Koleksiyonlar
      </motion.h2>
      <div className="collections-grid">
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            className="collection-card"
            whileHover={{ y: -5 }}
            onClick={() => handleCollectionClick(collection.slug)}
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
