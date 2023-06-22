import About from "./Components/About";
import Blog from "./Components/Blog";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Projects/>
      <Blog/>
    </main>
  );
}
// import {
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
//   SiJavascript,
//   SiGithub,
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
// } from "react-icons/si";