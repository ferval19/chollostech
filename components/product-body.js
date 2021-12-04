import Image from "next/image";

import markdownStyles from "../styles/markdown-styles.module.css";
import BotonAmazon from "./botonAmazon";

export default function ProductBody({ content, imagen, title, enlace }) {
  return (
    <>
      <div className="flex justify-center pt-4 mb-4">
        <Image src={imagen} alt={title} width="200" height="200" />
      </div>
      <BotonAmazon enlace={enlace} />
      <div className="max-w-l mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
