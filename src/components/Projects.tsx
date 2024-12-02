import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Ver Código
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}