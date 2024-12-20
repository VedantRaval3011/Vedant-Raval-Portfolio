"use client";

import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import MechvaccPage from "@/assets/images/Mechvacc.png";
import NaturalistPage from "@/assets/images/naturalist.png";
import IsroPage from "@/assets/images/isro.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "Mechvacc",
    year: "2024",
    title: "Mechvacc Industries Official Website",
    results: [
      { title: "Enhanced user experience by 50%" },
      { title: "Increased traffic by 35%" },
      { title: "Complete admin portal for product handling" },
    ],
    link: "",
    image: MechvaccPage,
  },
  {
    company: "ISRO-SAC",
    year: "2024",
    title: "Raster Interactive Data Management System (RIDaM)",
    results: [
      { title: "100+ active admin users" },
      { title: "Complete admin portal for data handling" },
      { title: "Received a Letter of Recommendation for my work" },
    ],
    link: "",
    image: IsroPage,
  },
  {
    company: "Naturalist",
    year: "2024",
    title: "Naturalist Animated Landing Page",
    results: [
      { title: "One of my personal project" },
      { title: "Shows the frontend skills" },
      { title: "Outstanding and eye catching animations" },
    ],
    link: "https://naturalist.vercel.app/",
    image: NaturalistPage,
  },
];

export const ProjectsSection = () => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { amount: 0.1 });
  return (
    <motion.section
      ref={projectRef}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pb-16 lg:py-24"
      id="projects"
    >
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif  text-3xl text-center md:text-5xl mt-6">
          Few of my Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-auto max-w-md">
          See how I transform concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl px-8 pt-8 md:px-10 lg:pt-16 lg:px-20 after:outline-white/20 after:pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result,idx) => (
                      <li key={idx} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? <Link href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex
                 items-center justify-center gap-2 mt-8 cursor-pointer"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </Link> : <Link href={project.link}>
                    <button
                      className="bg-white/60 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex
                 items-center justify-center gap-2 mt-8 cursor-pointer"
                    >
                      <span>Link will be Available soon</span>
                      {/* <ArrowUpRightIcon /> */}
                    </button>
                  </Link>}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
