"use client";
import React, { useState } from "react";
import { Heading2 } from "../Components/Heading_Text";
import Image from "next/image";
import Link from "next/link";
import All from "../Assets/all_logo.png";
import frontend from "../Assets/frontend_logo.png";
import backend from "../Assets/backend_logo.png";
import OpenSource from "../Assets/open-source.png";
import web3 from "../Assets/web3.png";

type Props = {};

type Blog = {
  id: number;
  title: string;
  link: string;
  img: string;
  category: string;
};

const Blog = (props: Props) => {
  const [filter, setFilter] = useState("All");
  const blogs: Blog[] = require("../contents/Blogs.json");

  const filteredBlogs =
    filter === "All"
      ? blogs
      : blogs.filter((blog) => blog.category.includes(filter));

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const categories = ["All", "Frontend", "Backend", "Open Source", "Web3"];

  return (
    <div className="min-h-screen px-16 pt-24 gap-6">
      <span className="flex flex-col justify-center items-start text-left md:w-1/2">
        <Heading2>Blogs</Heading2>
      </span>
      <div className="flex flex-row justify-center py-10 flex-wrap gap-6">
        {categories.map((category) => (
          <div key={category}>
            <button
              className={`border-2 border-blue-400 px-2 py-2 rounded-md ${
                filter === category ? "bg-blue-300 text-white" : ""
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category === "All" && (
                <div className="inline-block w-4 h-4 mr-1">
                  <Image src={All} alt="all icon" width={16} height={16} />
                </div>
              )}
              {category === "Frontend" && (
                <div className="inline-block w-4 h-4 mr-1">
                  <Image
                    src={frontend}
                    alt="FrontEnd icon"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {category === "Backend" && (
                <div className="inline-block w-4 h-4 mr-1">
                  <Image
                    src={backend}
                    alt="backend icon"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {category === "Open Source" && (
                <div className="inline-block w-4 h-4 mr-1">
                  <Image
                    src={OpenSource}
                    alt="Landing Icon"
                    layout="fixed"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {category === "Web3" && (
                <div className="inline-block w-4 h-4 mr-1">
                  <Image
                    src={web3}
                    alt="Landing Icon"
                    layout="fixed"
                    width={16}
                    height={16}
                  />
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredBlogs.length === 0 ? (
          <div className="text-center mt-10 animate-bounce">
            No blogs found
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col justify-center items-center m-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <Image
                src={blog.img}
                alt="blog"
                width={300}
                height={200}
                className="rounded-t-md"
              />
              <div className="p-4">
                <Link href={blog.link}>{blog.title}</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
