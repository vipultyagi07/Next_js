"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Animated Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-transparent border-t-blue-600 border-b-purple-600 rounded-full"
      />

      {/* Loading Text with Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-6 text-lg font-semibold text-gray-800 dark:text-white"
      >
        Hang in there.....
      </motion.p>
    </div>
  );
};

export default Loading;
