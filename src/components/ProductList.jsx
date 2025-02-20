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
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">{productsList}</ul>
      </div>
    </div>
  );
};

export default ProductList;
