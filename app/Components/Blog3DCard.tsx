"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";

type Props = {};

type Blog = {
  id: number;
  title: string;
  link: string;
  img: string;
  topic: string[];
};

const Blog3DCard = (props: Props) => {
  const blogs: Blog[] = require("../contents/Blogs.json");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative">
          <CardContainer className="w-96">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem]  rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                // rotateX={10}
                // rotateZ={-10}
                className="w-full mt-4"
              >
                <div className="relative h-56">
                  <Image
                    src={blog.img}
                    alt="blog"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </CardItem>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  <Link
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-all duration-200"
                  >
                    {blog.title}
                  </Link>
                </h3>
                <div className="flex flex-wrap mt-2">
                  {blog.topic.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 text-sm text-white px-2 py-1 rounded-full mr-2 "
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  );
};

export default Blog3DCard;
