"use client"

import HeroSection from "./components/herosection";
import Navbar from "./components/Navbar";
import welcomeimage from "./assets/welcomeimage.svg";
import heroimage from "./assets/heroimage.svg";
import VideoComponent from "./components/videopage";
import image1 from "./assets/image1.png";
import WelcomePage from "./components/welcomepage";
//import Card from "./components/card";
import CardSection from "./components/cardsection";
import BsiSection from "./components/bsi";
import BsiContainer from "./components/bsi";
import Gallery from "./components/gallery";
import Footer from "./components/footer";






export default function Home() {

  return (
    <div className="w-full bg-white py-0 mt-0 flex flex-col justify-center items-center h-auto">
       <Navbar currentPage="/"/>
      <HeroSection
        heroTitle="Lead Acid Battery Revitalization: Eco-Friendly Solutions "
        paragraph="Our mission is to play a key role in sustainable energy future by revitalizing used batteries and promoting environmental responsibility."
        imageSrc={heroimage}
        buttonOne= {{ text: "CONTACT US" }}
        buttonTwo={{ text: "LITHIUM SOLUTION", link: "/libr" }}
        headercolor="brandblack"
      />

       <VideoComponent />   
      <WelcomePage
        welcomeTitle={
          <>
            Welcome to <span className="text-textgreen">Battregen</span>
            <br />
          </>
        }
        subheading={<span className="text-xs font-extralight mt-0 text-white leading-none">Battregen Ltd</span>}
        paragraph={
          <>
            Our Mission is to play a key role in sustainable energy future by
            revitalizing used batteries and promoting environmental responsibility.
            Our Vision is to become Africa’s foremost provider of battery regeneration solutions.
            Our Core Values are:
            <br />
            <span className="font-bold">Innovation:</span> Constantly striving for technological advancements and creative
            solutions. <br />
            <span className="font-bold">Sustainability:</span> Prioritizing environmental impact reduction and sustainable practices.
            <span className="font-bold">Integrity:</span> Commitment to honesty, transparency, and ethical practices.
          </>
        }
        imageSrc={welcomeimage}
        buttonOne={{ text: "CONTACT US", link: "/" }}
        headercolor="white"
      />
      



     
      <CardSection
      />
      <BsiContainer
        sectionTitle="Beyond Industrial Batteries: Introducing BSI Micromobility Battery Refurbishment"
        paragraph="Our mission is to play a key role in sustainable energy future by revitalizing used batteries and promoting environmental responsibility."
      />
      <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
      <Footer  />

    </div>
  );
}
