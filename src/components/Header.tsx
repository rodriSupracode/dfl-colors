"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ImgCustom from "./ImgCustom";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div className="max-w-[320px] ml-6 mt-6 mr-3 mb-6">
          <Link href="/">
            <ImgCustom src="/images/logo.png" alt="Logo DFL Colors" />
          </Link>
        </div>
        <nav
          className={`${roboto.className} text-blue-800 flex flex-col justify-end`}
        >
          <div className="h-full flex justify-center md:flex-col md:justify-end">
            {/* Menú para pantalla mayores de md */}
            <ul className="hidden md:flex justify-evenly items-center list-none">
              <li className="my-7 mx-10 whitespace-nowrap font-semibold text-lg">
                <Link href="/empresa">Quiénes somos</Link>
              </li>
              <li className="my-7 mx-10 whitespace-nowrap font-semibold text-lg">
                <Link href="/servicios">Servicios</Link>
              </li>
              <li className="my-7 mx-10 whitespace-nowrap font-semibold text-lg">
                <Link href="https://www.facebook.com/ficolopez63">
                  ¡Ofertas!
                </Link>
              </li>
              <li className="my-7 mx-10 whitespace-nowrap font-semibold text-lg">
                <Link href="/productos">Productos</Link>
              </li>
              <li className="my-7 mx-10 whitespace-nowrap font-semibold text-lg">
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>

            {/* Menú para pantalla menores de md */}
            {
              <div className="flex md:hidden mt-6 mr-6 mb-6 ml-3">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? (
                    <FiX className="text-5xl" />
                  ) : (
                    <FiMenu className="text-5xl" />
                  )}
                </button>
              </div>
            }
          </div>
        </nav>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center list-none text-blue-800">
          <li className="w-full border-t border-gray-200">
            <Link href="/empresa" className="block py-4 text-center">
              Quiénes somos
            </Link>
          </li>
          <li className="w-full border-t border-gray-200">
            <Link href="/servicios" className="block py-4 text-center">
              Servicios
            </Link>
          </li>
          <li className="w-full border-t border-gray-200">
            <Link
              href="https://www.facebook.com/ficolopez63"
              className="block py-4 text-center"
            >
              ¡Ofertas!
            </Link>
          </li>
          <li className="w-full border-t border-gray-200">
            <Link href="/productos" className="block py-4 text-center">
              Productos
            </Link>
          </li>
          <li className="w-full border-t border-b border-gray-200">
            <Link href="/contacto" className="block py-4 text-center">
              Contacto
            </Link>
          </li>
        </ul>
      )}
      <hr />
    </header>
  );
}
