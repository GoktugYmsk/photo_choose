import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faLock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Checkout = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });
  const [error, setError] = useState("");

  const plans = {
    premium: {
      name: "Premium",
      price: "29.99",
      features: [
        "10 Fotoğraf Yükleme Hakkı",
        "Detaylı Analitikler",
        "Öncelikli Destek",
      ],
    },
    pro: {
      name: "Pro",
      price: "99.99",
      features: [
        "Sınırsız Fotoğraf Yükleme",
        "Gelişmiş Analitikler",
        "7/24 Öncelikli Destek",
      ],
    },
  };

  const selectedPlan = plans[plan];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case "cardNumber":
        formattedValue = value
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
          .trim()
          .slice(0, 19);
        break;
      case "expiry":
        formattedValue = value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{2})/, "$1/$2")
          .slice(0, 5);
        break;
      case "cvc":
        formattedValue = value.replace(/\D/g, "").slice(0, 3);
        break;
      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate("/profile", {
        state: {
          success: true,
          message: `${selectedPlan.name} planına başarıyla abone oldunuz!`,
        },
      });
    } catch (error) {
      setError(
        "Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!selectedPlan) {
    return navigate("/pricing");
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="plan-summary">
          <h2>{selectedPlan.name} Plan</h2>
          <div className="price">
            <span className="currency">₺</span>
            <span className="amount">{selectedPlan.price}</span>
            <span className="period">/ay</span>
          </div>
          <ul className="features">
            {selectedPlan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="payment-form">
          <div className="form-header">
            <FontAwesomeIcon icon={faLock} />
            <h2>Güvenli Ödeme</h2>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Kart Üzerindeki İsim</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="Ad Soyad"
                required
              />
            </div>

            <div className="form-group">
              <label>Kart Numarası</label>
              <div className="card-input">
                <FontAwesomeIcon icon={faCreditCard} />
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Son Kullanma Tarihi</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  placeholder="AA/YY"
                  required
                />
              </div>

              <div className="form-group">
                <label>CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  placeholder="123"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin />
                  İşleniyor...
                </>
              ) : (
                `₺${selectedPlan.price} Öde`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
