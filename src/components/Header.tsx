"use client";

import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const roboto = Roboto({ weight: "600", subsets: ["latin"] });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Logo en imagen (solo se muestra en pantallas md y mayores) */}
      <div className="hidden md:block">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo DFL Colors"
            width={320}
            height={105}
            priority
          />
        </Link>
      </div>

      <nav
        className={`
          ${roboto.className}
          text-[17px] text-[rgb(8,16,179)] font-semibold
        `}
      >
        {/* Contenedor principal para centrar el contenido */}
        <div className="w-full max-w-[1120px] mx-auto mt-[50px] mb-[50px] h-[46px] flex justify-between items-center">
          {/* Logo en texto (solo se muestra en móvil, es decir, < md) */}
          <div className="block md:hidden">
            <Link href="/" className="px-4">
              <Image
                src="/logo.png"
                alt="Logo DFL Colors"
                width={320}
                height={105}
                priority
              />
            </Link>
          </div>

          {/* Menú de escritorio: visible en md hacia arriba */}
          <ul className="hidden md:flex justify-center items-center list-none p-0 m-0">
            <li className="p-0 m-0">
              <Link href="/empresa" className="px-[50px] py-0">
                Quiénes somos
              </Link>
            </li>
            <li className="p-0 m-0">
              <Link href="/servicios" className="px-[50px] py-0">
                Servicios
              </Link>
            </li>
            <li className="p-0 m-0">
              <Link
                href="https://www.facebook.com/ficolopez63"
                className="px-[50px] py-0"
              >
                ¡Ofertas!
              </Link>
            </li>
            <li className="p-0 m-0">
              <Link href="/productos" className="px-[50px] py-0">
                Productos
              </Link>
            </li>
            <li className="p-0 m-0">
              <Link href="/contacto" className="px-[50px] py-0">
                Contacto
              </Link>
            </li>
          </ul>

          {/* Botón de hamburguesa: visible en móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil: visible cuando menuOpen es true */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center list-none p-0 m-0 bg-white">
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
      </nav>
    </header>
  );
}
