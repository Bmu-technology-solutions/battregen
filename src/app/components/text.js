import React from "react";
import Link from "next/link"; // Import Link
import AnimatedWrapper from "./animatedwrapper";
import Image from "next/image";
import vector from '../assets/Vector.png';

const Text = ({ textTitle, paragraph, buttonOne,backgroundcolor }) => {
  return (
    <div className={`flex flex-col w-full px-4  lg:px-36 md:px-40 pb-8 ${backgroundcolor}`}>
      <div className="pb-6">
        <AnimatedWrapper delay={0.2}>
        <h1 className="text-3xl text-textgreen1 pt-6 font-bold leading-normal">{textTitle}</h1>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
        <p className="text-sm leading-5">{paragraph}</p>
        </AnimatedWrapper>
        
      
      </div>
      <div className="flex space-x-4">
      {buttonOne && (
        <AnimatedWrapper delay={0.6}>
          <button className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen ">
          {buttonOne.text}
            <Image src={vector} alt="Bullet Point" className="ml-2" />
          </button>
        </AnimatedWrapper>
      )}

      </div>
     
     
    </div>
  );
};

export default Text;
