"use client";
import React, { useState } from "react";
import { Heading2 } from "./Heading_Text";

type Project = {
  id: number;
  name: string;
  category: string;
  image: string;
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
    <div id="projects" className="min-h-screen px-16">
      <Heading2 className="">Projects</Heading2>
      {/* A line of buttons for All, Landing Page, FrontEnd, MERN, Web3 */}
      <div className="flex flex-row justify-evenly mt-10">
        <button
          className={`border-2 border-blue-400 px-4 py-2 rounded-md ${
            selectedCategory === "All" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        <button
          className={`border-2 border-blue-400 px-4 py-2 rounded-md ${
            selectedCategory === "Landing Page" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("Landing Page")}
        >
          Landing Page
        </button>
        <button
          className={`border-2 border-blue-400 px-4 py-2 rounded-md ${
            selectedCategory === "FrontEnd" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("FrontEnd")}
        >
          FrontEnd
        </button>
        <button
          className={`border-2 border-blue-400 px-4 py-2 rounded-md ${
            selectedCategory === "MERN" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("MERN")}
        >
          MERN
        </button>
        <button
          className={`border-2 border-blue-400 px-4 py-2 rounded-md ${
            selectedCategory === "Web3" ? "bg-blue-300 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("Web3")}
        >
          Web3
        </button>
      </div>
      <div>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.name} className="w-96 h-96" />
            <div>{project.name}</div>
          </div>
        ))}
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
