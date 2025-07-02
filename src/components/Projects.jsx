import { projectsData } from '../data/projectsData'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="text-gray-600 dark:text-gray-300 p-12 transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden w-[298px] h-[168px] p-5 transition-colors duration-300">
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:opacity-80 transition-opacity duration-200 overflow-hidden rounded"
            >
              <motion.img 
                src={project.screenshot} 
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
