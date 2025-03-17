import Image from "next/image";
import { Varela_Round, Roboto, Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });
const roboto = Roboto({ weight: "600", subsets: ["latin"] });
const varela_round = Varela_Round({ weight: "400", subsets: ["latin"] });

export default function ProductList() {
  return (
    <div>
      <h2
        className={`
          ${varela_round.className}
        text-[45px]
        leading-[54px]
        text-[rgb(223,42,53)]
        text-center
        p-0 m-0 pt-[59px] mb-[40px]
      `}
        style={{ fontWeight: 600 }}
      >
        <a href="https://dflcolors.com/productos/">NUESTROS PRODUCTOS</a>
      </h2>
      <div className="flex flex-col items-center text-center">
        <section>
          <div
            className="flex flex-nowrap gap-4 overflow-x-auto"
            style={{
              marginLeft: "clamp(10px, 1vw, 15px)",
              marginRight: "clamp(10px, 1vw, 15px)",
            }}
          >
            {[
              {
                src: "/images/barnices-dfl.jpg",
                alt: "Pinturas",
                link: "https://dflcolors.com/categoria-producto/pinturas/",
              },
              {
                src: "/images/siroqo-productos.jpg",
                alt: "Abrasivos y auxiliares",
                link: "https://dflcolors.com/categoria-producto/abrasivos-y-auxiliares/",
              },
              {
                src: "/images/disolventes-dfl.jpg",
                alt: "Desengrasantes y disolventes",
                link: "https://dflcolors.com/categoria-producto/desengrasantes-y-disolventes/",
              },
              {
                src: "/images/maquinaria-y-equipos-1.jpg",
                alt: "Maquinaria y equipos",
                link: "https://dflcolors.com/categoria-producto/maquinaria-y-equipos/",
              },
              {
                src: "/images/materiales-fondo-dfl.jpg",
                alt: "Materiales de fondo",
                link: "https://dflcolors.com/categoria-producto/materiales-de-fondo/",
              },
              {
                src: "/images/nyox-limpieza.jpg",
                alt: "Productos de limpieza",
                link: "https://dflcolors.com/categoria-producto/productos-de-limpieza/",
              },
              {
                src: "/images/ternuaropa-768x768.jpg",
                alt: "Ropa de trabajo",
                link: "https://dflcolors.com/categoria-producto/ropa-de-trabajo/",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                
                text-center 
                min-w-[4px] max-w-[158px]
                p-0 m-1
              "
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={158}
                  height={158}
                  style={{
                    marginBottom: "clamp(1px, 1vw, 15px)",
                  }}
                  className="
                  border-4 border-gray-300
                  rounded-full
                  object-cover
                  p-0 m-0
                  w-full min-w-[4px] max-w-[158px] 
                  aspect-square
          "
                />

                <a
                  href={item.link}
                  style={{
                    fontSize: "clamp(1px, 1.18vw, 15px)",
                    lineHeight: "clamp(1px, 1.18vw, 15px)",
                    padding: "clamp(1px, 1vw, 12px) clamp(1px, 1vw, 23px)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  className={`
                  ${roboto.className}
                  bg-[rgb(8,16,179)]
                  inline-block
                  text-center
                  rounded-[3px]
                  transition-all duration-300
                `}
                >
                  {item.alt}
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4">
          <a
            href="https://dflcolors.com/productos/"
            className={`
          ${montserrat.className}
          text-[27px]
          font-medium
          leading-[27px]
          text-[rgb(223,42,53)]
          text-center
          bg-transparent
          h-[28px] 
          inline-block
          p-0 mt-[40px]
          transition-all duration-300
        `}
          >
            Ver todos 🡲
          </a>
        </div>
      </div>
    </div>
  );
}
