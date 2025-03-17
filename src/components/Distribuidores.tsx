import Image from "next/image";
import { Varela_Round, Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });
const varela_round = Varela_Round({ weight: "400", subsets: ["latin"] });

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
    <div>
      <div
        className="
        flex flex-col
        items-center
        mt-[128px]
        [box-shadow:0_0_5px_2px_rgba(0,0,0,0.5)]
      "
      >
        <h2
          style={{ fontWeight: 300 }}
          className={`
        ${varela_round.className}
        text-[45px]
        text-[rgb(8,16,179)]
        text-center
      `}
        >
          Distribuidores oficiales de primeras marcas de pintura:
        </h2>
        <p
          className={`
        ${montserrat.className}
        text-center
        text-[17px]
        leading-[24px]
        text-[rgb(26,26,26)]
        w-[1260px]
      `}
        >
          Y también, de nuestra marca propia DFL, que ha sido desarrollada por
          un grupo de profesionales a nivel internacional y ofrece una amplia
          gama de productos de calidad acordes a las necesidades actuales del
          mercado de la pintura.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem 20rem",
          }}
          className="
            
            mt-[80px]
            max-w-[1260px]
          "
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
                  width={360}
                  height={115}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "115px",
                    objectFit: "contain",
                  }}
                  className="
                    mb-[40px]
                  "
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
