import Destacado from "./destacado";

export default function Destacados({ destacados }) {
  return (
    <>
      <div className="lg:flex items-start justify-around">
        {destacados.slice(0, 3).map((destacado) => (
          <Destacado key={destacado.enlace} destacado={destacado} />
        ))}
      </div>
    </>
  );
}
