import React from 'react'
import Link from 'next/link';


function notFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <h1 className="text-8xl font-extrabold text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default notFound