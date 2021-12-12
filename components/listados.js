import Listado from "./listado";

export default function Listados({ destacados }) {
  return (
    <>
      <div className="bg-gray-200 pt-2 rounded-lg mt-8">
        <h2 className="text-2xl m-4 font-bold">Más productos...</h2>
        <div className="p-2">
          {destacados.slice(3, 10).map((destacado) => (
            <Listado key={destacado.enlace} destacado={destacado} />
          ))}
        </div>
      </div>
    </>
  );
}
