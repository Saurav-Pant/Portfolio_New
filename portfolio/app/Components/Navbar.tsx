"use client";
import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo2.png";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
      <nav
        className={`flex items-center justify-between flex-wrap p-6 bg-gradient-to-t from-fad0c4 to-ffd1ff ${
          isOpen ? "fixed w-full" : ""
        }`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
              <div className="rounded-full overflow-hidden">
                <Image src={logo} alt="Logo" width={40} height={40} />
              </div>
            </Link>
          </span>
        </div>

        {isMobile ? (
          <div className="block">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline"
              onClick={toggle}
            >
              {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>
        ) : (
          <div className="sm:flex hidden">
            <ul className={isOpen ? "hidden" : "flex"}>
              <li className="inline-block text-gray-500 hover:text-white mr-4">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block text-gray-500 hover:text-white mr-4">
                <Link href="/about">About</Link>
              </li>
              <li className="inline-block text-gray-500 hover:text-white mr-4">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="inline-block text-gray-500 hover:text-white mr-4">
                <Link href="/contact">Blog</Link>
              </li>
            </ul>
          </div>
        )}

        {isOpen && (
          <motion.div
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-screen bg-gradient-to-t from-fad0c4 to-ffd1ff"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col sm:flex-col justify-center items-center">
              <li className="block text-gray-500 hover:text-white mr-4">
                <Link href="/">Home</Link>
              </li>
              <li className="block text-gray-500 hover:text-white mr-4">
                <Link href="/about">About</Link>
              </li>
              <li className="block text-gray-500 hover:text-white mr-4">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="block text-gray-500 hover:text-white mr-4">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
