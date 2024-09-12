"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

type Blog = {
  id: number;
  title: string;
  link: string;
  img: string;
  category: string;
  topic: string[];
};


const BlogCard = (props: Props) => {
    const blogs: Blog[] = require("../contents/Blogs.json");
  return (
    <motion.div
    className="flex flex-wrap justify-center items-center gap-10 pt-10"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 20,
    }}
  >
    {blogs.map((blog) => (
      <motion.div
        key={blog.id}
        className="flex flex-col justify-center items-center m-4 rounded-md bg-gradient-to-br from-black to-gray-900 border border-gray-700 p-4 backdrop-blur-md backdrop-filter bg-opacity-30 hover:bg-opacity-50 shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden lg:mx-10"
        whileHover={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative h-56 w-80 rounded-md overflow-hidden">
          <Image
            src={blog.img}
            alt="blog"
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="p-4 text-sky-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700 transition-all duration-200"
            >
              {blog.title}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </motion.div>  )
}

export default BlogCard