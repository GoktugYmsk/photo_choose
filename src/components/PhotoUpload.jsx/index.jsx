import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const PhotoUpload = () => {
  const [preview, setPreview] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxSize: 5000000,
  });

  return (
    <div className="photo-upload">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Fotoğrafınızı buraya sürükleyin veya tıklayarak seçin</p>
      </div>

      {preview && (
        <div className="preview">
          <img src={preview} alt="Preview" />
        </div>
      )}

      <button className="submit-button">Yarışmaya Katıl</button>
    </div>
  );
};

export default PhotoUpload;
