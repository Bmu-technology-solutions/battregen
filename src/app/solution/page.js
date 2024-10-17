// app/about/page.js
"use client"

import HeroSection2 from "../components/herosection2";
import Navbar from "../components/Navbar";
import solutionimg from "../assets/solutionimg.png";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";
import Text from "../components/text"
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import BsiContainer from "../components/bsi";
import NavbarTwo from "../components/navbar2";
import SolutionContainer from "../components/solution";



export default function Solution() {
  return (
    <div>
      
     <NavbarTwo currentPage="/solution"/>
      
    
     <HeroSection2
        heroTitle={<span className="text-white">Simplifying Battery Maintenance and Replacement: Overcoming Common Hurdles</span>}
        paragraph={<span className="text-white">Battregens offers solutions that enhance battery longevity, reduce expenses, and provide eco-conscious alternatives. 
        battery users are keen to utilize Battregen for improved performance and sustainability benefits.</span>}
        imageSrc={solutionimg}
        buttonOne={{ text: "CONTACT US",  link: "/" }}
        backgroundcolor="bg-brandblack"
        paddingBottom="pb-0"
        
      />
      <SolutionContainer 
       sectionTitle="Unlocking the Benefits of Refurbished Products for End-Users"
       paragraph="Our R&D has led to a breakthrough in battery life extension technology formula, marking a significant advance in battery longevity.
        This top-tier solution rejuvenates batteries with its eco-friendly organic compound formula, free from metals and harmful substances.
         It works fast, offering customers unparalleled value in terms of efficiency and cost savings. "
      />
     <Text 
         textTitle={
          "How It Works? "
       }
      
       paragraph={<span className="leading">Our technology monitors and restores industrial battery cells to near original capacity through regular maintenance. Each 2v cell is treated as an independent unit, 
       allowing for precise quality checks. If a cell needs refurbishing, it is serviced thoroughly, including our natural BSI Battery Additive, which ensures it meets high standards. <br/>
        Over the past three years, all industrial batteries, including deep discharge ones refurbished by BSI, have maintained excellent efficiency. We credit this to our proven method, which ensures a consistent energy supply and cuts down on battery replacement and maintenance costs for our clients. This method results in significant savings and improved efficiency, drawing more industries to our sustainable solutions that enhance performance while reducing environmental impact.
         </span>
         
       }
       Height=" h-auto pb-24 pt-14 " 
        />
        <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
        <Footer />

    </div>
  );
}
