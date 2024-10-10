import React from "react";
import Link from "next/link"; // Import Link

const Text = ({ textTitle, paragraph, buttonOne,backgroundcolor }) => {
  return (
    <div className={`flex flex-col w-full px-4  lg:px-36 md:px-40 pb-8 ${backgroundcolor}`}>
      <div className="pb-6">
        <h1 className="text-3xl text-textgreen pt-6 font-bold leading-normal">{textTitle}</h1>
        <p className="text-sm leading-5">{paragraph}</p>
      </div>
      <div>
      {buttonOne && (
              
              <button className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen " >
               {buttonOne.text}
              </button>
           
          )}
      </div>
     
     
    </div>
  );
};

export default Text;
