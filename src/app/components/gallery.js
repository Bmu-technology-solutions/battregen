import React from 'react';
import Image from "next/image";
import gallery1 from "../assets/gallery1.svg";
import gallery2 from "../assets/gallery2.svg";
import gallery3 from "../assets/gallery3.svg";
import gallery4 from "../assets/gallery4.svg";
import AnimatedWrapper from './animatedwrapper';
import vector from '../assets/Vector.png';

function Gallery({ buttonOne }) {
  return (
    <div className="relative w-full flex flex-col gap-4 bg-brandblack py-28 text-white lg:px-10 h-auto overflow-hidden">

      {/* 🌟 GLOW BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#AAFD33] opacity-15 blur-[140px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TOP SECTION */}
        <div className='grid grid-cols-1 px-4 lg:gap-12 md:grid-cols-2 md:px-28 lg:grid-cols-2 justify-center'>

          <div className='flex flex-col'>
            <AnimatedWrapper delay={0.2}>
              <h1 className='text-3xl'>Gallery</h1>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.4}>
              <p className='text-xs font-extralight pt-3'>
                A visual documentation of our battery revitalization projects — highlighting the science, process, and impact behind restoring lead-acid batteries to optimal performance. This gallery reflects our mission to merge technology with sustainability.
              </p>
            </AnimatedWrapper>
          </div>

          <div className="flex w-full flex-col lg:items-end md:items-end pt-4">
            {buttonOne && (
              <AnimatedWrapper delay={0.6}>
                <button className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen flex items-center">
                  {buttonOne.text}
                  <Image src={vector} alt="Bullet Point" className="ml-2" />
                </button>
              </AnimatedWrapper>
            )}
          </div>

        </div>

        {/* IMAGE GRID */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 px-4 md:mx-24 py-4'>

          <div className='flex flex-col'>
            <AnimatedWrapper delay={0.8}>
              <h1 className='text-xs pb-2'>Before revitalization</h1>
              <Image src={gallery1} alt="Gallery Image 1" />
            </AnimatedWrapper>
          </div>

          <div className='flex flex-col'>
            <AnimatedWrapper delay={0.8}>
              <h1 className='pb-2 text-xs'>After revitalization</h1>
              <Image src={gallery2} alt="Gallery Image 2" />
            </AnimatedWrapper>
          </div>

          <div className='flex flex-col'>
            <AnimatedWrapper delay={1.0}>
              <Image src={gallery3} alt="Gallery Image 3" />
            </AnimatedWrapper>
          </div>

          <div className='flex flex-col'>
            <AnimatedWrapper delay={1.0}>
              <Image src={gallery4} alt="Gallery Image 4" />
            </AnimatedWrapper>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Gallery;