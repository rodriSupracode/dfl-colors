import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css"; // Asegúrate de que este archivo existe y contiene las directivas de Tailwind
import { App } from "./App";

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
      <body>
        <App>
          <Header />

          <main>{children}</main>

          <footer />
        </App>
      </body>
    </html>
  );
}
