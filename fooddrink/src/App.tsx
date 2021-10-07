import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import ProductDetail from "./components/Single-product/ProductDetail";
import Cart from "./components/cart_view/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
