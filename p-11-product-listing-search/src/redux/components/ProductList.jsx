import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/CartSlice";

const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 25,
    image:
      "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Jeans",
    price: 40,
    image:
      "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 60,
    image:
      "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Cap",
    price: 15,
    image:
      "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-2"
            />
            <h3 className="text-lg">{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
