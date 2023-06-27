"use client";
import React from "react";
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
  },
  {
    id: 2,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 3,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "How to use React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
    img: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Blog = (props: Props) => {
  return (
    <div id="blog" className="min-h-screen px-16 pt-24">
      <Heading2>Blogs</Heading2>
      <div className="flex flex-wrap justify-center items-center">
        {blogs.map((blog) => (
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
