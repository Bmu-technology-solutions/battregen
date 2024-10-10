import React from "react";
import Image from "next/image";
import bullet from "../assets/bullet.svg"; // Adjust the path as necessary

const Advantage = ({ welcomeTitle, paragraph, imageSrc, subhead, welcomecolor }) => {
  return (
    <div className="w-full flex justify-center bg-brandgreen py-14 px-4 text-black pt-12 mt-6 lg:mt-0 md:mt-0">
      <div className="grid grid-cols-1 w-full gap-4 md:w-4/5 md:grid-cols-2">
        
        {/* Top - Image */}
        <div className="flex justify-center items-center md:mb-0">
          {imageSrc && (
            <Image src={imageSrc} alt={welcomeTitle} className="max-w-full h-auto" />
          )}
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          <h1 className={`text-3xl font-bold mb-4 leading-normal ${welcomecolor}`}>{welcomeTitle}</h1>
          <h4 className="text-sm leading-5">{subhead}</h4>
          <p className="text-sm mb-6 leading-5">{paragraph}</p>
          
          {/* List of Advantages */}
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Breakthrough Creation
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Extends lifespan
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Boosts longevity
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Unmatched efficiency
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Eco-friendly formula
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Improves performance            
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Fast-acting            
            </li>
            <li className="flex items-center">
              <Image src={bullet} alt="Bullet Point" className="mr-2" />
              Great for sustainable energy              
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Advantage;
