export default function Hero() {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">Hi, I’m Muhammad Azaz</h1>
        <p className="mt-4 text-lg">Full Stack Developer specializing in scalable web solutions.</p>
        <div className="mt-6 space-x-4">
          <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-md">View My Projects</button>
          <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-md">Download Resume</button>
        </div>
      </section>
    );
  }
  