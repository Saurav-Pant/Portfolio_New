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
      bg-gradient-to-br from-blue-300 via-blue-50 to-blue-100 "
      id="Hero_Section"
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-4xl">
        <HeadingText>Saurav Pant </HeadingText>
        <p>
          <span className="text-xl bg-gradient-to-r text-transparent bg-clip-text from-orange-500 to-yellow-500">
            Full Stack Developer
          </span>
        </p>
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
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-white hover:text-black">
            <Link
              href="https://github.com/Saurav-Pant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-white hover:text-sky-600">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} />
            </Link>
          </li>
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-white hover:text-blue-500">
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
