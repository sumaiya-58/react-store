import React, { useContext } from "react";
import { appContext } from "../App";

export default function Cart() {
  const { cart, setCart, products } = useContext(appContext);

  const updateQuantity = (id, change) => {
    const newQuantity = (cart[id] || 0) + change;
    if (newQuantity > 0) {
      setCart({ ...cart, [id]: newQuantity });
    } else {
      const newCart = { ...cart };
      delete newCart[id]; // Remove item if quantity is 0
      setCart(newCart);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {Object.keys(cart).map((id) => {
            const product = products.find((p) => p.id === parseInt(id));
            return (
              <li key={id}>
                {product.name} - ${product.price} (Quantity: {cart[id]})
                <button onClick={() => updateQuantity(id, 1)}>+</button>
                <button onClick={() => updateQuantity(id, -1)}>-</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
