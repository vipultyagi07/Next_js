"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // Log the error to the console for debugging
  console.error("Error caught in Error Boundary:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          Oops! 
        </h1>
        <div className="text-red-500 text-lg font-semibold mb-4">
          {error.message}
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Something went wrong. We are working on it.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
