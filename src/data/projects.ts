import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "API REST - Sistema de Gerenciamento",
    description: "API desenvolvida em Java Spring Boot para gerenciamento de recursos, implementando boas práticas RESTful e documentação Swagger.",
    technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Swagger"],
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Sistema de Análise de Dados Biológicos",
    description: "Backend para processamento de dados biológicos, unindo conhecimentos em biologia com programação.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Microserviço de Autenticação",
    description: "Implementação de um sistema de autenticação usando JWT e boas práticas de segurança.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "#"
  }
];