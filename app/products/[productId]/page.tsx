import React from "react";
import Link from "next/link";

async function ProductDetail({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Product {productId} Detail
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This is the detailed page for Product {productId}. More information about this product will be available here.
        </p>
        <div className="mt-6">
          <Link
            href={`/checkout/${productId}`}
            className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
