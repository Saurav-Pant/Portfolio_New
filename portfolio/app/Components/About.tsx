import React from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import sp from "../Components/sp.jpg";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

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
    icon: SiJavascript,
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
    icon: SiTypescript,
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
    <div className="flex flex-col md:flex-row min-h-[80vh] sm:pl-10 md:pl-20 sm:pt-16">
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2>About</Heading2>
        <h1 className="text-2xl font-bold pt-5">
          Experienced Full Stack Web Developer | Specializing in MERN Stack
        </h1>
        <p className="pt-5 font-medium">
          Hi, I'm Saurav Pant, an experienced full stack web developer with 2+
          years of expertise. I specialize in MERN stack development, leveraging
          MongoDB, Express.js, React, and Node.js. I excel in creating scalable
          web applications, integrating APIs, and ensuring top-notch
          performance. With a problem-solving mindset and a keen eye for detail,
          I deliver exceptional user experiences.
        </p>
        <div className="flex items-center justify-center pt-5 space-x-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.id} className="relative inline-block group">
                <Icon size={30} />
                <span
                  className="opacity-0 absolute top-7 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 bg-white px-2 py-1 rounded-md shadow-lg transition duration-300 ease-in-out
                "
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Or Animation Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <div>
          <Image src={sp} alt="Saurav Pant" />
        </div>
      </div>
    </div>
  );
};

export default About;
