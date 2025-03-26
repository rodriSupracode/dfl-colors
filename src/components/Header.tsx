"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import ImgCustom from "./ImgCustom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount] = useState(0);

  const menuItems = [
    { href: "/categorias", label: "Categorías" },
    { href: "/destacados", label: "Destacados" },
    { href: "https://www.facebook.com/ficolopez63", label: "¡Ofertas!" },
    { href: "/empresa", label: "Sobre nosotros" },
  ];

  return (
    <header className="w-full flex flex-col justify-center">
      <div className="flex flex-row justify-center mb-6">
        <div className="ml-6 mt-6 mr-3  max-w-xs min-w-3xs">
          <Link href="/">
            <ImgCustom
              src="/images/logo.png"
              alt="Logo DFL Colors"
              className="max-w-xs min-w-3xs"
            />
          </Link>
        </div>
        <nav className="text-blue-800 flex flex-col justify-end">
          <div className="h-full flex items-end justify-center lg:justify-end">
            {/* Menú para pantallas mayores de lg */}
            <ul className="hidden lg:flex lg:justify-center lg:items-center list-none gap-x-10 px-4">
              {menuItems.map(({ href, label }) => (
                <li
                  key={href}
                  className="whitespace-nowrap font-semibold text-lg"
                >
                  <Link
                    href={href}
                    className="transition-colors duration-300 hover:text-[#DF2A35]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <div className="relative">
                <Link
                  href="/carrito"
                  className="transition-colors duration-300 hover:text-[#DF2A35]"
                >
                  <FiShoppingCart className="text-2xl" />
                </Link>
                {/* Contador de artículos */}
                <div
                  className={`absolute bottom-[-6px] right-[-10px] w-4 h-4 rounded-full flex items-center justify-center 
      ${cartItemCount > 0 ? "bg-red-500" : "bg-gray-400"} 
      text-white text-xs font-bold`}
                >
                  {cartItemCount}
                </div>
              </div>
            </ul>

            {/* Menú para pantalla menores de lg */}
            <div className="flex lg:hidden mt-6 mr-6 mb-6 ml-3">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <FiX className="text-5xl" />
                ) : (
                  <FiMenu className="text-5xl" />
                )}
              </button>
              <div className="relative">
                <Link
                  href="/carrito"
                  className="transition-colors duration-300 hover:text-[#DF2A35]"
                >
                  <FiShoppingCart className="text-5xl ml-5" />
                </Link>

                {/* Contador de artículos */}
                <div
                  className={`absolute bottom-[-8px] right-[-8px] w-6 h-6 rounded-full flex items-center justify-center 
        ${cartItemCount > 0 ? "bg-red-500" : "bg-gray-400"} 
        text-white text-xs font-bold`}
                >
                  {cartItemCount}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center list-none text-blue-800">
          {menuItems.map(({ href, label }, index) => (
            <li
              key={href}
              className={`w-full border-t ${
                index === menuItems.length - 1 ? "border-b" : ""
              } border-gray-200`}
            >
              <Link href={href} className="block py-4 text-center">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </header>
  );
}
