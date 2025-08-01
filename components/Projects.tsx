import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SwiftSake",
    description: `Swift Stake es una plataforma de staking rápida y segura que permite a los usuarios participar en protocolos de finanzas descentralizadas (DeFi). El proyecto integra APIs en tiempo real para ofrecer oportunidades y recompensas actualizadas. Con un enfoque en la experiencia del usuario y la seguridad, Swift Stake simplifica el proceso de generar ingresos pasivos con tecnología blockchain.`,
    technologies: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/main2526/SwiftStake",
    demo: "https://swiftstake.vercel.app/",
  },
  {
    title: "Chatbot AI",
    description: `Chatbot AI es un asistente conversacional inteligente impulsado por la API de DeepSeek y Next.js. El chatbot puede responder preguntas, ofrecer recomendaciones y automatizar tareas para los usuarios. Con un enfoque en la comprensión del lenguaje natural y una interfaz amigable, Chatbot AI lleva el poder de la inteligencia artificial a las interacciones cotidianas.`,
    technologies: [
      "React",
      "Next js",
      "PrismaORM",
      "TypeScript",
      "Api DeepSeek",
    ],
    github: "https://github.com/main2526/chatbot-api-key",
    demo: "https://bootschatbot.vercel.app/",
  },
  {
    title: "Landing Page ",
    description: `Landing Turtle es una página de aterrizaje animada y visualmente atractiva creada para mostrar técnicas modernas de diseño web. Utilizando Next.js, Tailwind CSS y Framer Motion, el proyecto demuestra animaciones fluidas, diseños responsivos y elementos de UI creativos. Sirve como plantilla para startups y portafolios personales que buscan una primera impresión memorable.`,
    technologies: ["React", "Next JS", "TypeScript", "Framer Motion"],
    github: "https://github.com/main2526/current-stock",
    demo: "https://bloxstock.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="section mb-16">
      <h2 className="section-title text-3xl font-bold mb-8 text-slate-800 text-center relative pb-4 font-serif">
        Proyectos Destacados
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
      </h2>

      <div className="projects-grid space-y-12 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white border-2 border-gray-200 p-10 transition-all duration-300 hover:border-yellow-500 hover:shadow-xl relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

            <h3 className="project-title text-2xl font-bold text-slate-800 mb-4 tracking-wide font-serif">
              {project.title}
            </h3>

            <p className="project-description text-gray-600 text-base leading-relaxed mb-6 text-justify font-serif">
              {project.description}
            </p>

            <div className="project-tech flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="tech-tag bg-slate-800 text-white px-4 py-2 text-sm font-medium tracking-wide border border-slate-800 transition-all duration-300 hover:bg-white hover:text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
                className="project-link flex items-center gap-3 text-slate-800 font-semibold text-base py-3 px-6 border-2 border-slate-800 transition-all duration-300 hover:bg-slate-800 hover:text-white  hover:shadow-lg tracking-wide"
              >
                <FaGithub />
                Ver Código
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demo}
                className="project-link flex items-center gap-3 text-slate-800 font-semibold text-base py-3 px-6 border-2 border-slate-800 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:shadow-lg tracking-wide"
              >
                <FaExternalLinkAlt />
                Demostración
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
