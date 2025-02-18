import React from 'react'
// add below line for using <Link>
import Link from 'next/link';

function About() {
  return (
    <main className="flex flex-col">
    {/* Hero Section */}
    <section className="w-full h-80 relative bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Our story, mission, and values.
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16 bg-white dark:bg-gray-800">
    <div className="mt-12 text-center">
        <Link href={"/login"} className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
        login </Link>

        </div>
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            <br></br>Who We Are
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a passionate team dedicated to delivering innovative solutions that empower businesses and drive success. Our journey began with a vision to transform industries through cutting-edge technology and exceptional service.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to revolutionize the digital landscape by delivering powerful, user-friendly solutions that foster growth and create lasting impact. We strive for excellence in everything we do, always putting our customers first.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Values
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Excellence</li>
              <li>Customer Focus</li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </main>  )
}

export default About