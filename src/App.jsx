import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Home from "./pages/Home";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
