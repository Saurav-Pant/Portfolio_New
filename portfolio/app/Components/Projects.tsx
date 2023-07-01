"use client";
import React, { useState } from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import landing from "../Assets/landing_logo.png";
import frontend from "../Assets/frontend_logo.png";
import backend from "../Assets/backend_logo.png";
import all from "../Assets/all_logo.png";
import web3 from "../Assets/web3.png";
import { motion } from "framer-motion";

type Project = {
  id: number;
  name: string;
  category: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

type Props = {};

const Projects = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState("");

  const projects: Project[] = require("../contents/Projects.json");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryHover = (category: string) => {
    setHoveredCategory(category);
  };

  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Landing Page",
    },
    {
      id: 3,
      name: "FrontEnd",
    },
    {
      id: 4,
      name: "MERN",
    },
    {
      id: 5,
      name: "Web3",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div id="projects" className="min-h-screen px-16 pt-24 overflow-y-hidden">
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2 className="">Projects</Heading2>
      </div>
      <div className="flex flex-row justify-center py-10 flex-wrap gap-6">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`relative border-2 border-blue-400 px-2 py-2 rounded-md ${
              selectedCategory === category.name ? "bg-blue-300 text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
            onMouseEnter={() => handleCategoryHover(category.name)}
            onMouseLeave={() => handleCategoryHover("")}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {category.name === "Landing Page" && (
              <div className="inline-block w-4 h-4 mr-1">
                <Image
                  src={landing}
                  alt="backend icon"
                  width={16}
                  height={16}
                  title="Landing Page"
                />
              </div>
            )}
            {category.name === "All" && (
              <div className="inline-block w-4 h-4 mr-1">
                <Image src={all} alt="all icon" width={16} height={16} />
              </div>
            )}
            {category.name === "FrontEnd" && (
              <div className="inline-block w-4 h-4 mr-1">
                <Image
                  src={frontend}
                  alt="FrontEnd icon"
                  width={16}
                  height={16}
                />
              </div>
            )}
            {category.name === "MERN" && (
              <div className="inline-block w-4 h-4 mr-1">
                <Image
                  src={backend}
                  alt="backend icon"
                  width={16}
                  height={16}
                  color="red"
                />
              </div>
            )}
            {category.name === "Web3" && (
              <div className="inline-block w-4 h-4 mr-1">
                <Image
                  src={web3}
                  alt="Landing Icon"
                  layout="fixed"
                  width={16}
                  height={16}
                />
              </div>
            )}
            {hoveredCategory === category.name && (
              <div className="opacity-100 absolute top-full left-1/2 -translate-x-1/2 translate-y-1/2 px-2 py-1 rounded-md shadow-lg transition duration-300 ease-in-out">
                {category.name}
              </div>
            )}
          </motion.button>
        ))}
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
        {filteredProjects.length === 0 ? (
          <div
            className="flex justify-center items-center text-center mt-10 animate-bounce 
          text-2xl font-bold text-blue-500"
          >
            No projects found
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center m-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
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
                  <span className="text-black">{project.name}</span>
                  <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-sky-600 list-none absolute left-4">
                    <button
                      // href={project.liveUrl}
                      // {/* href="" */}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      onClick={() =>
                        alert(
                          "This project is not hosted yet but will be hosted soon"
                        )
                      }
                    >
                      <FiExternalLink
                        size={20}
                        className="transition duration-300 ease-in-out"
                      />
                    </button>
                  </li>
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
