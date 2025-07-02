import photo from '/photo.jpeg'
import Button from './Button'
import StatusButton from './StatusButton'
import { motion } from 'framer-motion'

function Hero() {
  const skills = ["Node.js", "React", "Rails", "Typescript", "Git"]

  return (
    <div className="text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center transition-colors duration-300">
      <img src={photo} alt="" className='h-12 w-12 rounded-full mb-3' />
      <h1 className='font-bold text-2xl text-gray-800 dark:text-gray-100 transition-colors duration-300'>Lea Tinoso</h1>
      <p className='text-sm'>Full-stack dev with front-end flair and back-end bias.</p>
      <div className='m-4 space-x-3'>
        <Button text="Get in touch" link="mailto:lealyn.tinoso@gmail.com" />
        <StatusButton />
      </div>
      <div className="flex flex-wrap gap-2 justify-center max-w-xs">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default Hero
