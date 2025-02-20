import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import { CartProvider } from "./context/CartContext";

import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductListPage />} />
          <Route exact path="/products/:id" element={<ProductDetailPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
