"use client"
import React, { useState, useEffect } from 'react';

type Props = {};

const BackToTop = (props: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const show = scrollY > 200; 
      setShowButton(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-sky-500 text-white border-none cursor-pointer z-10 
          "
        >
          <span
          className='text-2xl animate-bounce'
          >↑</span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
