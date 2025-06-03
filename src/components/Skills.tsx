export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 88 },
        { name: "Nginx", level: 80 },
        { name: "Monitoring", level: 75 },
        { name: "Testing", level: 85 }
      ]
    }
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-lg text-gray-600">
          Technologies and tools I work with professionally
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}