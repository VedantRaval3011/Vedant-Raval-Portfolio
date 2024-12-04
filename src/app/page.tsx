import { AboutSection } from "@/sections/About";
import ConnectWithMe from "@/sections/ConnectWithMe";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import MessageForMe from "@/sections/MessageForMe";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <AboutSection/>
      <ConnectWithMe/>
      <MessageForMe/>
    </div>
  );
}
