// components/DemoBar.tsx
'use client';

import { useRouter } from 'next/navigation';
import { PRODUCTOS } from '@/data/productos';

interface DemoBarProps {
  slugActual: string;
}

export default function DemoBar({ slugActual }: DemoBarProps) {
  const router = useRouter();
  const productKeys = Object.keys(PRODUCTOS) as Array<keyof typeof PRODUCTOS>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    router.push(`/licencias/${slug}`);
  };

  return (
    <div className="demo-bar bg-[var(--bg-card)] border-b border-[var(--border-subtle)] py-2 px-4">
      <div className="container mx-auto flex items-center gap-4">
        <label htmlFor="demoSelect" className="text-[var(--text-muted)] text-sm">
          Vista previa — cambiar producto:
        </label>
        <select
          id="demoSelect"
          value={slugActual}
          onChange={handleChange}
          className="bg-[var(--bg-main)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded px-3 py-1"
        >
          {productKeys.map((slug) => (
            <option key={slug} value={slug}>
              Folio {PRODUCTOS[slug].folio} — {PRODUCTOS[slug].nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}