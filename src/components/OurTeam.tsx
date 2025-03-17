import Image from "next/image";
import { Varela_Round, Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });
const varela_round = Varela_Round({ weight: "400", subsets: ["latin"] });

export default function OurTeam() {
  return (
    <div>
      <div
        className={`
    flex justify-center items-center
    `}
      >
        <div
          className={`
        h-[360px] 
        w-[380px] 
        overflow-hidden
        transition-all 
        [border-radius:30px_30px_30px_30px]
        m-[15px]
        relative
        `}
        >
          <Image
            className="
            object-cover 
            h-[380px] w-[580px]
            transition-transform duration-[10s] ease-in-out 
            hover:scale-[10]
            "
            src="/images/empresa-dfl-color-granada-1.jpg"
            alt="Pintura coche DFL"
            width={580}
            height={380}
          />
          <div className="absolute bottom-0 ">
            <h2
              style={{ fontWeight: 300 }}
              className={`
            ${varela_round.className}
            text-[rgb(0,218,252)] 
            text-[20px]
            leading-[24px]
            text-center
            z-10
            `}
            >
              Federico López
            </h2>
            <div>CEO</div>
          </div>
        </div>
        <div
          className={`
        h-[360px] 
        w-[380px] 
        overflow-hidden
        transition-all 
        [border-radius:30px_30px_30px_30px]
        m-[15px]
        `}
        >
          <Image
            className="
            object-cover 
            h-[380px] w-[580px]
            transition-transform duration-[10s] ease-in-out 
            hover:scale-[10]
            
        "
            src="/images/necesidades-1024x683.jpeg"
            alt="Pintura coche DFL"
            width={580}
            height={380}
          />
          <div>
            <h2
              style={{ fontWeight: 300 }}
              className={`
            ${varela_round.className}
            text-[rgb(0,218,252)] 
            text-[20px]
            leading-[24px]
            text-center
            `}
            >
              Departamento pintura
            </h2>
          </div>
        </div>
        <div
          className={`
        border-4 border-red-500
        m-[15px]
        `}
        >
          <h3
            className={`
        ${montserrat.className}
        text-[20px]
        leading-[20px]
        
        `}
          >
            Especialistas en pintura
          </h3>
          <h2
            style={{ fontWeight: 300 }}
            className={`
        ${varela_round.className}
        text-[45px]
        leading-[54px]
        text-[rgb(8,16,179)]
        `}
          >
            NUESTRO EQUIPO
          </h2>
          <a
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
            CONOCENOS 🡲
          </a>
        </div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
}
