import Destacado from "./destacado";

export default function Destacados({ destacados }) {
  return (
    <>
      <div className="bg-gray-200 pt-2 rounded-lg">
        <h2 className="text-2xl m-4 font-bold">Lo más destacado</h2>
        <div className="lg:flex items-start justify-around p-2">
          {destacados.slice(0, 3).map((destacado) => (
            <Destacado key={destacado.enlace} destacado={destacado} />
          ))}
        </div>
      </div>
    </>
  );
}
