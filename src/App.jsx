import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
