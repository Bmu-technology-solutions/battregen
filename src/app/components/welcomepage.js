import React from "react";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import AnimatedWrapper from "./animatedwrapper";
import vector from "../assets/Vector.png";

const WelcomePage = ({
  welcomeTitle,
  paragraph,
  imageSrc,
  buttonOne,
  subheading,
  welcomecolor,
}) => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="relative w-full flex justify-center bg-brandblack py-20 text-white overflow-hidden">

      {/* 🌟 GLOW BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#AAFD33] opacity-15 blur-[140px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 hero-section grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 px-4 md:px-0">

        {/* LEFT SIDE */}
        <div className="col-span-1">
          <AnimatedWrapper delay={0.2}>
            <h1 className={`text-3xl font-bold mb-4 leading-normal ${welcomecolor}`}>
              {welcomeTitle}
            </h1>

            <h4 className="text-sm mb-6 mt-0 leading-none">
              {subheading}
            </h4>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4}>
            <p className="text-sm mb-6 leading-relaxed">
              {paragraph}
            </p>

            <div className="flex space-x-4">
              {buttonOne && (
                <button
                  onClick={scrollToBottom}
                  className="text-brandblack px-4 py-3 rounded-full text-xs bg-white flex items-center"
                >
                  {buttonOne.text}
                  <Image src={vector} alt="Bullet Point" className="ml-2" />
                </button>
              )}
            </div>
          </AnimatedWrapper>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1 flex items-center justify-center h-auto">
          {imageSrc && (
            <AnimatedWrapper delay={0.6}>
              <div className="pt-8">
                <Image
                  src={imageSrc}
                  alt={welcomeTitle}
                  className="max-w-full h-auto"
                />
              </div>
            </AnimatedWrapper>
          )}
        </div>

      </div>
    </div>
  );
};

export default WelcomePage;