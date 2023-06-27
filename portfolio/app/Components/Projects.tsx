"use client";
import React, { useState } from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

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
  const projects: Project[] = require("../contents/Projects.json");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ["All", "Landing Page", "FrontEnd", "MERN", "Web3"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div id="projects" className="min-h-screen px-16 pt-24">
      <span className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2 className="">Projects</Heading2>
      </span>
      <div className="flex flex-row justify-center py-10 flex-wrap gap-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
              selectedCategory === category ? "bg-blue-300 text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center mt-28">
        {filteredProjects.length === 0 ? (
          <div className="text-center mt-10 animate-bounce">
            No projects found
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center m-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="relative h-72 w-80">
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
                  <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 list-none">
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

                  {project.name}

                  <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-sky-600 list-none">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink
                        size={20}
                        className="transition duration-300 ease-in-out"
                      />
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;

//   ,
//   {
//     "id": 2,
//     "name": "Dietician Website",
//     "category": "All,Landing Page",
//     "image": "Assets/dietician-website.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Github Finder",
//     "category": "All,FrontEnd",
//     "image": "Assets/github-finder.jpg"
//   },
//   {
//     "id": 4,
//     "name": "Blood Donation Project",
//     "category": "All,MERN",
//     "image": "Assets/blood-donation-project.jpg"
//   },
//   {
//     "id": 5,
//     "name": "Project 5",
//     "category": "All,Web3",
//     "image": "Assets/project-5.jpg"
//   }
