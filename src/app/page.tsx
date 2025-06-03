'use client'
import { useState, useCallback, useMemo, memo } from 'react'
import { User, Briefcase, Code, FolderOpen, Menu, X, Mail, ExternalLink, Camera } from 'lucide-react'
import Image from 'next/image'

// Memoized component versions for better performance
const AboutContent = memo(() => (
  <div className="space-y-6">
    <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
      With over 5 years of experience in IT service desk and technical support, I specialize in delivering 
      SLA-driven support in enterprise environments. Experienced in user provisioning, system administration, 
      and process automation across Windows, cloud platforms, and enterprise applications with a focus on 
      first-call resolution and customer satisfaction.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Specializations</h4>
        <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
          <li>• Service Desk & User Support</li>
          <li>• Active Directory & Azure AD</li>
          <li>• Endpoint Management (SCCM/Intune)</li>
          <li>• Ticketing Systems & SLA Management</li>
          <li>• Remote Support & Troubleshooting</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Industries</h4>
        <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
          <li>• Engineering & Consulting</li>
          <li>• Healthcare Systems</li>
          <li>• Supplements & Manufacturing</li>
          <li>• Enterprise IT Environments</li>
        </ul>
      </div>
    </div>
  </div>
))

AboutContent.displayName = 'AboutContent'

const ExperienceContent = memo(() => (
  <div className="space-y-6">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Professional Experience</h3>
    <div className="space-y-4 sm:space-y-6">
      <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900">Helpdesk Support Analyst</h4>
        <p className="text-blue-600 font-medium text-sm sm:text-base">Willdan Group</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">Jan 2023 - Present • Remote & Anaheim, CA</p>
        <p className="text-gray-600 mb-3 text-sm sm:text-base">Provide Tier 1-2 helpdesk support in enterprise call center environment while maintaining SLA compliance. Led imaging lab implementation that increased deployment throughput by 10x.</p>
        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
          <li>• Manage user accounts and permissions via Active Directory and Azure AD</li>
          <li>• Deploy patches and applications using SCCM, ManageEngine, and remote tools</li>
          <li>• Document troubleshooting procedures and maintain knowledge base</li>
          <li>• Handle escalations and coordinate with cross-functional teams</li>
        </ul>
      </div>
      <div className="border-l-4 border-gray-300 pl-3 sm:pl-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900">IAM Security Analyst</h4>
        <p className="text-blue-600 font-medium text-sm sm:text-base">CVS Health</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">Apr 2022 - Nov 2022 • Remote</p>
        <p className="text-gray-600 mb-3 text-sm sm:text-base">Delivered Tier 1 technical support in healthcare environment with strict compliance requirements. Provisioned accounts in Epic, Cerner, and other EMR platforms while maintaining HIPAA alignment.</p>
        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
          <li>• Supported enterprise healthcare systems and EMR applications</li>
          <li>• Managed Azure AD identities and Exchange mailboxes</li>
          <li>• Used remote tools for device troubleshooting and VPN support</li>
        </ul>
      </div>
      <div className="border-l-4 border-gray-300 pl-3 sm:pl-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900">Helpdesk Support Analyst</h4>
        <p className="text-blue-600 font-medium text-sm sm:text-base">Natural Alternatives International</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">Jan 2021 - Mar 2022 • Carlsbad, CA</p>
        <p className="text-gray-600 mb-3 text-sm sm:text-base">Provided structured technical support in manufacturing environment. Automated onboarding processes using PowerShell and REST APIs, significantly reducing manual workload and improving efficiency.</p>
        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
          <li>• Developed PowerShell automation for user provisioning</li>
          <li>• Managed SCCM deployments and system rollouts</li>
          <li>• Maintained strict SLA adherence for incident resolution</li>
        </ul>
      </div>
    </div>
  </div>
))

ExperienceContent.displayName = 'ExperienceContent'

const SkillsContent = memo(() => (
  <div className="space-y-6">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Technical Skills</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">User Management</h4>
        <div className="space-y-2 sm:space-y-3">
          {['Active Directory', 'Azure AD (Entra ID)', 'Exchange Admin', 'PowerShell'].map((skill) => (
            <div key={skill} className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
              <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Endpoint Management</h4>
        <div className="space-y-2 sm:space-y-3">
          {['SCCM', 'Intune/MDM', 'JAMF', 'SmartDeploy'].map((skill) => (
            <div key={skill} className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
              <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Platforms & OS</h4>
        <div className="space-y-2 sm:space-y-3">
          {['Windows 10/11', 'macOS', 'Office 365', 'ServiceNow'].map((skill) => (
            <div key={skill} className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
              <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Remote Support</h4>
        <div className="space-y-2 sm:space-y-3">
          {['Remote Desktop', 'VPN Support', 'Ticketing Systems', 'Healthcare EMR'].map((skill) => (
            <div key={skill} className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
              <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
))

SkillsContent.displayName = 'SkillsContent'

const ProjectsContent = memo(() => (
  <div className="space-y-6">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Key Projects & Achievements</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Laptop Imaging Overhaul</h4>
        <p className="text-gray-600 text-sm mb-3">Designed PXE + SmartDeploy solution for bulk device staging. Achieved 10x increase in throughput, cutting laptop setup time from 1.5 hours to under 20 minutes.</p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">PXE Boot</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">SmartDeploy</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Process Optimization</span>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Ticketing System Optimization</h4>
        <p className="text-gray-600 text-sm mb-3">Led internal rollout and trained support staff on ticket triage, escalation, and resolution procedures. Improved SLA adherence and reduced ticket backlog.</p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">ServiceNow</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">SLA Management</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Training</span>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Provisioning Automation</h4>
        <p className="text-gray-600 text-sm mb-3">Used SQL to extract ticket data, parsed via Python, and scripted user account creation with PowerShell. Reduced manual workload and cut onboarding delays.</p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">PowerShell</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">SQL</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Python</span>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Healthcare EMR Support</h4>
        <p className="text-gray-600 text-sm mb-3">Provisioned accounts in Epic, Cerner, and other EMR platforms while maintaining HIPAA compliance and supporting healthcare workflows at CVS Health.</p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Epic</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Cerner</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">HIPAA</span>
        </div>
      </div>
    </div>
  </div>
))

ProjectsContent.displayName = 'ProjectsContent'

const ContactContent = memo(() => {
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  
  const revealEmail = useCallback(() => setShowEmail(true), [])
  const revealPhone = useCallback(() => setShowPhone(true), [])
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!</p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Mail className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
            {showEmail ? (
              <p className="text-gray-600 text-sm sm:text-base">sendouwittech@gmail.com</p>
            ) : (
              <button 
                onClick={revealEmail}
                className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
                type="button"
                aria-label="Reveal email address"
              >
                Click to reveal email
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <User className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">Phone</p>
            {showPhone ? (
              <p className="text-gray-600 text-sm sm:text-base">(909) 553-3773</p>
            ) : (
              <button 
                onClick={revealPhone}
                className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
                type="button"
                aria-label="Reveal phone number"
              >
                Click to reveal phone
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <User className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">Location</p>
            <p className="text-gray-600 text-sm sm:text-base">Temecula, CA</p>
          </div>
        </div>
      </div>
    </div>
  )
})

ContactContent.displayName = 'ContactContent'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Memoize navigation array to prevent recreation on every render
  const navigation = useMemo(() => [
    { id: 'about', name: 'About', icon: User, component: AboutContent },
    { id: 'experience', name: 'Experience', icon: Briefcase, component: ExperienceContent },
    { id: 'skills', name: 'Skills', icon: Code, component: SkillsContent },
    { id: 'projects', name: 'Projects', icon: FolderOpen, component: ProjectsContent },
    { id: 'contact', name: 'Contact', icon: Mail, component: ContactContent },
  ], [])

  // Memoize callback functions
  const handleSectionClick = useCallback((sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionId)
    }
    setIsSidebarOpen(false)
  }, [activeSection])

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [])

  const renderActiveComponent = useCallback(() => {
    const activeNav = navigation.find(nav => nav.id === activeSection)
    if (activeNav && activeNav.component) {
      const Component = activeNav.component
      return <Component />
    }
    return null
  }, [navigation, activeSection])

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg border border-gray-200"
        type="button"
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 sm:w-80 lg:w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out`}>
        <div className="h-full flex flex-col">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Andy Sendouw</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Service Desk Technician & IT Support Specialist</p>
          </div>
          
          <nav className="flex-1 p-3 sm:p-4 overflow-y-auto" aria-label="Main navigation">
            <div className="space-y-1 sm:space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 sm:py-3 rounded-lg text-left transition-all duration-200 text-sm sm:text-base ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  type="button"
                  aria-pressed={activeSection === item.id}
                >
                  <item.icon size={18} className={`${activeSection === item.id ? 'text-blue-600' : 'text-gray-400'} sm:w-5 sm:h-5`} />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
            
            {/* Apps Section */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 sm:px-4">
                My Apps
              </h3>
              <div className="space-y-1 sm:space-y-2">
                <a
                  href="https://weathervision.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left transition-all duration-200 text-sm sm:text-base text-gray-700 hover:bg-gray-50 group"
                >
                  <Code size={16} className="text-gray-400 group-hover:text-blue-500 sm:w-4 sm:h-4" />
                  <span className="font-medium">WeatherVision</span>
                  <ExternalLink size={12} className="text-gray-400 group-hover:text-blue-500 ml-auto" />
                </a>
                <a
                  href="https://photography.sendouw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left transition-all duration-200 text-sm sm:text-base text-gray-700 hover:bg-gray-50 group"
                >
                  <Camera size={16} className="text-gray-400 group-hover:text-blue-500 sm:w-4 sm:h-4" />
                  <span className="font-medium">Photography Blog</span>
                  <ExternalLink size={12} className="text-gray-400 group-hover:text-blue-500 ml-auto" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 pt-16 lg:pt-6">
          {/* Static About Me Section */}
          <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
            <div className="text-center">
              {/* Profile Picture */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 shadow-lg overflow-hidden">
                <Image 
                  src="/photo.jpg" 
                  alt="Andy Sendouw - IT Professional"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Andy Sendouw</h1>
              <h2 className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">Service Desk Technician & IT Support Specialist</h2>
              
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4 text-sm sm:text-base">
                Experienced IT Service Desk Technician with 5+ years providing technical support in enterprise 
                environments. Specialized in user provisioning, endpoint management, and process automation across 
                Windows, cloud platforms, and enterprise applications with strong focus on SLA compliance and 
                customer satisfaction.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
                <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                  <span className="text-blue-700 font-medium text-sm sm:text-base">Service Desk</span>
                </div>
                <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                  <span className="text-blue-700 font-medium text-sm sm:text-base">SLA Management</span>
                </div>
                <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                  <span className="text-blue-700 font-medium text-sm sm:text-base">User Provisioning</span>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Content Section */}
          {activeSection && (
            <section className="animate-fadeIn">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
                {renderActiveComponent()}
              </div>
            </section>
          )}

          {/* Call to action when no section is selected */}
          {!activeSection && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 text-base sm:text-lg">
                👈 Select a section from the sidebar to learn more
              </p>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
          transform: translateZ(0);
          will-change: opacity, transform;
        }
      `}</style>
    </div>
  )
}