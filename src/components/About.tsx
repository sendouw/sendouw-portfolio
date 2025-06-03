import { Code, Server, Database, Cloud, Shield, Users } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern frameworks like React, Next.js, Node.js, and Python"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS, Azure, and Google Cloud infrastructure design and deployment"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL/NoSQL databases, optimization, and data architecture"
    },
    {
      icon: Shield,
      title: "Security & DevOps",
      description: "Implementation of secure practices and CI/CD pipelines"
    },
    {
      icon: Server,
      title: "System Administration",
      description: "Linux/Windows server management and network configuration"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading development teams and mentoring junior developers"
    }
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          With over [X] years of experience in IT, I've helped organizations transform their 
          digital infrastructure and build scalable solutions that drive business success. 
          My passion lies in creating elegant, maintainable solutions that combine technical 
          excellence with business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <item.icon className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">My Approach</h3>
        <p className="text-gray-700 leading-relaxed">
          I believe in building technology solutions that are not just functional, but elegant and maintainable. 
          My approach combines technical expertise with business understanding to deliver results that matter. 
          Whether it's architecting cloud infrastructure, developing web applications, or leading technical teams, 
          I focus on creating value through innovative technology solutions.
        </p>
      </div>
    </div>
  )
}