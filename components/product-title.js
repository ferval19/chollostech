import BotonAmazon from "./botonAmazon";
import Image from "next/image";

export default function ProductTitle({ title, imagen, enlace }) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
        {title}
      </h1>
      <div className="flex justify-center pt-4 mb-4">
        <Image src={imagen} alt={title} width="200" height="200" />
      </div>
      <BotonAmazon enlace={enlace} />
    </>
  );
}
