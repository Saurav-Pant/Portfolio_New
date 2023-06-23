import React from "react";
import { Heading2 } from "./Heading_Text";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="min-h-screen px-16">
      <Heading2 className="">Projects</Heading2>
      {/* A line of buttons for ALl Landing Page ,FrontEnd,MERN, Web3   */}
      <div className="flex flex-row justify-evenly mt-10">
        <button className="border-2 border-black px-4 py-2 rounded-md">
          All
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-md">
          Landing Page
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-md">
          FrontEnd
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-md">
          MERN
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-md">
          Web3
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
