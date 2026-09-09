// components/Caracteristicas.tsx
interface CaracteristicasProps {
  caracteristicas: string[];
}

export default function Caracteristicas({ caracteristicas }: CaracteristicasProps) {
  return (
    <section className="section bordered py-12 px-4 border-b border-[var(--border-subtle)]">
      <div className="container mx-auto max-w-4xl">
        <span className="label text-[var(--text-muted)] text-sm uppercase tracking-wider">Qué incluye</span>
        <h2 className="section-title text-3xl font-bold text-white mt-2 mb-6">Características principales</h2>
        <ul className="features grid grid-cols-1 md:grid-cols-2 gap-3">
          {caracteristicas.map((c, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="tick text-[var(--accent-action)] text-xl">✓</span>
              <span className="text-[var(--text-primary)]">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}