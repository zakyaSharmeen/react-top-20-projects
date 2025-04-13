import React from "react";
import ProductList from "./redux/components/ProductList";
import Cart from "./redux/components/Cart";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ My Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
