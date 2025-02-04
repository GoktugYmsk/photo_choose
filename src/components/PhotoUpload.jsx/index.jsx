import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faSpinner,
  faImage,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const PhotoUpload = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = [...e.dataTransfer.files];
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      alert(
        "Bazı dosyalar yüklenmedi. Lütfen sadece 5MB'dan küçük resim dosyaları seçin."
      );
    }

    const newPhotos = validFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      uploading: false,
    }));

    setSelectedPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (id) => {
    setSelectedPhotos((prev) => {
      const updated = prev.filter((photo) => photo.id !== id);
      // URL'leri temizle
      prev.forEach((photo) => {
        if (photo.id === id) {
          URL.revokeObjectURL(photo.preview);
        }
      });
      return updated;
    });
  };

  const handleUpload = async () => {
    if (selectedPhotos.length === 0) return;

    setIsUploading(true);
    try {
      // Burada API çağrısı yapılacak
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock yükleme
      alert("Fotoğraflar başarıyla yüklendi!");
      setSelectedPhotos([]);
    } catch (error) {
      alert("Fotoğraflar yüklenirken bir hata oluştu");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="photo-upload">
      <div className="upload-header">
        <h1>Fotoğraf Yükle</h1>
        <p>Yarışmaya katılmak için fotoğraflarınızı yükleyin</p>
      </div>

      <div
        className={`upload-area ${dragActive ? "drag-active" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="upload-content">
          <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
          <h3>Fotoğrafları buraya sürükleyin</h3>
          <p>veya</p>
          <button
            className="select-button"
            onClick={() => fileInputRef.current.click()}
          >
            Bilgisayardan Seç
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            multiple
            style={{ display: "none" }}
          />
          <p className="file-info">
            Maksimum dosya boyutu: 5MB
            <br />
            İzin verilen formatlar: JPG, PNG, GIF
          </p>
        </div>
      </div>

      {selectedPhotos.length > 0 && (
        <div className="selected-photos">
          <div className="photos-header">
            <h2>Seçilen Fotoğraflar ({selectedPhotos.length})</h2>
            <button
              className="upload-button"
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Yükleniyor...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                  Yükle
                </>
              )}
            </button>
          </div>

          <div className="photos-grid">
            {selectedPhotos.map((photo) => (
              <div key={photo.id} className="photo-item">
                <img src={photo.preview} alt="Preview" />
                <button
                  className="remove-button"
                  onClick={() => removePhoto(photo.id)}
                  disabled={isUploading}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
