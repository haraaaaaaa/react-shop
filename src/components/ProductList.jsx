import React, { useState, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { ProductCard } from "./ProductCard";

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

  const productsList = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        imageUrl={product.image}
      />
    );
  });

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {productsList}
      </ul>
    </div>
  );
};

export default ProductList;
