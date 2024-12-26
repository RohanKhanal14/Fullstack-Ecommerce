import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          {" "}
          MORE{" "}
        </Link>
      </h1>
      <main>
        <ProductCard
          _id="1"
          name="hello"
          countInStock={1}
          price={1}
          handler={addToCartHandler}
          imageUrl="https://m.media-amazon.com/images/I/71D6UBlkufL._AC_SX695_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
