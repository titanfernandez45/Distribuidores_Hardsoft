// data/productos.js

export const PRODUCTOS = {
  contabilidad: {
    folio: "001",
    nombre: "Contabilidad",
    icono: "images/contabilidad.png",
    tagline: "Contabilidad electrónica, ordenada y a tiempo con el SAT.",
    descripcion: "Lleva pólizas, balanza y estados financieros de una o varias empresas, y genera los archivos de contabilidad electrónica que pide el SAT sin capturar todo a mano.",
    caracteristicas: [
      "Pólizas y balanza de comprobación automáticas",
      "Estados financieros bajo NIF",
      "Multiempresa y control de usuarios por permisos",
      "Reportes para el SAT: Anexo 24, DIOT y más",
      "Conciliación automática de CFDI recibidos y emitidos",
      "Reportes comparativos contra presupuesto"
    ],
    conecta: ["facturacion", "nomina", "bancos", "comercial"]
  },
  facturacion: {
    folio: "002",
    nombre: "Facturación Electrónica",
    tagline: "Emite y timbra CFDI 4.0 sin complicaciones.",
    descripcion: "Genera y timbra facturas, notas de crédito y recibos de pago desde un solo lugar, con plantillas propias y sin límite de folios.",
    caracteristicas: [
      "Timbrado de CFDI 4.0 ilimitado",
      "Plantillas de factura personalizables",
      "Complementos de pago automáticos",
      "Cancelación y reexpedición de comprobantes",
      "Descarga masiva de XML emitidos y recibidos",
      "Portal para que tus clientes descarguen su factura"
    ],
    conecta: ["contabilidad", "comercial", "timbra"]
  },
  nomina: {
    folio: "003",
    nombre: "Nóminas",
    tagline: "Nóminas exactas, a tiempo y con seguridad total.",
    descripcion: "Crea nóminas de cualquier complejidad: sueldos, prestaciones, descuentos, préstamos y reparto de utilidades.",
    caracteristicas: [
      "Nóminas ordinarias y extraordinarias",
      "Cálculo automático de impuestos y aportaciones",
      "Generación de CFDI de nómina",
      "Transferencia automática de nómina",
      "Reportes de fiscalización listos",
      "Integración con contabilidad"
    ],
    conecta: ["contabilidad", "bancos", "facturacion"]
  },
  comercial: {
    folio: "004",
    nombre: "Comercial",
    tagline: "Gestiona tu operación comercial de principio a fin.",
    descripcion: "Administra clientes, cotizaciones, pedidos, entregas y devoluciones en un solo lugar.",
    caracteristicas: [
      "Base de datos de clientes centralizada",
      "Cotizaciones y propuestas automáticas",
      "Control de pedidos y entregas",
      "Gestión de devoluciones y garantías",
      "Seguimiento del ciclo de venta",
      "Integración con facturación"
    ],
    conecta: ["facturacion", "contabilidad", "puntodeventa"]
  },
  bancos: {
    folio: "005",
    nombre: "Bancos",
    tagline: "Conciliar bancos sin quebraderos de cabeza.",
    descripcion: "Importa movimientos bancarios, concilia automáticamente y detecta diferencias.",
    caracteristicas: [
      "Importación de movimientos de múltiples bancos",
      "Conciliación automática inteligente",
      "Detección de transferencias cruzadas",
      "Reportes de flujo de efectivo",
      "Integración con contabilidad",
      "Control de cheques y transferencias"
    ],
    conecta: ["contabilidad", "nomina"]
  },
  puntodeventa: {
    folio: "006",
    nombre: "Punto de Venta",
    tagline: "Venta rápida, segura y bien registrada.",
    descripcion: "Sistema POS para tiendas, restaurantes y puestos: vende, cobra y genera comprobantes.",
    caracteristicas: [
      "Venta por código de barras",
      "Múltiples formas de pago",
      "Generación de CFDI en punto de venta",
      "Gestión de inventario en tiempo real",
      "Reportes de ventas y caja",
      "Sincronización con contabilidad"
    ],
    conecta: ["comercial", "contabilidad", "facturacion"]
  },
  timbra: {
    folio: "007",
    nombre: "Timbra",
    tagline: "Timbrado eficiente y confiable.",
    descripcion: "Servicio de timbrado de CFDI con máxima disponibilidad y soporte.",
    caracteristicas: [
      "Timbrado de CFDI 4.0",
      "Máxima disponibilidad del servicio",
      "Soporte técnico 24/7",
      "Integración con múltiples sistemas",
      "Cancelación de comprobantes",
      "Reportes de timbrado"
    ],
    conecta: ["facturacion"]
  }
};

export const NOMBRE_TAG = {
  contabilidad:"Contabilidad", facturacion:"Facturación Electrónica", nomina:"Nóminas",
  comercial:"Comercial", bancos:"Bancos", puntodeventa:"Punto de Venta", timbra:"Timbra"
};