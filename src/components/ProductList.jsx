import React, { useState, useReducer, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import useRequest from "../hooks/useRequest";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { sendRequest } = useRequest({
    url: "https://fakestoreapi.com/products",
    method: "get",
    onSuccess: (data) => [setProducts(data)],
  });

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log(products);

  const productsList = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        imageUrl={product.image}
      />
    );
  });

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-4">
        {productsList}
      </ul>
    </div>
  );
};

export default ProductList;
