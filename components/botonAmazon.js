import Image from "next/image";

export default function BotonAmazon({ enlace }) {
  return (
    <div className="rounded-md shadow mb-4">
      <a
        href={enlace}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
      >
        Ver en
        <Image src="/amazon.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </div>
  );
}
