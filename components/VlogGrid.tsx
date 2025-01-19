"'use client'"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaPlay } from "react-icons/fa"
const vlogPosts = [
  { id: 1, title: "'My First Vlog'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
  { id: 2, title: "'Travel Adventures'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
  { id: 3, title: "'Cooking with Friends'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
  { id: 4, title: "'Tech Review'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
  { id: 5, title: "'Fitness Journey'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
  { id: 6, title: "'Music Festival'", thumbnail: "'/placeholder.svg?height=200&width=300'" },
]

export default function VlogGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Latest Vlogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vlogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img src={post.thumbnail || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
            {hoveredId === post.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <FaPlay className="text-white text-4xl" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

