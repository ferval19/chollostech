import Destacado from "./destacado";

export default function Destacados({ hero, destacados }) {
  if (destacados.length == 0) {
    hero = "!!Todavía no hemos podido añadir chollos aqui!!";
  }
  return (
    <>
      <div className="bg-gray-200 pt-2 rounded-lg">
        <h2 className="text-2xl m-4 font-bold">{hero}</h2>
        <div className="lg:flex items-start justify-around p-2">
          {destacados.slice(0, 3).map((destacado) => (
            <Destacado key={destacado.enlace} destacado={destacado} />
          ))}
        </div>
      </div>
    </>
  );
}
