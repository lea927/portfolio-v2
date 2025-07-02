import { experienceData } from '../data/experienceData'

function Experience() {
  return (
    <div className="text-gray-600 dark:text-gray-300 p-12 transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div 
            key={experience.id} 
            className={`flex gap-4 p-6 rounded-xl transition-colors duration-300 ${
              index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-transparent'
            }`}
          >
            <img 
              src={experience.companyLogo} 
              alt={`${experience.companyName} logo`}
              className="h-12 w-12 rounded-full object-cover flex-shrink-0 border border-gray-300 dark:border-gray-600"
            />
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic transition-colors duration-300">{experience.date}</p>
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 hover:underline hover:decoration-gray-400 dark:hover:decoration-gray-500 transition-all duration-200 cursor-pointer">
                  {experience.role} at {experience.companyName}
                </h3>
              </a>
              <p className="text-sm transition-colors duration-300">{experience.location}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{experience.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
