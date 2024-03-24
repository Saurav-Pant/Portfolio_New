"use client";
import React from "react";
import { Heading2 } from "../Components/Heading_Text";
import StarsCanvas from "../Components/StarBackground";
import BlogCard from "./BlogCard";

type Props = {};

type Blog = {
  id: number;
  title: string;
  link: string;
  img: string;
  category: string;
};

const BlogContainer = (props: Props) => {
  const blogs: Blog[] = require("../contents/Blogs.json");

  return (
    <div className="pt-24 relative">
      <StarsCanvas />
      <span className="flex flex-col justify-center items-start text-left md:w-1/2 pl-10">
        <Heading2>Blogs</Heading2>
      </span>
      <BlogCard />
    </div>
  );
};

export default BlogContainer;
