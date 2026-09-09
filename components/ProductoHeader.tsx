type Props = {
  folio: string;
  nombre: string;
  tagline: string;
  descripcion: string;
};

export default function ProductoHeader({
  folio,
  nombre,
  tagline,
  descripcion,
}: Props) {
  return (
    <section className="section">
      <div className="wrap">
        <span className="folio">
          Folio {folio}
        </span>

        <h1>{nombre}</h1>

        <p>{tagline}</p>

        <p>{descripcion}</p>
      </div>
    </section>
  );
}