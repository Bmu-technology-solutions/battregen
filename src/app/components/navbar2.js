"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../assets/logo.svg";
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({currentPage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => currentPage === path;

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="w-full bg-brandblack flex items-center justify-center px-2 md:px-0 border-brandblack">
      <nav className="bg-brandblack w-full mt-4 md:w-4/5 rounded-2xl border border-cardoutline md:rounded-3xl lg:rounded-full ">
        <div className="w-full px-2 sm:px-6 lg:pr-2 lg:pl-10">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`hamburger-icon block h-6 w-6 transition-transform duration-200 ${isOpen ? 'transform rotate-45' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center justify-evenly space-x-8">
              {['/', '/about', '/solution', '/career', '/gallery'].map((path) => (
                <Link key={path} href={path}>
                  <span className={`text-xs font-normal ${isActive(path) ? 'text-brandgreen' : 'text-white'}`}>
                  {path === '/' ? 'HOME' : path === '/about' ? 'BATTREGEN PROPRIETIARY' : path.substring(1).toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <button onClick={scrollToBottom} className="bg-brandwhite px-4 py-2 text-xs font-medium text-brandblack bg-brandgreen rounded-full">
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"} lg:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['/', '/about', '/solution', '/career', '/gallery'].map((path) => (
              <Link key={path} href={path} onClick={() => setIsOpen(false)}>
                <span className={`block px-3 py-2 text-xs font-normal ${isActive(path) ? 'text-brandgreen' : 'text-white'}`}>
                  {path === '/' ? 'HOME' : path === '/about' ? 'BATTREGEN PROPRIETIARY' : path.substring(1).toUpperCase()}
                </span>
              </Link>
            ))}
            <button onClick={scrollToBottom} className="block w-full text-left bg-brandwhite px-4 py-2 text-xs font-medium text-brandblack bg-brandgreen rounded-full mt-4">
              CONTACT US
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
