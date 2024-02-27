"use client"
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import StarsCanvas from "./StarBackground";
import {Button} from "../Components/ui/moving-border";

interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="h-[90vh] bg-cover bg-center relative bg-black"
      id="Hero_Section"
    >
      <StarsCanvas />
      <motion.div
        className="flex flex-col items-center justify-center h-full text-center text-4xl"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div className="relative mb-5">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Open For Freelance | Internship
            </Button>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 text-center">
            <span
              className="bg-gradient-to-tl from-slate-200 via-gray-400 to-white text-transparent bg-clip-text "
              style={{ WebkitBackgroundClip: "text" }}
            >
              Hi, I'm Saurav <br />{" "}
              <span className="">A Full Stack Developer</span>
            </span>
          </div>
          <div className="text-sm lg:text-xl opacity-75 text-center lg:mt-10 w-2/3 font-medium">
            I build Smooth and Scalable Web applications which People love to
            use with User Friendly Designs
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <ul className="absolute bottom-12 left-4 flex flex-col gap-4">
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 ">
            <Link
              href="https://github.com/Saurav-Pant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-sky-600">
            <Link
              href="https://twitter.com/Saurav_Pant_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-blue-500">
            <Link
              href="https://www.linkedin.com/in/saurav-pant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* Scroll to bottom icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToBottom}
      >
        <motion.div
          className="bg-white rounded-full p-1"
          animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="w-5 h-5 lg:w-7 lg:h-7 text-black" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
