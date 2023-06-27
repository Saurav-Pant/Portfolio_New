"use client"
import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from 'next/navigation'

interface NavLink {
  id: number;
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  {
    id: 1,
    label: "About",
    to: "#about",
  },
  {
    id: 2,
    label: "Projects",
    to: "#projects",
  },
  {
    id: 3,
    label: "Blog",
    to: "blog",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    scroll.scrollToTop({
      spy: true,
      smooth: true,
      duration: 500,
    });
    setIsOpen(false);
    router.push("/"); // Update the URL to the homepage
  };

  const handleNavLinkClick = (to: string) => {
    setIsOpen(false); // Close the navbar
    router.push("/" + to); // Update the URL to the corresponding section
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

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-gradient-to-r from-white via-blue-50 to-blue-200  fixed w-full z-50 top-0 shadow-md">
        <div className="flex items-center flex-shrink-0 text-white  mr-6">
          <span className="font-semibold text-xl tracking-tight pl-6">
            <ScrollLink
              to=""
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
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
            <ul className={isOpen ? "hidden" : "flex"}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="inline-block text-gray-500 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                >
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleNavLinkClick(link.to)}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
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
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavLinkClick(link.to)}
                  >
                    {link.label}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
