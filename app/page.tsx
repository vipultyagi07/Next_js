import React from 'react'
import Link from 'next/link';

function Home() {
  return (
<main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-center items-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to MySite
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering your business with cutting-edge solutions.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2zM12 14v7m-4-7v7m8-7v7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                Feature One
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                A clear explanation of this feature and how it benefits you.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2zM12 14v7m-4-7v7m8-7v7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                Feature Two
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Explains how this feature can streamline your workflow.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2zM12 14v7m-4-7v7m8-7v7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                Feature Three
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Highlights unique advantages and functionalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Join Us Today
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sign up now to unlock exclusive features and benefits for your business.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home