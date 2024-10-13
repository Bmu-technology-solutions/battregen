// app/about/page.js
"use client"

import HeroSection2 from "../components/herosection2";
import Navbar from "../components/Navbar";
import solutionimage from "../assets/solutionimage.svg";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";
import Text from "../components/text"
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import BsiContainer from "../components/bsi";
import NavbarTwo from "../components/navbar2";



export default function Solution() {
  return (
    <div>
      
     <NavbarTwo currentPage="/solution"/>
      
    
     <HeroSection2
        heroTitle={<span className="text-white">Simplifying Battery Maintenance and Replacement: Overcoming Common Hurdles</span>}
        paragraph={<span className="text-white">Battregens offers solutions that enhance battery longevity, reduce expenses, and provide eco-conscious alternatives. 
        battery users are keen to utilize Battregen for improved performance and sustainability benefits.</span>}
        imageSrc={solutionimage}
        buttonOne={{ text: "CONTACT US",  link: "/" }}
        backgroundcolor="bg-brandblack"
        paddingBottom="pb-0"
        
      />
      <BsiContainer 
       sectionTitle="Beyond Industrial Batteries: Introducing BSI Micromobility Battery Refurbishment"
       paragraph="Our mission is to play a key role in sustainable energy future by revitalizing used batteries and promoting environmental responsibility."
      />
     <Text 
         textTitle={
          "How It Works? "
       }
      
       paragraph={<span className="leading-3">Our technology monitors and restores industrial battery cells to near original capacity through regular maintenance. Each 2v cell is treated as an independent unit, 
       allowing for precise quality checks. If a cell needs refurbishing, it's serviced thoroughly, including our natural BSI Battery Additive, which ensures it meets high standards. <br/>
        Over the past three years, all industrial batteries, including deep discharge ones refurbished by BSI, have maintained excellent efficiency. We credit this to our proven method, which ensures a consistent energy supply and cuts down on battery replacement and maintenance costs for our clients. This method results in significant savings and improved efficiency, drawing more industries to our sustainable solutions that enhance performance while reducing environmental impact.
         </span>
       }
      
        />
        <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
        <Footer />

    </div>
  );
}
