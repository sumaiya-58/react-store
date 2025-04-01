import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";

export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);

  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <div className="App-Products-Row">
        {products.map((value) => (
          <div className="App-Products-Box" key={value.id}>
            <h3>{value.name}</h3>
            <h4>${value.price}</h4>
            <button onClick={() => addToCart(value.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
