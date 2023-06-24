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
          <div key={blog.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
            <Link href={blog.link} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-w-3 aspect-h-2 hover:shadow-xl">
                <Image
                  src={blog.img}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-auto mt-4 rounded-xl"
                />
              </div>
            </Link>
            <p
              className="text-center mt-4 text-sm
            md:text-base lg:text-lg font-semibold
            text-gray-700">
              {blog.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
