export default function About() {
    return (
      <section className="container mx-auto my-12 px-6">
        <h2 className="text-2xl font-bold text-center">About Me</h2>
        <div className="mt-6 flex flex-col items-center">
          <img src="your-photo.jpg" alt="Profile" className="w-32 h-32 rounded-full shadow-lg" />
          <p className="mt-4 text-center">
            I am a Full Stack Developer with 3 years of experience. Passionate about building intuitive and scalable web solutions.
          </p>
        </div>
      </section>
    );
  }
  