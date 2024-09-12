import React from "react";
import { Heading2 } from "./Heading_Text";
import ProjectCard from "./ProjectCard";
import Project3DCard from "./Project3DCard";

type Project = {
  id: number;
  name: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
};

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="min-h-screen px-16 pt-24 overflow-y-hidden">
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2 className="">Projects</Heading2>
      </div>
      {/* <ProjectCard/> */}
      <Project3DCard/>
    </div>
  );
};

export default Projects;
