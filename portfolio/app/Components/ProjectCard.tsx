"use client"
import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: number;
  name: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
};

type Props = {};

const ProjectCard = (props: Props) => {
  const projects: Project[] = require("../contents/Projects.json");

  return (
    <motion.div
      className="flex flex-wrap justify-center items-center mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="flex flex-col justify-center items-center m-6 rounded-lg bg-gradient-to-br from-black to-gray-900 border border-gray-700 p-4 backdrop-blur-md backdrop-filter bg-opacity-50 hover:bg-opacity-75"
          whileHover={{
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="relative h-56 w-72 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt="Project Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between mt-2 gap-10">
              <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-300 list-none absolute right-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub
                    size={20}
                    className="hover:text-white transition duration-300 ease-in-out"
                  />
                </Link>
              </li>
              <span className="text-blue-300">{project.name}</span>
              <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-300 hover:text-sky-600 list-none absolute left-4">
                <button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <FiExternalLink
                    size={20}
                    className="transition duration-300 ease-in-out"
                  />
                </button>
              </li>
            </div>
          </div>

          <div className="flex justify-center items-center w-full bg-gray-900 py-3 rounded-md">
            {project.stack.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-600 px-3 py-1 rounded-md text-sm mr-2 shadow-md cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;
