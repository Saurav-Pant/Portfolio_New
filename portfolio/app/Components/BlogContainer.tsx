"use client";
import React from "react";
import { Heading2 } from "../Components/Heading_Text";
import StarsCanvas from "../Components/StarBackground";
import BlogCard from "./BlogCard";
import Blog3DCard from "./Blog3DCard";

type Props = {};

const BlogContainer = (props: Props) => {

  return (
    <div className="pt-24 relative">
      <StarsCanvas />
      <span className="flex flex-col justify-center items-start text-left md:w-1/2 pl-10">
        <Heading2>Blogs</Heading2>
      </span>
      {/* <BlogCard /> */}
      <Blog3DCard/>
    </div>
  );
};

export default BlogContainer;
