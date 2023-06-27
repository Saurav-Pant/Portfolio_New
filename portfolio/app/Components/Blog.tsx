"use client";
import React, { useState } from "react";
import { Heading2 } from "./Heading_Text";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const blogs = [
  {
    id: 1,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Frontend",
  },
  {
    id: 1,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Backend",
  },
  {
    id: 1,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Open Source",
  },
  {
    id: 1,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Web3",
  },

];

const Blog = (props: Props) => {
  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const categories = ["All", "Frontend", "Backend", "Open Source", "Web3"];

  return (
    <div id="blog" className="min-h-screen px-16 pt-24 gap-6">
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
            onClick={() => setFilter(category)}
          >
            {category}
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
              className="flex flex-col justify-center items-center m-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
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
