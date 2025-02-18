"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/component/Loading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a delay
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-center items-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to MySite</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering your business with cutting-edge solutions.</p>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[1, 2, 3].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                  Feature {feature}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">Feature {feature} details.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Join Us Today</h2>
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
  );
}

export default Home;
