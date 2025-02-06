import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faImage,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

const PricingPlans = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handlePlanSelect = (planPath) => {
    if (!user) {
      navigate("/login", {
        state: {
          redirectTo: planPath,
          message: "Plan seçimi için lütfen giriş yapın.",
        },
      });
    } else {
      navigate(planPath);
    }
  };

  const plans = [
    {
      name: "Ücretsiz",
      price: "0",
      icon: faImage,
      features: [
        "1 Fotoğraf Yükleme Hakkı",
        "Temel Analitikler",
        "Standart Destek",
      ],
      buttonText: "Şimdi Başla",
      path: "/",
      popular: false,
    },
    {
      name: "Premium",
      price: "29.99",
      icon: faStar,
      features: [
        "10 Fotoğraf Yükleme Hakkı",
        "Detaylı Analitikler",
        "Öncelikli Destek",
        "Reklamsız Deneyim",
        "Özel Rozet",
      ],
      buttonText: "Premium'a Geç",
      path: "/checkout/premium",
      popular: true,
    },
    {
      name: "Pro",
      price: "99.99",
      icon: faCrown,
      features: [
        "Sınırsız Fotoğraf Yükleme",
        "Gelişmiş Analitikler",
        "7/24 Öncelikli Destek",
        "Reklamsız Deneyim",
        "Pro Rozet",
        "Özel Etkinliklere Erişim",
      ],
      buttonText: "Pro'ya Geç",
      path: "/checkout/pro",
      popular: false,
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Fotoğraf Yükleme Planları</h1>
        <p>Size en uygun planı seçin ve fotoğraflarınızı paylaşmaya başlayın</p>
      </div>

      <div className="pricing-plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <div className="popular-badge">En Popüler</div>}
            <div className="plan-icon">
              <FontAwesomeIcon icon={plan.icon} />
            </div>
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="currency">₺</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/ay</span>
            </div>
            <ul className="features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FontAwesomeIcon icon={faCheck} />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="plan-button"
              onClick={() => handlePlanSelect(plan.path)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
