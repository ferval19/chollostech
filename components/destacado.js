import Image from "next/image";
import Link from "next/link";

export default function Destacado({ destacado }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <div className="flex justify-center pt-4">
          <Image
            src={destacado.coverImage}
            alt={destacado.title}
            width="200"
            height="200"
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{destacado.title}</div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {destacado.category}
          </span>
          <p className="text-gray-700 text-base">{destacado.excerpt}</p>
        </div>
        <div className="m-4">
          <div className="rounded-md shadow mb-4">
            <a
              href={destacado.enlace}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
            >
              Comprar en Amazon
            </a>
          </div>
          <Link as={`/products/${destacado.slug}`} href="/products/[slug]">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-purple-300 md:py-4 md:text-lg md:px-10">
              Ver producto
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
