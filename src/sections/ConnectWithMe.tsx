"use client";
import React, { useRef } from "react";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GmailIcon from "@/assets/icons/email-8.svg";
import { SocialMediaIcons } from "@/components/SocialMediaIcons";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const SocialMediaItems = [
  {
    link: "https://github.com/VedantRaval3011",
    iconType: GithubIcon,
  },
  {
    link: "https://www.linkedin.com/in/vedant-raval-69967320a/",
    iconType: LinkedInIcon,
  },
  {
    link: "mailto:vedantraval333@gmail.com",
    iconType: GmailIcon,
  },
];

const ConnectWithMe = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { amount: 0.3 });
  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" mx-3 md:mx-32 h-[40vh] md:h-[25vh]"
      id="contact"
    >
      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 p-6 text-gray-800 rounded-xl md:flex md:justify-between">
        <div>
          <h1 className="font-serif text-xl text-center md:text-left md:text-2xl lg:text-3xl">
            Let&apos;s Collaborate!
          </h1>
          <p className="text-md text-center md:text-left max-w-96 lg:text-lg lg:max-w-[35rem] lg:mt-2">
            Feel free to connect with me for job opportunities, freelance
            projects, or collaborations. Let's build something amazing together!
          </p>
        </div>
        <div className="flex justify-between">
          {SocialMediaItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="size-16 mt-5 mx-auto cursor-pointer"
            >
              <SocialMediaIcons component={item.iconType} />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ConnectWithMe;
