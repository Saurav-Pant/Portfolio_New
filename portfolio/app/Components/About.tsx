"use client";
import React from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import sp from "../Assets/about_bg.png";
import { motion } from "framer-motion";


import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

type Props = {};

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: SiHtml5,
  },
  {
    id: 2,
    name: "CSS",
    icon: SiCss3,
  },
  {
    id: 3,
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: DiJavascript1,
  },
  {
    id: 5,
    name: "GitHub",
    icon: SiGithub,
  },
  {
    id: 6,
    name: "React",
    icon: SiReact,
  },
  {
    id: 7,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 8,
    name: "TypeScript",
    icon: TbBrandTypescript,
  },
  {
    id: 9,
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    id: 10,
    name: "Express",
    icon: SiExpress,
  },
  {
    id: 11,
    name: "MongoDB",
    icon: SiMongodb,
  },
];

const About = (props: Props) => {
  return (
    <div
      className="flex flex-col md:flex-row min-h-[85vh] pl-4 sm:px-5 md:pl-20 pt-20
       "
      id="About"
    >
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2>About</Heading2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-2xl font-bold pt-5">
            Full Stack Web Developer | Specializing in
            <span
              className="
          bg-gradient-to-tr from-primary to-secondary text-transparent
           bg-clip-text pl-2"
            >
              MERN
            </span>
          </h1>

          <p className="pt-5 font-medium space-x-1">
            Hi, I'm Saurav Pant, an experienced full stack web developer with 2+
            years of expertise. I specialize in MERN stack development,
            leveraging MongoDB, Express.js, React, and Node.js. I excel in
            creating scalable web applications, integrating APIs, and ensuring
            top-notch performance. With a problem-solving mindset and a keen eye
            for detail, I deliver exceptional user experiences.
          </p>
          <div className="flex items-center justify-center py-5 space-x-6 sm:py-7">
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-5">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="relative inline-block group">
                    <Icon size={35} />
                    <span className="opacity-0 absolute top-5 lg:top-10 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 bg-white px-2 py-2 rounded-md shadow-lg transition duration-300 ease-in-out">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center md:w-1/2 sm:py-8 py-10">
        <div>
          <Image src={sp} alt="Saurav Pant" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default About;
