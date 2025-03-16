import Image from "next/image";

export default function BrandLogos() {
  const logos = [
    {
      src: "/images/franchi-kim-horizontal.jpg",
      alt: "Franchi Kim",
      link: "https://www.franchi-kim.it/es",
    },
    {
      src: "/images/dfl-horizontal.jpg",
      alt: "DFL",
      link: "https://dflcolors.com/categoria-producto/dfl/",
    },
    {
      src: "/images/abrastar.jpeg",
      alt: "Abrastar",
      link: "https://abrastar.com/es/",
    },
    {
      src: "/images/palinal-horizontal.jpg",
      alt: "Palinal",
      link: "https://www.palinal.com/",
    },
    {
      src: "/images/bosslack-horizontal.jpg",
      alt: "Bosslack",
      link: "http://bosslack.com/",
    },
    {
      src: "/images/custom-creative-horizontal.jpg",
      alt: "Custom Creative",
      link: "http://customcreative.es/",
    },
    {
      src: "/images/nyox-horizontal.jpg",
      alt: "Nyox",
      link: "http://www.nyox.net/",
    },
    {
      src: "/images/ZVGLOGOweb-768x408.jpg",
      alt: "ZVG",
      link: "https://www.zvg.es/",
    },
    {
      src: "/images/CAR-REPAIR-SYSTEM-logo.png",
      alt: "Car Repair System",
      link: "https://carrepairsystem.eu",
    },
    {
      src: "/images/TERNUA-WORKWEAR-LOGO.jpg",
      alt: "Ternua Workwear",
      link: "https://www.ternuaworkwear.com/",
    },
  ];

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={256}
              height={115}
              style={{
                maxWidth: "100%",
                maxHeight: "115px",
                objectFit: "contain",
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
