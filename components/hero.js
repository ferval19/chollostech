import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex lg:items-center flex-wrap lg:flex-nowrap mt-8">
        <div className="sm:text-center lg:text-left w-full md:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Bienvenidos a </span>
            <span className="block text-indigo-600 xl:inline">
              Chollos.tech
            </span>
          </h1>
          <p className="mt-3 mb-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Seleccionamos por tí los mejores productos y chollos de Amazon para
            tenerlos a un solo golpe de click. Productos con descuentos
            interesantes, desde domótica, videojuegos y cualquier producto para
            tener tu setup a la última.
          </p>
        </div>
        <Image
          className="w-full md:w-1/3"
          src="/principal.png"
          alt="ChollosTech, tu sitio para encontrar los mejores productos de Amazon"
          width="400"
          height="400"
        />
      </div>
    </>
  );
}
