import React from 'react'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth Page',
  description: 'Login and authentication portal',
};

function forgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6 transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Enter your email address below and we will send you a link to reset your password.
        </p>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-md text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Remembered your password?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default forgotPassword