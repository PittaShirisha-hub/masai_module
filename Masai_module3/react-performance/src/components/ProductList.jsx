function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "8px",
            cursor: "pointer"
          }}
          onClick={() => onSelect(product)}
        >
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
