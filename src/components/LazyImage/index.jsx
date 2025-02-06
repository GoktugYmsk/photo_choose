import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div
      className={`lazy-image-container ${!imageLoaded ? "loading" : ""} ${
        className || ""
      }`}
    >
      {imageSrc && (
        <img src={imageSrc} alt={alt} className={imageLoaded ? "loaded" : ""} />
      )}
    </div>
  );
};

export default LazyImage;
