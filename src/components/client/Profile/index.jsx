import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEdit,
  faSave,
  faSpinner,
  faImage,
  faUser,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { mockAuthService } from "../../services/mockAuth";
import "./index.scss";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio || "",
    instagram: user.instagram || "",
    twitter: user.twitter || "",
    website: user.website || "",
  });
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isUploadingBanner, setIsUploadingBanner] = useState(false);
  const fileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Lütfen bir resim dosyası seçin");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Dosya boyutu 5MB'dan küçük olmalıdır");
      return;
    }

    try {
      setIsUploadingAvatar(true);
      const updatedUser = await mockAuthService.updateAvatar(file);
      setFormData((prev) => ({
        ...prev,
        avatar: updatedUser.avatar,
      }));
    } catch (error) {
      alert("Profil fotoğrafı yüklenirken bir hata oluştu");
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleBannerClick = () => {
    bannerInputRef.current.click();
  };

  const handleBannerChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Lütfen bir resim dosyası seçin");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Dosya boyutu 10MB'dan küçük olmalıdır");
      return;
    }

    try {
      setIsUploadingBanner(true);
      const updatedUser = await mockAuthService.updateBanner(file);
      setFormData((prev) => ({
        ...prev,
        banner: updatedUser.banner,
      }));
    } catch (error) {
      alert("Banner fotoğrafı yüklenirken bir hata oluştu");
    } finally {
      setIsUploadingBanner(false);
    }
  };

  const handleRemoveAvatar = async () => {
    try {
      setIsUploadingAvatar(true);
      const updatedUser = await mockAuthService.removeAvatar();
      setFormData((prev) => ({
        ...prev,
        avatar: null,
      }));
    } catch (error) {
      alert("Profil fotoğrafı kaldırılırken bir hata oluştu");
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleRemoveBanner = async () => {
    try {
      setIsUploadingBanner(true);
      const updatedUser = await mockAuthService.removeBanner();
      setFormData((prev) => ({
        ...prev,
        banner: null,
      }));
    } catch (error) {
      alert("Banner fotoğrafı kaldırılırken bir hata oluştu");
    } finally {
      setIsUploadingBanner(false);
    }
  };

  const getDefaultAvatar = () => {
    if (!user.avatar) {
      return (
        <div className="default-avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>
      );
    }
    return <img src={user.avatar} alt={user.name} />;
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div
          className="profile-cover"
          style={{
            backgroundImage: user.banner ? `url(${user.banner})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-actions">
            <button
              className={`change-banner ${
                isUploadingBanner ? "uploading" : ""
              }`}
              onClick={handleBannerClick}
              disabled={isUploadingBanner}
            >
              <FontAwesomeIcon
                icon={isUploadingBanner ? faSpinner : faImage}
                className={isUploadingBanner ? "fa-spin" : ""}
              />
              <span>Banner Değiştir</span>
            </button>
            {user.banner && (
              <button
                className="remove-banner"
                onClick={handleRemoveBanner}
                disabled={isUploadingBanner}
              >
                <FontAwesomeIcon icon={faTrash} />
                <span>Banner'ı Kaldır</span>
              </button>
            )}
          </div>
          <input
            type="file"
            ref={bannerInputRef}
            onChange={handleBannerChange}
            accept="image/*"
            style={{ display: "none" }}
          />
          <div className="profile-avatar">
            {getDefaultAvatar()}
            <div className="avatar-actions">
              <button
                className={`change-avatar ${
                  isUploadingAvatar ? "uploading" : ""
                }`}
                onClick={handleAvatarClick}
                disabled={isUploadingAvatar}
              >
                <FontAwesomeIcon
                  icon={isUploadingAvatar ? faSpinner : faCamera}
                  className={isUploadingAvatar ? "fa-spin" : ""}
                />
              </button>
              {user.avatar && (
                <button
                  className="remove-avatar"
                  onClick={handleRemoveAvatar}
                  disabled={isUploadingAvatar}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <div className="info-header">
            <h1>{user.name}</h1>
            <button
              className="edit-button"
              onClick={() => setIsEditing(!isEditing)}
            >
              <FontAwesomeIcon icon={isEditing ? faSave : faEdit} />
              {isEditing ? "Kaydet" : "Düzenle"}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                <label>İsim</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Hakkımda</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@kullaniciadi"
                />
              </div>

              <div className="form-group">
                <label>Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="@kullaniciadi"
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Kaydet
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-details">
              <div className="detail-item">
                <h3>Hakkımda</h3>
                <p>{formData.bio || "Henüz bir biyografi eklenmemiş."}</p>
              </div>

              <div className="detail-item">
                <h3>İletişim</h3>
                <div className="social-links">
                  {formData.instagram && (
                    <a
                      href={`https://instagram.com/${formData.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  )}
                  {formData.twitter && (
                    <a
                      href={`https://twitter.com/${formData.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  )}
                  {formData.website && (
                    <a
                      href={formData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h3>Yarışma Katılımları</h3>
            <span className="stat-number">12</span>
          </div>
          <div className="stat-card">
            <h3>Kazanılan Ödüller</h3>
            <span className="stat-number">3</span>
          </div>
          <div className="stat-card">
            <h3>Toplam Puan</h3>
            <span className="stat-number">850</span>
          </div>
        </div>

        <div className="recent-photos">
          <h2>Son Fotoğraflar</h2>
          <div className="photo-grid">
            {/* Örnek fotoğraflar */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="photo-item">
                <img
                  src={`https://picsum.photos/400/300?random=${i}`}
                  alt={`Photo ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
