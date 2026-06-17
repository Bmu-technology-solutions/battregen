"use client"
import React from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from 'react-scroll';
import AnimatedWrapper from "./animatedwrapper";
import vector from '../assets/Vector.png';

const HeroSection2 = ({
  heroTitle,
  paragraph,
  imageSrc,
  buttonOne,
  buttonTwo,
  headercolor,
  textcolor,
  backgroundcolor,
  paddingBottom,
  showGlow = false,   // 👈 NEW PROP
}) => {

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className={`relative w-full flex justify-center lg:herobanner pt-10 lg:pt-14 lg:h-screen md:h-auto pb-8 md:pb-24 lg:pb-24 ${paddingBottom} ${backgroundcolor}`}>

      {/* 🌟 GLOW EFFECT (OPTIONAL) */}
      {showGlow && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[450px] h-[450px] bg-[#AAFD33] opacity-20 blur-[130px] rounded-full" />
        </div>
      )}

      <div className="hero-section relative z-10 grid grid-cols-1 px-4 md:grid-cols-2 w-full md:w-4/5 ">

        {/* LEFT CONTENT */}
        <div className="col-span-1 pt-2 lg:pt-12">
          <AnimatedWrapper delay={0.2}>
            <h1 className={`text-3xl font-bold mb-4 leading-normal ${headercolor}`}>
              {heroTitle}
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4}>
            <p className={`text-sm mb-6 leading-relaxed ${textcolor}`}>
              {paragraph}
            </p>

            <div className="flex space-x-4">
              {buttonOne && (
                <button
                  onClick={scrollToBottom}
                  className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen flex items-center"
                >
                  {buttonOne.text}
                  <Image src={vector} alt="Bullet Point" className="ml-2" />
                </button>
              )}

              {buttonTwo && (
                <Link href={buttonTwo.link}>
                  <button className="bg-black text-white px-4 py-3 rounded-full text-xs">
                    {buttonTwo.text}
                  </button>
                </Link>
              )}
            </div>
          </AnimatedWrapper>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-span-1 lg:pt-10 md:pt-16">
          {imageSrc && (
            <AnimatedWrapper delay={0.6}>
              <div className="flex justify-center">
                <Image src={imageSrc} alt="hero image" />
              </div>
            </AnimatedWrapper>
          )}
        </div>

      </div>
    </div>
  );
};

export default HeroSection2;