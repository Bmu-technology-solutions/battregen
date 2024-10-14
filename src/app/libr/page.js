// app/about/page.js
"use client"
import HeroSection from "../components/herosection";
import solutionimg from "../assets/solutionimg.png";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import NavbarTwo from "../components/navbar2";
import LithiumSolution from "../components/lithiumsolution";



export default function Lithium() {
  return (
    <div>
     <NavbarTwo />
     <HeroSection
        heroTitle={<span className="text-white">Simplifying Battery Maintenance and Replacement: Overcoming Common Hurdles</span>}
        paragraph={<span className="text-white">Battregens offers solutions that enhance battery longevity, reduce expenses, and provide eco-conscious alternatives. 
        battery users are keen to utilize Battregen for improved performance and sustainability benefits.</span>}
        imageSrc={solutionimg}
        buttonOne={{ text: "CONTACT US",  link: "/" }}
        backgroundcolor="bg-brandblack"
        
      />
        <LithiumSolution />
        <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
        <Footer />

    </div>
  );
}
