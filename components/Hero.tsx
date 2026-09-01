import Link from "next/link";

export default function Hero() {
    return(
        <section className="py-16 px-4 text-center bg-[var(--bg-main)] border-b border-[var(--border-subtle)]">

            <h1 className="text-4xl md:text-5xl font-bold text-white ">Simplifica la gestión de tu empresa con el software líder en México</h1>

            <p className=" text-4 text-lg text-[var(--text-muted)] max-w-2x1 mx-auto">
               Obtén licenciamiento oficial, actualizaciones y soporte técnico especializado 
               para optimizar tu contabilidad , nómina y facturación electrónica.
            </p>
            <div className=" mt-8 flex flex-wrap justify-center gap-4 ">
            <Link href="#licencias" className="bg-[var(--accent-action)] text-white px-6 py-3 rounded font-semibold hover:bg-[var(--accent-hover)] hover:text-[var(--bg-main)] transition">
            CATALOGO DE LICENCIAS
            </Link>
            <Link href="/contacto" className="bg-[var(--accent-action)] text-white px-6 py-3 rounded font-semibold hover:bg-[var(--accent-hover)] hover:text-[var(--bg-main)] transition">

            COTIZACION POR WHATSAPP
            </Link>
            </div>
        </section>

    );
}