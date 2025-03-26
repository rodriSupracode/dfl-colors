import React from "react";

interface ImgCustomProps {
  src: string;
  alt: string;
  className: string;
}

const ImgCustom: React.FC<ImgCustomProps> = ({ src, alt, className = "" }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default ImgCustom;
