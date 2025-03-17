import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "600", subsets: ["latin"] });

export default function Header() {
  return (
    <header
      className="
            flex flex-col 
            items-center 
            text-center 
            mt-[40px]
            pb-[10px]
          "
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo DFL Colors"
          width={320}
          height={105}
          priority
        />
      </Link>
      <nav
        className={`
            h-[46px] w-[1120px]
            p-0 m-0 mt-[50px]
            ${roboto.className}
            text-[17px]
            text-[rgb(8,16,179)]   
            font-semibold
          `}
      >
        <ul
          className="
          flex justify-center items-center
          h-full
          list-none p-0 m-0
        "
        >
          <li className="p-0 m-0">
            <Link className="px-[50px] py-[0px] m-0" href="/empresa">
              Quiénes somos
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link className="px-[50px] py-[0px] m-0" href="/servicios">
              Servicios
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link
              className="px-[50px] py-[0px] m-0"
              href="https://www.facebook.com/ficolopez63"
            >
              ¡Ofertas!
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link className="px-[50px] py-[0px] m-0" href="/productos">
              Productos
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link className="px-[50px] py-[0px] m-0" href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
