import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs, level: "Advanced" },
      { name: "React", Icon: SiReact, level: "Advanced" },
      { name: "TypeScript", Icon: SiTypescript, level: "Advanced" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, level: "Intermediate" },
      { name: "Prisma", Icon: SiPrisma, level: "Intermediate" },
      { name: "PostgreSQL", Icon: SiPostgresql, level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Git & GitHub", Icon: SiGithub, level: "Advanced" },
      { name: "Figma", Icon: SiFigma, level: "Intermediate" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map(({ name, Icon, level }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                  >
                    <Icon className="text-3xl text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
