import React from "react";
import Link from "next/link";
import Image from "next/image";
import BsiSection from "./bsicardsection";
import AnimatedWrapper from "./animatedwrapper";
import SolutionSection from "./solutionsection";

const BsiContainer = ({ sectionTitle, paragraph, headercolor }) => {
  return (
    <div className="w-full flex justify-center py-32  bg-brandblack backgroundimage h-auto ">
      <div className="grid grid-cols-1 w-full gap-6 mb-4 md:grid-cols-2  lg:px-4 md:w-4/5 md:pb-7 pt-2 md:pt-7 px-4 md:px-8" >
        <div className="col-span-1">
          <AnimatedWrapper delay={0.2}>
          <h1 className={`text-3xl font-bold mb-4  text-white leading-normal ${headercolor}`}>{sectionTitle}</h1>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.4}>
          <p className="text-sm text-white mb-6 leading-relaxed">{paragraph}</p>
          </AnimatedWrapper>
        </div>
        <div className="col-span-1">
        <BsiSection />
       
        </div>
        
      </div>



    </div>


  );
};

export default BsiContainer;
