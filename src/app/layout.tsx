import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css"; // Asegúrate de que este archivo existe y contiene las directivas de Tailwind

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
        <div className="w-full">
          <Header />
        </div>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
