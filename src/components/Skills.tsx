import React from 'react';
import { Database, Server, GitBranch, Code, Brain, TestTube } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            icon={<Server className="w-8 h-8 text-emerald-600" />}
            title="Backend Development"
            skills={["Java", "Spring Boot", "Node.js", "Express", "RESTful APIs"]}
          />
          <SkillCard 
            icon={<Database className="w-8 h-8 text-emerald-600" />}
            title="Banco de Dados"
            skills={["MySQL", "PostgreSQL", "MongoDB", "Database Design"]}
          />
          <SkillCard 
            icon={<GitBranch className="w-8 h-8 text-emerald-600" />}
            title="Controle de Versão"
            skills={["Git", "GitHub", "Conventional Commits", "Branching Strategies"]}
          />
          <SkillCard 
            icon={<Code className="w-8 h-8 text-emerald-600" />}
            title="Linguagens"
            skills={["Java", "Python", "JavaScript", "TypeScript"]}
          />
          <SkillCard 
            icon={<Brain className="w-8 h-8 text-emerald-600" />}
            title="Soft Skills"
            skills={["Resolução de Problemas", "Trabalho em Equipe", "Comunicação", "Adaptabilidade"]}
          />
          <SkillCard 
            icon={<TestTube className="w-8 h-8 text-emerald-600" />}
            title="Background Científico"
            skills={["Análise de Dados", "Metodologia Científica", "Pensamento Analítico"]}
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            <span className="text-slate-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}