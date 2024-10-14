import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = () => {
  return (

      <div className="flex justify-center w-full  top-96 pt-96 absolute md:mt-10    ">
        <iframe
          className="w-11/12  h-full rounded-3xl absolute md:top-2 md:w-4/5  lg:top-10 lg:w-4/5 iframevd "
          src="https://www.youtube.com/embed/zHFd_Zpf03k?si=oTDV9OsTX6ykljEM"  // Replace with your YouTube video ID
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <button className="absolute bg-red-500 p-4 rounded-full shadow-lg hover:shadow-xl">
          <FontAwesomeIcon 
            icon={faPlay} 
            className="text-white text-4xl" 
          />
        </button> */}
      </div>
   
  );
};

export default VideoComponent;