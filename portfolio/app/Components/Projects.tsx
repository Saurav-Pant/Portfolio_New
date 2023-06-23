"use client"
import React, { useState } from "react";
import { Heading2 } from "./Heading_Text";


type Props = {};

const Projects = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

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
      <div></div>
    </div>
  );
};

export default Projects;

