"use client";
import Image from "next/image";
import RobotImage from "@/assets/images/robot.png";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.1 });
  return (
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={562} rotation={-130}>
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={142}>
          <StarIcon className="size-8 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={-142}>
          <StarIcon className="size-8 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className="size-8 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={480} rotation={80}>
          <SparkleIcon className="size-5 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={100}>
          <SparkleIcon className="size-14 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={20}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={120}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={RobotImage}
            alt="Hero person"
            className="size-[100px] shadow-lg rounded-full mb-1 bg-gradient-to-r from-emerald-300 to-sky-400"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex z-20  items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="inset-0 bg-green-500 animate-ping-large absolute rounded-full"></div>
            </div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I Specialize in transforming designs into funcitonal,
            high-performing web applications. Let&apos;s discuss your next project.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4 z-50">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 border-white/15 px-6 h-12 rounded-xl "
          >
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </Link>
          <button className="inline-flex items-center gap-2 border-white bg-white h-12 px-6 rounded-xl text-gray-900 cursor-pointer">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
