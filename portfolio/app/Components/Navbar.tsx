"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
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

  const handleNavLinkClick = (to: string) => {
    setIsOpen(false);
    if (to === "blog") {
      window.location.href = "/blog";
    } else {
      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${to}`);
      }
    }
  };

  return (
    <div>
      <nav
        ref={navbarRef}
        className="flex items-center justify-between flex-wrap p-4 bg-gradient-to-r from-white via-blue-50 to-blue-200 fixed w-full z-50 top-0 shadow-md"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight pl-6">
            <div
              className="rounded-full overflow-hidden"
              onClick={handleLogoClick}
            >
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
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
            <ul className={isOpen ? "hidden" : "flex"}>
              <li
                className="inline-block text-gray-500 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </li>
              <li
                className="inline-block text-gray-500 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("projects")}
              >
                Projects
              </li>
              <li
                className="inline-block text-gray-500 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("blog")}
              >
                Blog
              </li>
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
              <motion.li
                className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </motion.li>
              <motion.li
                className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavLinkClick("projects")}
              >
                Projects
              </motion.li>
              <motion.li
                className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavLinkClick("blog")}
              >
                Blog
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
