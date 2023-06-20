import React from "react";
import backgroundImage from "../Assets/Hero_Background.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default Hero;
