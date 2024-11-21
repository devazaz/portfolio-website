export default function Projects() {
    const projects = [
      { name: "Dream Drive", link: "https://dreamdrive.co.za/pages/test-game" },
      { name: "SiteJetAI", link: "https://sitejetai.com" },
      { name: "Play Book AI", link: "https://playbook.avatare.com" },
    ];
  
    return (
      <section className="container mx-auto my-12 px-6">
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="p-4 shadow rounded-md hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-semibold">{project.name}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
  