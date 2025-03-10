"use client";

import React, { useState } from 'react';
import { ToastContainer,toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../assets/footerlogo.svg";
import { animateScroll as scroll } from 'react-scroll';
import callicon from "../assets/callicon.svg";
import mailicon from "../assets/mailicon.svg"; // You might want to use this later
import emailjs from '@emailjs/browser';


  

  export const Footer = () => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    const [userInput, setUserInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserInput({
        ...userInput,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
      try {
        const emailParams = {
          name: userInput.name,
          email: userInput.email,
          phone: userInput.phone,
          message: userInput.message
        };
  
        const res = await emailjs.send(serviceID, templateID, emailParams, userID);
  
        if (res.status === 200) {
          toast.success("Message sent successfully!");
          setUserInput({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again later.");
      }
    };
  


  

  return (
    <div className='w-full flex flex-col lg:gap-4 relative bg-white py-5 lg:pt-28 md:w-5/5 text-black h-auto'>
      {/* Image Gallery */}
      <div className='grid grid-cols lg:grid-cols-2 gap-10 px-4 pb-10 lg:px-36 md:px-28'>
        <div className='flex flex-col'>
          
          <div className='grid lg:grid-cols-2 lg:gap-4 text-xs'>
            <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4'>
              <li><Link className='text-black' href="/">HOME</Link></li>
              <li><Link className='text-black' href="/about">BATTREGEN PROPIETARY</Link></li>
              <li><Link className='text-black' href="/solution">SOLUTION</Link></li>
            </ul>
            <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4'>
              <li><Link className='text-black' href="/career">CAREERS</Link></li>
              <li><Link className='text-black' href="/gallery">GALLERY</Link></li>
            </ul>
          </div>

          <div className='pt-16 lg:w-4/5'>
            <Image src={footerlogo} alt="Footer Logo" />
            <div className='text-xs mt-4 leading-6'>
            Revitalizing used batteries and promoting environmental responsibility.
            </div>
          </div>
          <div className='flex items-center text-xs gap-3 pt-7'>
            <Image src={callicon} alt="Call Icon" />
            <p className=''>08114563366</p>
            <Image src={mailicon} alt="Call Icon" />
            <p className=''>info@battregen.com</p>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <h1 className='text-3xl pb-8 font-medium'>Leave your details and we will get back to you shortly!</h1>
         <providers>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
            <input type="text" name="name" value={userInput.name} onChange={handleChange} className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-inputfieldstroke focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Name' required />

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
            <input type="email" name="email" value={userInput.email} onChange={handleChange}className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-inputfieldstroke focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Email' required />

            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone Number</label>
            <input type="text" name="phone" value={userInput.phone} onChange={handleChange}className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-inputfieldstroke focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Phone Number' required />

            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Message</label>
            <textarea name="message" value={userInput.message}  onChange={handleChange} rows="4" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-inputfieldstroke focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message..."></textarea>


            <button type="submit" value= "send" className="flex-nowrap text-white px-4 py-3 rounded-full text-xs w-40 bg-black">
              Send Message
            </button>
            <ToastContainer />
          </form>
          </providers>
        </div>
      </div>
      <div className='flex items-center justify-center lg:justify-start lg:pl-32 lg:pt-0 text-sm'>
        <p>copyright Battregen 2024 design by BMU</p>
      </div>

      <button onClick={scrollToTop} className="absolute bottom-5 left-2 lg:bottom-4 lg:left-8 " aria-label="Scroll to top">
        <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="61" height="61" rx="30.5" fill="#292929" />
          <rect x="1.44545" y="1.44545" width="62.1091" height="62.1091" rx="31.0545" stroke="#5F7495" strokeOpacity="0.8" strokeWidth="1.10909" />
          <path d="M32.4212 45.6187V19.4407M32.4212 19.4407L42.238 29.2574M32.4212 19.4407L22.6045 29.2574" stroke="white" strokeWidth="2.10727" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default Footer;
