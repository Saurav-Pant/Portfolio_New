"use client";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { HeadingText } from "./Heading_Text";
import { motion } from "framer-motion";

interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center  relative shadow-lg 
      bg-gradient-to-br from-blue-100 via-blue-50 to-blue-50 "
      id="Hero_Section"
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-4xl">
        <HeadingText>Saurav Pant </HeadingText>
        <p>
          <span className="text-xl bg-gradient-to-r text-transparent bg-clip-text from-sky-200 to-blue-500">
            Full Stack Developer
          </span>
        </p>
      </div>
      {/* Down Icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button>
          <Link
            href="#About"
            className="text-4xl text-gray-400 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.5.5 0 01.5.5v9.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L9.5 13.293V3.5A.5.5 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </button>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <ul className="absolute bottom-4 left-4 flex flex-col gap-4">
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-black">
            <Link
              href="https://github.com/Saurav-Pant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-sky-600">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-blue-500">
            <Link
              href="https://www.linkedin.com/in/saurav-pant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Hero;
