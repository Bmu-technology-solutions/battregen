// app/about/page.js

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
     <NavbarTwo
     />
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
          "Battery Solution International "
       }
       text={
        "Unique Proprietary Formula"
     }
       paragraph={<span className="leading-3">Our R&D has led to a breakthrough in battery life extension technology formula, the Battregen Battery Additive & Capsulate.  marking a significant advance in battery longevity. This top-tier solution rejuvenates batteries with its eco-friendly organic compound formula, free from metals and harmful substances. It works fast, revitalizing batteries within days and significantly extending their lifespan, 
       offering customers unparalleled value in terms of efficiency and cost savings. </span>
       }
        />
        <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
        <Footer />

    </div>
  );
}
