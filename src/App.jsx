import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
