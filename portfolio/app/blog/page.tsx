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

const blogs = [
  {
    id: 1,
    title: "Server Side Rendering vs Client Side Rendering",
    link: "https://sauravblog.hashnode.dev/demystifying-client-side-server-side-rendering",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Frontend,All",
  },
  {
    id: 2,
    title: "Removing Navbar/Footer on Login Page",
    link: "https://sauravblog.hashnode.dev/removing-navbar-and-footer-on-loginregistration-page-a-cleaner-user-experience",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Frontend,All",
  },
  {
    id: 3,
    title: "A Guide to Open Source Collaboration",
    link: "https://sauravblog.hashnode.dev/mastering-git-a-beginners-guide-to-open-source-collaboration",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Open Source,All",
  },
  {
    id: 4,
    title: "Binary Search Algorithm",
    link: "https://sauravblog.hashnode.dev/binary-search-algorithm",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Frontend,All",
  },
];

const Blog = (props: Props) => {
  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category.includes(filter));

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const categories = ["All", "Frontend", "Backend", "Open Source", "Web3"];

  return (
    <div className="min-h-screen px-16 pt-24 gap-6">
      <span className="flex flex-col justify-center items-start text-left md:w-1/2">
        {" "}
        <Heading2>Blogs</Heading2>
      </span>
      <div className="flex flex-row justify-center py-10 flex-wrap gap-6">
        {categories.map((category) => (
          <button
            key={category}
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
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredBlogs.length === 0 ? (
          <div className="text-center mt-10 animate-bounce">
            No projects found
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col justify-center items-center m-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out "
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
