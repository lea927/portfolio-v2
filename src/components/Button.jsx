import { motion } from 'framer-motion'

function Button({ text, link }) {
  if (link) {
    return (
      <motion.a 
        href={link}
        className="inline-block bg-gray-800 text-gray-200 cursor-pointer hover:opacity-75 transition-opacity duration-200 px-4 py-2 rounded-full text-sm no-underline"
        whileHover={{ scale: 1.10 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {text}
      </motion.a>
    )
  }

  return (
    <motion.button 
      className="bg-gray-800 text-gray-200 cursor-pointer hover:opacity-75 transition-opacity duration-200 px-4 py-2 rounded-full text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {text}
    </motion.button>
  )
}

export default Button
