// app/about/page.js
"use client"
import HeroSection3 from "../components/herosection3";
import Navbar from "../components/Navbar";
import welcomeimage from "../assets/welcomeimage.svg";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";
import Text from "../components/text"
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import gallery5 from "../assets/gallery5.svg";



export default function Photos() {
  return (
    <div>
     <Navbar currentPage="/gallery"/>
     <HeroSection3
        heroTitle="Capturing moments that inspire our mission"
        paragraph="A Visual Journey Through Our Sustainable Technologies and Eco-Friendly Battery Technologies: A Photo Showcase focus on the visual aspect and the sustainable benefits"
       
        buttonOne={{ text: "CONTACT US", link: "/footer" }}
       
        headercolor="brandblack"
      />
     
        <Gallery 
       imageSrc={gallery5}/>
        <Footer />

    </div>
  );
}
