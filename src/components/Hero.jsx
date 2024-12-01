import { useEffect, useState } from "react";

export default function Hero() {
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration, setValue) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        current += increment;
        setValue(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(0, 10, 1000, setProjects); // 10 Projects
    animateValue(700, 1000, 1000, setUsers); // 1000+ Users
    animateValue(0, 3, 1000, setExperience); // 3 Years
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden w-full p-[10%] mx-auto  h-[75vh] md:h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-48 h-48 md:w-96 md:h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 absolute top-10 left-10"></div>
        <div className="w-36 h-36 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl opacity-30 absolute bottom-10 right-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-indigo-400">Muhammad Azaz</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Full Stack Developer specializing in{" "}
          <span className="text-indigo-400">scalable web solutions</span>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-indigo-400">
              {projects}+
            </span>
            <p className="text-base md:text-lg font-semibold text-gray-300">
              Projects Delivered
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-indigo-400">
              {experience}+
            </span>
            <p className="text-base md:text-lg font-semibold text-gray-300">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-[80%] md:w-auto px-6 py-3 md:px-6 md:py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition cursor-pointer text-center"
          >
            View My Projects
          </a>
          <a
            href="Muhammad_Azaz.pdf"
            download="Muhammad_Azaz.pdf"
            className="w-[80%] md:w-auto px-6 py-3 md:px-6 md:py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition cursor-pointer text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
