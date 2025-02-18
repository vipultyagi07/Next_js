import Link from "next/link";

function ProductPage() {
  const products = [1, 2, 3]; // List of product IDs

  return (
    <div>
      <h1>Product List</h1>
      {products.map((id) => (
        <h1 key={id}>
          <Link href={`/products/${id}`}>Product {id}</Link>
        </h1>
      ))}
    </div>
  );
}

export default ProductPage;
