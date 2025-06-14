import Link from "next/link";
import ImgCustom from "./ImgCustom";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div
        className="flex 
                   flex-col md:flex-row
                   items-center md:items-start
                   md:justify-around
                   w-full max-w-6xl 
                   mx-auto 
                   px-2"
      >
        {/* Sección izquierda: Datos de contacto y logo */}
        <div
          className="bg-white text-black rounded-xl  
                     w-full md:w-auto
                     m-2 
                     p-4"
        >
          <Link href="/">
            <div className="w-40">
              <ImgCustom
                src="/images/logo.png"
                alt="Logo DFL Colors"
                className="w-full mb-2"
              />
            </div>
          </Link>
          <h2 className="text-2xl font-bold m-2">DFL Colors</h2>
          <hr />
          <div className="flex items-center m-1">
            <span className="m-2">📍</span>
            <p>
              Polígono Industrial Poligran, PARCELA 45J, Peligros, GRANADA,
              18210
            </p>
          </div>
          <div className="flex items-center m-1">
            <span className="m-2">📞</span>
            <p>+34 650 04 07 07</p>
          </div>
          <div className="flex items-center m-1">
            <span className="m-2">✉️</span>
            <a
              href="mailto:info@dflcolors.com"
              className="text-yellow-400 hover:underline"
            >
              info@dflcolors.com
            </a>
          </div>
        </div>
        {/* Sección central y derecha: Enlaces de navegación y redes sociales */}
        <div
          className="flex 
                     flex-1 md:flex-none
                     flex-col md:flex-row 
                     justify-between md:justify-start 
                     md:items-start 
                     w-full md:w-auto"
        >
          {/* Sección central: Enlaces de navegación */}
          <div className="w-full md:w-auto px-4 mt-10">
            <h3 className="text-xl font-bold mb-2">Explora</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/categorias" className="hover:underline">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/destacados" className="hover:underline">
                  Destacados
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="hover:underline">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección derecha: Redes sociales y Newsletter */}
          <div className="w-full md:w-auto px-4 mt-10 md:ml-10">
            <h3 className="text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ficolopez63"
                className="hover:underline"
              >
                Facebook
              </a>
            </div>
            <h3 className="text-xl font-bold mb-4 mt-10">Suscríbete</h3>
            <form className="flex flex-col gap-2 max-w-xs mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="rounded-md text-black w-full h-10"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full h-10"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sección inferior: Copyright y enlaces legales */}
      <div className="bg-blue-800 text-white mt-10 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4">
          <p>
            © 2025 DFL Colors - Granada - CIF: B-12345678 - Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 mt-2 lg:mt-0">
            <Link href="/privacidad" className="hover:underline">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="hover:underline">
              Política de cookies
            </Link>
            <Link href="/legal" className="hover:underline">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
