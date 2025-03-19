import React from "react";

interface ImgCustomProps {
  src: string;
  alt: string;
}

const ImgCustom: React.FC<ImgCustomProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "auto", height: "auto", maxWidth: "100%" }}
    />
  );
};

export default ImgCustom;
