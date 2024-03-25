"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  id: number;
  name: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
  desc: string;
};

export default function Project3DCard() {
  const projects: Project[] = require("../contents/Projects.json");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="relative">
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <div className="flex justify-between items-center mb-4">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                <div className="flex items-center space-x-4">
                  <CardItem
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ={20}
                    className="text-xs font-normal dark:text-white"
                  >
                    <FiGithub size={20} />
                  </CardItem>
                  <CardItem
                    as="button"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    translateZ={20}
                    className="text-xs font-normal dark:text-white hover:text-sky-400 transition-all duration-150 ease-out"
                  >
                    <FiExternalLink size={20} />
                  </CardItem>
                </div>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.desc}
              </CardItem>
              <CardItem
                translateZ="50"
                // rotateX={10}
                // rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={project.image}
                  height="600"
                  width="800"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem>
                <div className="flex justify-center items-center w-full mt-4 py-3 rounded-md">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-[#404258] text-white px-3 py-1 rounded-md text-sm mr-2 shadow-md cursor-pointer"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  );
}
