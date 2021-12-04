import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Destacados from "../components/destacados";
import { getAllPosts } from "../lib/api";

export default function Videojuegos({ allPosts }) {
  const filtrados = allPosts.filter(function (element) {
    return element.category == "videojuegos";
  });
  console.log("Pagina de domotica");
  console.log(filtrados);
  return (
    <div>
      <Head>
        <title>Videojuegos | Chollos.tech</title>
        <meta name="description" content="Todo la domotica para tu hogar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full">
            <Nav />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex lg:items-center flex-wrap lg:flex-nowrap">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Conviertete en todo un{" "}
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      gamer
                    </span>
                  </h1>
                  <p className="mt-3 mb-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Las mejor selección de juegos y Perifericos para disfrutar
                    de tus videojuegos.
                  </p>
                </div>
                <Image
                  src="/videojuegos.png"
                  alt="ChollosTech, tu sitio para encontrar los mejores productos de Amazon"
                  width="450"
                  height="450"
                />
              </div>
              <h2 className="text-xl mb-4">Nuestra selección</h2>
              <Destacados destacados={filtrados} />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "enlace",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
