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
