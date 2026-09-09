import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[var(--bg-header)] border-b border-[var(--border-subtle)] p-4">
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden ring-1 ring-white/10">
          <Image
            src="/images/LOGO_HS.png"
            alt="Hardsoft Soluciones Logo"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <span>
          HARDSOFT <span className="text-[var(--accent-action)]">SOLUCIONES</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-[var(--text-primary)]">
        <Link href="/" className="hover:text-[var(--accent-action)] transition">Inicio</Link>
        <Link href="/licencias" className="hover:text-[var(--accent-action)] transition">Licencias</Link>
        <Link href="/contacto" className="hover:text-[var(--accent-action)] transition">Contacto</Link>
        <Link href="/nosotros" className="hover:text-[var(--accent-action)] transition">Nosotros</Link>
      </nav>

      <Link href="/contacto" className="bg-[var(--accent-action)] text-white px-4 py-2 rounded-md hover:bg-[var(--accent-action-hover)] hover:text-[var(--bg-main)] transition">
        WHATSAPP
      </Link>
      </div>
    </header>
    );
}