// app/about/page.js
"use client"
import HeroSection3 from "../components/herosection3";
import Navbar from "../components/Navbar";
import Role from "../components/role"
import Gallery from "../components/gallery";
import Footer from "../components/footer";



export default function Career() {
  return (
    <div>
     <Navbar currentPage="/career"/>
     <HeroSection3
        heroTitle="Ready to live your dream?"
        paragraph="Come join a team that's redefining the financial experience for millions of people in emerging markets.."
       
        buttonOne={{ text: "CONTACT US", link: "/" }}
        headercolor="brandblack"
      />
     
        <Role 
        />
        
      <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
      <Footer />

    </div>
  );
}
