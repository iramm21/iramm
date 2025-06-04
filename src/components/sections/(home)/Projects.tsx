import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript.",
    link: "#",
    image: "/projects/portfolio.png",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack productivity app using Next.js, Prisma, and PostgreSQL.",
    link: "#",
    image: "/projects/task-manager.png",
  },
  {
    title: "Design System Library",
    description:
      "Reusable React components built with accessibility and scalability in mind.",
    link: "#",
    image: "/projects/design-system.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
