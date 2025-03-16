import Image from "next/image";
import { Varela_Round } from "next/font/google";
import { Roboto } from "next/font/google";

const varela_round = Varela_Round({
  weight: "400", // Regular
  subsets: ["latin"], // Soporte para caracteres latinos
});

const roboto = Roboto({
  weight: "500", // Regular
  subsets: ["latin"], // Soporte para caracteres latinos
});

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
          <div className="flex flex-wrap gap-4">
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
              <div key={index} className="text-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={158}
                  height={158}
                  className="
                  outline outline-3 outline-gray-300          
                  rounded-full 
                  object-cover
                  p-0 m-0 mx-[12px] mb-[20px]
                "
                />
                <a
                  href={item.link}
                  className={`
                  ${roboto.className}
                  text-[15px] 
                  font-medium 
                  leading-[15px] 
                  text-white 
                  bg-[rgb(8,16,179)]
                  max-w-[159px] 
                  inline-block 
                  text-center 
                  p-0 m-0 p-[12px_23px] 
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
            className="
          font-montserrat
          text-[27px]
          font-medium
          leading-[27px]
          text-[rgb(223,42,53)]
          text-center
          bg-transparent
          h-[28px]
          w-[130px] 
          inline-block
          p-0
          transition-all duration-300
        "
          >
            Ver todos
          </a>
        </div>
      </div>
    </div>
  );
}
