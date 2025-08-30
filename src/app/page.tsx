import { Metadata } from "next";
import AboutMe from "./components/home/about-me";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Collaborate from "./components/home/solution";
import WebResult from "./components/home/web-result";
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
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}
      
      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <OnlinePresence />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Education section Starts-----------------  */}
      <TechStack />
      {/* ---------------------Education section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      <Educations />
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Connect section Starts-----------------  */}
      <Collaborate />
      {/* ---------------------Connect section Ends-----------------  */}
    </main>
  )
}
