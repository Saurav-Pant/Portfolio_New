"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

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

    if (pathname === "/blog") {
      router.push("/");
    }
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

    if (to === "about" || to === "projects") {
      window.location.href = `/#${to}`;
    } else if (to === "blog") {
      window.location.href = `/blog`;
    } else {
      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <nav
        ref={navbarRef}
        className="flex items-center justify-between flex-wrap p-4 bg-black fixed w-full z-50 top-0 shadow-md"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight pl-6">
            <div
              className="rounded-full overflow-hidden cursor-pointer"
              onClick={handleLogoClick}
            >
              <Image src={logo} alt="Logo" width={40} height={40} />
            </div>
          </span>
        </div>

        {isMobile ? (
          <div className="block">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 rounded cursor-default hover:bg-sky-400 transition-colors duration-500 ease-in-out"
              onClick={toggle}
            >
              {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>
        ) : (
          <div className="sm:flex hidden pr-10">
            <ul className={isOpen ? "hidden" : "flex"}>
              <li
                className="inline-block text-gray-300 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </li>
              <li
                className="inline-block text-gray-300 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("projects")}
              >
                Projects
              </li>
              <li
                className="inline-block text-gray-300 hover:text-white transition-colors duration-500 ease-in-out mr-4 cursor-pointer"
                onClick={() => handleNavLinkClick("blog")}
              >
                Blogs
              </li>
            </ul>
          </div>
        )}

        {isOpen && (
          <motion.div
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-screen relative top-10 shadow-black"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
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
                Blogs
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
