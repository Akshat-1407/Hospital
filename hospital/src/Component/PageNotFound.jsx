import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-center px-4">
      {/* Animated 404 */}
      <motion.h1
        className="text-9xl font-extrabold text-blue-500 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.h2
        className="mt-4 text-3xl font-bold text-gray-800"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        className="mt-2 text-gray-600 max-w-md"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        The page you’re looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaHome className="text-lg" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default PageNotFound;
