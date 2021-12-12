import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Destacados from "./destacados";
import Listados from "./listados";

export default function Layout({ destacados }) {
  return (
    <div>
      <Head>
        <title>Chollos.tech</title>
        <meta name="description" content="Tu sitio de chollos en tecnología." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full">
            <Nav />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <Hero />
              <Destacados destacados={destacados} />
              <Listados destacados={destacados} />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
