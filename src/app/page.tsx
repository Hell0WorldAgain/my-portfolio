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

      {/* ---------------------Brand logo section Starts-----------------  */}
      <TechIcon />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <AboutMe />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Expertise />
      {/* ---------------------Innovation section Ends-----------------  */}
    
      {/* ---------------------Online presence section Starts-----------------  */}
      <Projects />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Education section Starts-----------------  */}
      <TechStack />
      {/* ---------------------Education section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      <Educations />
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <Insight />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Connect section Starts-----------------  */}
      <Collaborate />
      {/* ---------------------Connect section Ends-----------------  */}
    </main>
  )
}
