"use client";
import React, { useState, useEffect, Children } from "react";
import { useTheme } from "next-themes";

type Props = {};

const ThemeButton = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [Mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!Mounted) {
    return null;
  }

  return (

    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <svg
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeButton;
