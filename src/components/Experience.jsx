import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Codistan",
      duration: "January 2024 - Present",
      type: "Full-Time",
      responsibilities: [
        "Enhanced user engagement by over 30% through developing an interactive game using React.js and Konva.js, embedded within Shopify via an iframe.",
        "Built REST APIs and implemented JWT-based authentication for secure data access, achieving real-time synchronization with MongoDB.",
        "Led the integration of Shopify data with custom applications, enabling seamless data flow and functionality across platforms, improving operational efficiency by 25%.",
        "Established peer-to-peer and socket connections to support real-time data synchronization, providing consistent user experiences across devices.",
        "Applied advanced Konva.js skills to create and manage interactive canvas elements, significantly enhancing dynamic visual content and interactivity.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Dive Deep AI",
      duration: "May 2023 - December 2023",
      type: "Full-Time",
      responsibilities: [
        "Improved load times by 30%, increasing user retention through optimized TypeScript and JavaScript code.",
        "Developed responsive, cross-browser-compatible interfaces using React and Next.js, focusing on performance and usability, which boosted user satisfaction by 20%.",
        "Collaborated with the backend team to ensure smooth data integration and application performance.",
        "Created polished and intuitive user interfaces that enhanced client engagement and satisfaction.",
      ],
    },
    {
      title: "React.js Developer",
      company: "Solution Surface",
      duration: "April 2021 - May 2023",
      type: "Full-Time",
      responsibilities: [
        "Enhanced UI functionality and appeal using Next.js and Tailwind CSS, resulting in a 20% improvement in usability and visual consistency across platforms.",
        "Worked closely with backend teams to ensure robust integration of frontend components, increasing application reliability and performance by 15%.",
        "Delivered clean, maintainable code that supported long-term scalability and maintainability.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-indigo-400 mb-16">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-400 italic">
                {experience.company} &middot; {experience.duration} &middot;{" "}
                {experience.type}
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
