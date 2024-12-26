import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsProps = {
  _id: string;
  name: string;
  price: number;
  countInStock: number;
  quantity: number;
  imageUrl: string;
};

const CartItems = ({
  _id,
  name,
  price,
  countInStock,
  quantity,
  imageUrl,
}: CartItemsProps) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <article>
        <Link to={"/product/${productId"}>{name}</Link>

        <span>Price: rs{price}</span>
      </article>
      <div>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <button><FaTrash/></button>
    </div>
  );
};

export default CartItems;
