import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[var(--bg-header)] border-b border-[var(--border-subtle)] p-4">
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white">
        HARDSOFT <span className="text-[var(--accent-action)]">SOLUCIONES</span>
      </Link>

      {/* Navigation */}
      

      <nav className="hidden md:flex space-x-6 text-[var(--text-primary)]">
<Link href="/" className="hover:text-[var(--accent-action)] transition">Inicio</Link>
<Link href="/servicios" className="hover:text-[var(--accent-action)] transition">Licencias</Link>
<Link href="/contacto" className="hover:text-[var(--accent-action)] transition">Contacto</Link>
        </nav>

        <Link href="/contacto" className="bg-[var(--accent-action)] text-white px-4 py-2 rounded-md hover:bg-[var(--accent-action-hover)] hover:text-[var(--bg-main)] transition">WHATSAPP </Link>
        </div>
    </header>
    );
}