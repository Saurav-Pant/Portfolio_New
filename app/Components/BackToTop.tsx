"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

const BackToTop = (props: Props) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const show = scrollY > 180;
      setShowButton(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-9 right-4 lg:right-8 p-4 rounded-full bg-sky-500 text-white border-none cursor-pointer z-10"
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 9,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <span className="text-2xl animate-bounce">↑</span>
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;
