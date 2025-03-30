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
    <header className="flex flex-col">
      <div className="flex flex-row justify-center mb-3 lg:mb-6">
        <div className="pl-3 lg:pl-6 pt-3 lg:pt-6 pr-3 lg:pr-6">
          <Link href="/">
            <ImgCustom
              src="/images/logo.png"
              alt="Logo DFL Colors"
              className="max-w-48 lg:max-w-80"
            />
          </Link>
        </div>

        <nav className="text-blue-800 flex flex-col justify-end">
          {/* Menú para pantallas mayores de lg */}
          <ul className="hidden lg:flex justify-end list-none gap-x-10 mx-10">
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
                <FiShoppingCart className="text-3xl" />
              </Link>
              {/* Contador de artículos */}
              <div
                className={`absolute bottom-[-7px] right-[-7px] w-5 h-5 rounded-full flex items-center justify-center 
      ${cartItemCount > 0 ? "bg-red-500" : "bg-gray-400"} 
      text-white text-xs font-bold`}
              >
                {cartItemCount}
              </div>
            </div>
          </ul>

          {/* Menú para pantalla menores de lg */}
          <div className="flex lg:hidden mr-6 ml-3 mb-3">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="text-4xl" />
              ) : (
                <FiMenu className="text-4xl" />
              )}
            </button>
            <div className="relative">
              <Link
                href="/carrito"
                className="transition-colors duration-300 hover:text-[#DF2A35]"
              >
                <FiShoppingCart className="text-4xl ml-4" />
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
