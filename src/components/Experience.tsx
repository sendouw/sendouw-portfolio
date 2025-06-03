import { Calendar, MapPin, ChevronRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company Name",
      location: "City, State",
      period: "2022 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and AWS. Managed team of 5 developers and improved system performance by 40%.",
      achievements: [
        "Architected and deployed scalable microservices infrastructure",
        "Reduced application load time by 60% through optimization",
        "Mentored junior developers and established coding best practices"
      ]
    },
    {
      title: "IT Systems Administrator",
      company: "Previous Company",
      location: "City, State", 
      period: "2020 - 2022",
      description: "Managed enterprise IT infrastructure, implemented security protocols, and automated deployment processes.",
      achievements: [
        "Implemented automated backup systems reducing downtime by 80%",
        "Designed and deployed secure network architecture",
        "Managed cloud migration for 200+ users"
      ]
    },
    {
      title: "Junior Developer",
      company: "Startup Company",
      location: "City, State",
      period: "2019 - 2020", 
      description: "Developed responsive web applications and contributed to database design and API development.",
      achievements: [
        "Built customer-facing dashboard used by 1000+ users",
        "Integrated third-party APIs and payment systems",
        "Collaborated with UX team to improve user experience"
      ]
    }
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        <p className="text-lg text-gray-600">
          My journey in IT and software development
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
            )}
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <div className="ml-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex-1 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:text-right text-sm text-gray-500 mt-2 lg:mt-0">
                    <div className="flex items-center lg:justify-end">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center lg:justify-end mt-1">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}