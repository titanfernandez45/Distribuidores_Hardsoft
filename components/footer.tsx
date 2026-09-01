import Link from "next/link";

export default function Footer() {
    const year= new Date().getFullYear();
    return(

        <footer className="bg-[var(--bg-header)] border-t border-[var(--border-subtle)] text-[var(--text-muted)] py-8 mt-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/*columna 1 : empresa*/}

                <div>
                    <h3 className="text-white font-bold text-lg mb-2 ">HARDSOFT SOLUCIONES</h3>
                    <p className="text-sm">
                    Distribuidor oficial y especializado en software administrativo y contable.
                    Ayudamos a modernizar y proteger el ecosistema digital de tu empresa.
                    </p>
                </div>

                {/*columna 2 : contacto*/}
                <div>
                    <h4 className="text-white font-semibold text-lg mb-2 ">CONTACTO &amp; SOPORTE</h4>
                    <ul className="text-sm space-y-1">
                        <li> Numero profe nava</li>
                        <li> Email: </li>
                        </ul>
                </div>

                {/* COPYRIGHT */}
                <div className="md:col-span-3 text-center text-sm">
                    <p>&copy; {year} HARDSOFT SOLUCIONES. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}