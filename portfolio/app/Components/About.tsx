import React from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import sp from "../Components/sp.jpg";
import ReactTooltip from "react-tooltip";
import "react-tooltip/dist/index.css";

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
    name: "Tailwind CSS",
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
        <h1 className="text-2xl font-semibold pt-5">
          As a front-end developer, I specialize in building and maintaining the
          user interface of web applications.
        </h1>
        <p className="pt-5">
          Hi, my name is Ali Reza and I am a web developer with over 2 years of
          experience in the field. I specialize in front-end development and
          have a strong background in ReactJS. I am always looking to learn and
          grow as a developer, and I am excited to work on new and challenging
          projects.
        </p>
        <div className="flex items-center justify-center pt-5 space-x-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="relative inline-block"
                data-tip={skill.name}
              >
                <Icon size={30} />
                <ReactTooltip
                  place="bottom"
                  effect="solid"
                  className="tooltip bg-gray-800 text-white px-2 py-1 rounded"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Or Animation Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <div>
          <Image src={sp} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default About;
