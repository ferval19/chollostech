import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
export default function Products() {
  return (
    <div>
      <Head>
        <title>AirPods Pro | Chollos.tech</title>
        <meta name="description" content="Tu sitio de chollos en tecnología." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Destacados
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      LifeStyle
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Videojuegos
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Perifericos
                    </a>
                  </div>
                </nav>
              </div>

              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1 hidden">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Destacados
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      LifeStyle
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Videojuegos
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Perifericos
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <img
                  className="w-52 mx-auto"
                  src="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg"
                />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-2">
                  <span className="block xl:inline">Apple </span>
                  <span className="block text-indigo-600 xl:inline">
                    AirPods Pro{" "}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Apple Airpods Pro con Estuche de Carga MagSafe (2021).
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sobre el producto:
                </p>
                <ul className="list-disc">
                  <li>
                    Cancelación activa de ruido que filtra el sonido externo y
                    te permite sumergirte en la música
                  </li>
                  <li>Modo de sonido ambiente para escuchar lo que te rodea</li>
                  <li>
                    Audio espacial con seguimiento dinámico de la cabeza que te
                    mete de lleno en lo que escuchas
                  </li>
                  <li>
                    Ecualización adaptativa que ajusta automáticamente la música
                    a tus oídos
                  </li>
                  <li>
                    Almohadillas cónicas de suave silicona en tres tamaños para
                    un ajuste a medida
                  </li>
                  <li>
                    Sensor de presión para controlar con facilidad la música,
                    responder o colgar llamadas y mucho más
                  </li>
                  <li>Resistencia al agua y al sudor</li>
                  <li>
                    Más de 24 horas de reproducción de audio con el estuche de
                    carga MagSafe
                  </li>
                  <li>Acceso rápido a Siri con solo decir «Oye Siri»</li>
                  <li>
                    Configuración sencilla, detección de posición y cambio
                    automático de dispositivo como por arte de magia
                  </li>
                </ul>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://amzn.to/3nW0pWm"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
                    >
                      Comprar en Amazon
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1623411235843-1e0932d560ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho con{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
