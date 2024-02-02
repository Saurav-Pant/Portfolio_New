"use client";
import React from "react";
import { Heading2 } from "./Heading_Text";
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
};

type Props = {};

const Projects = (props: Props) => {
  const projects: Project[] = require("../contents/Projects.json");

  return (
    <div id="projects" className="min-h-screen px-16 pt-24 overflow-y-hidden">
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2 className="">Projects</Heading2>
      </div>
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
        {projects.length === 0 ? (
          <div
            className="flex justify-center items-center text-center mt-10 animate-bounce 
          text-2xl font-bold text-blue-500"
          >
            No projects found
          </div>
        ) : (
          projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col justify-center items-center m-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              whileHover={{
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)", // Border effect on hover
              }}
            >
              <div className="relative h-56 w-72">
                <Image
                  src={project.image}
                  alt="Project Image"
                  className="rounded-t-md"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between mt-2 gap-10">
                  <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 list-none absolute right-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub
                        size={20}
                        className="hover:text-black transition duration-300 ease-in-out"
                      />
                    </Link>
                  </li>
                  <span className="text-blue-500">{project.name}</span>
                  <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-sky-600 list-none absolute left-4">
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
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
