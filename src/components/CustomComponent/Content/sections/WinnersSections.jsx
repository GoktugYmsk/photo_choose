import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function WinnersSections() {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return <div></div>;
}

export default WinnersSections;
