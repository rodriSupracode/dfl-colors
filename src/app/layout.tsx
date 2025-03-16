import Link from "next/link";
import Image from "next/image"; // 👈 Importamos el componente Image de Next.js
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DFL Colors",
  description:
    "Especialistas en productos para la pintura automotriz profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">
        <Header />

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
