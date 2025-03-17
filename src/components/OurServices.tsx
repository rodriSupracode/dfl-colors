import Image from "next/image";
import { Varela_Round, Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });
const varela_round = Varela_Round({ weight: "400", subsets: ["latin"] });

export default function OurServices() {
  return (
    <div
      className="
        flex flex-col 
        items-center
        justify-center
        mt-[100px]
        "
    >
      <div
        className="
        
        w-[1260px]
        flex flex-row
        "
      >
        <div
          className="
          
            flex items-center
            "
        >
          <Image
            className="
                object-cover 
                [border-radius:100px_100px_300px_128px]
                h-[380px] w-[580px]
                ml-[100px]
            "
            src="/images/repair-and-painting-car-mechanic-worker-painting-car-1536x1024.jpeg"
            alt="Pintura coche DFL"
            width={580}
            height={380}
          />
        </div>
        <section
          className="
          flex flex-col
          pt-[20px] pl-[60px] ml-[110px]
        "
        >
          <h3
            className={`
            ${montserrat.className}
            text-[20px] 
            leading-[20px] 
            p-0 m-0
          `}
          >
            NUESTROS SERVICIOS
          </h3>

          <div
            className="
            max-w-[630px]
          "
          >
            <h2
              className={`
              ${varela_round.className} 
              text-[45px] 
              leading-[54px]
              font-bold
              text-[rgb(8,16,179)]
              mt-[30px] mb-[30px]
            `}
              style={{ fontWeight: 300 }}
            >
              Encontramos la mejor solución adaptada a tus necesidades
            </h2>
            <div
              className={`
                ${montserrat.className}
                leading-[28px]
                text-[20px]
                w-[540px]
                `}
            >
              <p className="mb-[30px]">
                Te asesoramos sobre nuestros productos y aplicaciones.
              </p>
              <p className="mb-[30px]">
                Además, si necesitas ayuda para crear o cambiar los filtros de
                tu cabina de pintura,{" "}
                <strong style={{ fontWeight: 700 }}>
                  hacemos presupuesto adaptado a tus instalaciones ¡gratis!
                </strong>
              </p>
            </div>
            <div className="mt-[60px] mb-[60px]">
              <a
                href="https://dflcolors.com/servicios/"
                style={{ fontWeight: 500 }}
                className={`
                ${montserrat.className}
                flex items-center justify-center
                [background-color:rgb(223,42,53)] text-white
                py-2 px-6 rounded-full 
                hover:bg-yellow-900 transition-all
                h-[45px] w-[201px]
                
                `}
              >
                VER SERVICIOS 🡲
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
