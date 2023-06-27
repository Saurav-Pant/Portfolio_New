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
      {/* A line of buttons for All, Landing Page, FrontEnd, MERN, Web3 */}
      <div className="flex flex-row justify-evenly mt-10 flex-wrap gap-2">
        <button
          className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
            selectedCategory === "All" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        <button
          className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
            selectedCategory === "Landing Page" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("Landing Page")}
        >
          Landing Page
        </button>
        <button
          className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
            selectedCategory === "FrontEnd" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("FrontEnd")}
        >
          FrontEnd
        </button>
        <button
          className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
            selectedCategory === "MERN" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("MERN")}
        >
          MERN
        </button>
        <button
          className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
            selectedCategory === "Web3" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("Web3")}
        >
          Web3
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-16 mt-28">
        {filteredProjects.length === 0 ? (
          <div className="text-center mt-10 animate-bounce">
            No projects found
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              className="flex flex-col items-center rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform"
              key={project.id}
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
              <div className="p-4 text-center">
                <div className="flex justify-between mt-2 gap-10">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-black transition duration-300 ease-in-out"
                  >
                    <FiGithub size={20} />
                  </Link>
                  {project.name}

                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={20} />
                  </Link>
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
