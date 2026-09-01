import Link from "next/link";

interface TarjetaProductoProps{

    titulo: string;
    description: string;
    enlace: string;
}

export default function TarjetaProducto({titulo, description, enlace}: TarjetaProductoProps) {
    return(
       <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-lg border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition">
<h3 className="text-xl font-bold text-white">{titulo}</h3>
      <p className="mt-2 text-[var(--text-muted)] text-sm">{description}</p>
      <Link
        href={enlace}
        className="mt-4 inline-block text-[var(--accent-action)] font-semibold hover:text-[var(--accent-hover)] transition">
        Ver detalles →
      </Link>

        </div>
    );
}