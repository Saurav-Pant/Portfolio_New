import React from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import sp from "../Components/sp.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] sm:pl-10 md:pl-20 sm:pt-16">
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2>About</Heading2>
        <h1 className="text-2xl font-semibold pt-5">
          As a front-end developer, I specialize in building and maintaining the
          user interface of web applications.
        </h1>
        <p className="pt-5">
          Hi, my name is Ali Reza and I am a web developer with over 2 years of
          experience in the field. I specialize in front-end development and
          have a strong background in ReactJS. I am always looking to learn and
          grow as a developer, and I am excited to work on new and challenging
          projects.
        </p>
      </div>
      <div>
        
      </div>

      {/* Image Or Animation Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <div>
          <Image src={sp} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default About;
