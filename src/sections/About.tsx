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
import mapImage from "@/assets/images/map.png";
import { TechIcon } from "@/components/TechIcon";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
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
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
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
    title: "Football",
    emoji: "⚽",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div>
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse into my world"
          description="Learn more about me and know what I do and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shapin my personality"
            />
            <div className="w-40 mx-auto mt-8 ">
              <Image src={BookImage} alt="BookCover" />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the technequies and tools that I use to craft
                exceptional digital experiences"
            />

            <div>
              <StarIcon />
              <h3></h3>
              <p></p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span> {item.title} </span>
                </div>
              ))}
            </div>
            <Image src={BookImage} alt="BookCover" />
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond Code</h3>
              <p>Explore my intrests and hobbies beyond the digital realm.</p>
            </div>
            <div>
              {hobbies.map((hobbie) => (
                <div key={hobbie.title}>
                  <span>{hobbie.title}</span>
                  <span>{hobbie.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={SmileEmoji} alt="smile-emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
