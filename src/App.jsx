import {Header} from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
