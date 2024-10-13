"use client"
import React from "react";
//import Link from "next/link";
import Image from "next/image";
import { Link,animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useRouter } from 'next/navigation';
import AnimatedWrapper from "./animatedwrapper";
import vector from '../assets/Vector.png';

const HeroSection3 = ({ heroTitle, paragraph, imageSrc, buttonOne, buttonTwo, headercolor, textcolor,backgroundcolor,paddingBottom }) => {

  const scrollToBottom = () => {
   scroll.scrollToBottom();
  };
  
  return (
    <div className={`w-full flex justify-center lg:herobanner pt-8 h-auto py-14 md:pb-12  ${paddingBottom} ${backgroundcolor}`}>
      <div className="hero-section grid grid-cols-1 px-4 md:grid-cols-2 w-full md:w-4/5 ">
     
        <div className="col-span-1 pt-2 ">
        <AnimatedWrapper delay={0.2}>
           <h1 className={`text-3xl font-bold mb-4 leading-normal ${headercolor}`}>{heroTitle}</h1>
         </AnimatedWrapper>
         <AnimatedWrapper delay={0.4}>
         <p className={`text-sm mb-6 leading-relaxed ${textcolor}`}>{paragraph}</p>
        </AnimatedWrapper>
         
          <div className="flex space-x-4">
          {buttonOne && (
            <AnimatedWrapper delay={0.6}>
               <button onClick={scrollToBottom} className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen flex items-center">
            {buttonOne.text}
            <Image src={vector} alt="Bullet Point" className="ml-2" />
          </button>
            </AnimatedWrapper>
         
        )}

                  
          </div>
        </div>
        <div className="col-span-1 ">
          {imageSrc && (
            <div className=" flex justify-center">
              <Image src={imageSrc} alt={heroTitle}  />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
