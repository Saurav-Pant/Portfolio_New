"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Saurav Pant
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            onClick={toggle}
          >
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
