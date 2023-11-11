import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 mt-24 text-gray-500">
      <p className="text-sm font-bold flex items-center">
        Developed with{" "}
        <span className="text-red-500">
          <FaHeart className="mx-1" />
        </span>
        by 
        <span className="text-blue-500 mx-1">
        Saurav Pant
        </span>
         ©2023
      </p>
    </div>
  );
};

export default Footer;
