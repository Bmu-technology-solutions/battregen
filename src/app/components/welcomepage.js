import React from "react";
import Link from "next/link";
import Image from "next/image";
import {animateScroll as scroll, scrollSpy } from 'react-scroll';
import AnimatedWrapper from "./animatedwrapper";
import vector from '../assets/Vector.png';

const WelcomePage = ({ welcomeTitle, paragraph, imageSrc, buttonOne,subheading, welcomecolor }) => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
   };
  return (
    <div className="w-full flex justify-center bg-brandblack  md:pt-44 text-white">
         <div className="hero-section grid grid-cols-1 pb-3 pt-64 mt-5  lg:pb-16  md:pb-16 h-auto md:grid-cols-2  md:h-auto w-full md:w-4/5  md:pt-5 px-4" >
        <div className="col-span-1 pt-7  ">
        <AnimatedWrapper delay={0.2}>
        <h1 className={`text-3xl font-bold mb-4 leading-normal ${welcomecolor}`}>{welcomeTitle}</h1>
        <h4 className="text-sm mb-6 mt-0 leading-none">{subheading}</h4>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.4}>
        <p className="text-sm mb-6 leading-relaxed">{paragraph}</p>
     
     <div className="flex space-x-4">
         {buttonOne && (
          <button onClick={scrollToBottom} className="text-brandblack px-4 py-3 rounded-full text-xs bg-white flex items-center">
            {buttonOne.text}
            <Image src={vector} alt="Bullet Point" className="ml-2" />
          </button>
             )}
     </div>
        </AnimatedWrapper>
        </div>
        <div className="col-span-1 flex items-center justify-center h-auto">
  {imageSrc && (
    <AnimatedWrapper delay={0.6}>
         <div className="mb-4">
      <Image src={imageSrc} alt={welcomeTitle} className="max-w-full h-auto" />
    </div>
    </AnimatedWrapper>
   
  )}
</div>

     
     
    </div>
    </div>
   
  );
};

export default WelcomePage;
