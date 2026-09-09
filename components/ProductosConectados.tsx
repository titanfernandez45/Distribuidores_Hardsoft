import Link from 'next/link';
import { PRODUCTOS, NOMBRE_TAG } from '@/data/productos';

type Props = {
  conecta: string[];
};

export default function ProductosConectados({ conecta }: Props) {
  return (
    <section className="section bordered">
      <div className="wrap">
        <span className="label">Recomendado</span>

        <h2 className="section-title">
          Se conecta bien con
        </h2>

        <div className="conecta-grid">
          {conecta.map((slugRel) => {
            const rel =
              PRODUCTOS[slugRel as keyof typeof PRODUCTOS];

            return (
              <Link
                key={slugRel}
                className="conecta-card"
                href={`/licencias/${slugRel}`}
              >
                <span className="folio">
                  Folio {rel ? rel.folio : '—'}
                </span>

                <strong>
                  {NOMBRE_TAG[
                    slugRel as keyof typeof NOMBRE_TAG
                  ] || slugRel}
                </strong>

                <span className="tag">
                  Ver ficha →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}