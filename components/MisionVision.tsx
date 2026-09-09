// components/MisionVision.tsx
export default function MisionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Misión */}
      <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-lg border border-[var(--border-subtle)]">
        <h3 className="text-xl font-bold text-white mb-2">Misión</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Proveer soluciones integrales de tecnología, software empresarial y soporte informático a personas 
          y empresas de la región central del país, garantizando la continuidad operativa de sus negocios
           mediante la implementación eficiente de sistemas CONTPAQi, la optimización de su infraestructura 
           de hardware y una atención técnica oportuna y personalizada.
        </p>
      </div>

      {/* Visión */}
      <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-lg border border-[var(--border-subtle)]">
        <h3 className="text-xl font-bold text-white mb-2">Visión</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Ser el distribuidor de tecnología y software contable-administrativo de referencia
           en Tlaxcala, Estado de México e Hidalgo, reconocidos por la excelencia técnica en soporte
            de hardware y software, impulsando la digitalización y el crecimiento de las Micro, 
            Pequeñas y Medianas Empresas de la región
        </p>
      </div>
    </div>
  );
}