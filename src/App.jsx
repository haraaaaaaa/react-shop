import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
