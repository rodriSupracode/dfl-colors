import Image from "next/image";
import Distribuidores from "@/components/Distribuidores";

export default function EmpresaPage() {
  return (
    <div>
      <h1>Nuestra historia</h1>
      <section>
        <div>
          <div>
            <p>
              DFL es una empresa dedicada a asesorar y suministrar equipos y
              productos al sector del automóvil y vehículo industrial. Desde
              pintura, equipos, productos de limpieza o de mantenimiento, … en
              DFL puedes encontrar tanto productos propios como de primeras
              marcas, TODO lo que necesitas en relación a la reparación y
              repintado de vehículos.
            </p>
          </div>
          <div>
            <Image
              src="/images/pintura-coche-dfl-granada-2-600x700.jpg"
              alt="Historia de DFL"
              width={716}
              height={835}
              priority
            />
          </div>
        </div>
      </section>
      <div>
        <h2>Distribuidores oficiales de primeras marcas de pintura:</h2>
        <p>
          Y también, de nuestra marca propia <strong>DFL</strong>, que ha sido
          desarrollada por un grupo de profesionales a nivel internacional y
          ofrece una amplia gama de productos de calidad acordes a las
          necesidades actuales del mercado de la pintura.
        </p>
        <div>
          <Distribuidores />
        </div>
      </div>
      <div>
        <h2>DFL COLORS</h2>

        <section>
          <div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <p>Polígono Industrial Poligrán, Parcela 45J</p>
              <p>Peligros, GRANADA, 18210</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <p>+34 650 04 07 07</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <i className="far fa-envelope"></i>
            </div>
            <div>
              <p>info@dflcolors.com</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=dfl%20colors&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
              title="DFL Colors"
              aria-label="DFL Colors"
              width="100%"
              height="400"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
