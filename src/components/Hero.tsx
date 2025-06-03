import { ChevronDown, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Sendouw</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            IT Professional & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Specializing in modern web technologies, cloud infrastructure, and enterprise solutions. 
            Passionate about creating efficient, scalable applications that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <a 
              href="#about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-600" size={32} />
        </div>
      </div>
    </section>
  )
}