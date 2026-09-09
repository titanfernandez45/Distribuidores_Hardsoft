// components/LicenciasSection.tsx
import TarjetaProducto from './TarjetaProducto';

export default function LicenciasSection() {
  const licencias = [
    {
      titulo: 'CONTPAQi Contabilidad',
      description: 'El sistema contable favorito de los contadores que facilita la captura de pólizas, la conciliación bancaria y la presentación de obligaciones fiscales.',
      icono: 'images/conta_logo.png',
      enlace: '/licencias/contabilidad',
    },
    {
      titulo: 'CONTPAQi Nóminas',
      description: 'Administra el cálculo preciso de sueldos, igualados y finiquitos. Emite CFDI de nómina cumpliendo al 100% con la legislación laboral.',
      icono: 'images/nominas_logo.png',
      enlace: '/licencias/nominas',
    },
    {
      titulo: 'CONTPAQi Comercial',
      description: 'Controla inventarios, ventas, compras y cuentas por cobrar. La herramienta definitiva para automatizar tu ciclo comercial completo.',
      icono: 'images/comercial_premium.png',
      enlace: '/licencias/comercial',
    },
    {
      titulo: 'CONTPAQi Facturación',
      description: 'Emite facturas electrónicas, notas de crédito y recibos de pago en segundos de forma segura e ilimitada bajo las normas del SAT.',
      icono: 'images/facturacion.png',
      enlace: '/licencias/facturacion',
    },
  ];

  return (
    <section id="licencias" className="py-16 px-4 bg-[var(--bg-main)]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-2">LA MÁS VENDIDAS</h2>
        <p className="text-center text-[var(--text-muted)] mb-12">Soluciones CONTPAQi para tu Negocio</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licencias.map((lic, index) => (
            <TarjetaProducto key={index} {...lic} />
          ))}
        </div>
      </div>
    </section>
  );
}