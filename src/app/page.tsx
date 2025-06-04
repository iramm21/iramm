import About from "@/components/sections/(home)/About";
import Hero from "@/components/sections/(home)/Hero";
import Projects from "@/components/sections/(home)/Projects";
import Skills from "@/components/sections/(home)/Skills";
import Contact from "@/components/sections/(home)/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
