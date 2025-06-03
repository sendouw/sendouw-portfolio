import { ExternalLink, Github, Code, Server, Database } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "Full-Stack",
      icon: Code,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform scripts and CI/CD pipelines for automated AWS infrastructure deployment. Reduced deployment time by 80% and improved reliability.",
      technologies: ["AWS", "Terraform", "Docker", "Jenkins", "Python"],
      category: "DevOps",
      icon: Server,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "React dashboard with real-time data visualization using Socket.io and D3.js. Processes 10k+ events per minute with live updates.",
      technologies: ["React", "Socket.io", "D3.js", "Redis", "Node.js"],
      category: "Frontend",
      icon: Database,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Your Next.js App",
      description: "This is where your other Next.js application will be showcased. Add details about its features, technologies used, and impact.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      category: "Full-Stack", 
      icon: Code,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600">
          Some of my recent work and applications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const IconComponent = project.icon
          return (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  🌟 Featured Project
                </div>
              )}
              
              <div className="relative h-40 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <IconComponent size={40} className="text-blue-600" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}