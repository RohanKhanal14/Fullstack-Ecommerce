import React from "react";
import { FaPlus } from "react-icons/fa";

type ProductProps = {
  _id: string;
  name: string;
  price: number;
  countInStock: number;
  imageUrl: string;
  handler: () => void;
};

const server = "demo";

const ProductCard = ({
  _id,
  name,
  price,
  countInStock,
  imageUrl,
  handler,
}: ProductProps) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <span>${price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
