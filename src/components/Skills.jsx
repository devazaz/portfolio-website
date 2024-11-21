export default function Skills() {
    const skills = [
      { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { category: "Tools", items: ["Git", "Firebase", "Konva.js"] },
    ];
  
    return (
      <section className="container mx-auto my-12 px-6">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="p-4 shadow rounded-md">
              <h3 className="font-semibold text-lg">{skill.category}</h3>
              <ul className="mt-2 space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="bg-gray-100 p-2 rounded-md">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  