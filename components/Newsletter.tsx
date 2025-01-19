"'use client'"

import { useState } from "'react'"
import { motion } from "'framer-motion'"

export default function Newsletter() {
  const [email, setEmail] = useState("''")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("'Submitted email:'", email)
    setIsSubmitted(true)
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-lg"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            type="submit"
          >
            Subscribe
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 font-semibold"
        >
          Thanks for subscribing!
        </motion.div>
      )}
    </div>
  )
}

