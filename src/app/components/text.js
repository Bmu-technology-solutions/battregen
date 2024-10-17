import React from "react";
import Link from "next/link"; // Import Link
import AnimatedWrapper from "./animatedwrapper";
import Image from "next/image";
import vector from '../assets/Vector.png';

const Text = ({ textTitle, paragraph, buttonOne,backgroundcolor, Height }) => {
  return (
    <div className={`flex flex-col w-full px-4  lg:px-36 md:px-28  ${Height}`}>
      <div className="py-2">
        <AnimatedWrapper delay={0.2}>
        <h1 className="text-3xl text-textgreen1 pt-4 font-bold leading-normal">{textTitle}</h1>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
        <p className="text-sm leading-7">{paragraph}</p>
        </AnimatedWrapper>
        
      
      </div>
      <div className="flex space-x-4">
          {buttonOne && (
          <button className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen flex items-center">
            {buttonOne.text}
            <Image src={vector} alt="Bullet Point" className="ml-2" />
          </button>
             )}

      </div>
     
     
    </div>
  );
};

export default Text;
