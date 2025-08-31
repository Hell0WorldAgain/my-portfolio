import { Metadata } from "next";
import AboutMe from "./components/home/about-me";
import HeroSection from "./components/home/hero";
import Expertise from "./components/home/expertise";
import Projects from "./components/home/projects";
import Collaborate from "./components/home/solution";
import Insight from "./components/home/insight";
import TechIcon from "./components/home/techIcons";
import TechStack from "./components/home/tech-stacks";
import Educations from "./components/home/education";

export const metadata: Metadata = {
    title: "Abhishek Choudhary - Portfolio",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Tech Icons section Starts-----------------  */}
      <TechIcon />
      {/* ---------------------Tech Icons section Ends-----------------  */}

      {/* ---------------------About Me section Starts-----------------  */}
      <AboutMe />
      {/* ---------------------About Me section Ends-----------------  */}

      {/* ---------------------Expertise section Starts-----------------  */}
      <Expertise />
      {/* ---------------------Expertise section Ends-----------------  */}
      
      {/* ---------------------Tech Stack section Starts-----------------  */}
      <TechStack />
      {/* ---------------------Tech Stack section Ends-----------------  */}
    
      {/* ---------------------Projects section Starts-----------------  */}
      <Projects />
      {/* ---------------------Projects section Ends-----------------  */}

      {/* ---------------------Insight section Starts-----------------  */}
      <Insight />
      {/* ---------------------Insight section Ends-----------------  */}

      {/* ---------------------Connect section Starts-----------------  */}
      <Collaborate />
      {/* ---------------------Connect section Ends-----------------  */}
    </main>
  )
}
