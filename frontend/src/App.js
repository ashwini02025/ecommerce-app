import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://54.236.89.157:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 E-commerce App</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
