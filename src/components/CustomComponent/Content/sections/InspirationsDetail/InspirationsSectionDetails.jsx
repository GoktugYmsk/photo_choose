import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../../../../LazyImage";
import "./index.scss";

const InspirationDetail = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  const mockCollection = {
    id: 1,
    title: "Minimalist Anlar",
    description: "Sadeliğin güzelliği",
    curator: "Ayşe K.",
    photos: [
      {
        id: 1,
        title: "Yalnız Ağaç",
        photographer: "Mehmet D.",
        url: "https://picsum.photos/seed/tree/800/600",
        description: "Minimalist doğa fotoğrafçılığı",
      },
    ],
  };

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setCollection(mockCollection);
      } catch (error) {
        console.error("Koleksiyon yüklenirken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [slug]);

  if (loading) {
    return <div className="loading-spinner">Yükleniyor...</div>;
  }

  return (
    <motion.div
      className="inspiration-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="collection-header">
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
        <div className="curator-info">
          <span>Küratör: {collection.curator}</span>
        </div>
      </div>

      <div className="photos-grid">
        {collection.photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            whileHover={{ y: -5 }}
          >
            <LazyImage src={photo.url} alt={photo.title} />
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
              <span className="photographer">
                Fotoğrafçı: {photo.photographer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InspirationDetail;
