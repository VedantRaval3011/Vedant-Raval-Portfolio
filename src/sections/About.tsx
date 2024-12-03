import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/vadoadraMap.png";
import { TechIcon } from "@/components/TechIcon";
import CardHeader from "@/components/CardHeader";
import RobotImage from "@/assets/images/robot.png";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NextIcon from "@/assets/icons/nextjs-svgrepo-com.svg";
import VueIcon from "@/assets/icons/vue.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NodeIcon from "@/assets/icons/node-js.svg";
import VscodeIcon from "@/assets/icons/vscode.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "Vue JS",
    iconType: VueIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "Node JS",
    iconType: NodeIcon,
  },
  {
    title: "VS Code",
    iconType: VscodeIcon,
  },
];

const hobbies = [
  {
    title: "Football",
    emoji: "⚽",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-24">
      <div>
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse into my world"
          description="Learn more about me and know what I do and what inspires me"
        />
        <div className="mt-20 mx-3 flex flex-col gap-6 lg:px-28">
          <Card>
            <div className="flex justify-center items-center text-center ">
              <CardHeader
                title="My Arsenal"
                description="Explore the technequies and tools that I use to craft
                exceptional digital experiences"
              />
            </div>

            <div className="flex flex-wrap w-full mt-5 justify-center gap-4 lg:gap-6 lg:w-[50rem] lg:mx-auto ">
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="basis-1/2 md:basis-0 flex justify-center items-center mt-1 "
                >
                  <TechIcon component={item.iconType} />
                </div>
              ))}
            </div>
          </Card>
          <div className="lg:flex gap-5">
            <Card>
              <div>
                <div className="flex justify-center items-center text-center ">
                  <CardHeader
                    title="Beyond Code"
                    description="Explore my intrests and hobbies beyond the digital realm."
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-col lg:mt-10 md:flex-wrap justify-center items-center gap-2 lg:gap-4">
                {hobbies.map((hobbie) => (
                  <div
                    key={hobbie.title}
                    className={`bg-gradient-to-r mt-2 from-emerald-300 to-sky-400 text-center w-full p-3 rounded-2xl text-gray-700 font-serif md:basis-[calc(50%-16px)] lg:basis-0`}
                  >
                    <span>{hobbie.title}</span> 
                    <span>{hobbie.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <div className="relative">
                <Image src={mapImage} alt="map" className="size-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={RobotImage}
                    alt="smile-emoji"
                    className="size-12 md:size-20 rounded-full mb-6 mr-4 lg:mr-10 bg-gradient-to-r from-emerald-300 to-sky-400 "
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
