import React from "react";
import { Heading2 } from "./Heading_Text";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Heading2>About</Heading2>
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:pt-20">
        <h1 className="text-2xl font-semibold">
          As a front-end developer, I specialize in building and maintaining the
          user interface of web applications.
        </h1>
        <p>
          Hi, my name is Ali Reza and I am a web developer with over 2 years of
          experience in the field. I specialize in front-end development and
          have a strong background in ReactJS. I am always looking to learn and
          grow as a developer, and I am excited to work on new and challenging
          projects.
        </p>
      </div>

      {/* Image Or Animation Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <div>{/* Place your image or animation component here */}</div>
      </div>
    </div>
  );
};

export default About;
