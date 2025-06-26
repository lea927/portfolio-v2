import { experienceData } from '../data/experienceData'

function Experience() {
  return (
    <div className="text-gray-600 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience) => (
          <div key={experience.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <img 
              src={experience.companyLogo} 
              alt={`${experience.companyName} logo`}
              className="h-12 w-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">{experience.role}</h3>
                  <a 
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                  >
                    {experience.companyName}
                  </a>
                </div>
                <span className="text-xs text-gray-500">{experience.date}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{experience.location}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{experience.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
