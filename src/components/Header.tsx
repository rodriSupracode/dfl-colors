"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ImgCustom from "./ImgCustom";
import { Menu } from "./Menu";
import { Shopping } from "./Shopping";
import { NavItem } from "./NavItem";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "/categorias", label: "Categorías" },
    { href: "/destacados", label: "Destacados" },
    { href: "https://www.facebook.com/ficolopez63", label: "¡Ofertas!" },
    { href: "/empresa", label: "Sobre nosotros" },
  ];

  return (
    <header className="text-blue-800">
      <div className="flex  flex-1 flex-row items-center justify-between px-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block"
        >
          {menuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>

        <Link href="/">
          <div className="min-w-40 w-40">
            <ImgCustom
              src="/images/logo.png"
              alt="Logo DFL Colors"
              className="w-full p-4"
            />
          </div>
        </Link>

        {/* Menú para pantallas mayores de lg */}
        <ul className="hidden md:flex  list-none gap-x-10 mx-10">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <NavItem href={href} label={label} />
            </li>
          ))}
        </ul>

        {/* Menú para pantalla menores de lg */}

        <Shopping />
      </div>
      {menuOpen && <Menu menuItems={menuItems} />}
      <hr />
    </header>
  );
}
