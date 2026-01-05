import { Eye, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsSectionProps {
  onViewProject: (projectId: string) => void;
}

export default function ProjectsSection({ onViewProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any project to view details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Check if this is the Scheduling & Attendance System
            const isSchedulingProject = project.id === 'Sheduling and Attendance System';
            
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Indicator badge for Scheduling project */}
                  {isSchedulingProject && (
                    <div className="absolute top-3 right-3 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>Full Details</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-black">
                      {project.name}
                    </h3>
                    {isSchedulingProject && (
                      <span className="inline-flex items-center justify-center px-3 py-2 pl-7 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                      Showcase Project
                      </span>
                    )}
                  </div>
                  <p className="text-black mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => onViewProject(project.id)}
                      className="flex items-center space-x-2 text-purple-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer"
                    >
                      <span>View Details →</span>
                    </button>

                    <div className="flex items-center space-x-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Live Project"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}