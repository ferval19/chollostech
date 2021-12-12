import Image from "next/image";
import Link from "next/link";

export default function Listado({ destacado }) {
  return (
    <>
      <Link as={`/products/${destacado.slug}`} href="/products/[slug]">
        <div className="flex items-center justify-between rounded overflow-hidden mb-4 border-2 rounded-lg bg-white hover:shadow-xl hover:border-gray-300">
          <div className="p-4">
            <Image
              src={destacado.coverImage}
              alt={destacado.title}
              width="100"
              height="100"
              className="w-full"
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{destacado.title}</div>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {destacado.category}
            </span>

            <p className="text-gray-700 text-sm md:text-base">
              {destacado.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
