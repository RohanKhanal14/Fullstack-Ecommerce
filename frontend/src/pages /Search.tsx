import React from "react";
import ProductCard from "./ProductCard";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [categoty, setCategory] = React.useState("");
  const [page, setPage] = React.useState(1);

  const addToCartHandler = () => {};
  const isNextPage = true;
  const isPrevPage = true;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <select
            name=""
            id=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (low to high)</option>
            <option value="dsc">Price (high to low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={10000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          ></input>
        </div>
        <div>
          <h4>Categorie</h4>
          <select
            name=""
            id=""
            value={categoty}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            <option value="s1">Sample1</option>
            <option value="s2">samle 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCard
            _id="1"
            name="hello"
            countInStock={1}
            price={1}
            handler={addToCartHandler}
            imageUrl="https://m.media-amazon.com/images/I/71D6UBlkufL._AC_SX695_.jpg"
          />
        </div>
        <article>
          <button disabled={!isPrevPage} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>
            {page} of {page}
          </span>
          <button disabled={!isNextPage} onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
