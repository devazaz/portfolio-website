export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Gatsby",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Konva.js",
        "Styled Components",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Firebase", "PostgreSQL", "SQL"],
    },
    {
      category: "API Development",
      items: [
        "RESTful APIs",
        "Authentication (JWT)",
        "Stripe Payment Integration",
      ],
    },
    {
      category: "Tools & Libraries",
      items: ["Git", "GitHub", "GitLab"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="bg-gray-700 text-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-600 hover:scale-105 transition-all"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
