"use client";
import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../Assets/logo.png";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the navbar
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-gradient-to-r from-white via-blue-50 to-blue-200  fixed w-full z-50 top-0 shadow-md">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight pl-6">
            <ScrollLink to="home" smooth={true} duration={500}>
              <Image
                src={Logo}
                width={100}
                height={100}
                alt="logo"
                className="w-12 rounded-full"
              />
            </ScrollLink>
          </span>
        </div>

        {isMobile ? (
          <div className="block">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 rounded cursor-default"
              onClick={toggle}
            >
              {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>
        ) : (
          <div className="sm:flex hidden pr-10">
            <ul className={isOpen ? "hidden" : "flex gap-4"}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                <li className="font-medium">About</li>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                <li className="font-medium">Projects</li>
              </ScrollLink>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                <li className="font-medium">Blog</li>
              </ScrollLink>
            </ul>
          </div>
        )}

        {isOpen && (
          <motion.div
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-screen relative top-10 shadow-black"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{ pointerEvents: "auto" }}
          >
            <ul
              className="flex flex-col sm:flex-col justify-center items-center font-light"
              style={{
                fontSize: "1.5rem",
              }}
            >
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleNavLinkClick}
                activeClass="active"
              >
                <motion.li
                  className="block text-gray-500 hover:text-sky-400 mb-3 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About
                </motion.li>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleNavLinkClick}
                activeClass="active"
              >
                <motion.li
                  className="block text-gray-500 hover:text-sky-400 mb-3 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Projects
                </motion.li>
              </ScrollLink>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleNavLinkClick}
                activeClass="active"
              >
                <motion.li
                  className="block text-gray-500 hover:text-sky-400 mb-3 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Blog
                </motion.li>
              </ScrollLink>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
