import React from "react";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <Link as={`/product/${product.slug}`} href="/product/[id]">
      <a>
        <div>
          <div>
            <p id="category">{product.marca}</p>
            <p id="title">{product.nombre}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
