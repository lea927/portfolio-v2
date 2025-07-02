import { motion } from 'framer-motion'

function StatusButton() {
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-2 rounded-full text-sm border border-green-200 dark:border-green-700/50 transition-colors duration-300">
      {/* Blinking dot indicator */}
      <div className="relative">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Pulse ring effect */}
        <motion.div
          className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-75"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <span className="font-medium">Available for work</span>
    </div>
  )
}

export default StatusButton
