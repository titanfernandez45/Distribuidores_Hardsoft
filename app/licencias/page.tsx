// app/licencias/page.tsx
import Link from 'next/link';
import { PRODUCTOS } from '@/data/productos';

export const metadata = {
  title: 'Licencias - HardSoft Soluciones',
  description: 'Conoce todas las licencias y módulos de COMPAQi disponibles en HardSoft Soluciones.',
};

export default function LicenciasIndexPage() {
  const productos = Object.entries(PRODUCTOS);

  return (
    <>
    
      <main id="main">
        <section className="section bordered">
          <div className="wrap">
            <h1 className="text-3xl font-bold text-white mb-2">Nuestras licencias</h1>
            <p className="text-[var(--text-secondary)] mb-8">
              Elige el módulo que necesitas para tu empresa. Puedes combinar varios y conectarlos entre sí.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map(([slug, p]) => (
                <Link
                  key={slug}
                  href={`/licencias/${slug}`}
                  className="block rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-header)] p-6 hover:border-[var(--accent-action)] transition"
                >
                  <span className="text-xs text-[var(--accent-action)] font-mono">
                    #{p.folio}
                  </span>
                  <h2 className="text-xl font-semibold text-white mt-1 mb-2">
                    {p.nombre}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {p.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}