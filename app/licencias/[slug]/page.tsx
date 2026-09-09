// app/licencias/[slug]/page.tsx

import { notFound } from 'next/navigation';
import DemoBar from '@/components/DemoBar';
import ProductoHeader from '@/components/ProductoHeader';
import Caracteristicas from '@/components/Caracteristicas';
import ProductosConectados from '@/components/ProductosConectados';
import { PRODUCTOS } from '@/data/productos';

type Props = {
  params: Promise<{ slug: string }>;
};

// Genera las rutas /licencias/contabilidad, etc. durante el build
export function generateStaticParams() {
  return Object.keys(PRODUCTOS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const p = PRODUCTOS[slug as keyof typeof PRODUCTOS];

  if (!p) {
    return {
      title: 'Producto no encontrado - HardSoft Soluciones',
    };
  }

  return {
    title: `${p.nombre} - HardSoft Soluciones`,
    description: p.descripcion,
  };
}

export default async function LicenciaPage({ params }: Props) {
  const { slug } = await params;

  const p = PRODUCTOS[slug as keyof typeof PRODUCTOS];

  if (!p) {
    notFound();
  }

  const waTexto = encodeURIComponent(
    `Hola, quiero cotizar la licencia de COMPAQi ${p.nombre}`
  );

  const waUrl = `https://wa.me/5210000000000?text=${waTexto}`;

  return (
    <>
      

      <main id="main">
        <DemoBar slugActual={slug} />

        <ProductoHeader
          folio={p.folio}
          nombre={p.nombre}
          tagline={p.tagline}
          descripcion={p.descripcion}
        />

        <Caracteristicas
          caracteristicas={p.caracteristicas}
        />

        <ProductosConectados
          conecta={p.conecta}
        />

        <section className="section bordered">
          <div className="wrap">
            <div className="cta-band">
              
              <div className="cta-left">
                
                <svg
                  className="stampmini"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />

                  <text
                    x="50"
                    y="56"
                    fontFamily="Fraunces, serif"
                    fontSize="26"
                    fontWeight="600"
                    fill="#fff"
                    textAnchor="middle"
                  >
                    HS
                  </text>
                </svg>

                <div>
                  <h3>
                    Cotiza tu licencia de {p.nombre}
                  </h3>

                  <p>
                    Un asesor de HardSoft te ayuda a definir usuarios,
                    empresas y el plan que más te conviene.
                  </p>
                </div>

              </div>

              <a
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                href={waUrl}
              >
                Cotizar por WhatsApp →
              </a>

            </div>
          </div>
        </section>
      </main>

     
    </>
  );
}