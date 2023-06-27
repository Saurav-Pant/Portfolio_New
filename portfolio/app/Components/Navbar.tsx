// "use client";
// import React, { useState, useEffect } from "react";
// import { RiMenuLine, RiCloseLine } from "react-icons/ri";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Logo from "../Assets/logo.png";
// import { MouseEvent } from "react";

// interface Props {}

// const Navbar: React.FC<Props> = (props: Props) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
//     event.preventDefault(); // Prevent the default behavior

//     setIsOpen(false); // Close the navbar
//   };

//   return (
//     <div>
//       <nav className="flex items-center justify-between flex-wrap p-4 bg-gradient-to-r from-white via-blue-50 to-blue-200  fixed w-full z-50 top-0 shadow-md">
//         <div className="flex items-center flex-shrink-0 text-white  mr-6">
//           <span className="font-semibold text-xl tracking-tight pl-6">
//             <Link href="/">
//               <Image
//                 src={Logo}
//                 width={100}
//                 height={100}
//                 alt="logo"
//                 className="w-12 rounded-full"
//               />
//             </Link>
//           </span>
//         </div>

//         {isMobile ? (
//           <div className="block">
//             <button
//               id="nav-toggle"
//               className="flex items-center px-3 py-2 rounded cursor-default"
//               onClick={toggle}
//             >
//               {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
//             </button>
//           </div>
//         ) : (
//           <div className="sm:flex hidden pr-10">
//             <ul className={isOpen ? "hidden" : "flex"}>
//               <Link href={"/#about"} scroll={false} className="font-medium">
//                 About
//               </Link>
//               <Link href={"/#projects"} scroll={false} className="font-medium">
//                 Projects
//               </Link>
//               <Link href={"/blog"} className="font-medium">
//                 Blogs
//               </Link>
//             </ul>
//           </div>
//         )}

//         {isOpen && (
//           <motion.div
//             className="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-screen relative top-10 shadow-black"
//             initial={{ opacity: 0, y: -70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.7,
//               type: "spring",
//               stiffness: 260,
//               damping: 20,
//             }}
//             style={{ pointerEvents: "auto" }}
//           >
//             <ul
//               className="flex flex-col sm:flex-col justify-center items-center font-light"
//               style={{
//                 fontSize: "1.5rem",
//               }}
//             >
//               <motion.li
//                 className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link href={"/about"} replace onClick={handleNavLinkClick}>
//                   About
//                 </Link>
//               </motion.li>
//               <motion.li
//                 className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link href={"/projects"} replace onClick={handleNavLinkClick}>
//                   Projects
//                 </Link>
//               </motion.li>
//               <motion.li
//                 className="block text-gray-500 hover:text-sky-400 mr-4 mb-3 cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link href={"/blog"} replace onClick={handleNavLinkClick}>
//                   Blog
//                 </Link>
//               </motion.li>
//             </ul>
//           </motion.div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar