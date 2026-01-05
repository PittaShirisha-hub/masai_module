import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  // Large product list
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 30000 },
    { id: 3, name: "Headphones", price: 5000 },
    { id: 4, name: "Keyboard", price: 2000 },
  ];

  // ✅ useMemo – recalculates only when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  // ✅ useCallback – prevents function recreation
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter: {count}
      </button>

      <hr />

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}

export default App;
