import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-hero relative shadow-lg"
      id="Hero_Section"
      style={{ marginTop: "-6px", boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold text-white">Saurav Pant</h1>
        <h2 className="text-2xl font-semibold text-white">Software Engineer</h2>
      </div>
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
        <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-white hover:text-blue-600">
          <Link
            href="https://www.linkedin.com/in/saurav-pant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
