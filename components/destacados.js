import Destacado from "./destacado";

export default function Destacados({ destacados }) {
  return (
    <>
      <h2 className="text-xl mb-4">Lo más destacado</h2>
      <div className="lg:flex items-start justify-around">
        {destacados.slice(0, 3).map((destacado) => (
          <Destacado key={destacado.enlace} destacado={destacado} />
        ))}
      </div>
    </>
  );
}
