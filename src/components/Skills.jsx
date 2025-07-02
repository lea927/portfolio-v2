function Skills() {
  const skills = ["Node.js", "React", "Rails", "Typescript", "Git"]

  return (
    <div className="text-gray-600 dark:text-gray-300 p-12 transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
