import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import { Varela_Round } from "next/font/google";

const montserrat = Montserrat({
  weight: "500", // Regular
  subsets: ["latin"], // Soporte para caracteres latinos
});

const roboto = Roboto({
  weight: "600", // Regular
  subsets: ["latin"], // Soporte para caracteres latinos
});

const varela_round = Varela_Round({
  weight: "400", // Regular
  subsets: ["latin"], // Soporte para caracteres latinos
});

export default function Wellcome() {
  return (
    <div
      className="
      relative
      flex flex-col 
      items-center 
      min-h-screen
      [background-image:linear-gradient(to_right,#02319b,#00cef6)]"
    >
      <svg
        className="
          w-[300%] 
          h-[131px] 
        "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-[white]"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
      <div
        className="
            w-[1260px]
            p-0 m-0
          "
      >
        <h3
          className={`
            ${roboto.className}
            text-[29px] 
            leading-[29px] 
            text-white 
            box-border
            p-0 m-0 pl-[14px] -mt-[5px]
          `}
        >
          ¿Buscas pintura, productos o equipos para repintar coches?
        </h3>
        <section
          className="
          flex flex-row
          p-0 m-0 mt-[30px]
        "
        >
          <div
            className="
            max-w-[630px]
          "
          >
            <h1
              className={`
              ${varela_round.className} 
              text-[55px] 
              leading-[66px]
              font-bold
              text-[rgb(239,237,67)]
              p-0 m-0 pl-[10px]
            `}
              style={{ fontWeight: 600 }}
            >
              Tu empresa de pintura para automóvil y vehículo industrial
            </h1>
            <h3
              className={`
              leading-[36px]
              text-[20px]
              text-white
              ${montserrat.className}
              p-0 m-0 pl-[10px] mt-[20px] pr-[11px]
            `}
            >
              DFL es una empresa dedicada a asesorar y suministrar equipos y
              productos al sector del automóvil y vehículo industrial. <br />
              Desde pintura, equipos, productos de limpieza o de
              mantenimiento,... en DFL puedes encontrar tanto productos propios
              como de primeras marcas, TODO lo que necesitas en relación a la
              reparación y repintado de vehículos. Nuestros servicios están
              dirigidos exclusivamente a profesionales.
            </h3>
          </div>
          <div
            className="
            min-w-[610px] min-h-[500px]
            p-0 m-0 pt-[10px] pl-[10px] pr-[10px]
          "
          >
            <Image
              className="
              w-full h-full 
              object-cover 
              [border-radius:300px_128px_100px_100px]"
              src="/pintura-coche-dfl-granada-6-1024x768.jpg"
              alt="Pintura coche DFL"
              width={630}
              height={500}
            />
          </div>
        </section>
      </div>

      <svg
        className="
          w-[300%] 
          h-[131px]
          rotate-180
          absolute bottom-0
        "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-[white]"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>
  );
}
