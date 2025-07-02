import { experienceData } from '../data/experienceData'

function Experience() {
  return (
    <div className="text-gray-600 p-12">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div 
            key={experience.id} 
            className={`flex gap-4 p-6 rounded-xl ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'
            }`}
          >
            <img 
              src={experience.companyLogo} 
              alt={`${experience.companyName} logo`}
              className="h-12 w-12 rounded-full object-cover flex-shrink-0 border border-gray-300"
            />
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-sm text-gray-500 italic">{experience.date}</p>
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <h3 className="font-semibold text-gray-800 hover:underline hover:decoration-gray-400 transition-all duration-200 cursor-pointer">
                  {experience.role} at {experience.companyName}
                </h3>
              </a>
              <p className="text-sm">{experience.location}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{experience.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
