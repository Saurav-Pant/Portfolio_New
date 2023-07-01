"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

type Props = {};

const ThemeButton = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="item-navbar flex items-center">
      <div className="flex items-center gap-3">
        <li className="md:flex flex-col-reverse hidden">
          <input
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            checked={theme === "dark"}
            className="hidden"
            type="checkbox"
            id="dark-mode-toggle"
          />
          <label
            className={`w-14 h-8 flex items-center rounded-full cursor-pointer ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            }`}
            htmlFor="dark-mode-toggle"
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </label>
        </li>
      </div>
    </div>
  );
};

export default ThemeButton;
