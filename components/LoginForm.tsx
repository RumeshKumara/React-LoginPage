"'use client'"

import { useState } from "'react'"
import { motion } from "'framer-motion'"
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "'react-icons/fa'"
import Link from "'next/link'"

export default function LoginForm() {
  const [email, setEmail] = useState("''")
  const [password, setPassword] = useState("''")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log("'Login attempt with:'", { email, password })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-zinc-200 border-gray-300 focus:outline-none focus:border-indigo-500 dark:border-zinc-800"
            required
          />
        </div>
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-zinc-200 border-gray-300 focus:outline-none focus:border-indigo-500 dark:border-zinc-800"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Log In
        </motion.button>
      </form>
      <div className="mt-6 text-center">
        <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-600 mb-4">Or continue with</p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white p-2 rounded-full"
          >
            <FaGoogle />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 text-white p-2 rounded-full"
          >
            <FaGithub />
          </motion.button>
        </div>
      </div>
      <p className="mt-8 text-center text-gray-600">
        Don't have an account?{"'"}
        <Link href="/signup" className="text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
    </motion.div>
  )
}

