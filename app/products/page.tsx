import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Product One',
    description: 'This is the description for product one. It is an excellent product.',
    price: '$19.99',
    imageUrl: '/images/icons8-amazon-alexa-logo.svg',
  },
  {
    id: 2,
    title: 'Product Two',
    description: 'This is the description for product two. It is a top-rated item.',
    price: '$29.99',
    imageUrl: '/images/icons8-amazon-alexa-logo (1).svg',
  },
  {
    id: 3,
    title: 'Product Three',
    description: 'This is the description for product three. A must-have for everyone.',
    price: '$39.99',
    imageUrl: '/images/icons8-amazon-alexa-logo.svg',
  },
  {
    id: 4,
    title: 'Product Four',
    description: 'This is the description for product four. Quality and performance guaranteed.',
    price: '$49.99',
    imageUrl: '/images/idbJBISw4N_1739424560607.svg',
  },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Product List</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}  // Set explicit width
                height={300} // Set explicit height
                className="w-full h-48 object-cover"
                priority={product.id === 1} // Prioritize first image for faster LCP
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {product.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    {product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded hover:from-blue-700 hover:to-purple-700 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
