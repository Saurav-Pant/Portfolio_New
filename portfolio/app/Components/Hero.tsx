"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { HeadingText } from "./Heading_Text";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";

interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[90vh] bg-cover bg-center relative ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-700"
          : "bg-gradient-to-br from-blue-100 via-blue-50 to-blue-50"
      } transition-all duration-500`}
      id="Hero_Section"
    >
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
        <HeadingText>Saurav Pant</HeadingText>
        <p className="">
          <span className="text-xl bg-gradient-to-r from-sky-200 to-blue-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </p>
      </motion.div>
      {/* Down Icon */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4 "
        initial={{
          opacity: 0,
          y: 130,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-black hover:text-blue-500 cursor-pointer order-2 "
        >
          {/* Down Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 animate-bounce rounded-full p-1 hover:bg-blue-400 border border-blue-400 hover:text-white transition duration-300 ease-in-out order-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.5.5 0 01.5.5v9.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L9.5 13.293V3.5A.5.5 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </ScrollLink>
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
        {/* Social Icons */}
        <ul className="absolute bottom-12 left-4 flex flex-col gap-4">
          <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-400 hover:text-black">
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
              href="https://twitter.com/"
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
    </div>
  );
};

export default Hero;
