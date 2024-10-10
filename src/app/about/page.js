// app/about/page.js
"use client";
import HeroSection2 from "../components/herosection2";
import Navbar from "../components/Navbar";
import welcomeimage2 from "../assets/welcomeimage2.svg";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";
import Text from "../components/text"
import Gallery from "../components/gallery";
import Footer from "../components/footer";



export default function About() {
  return (
    <div>
      <Navbar />
      <HeroSection2
        heroTitle="Exceptional Battery Reconditioning for Reliable, Long-Lasting Performance "
        paragraph="Our Mission is to play a key role in sustainable energy future by revitalizing used batteries and promoting environmental responsibility."
        imageSrc={welcomeimage2}
        buttonOne={{ text: "CONTACT US" }}

        headercolor="brandblack"
      />
      <Advantage
        welcomeTitle={
          "Advantages of Battregen Additive & Capsulate:"

        }
        subhead={<span className="leading-3">Our mission is to recondition batteries sustainably, streamline maintenance, recycle materials,
          and reduce the costs associated with the upkeep of electric micro-mobility vehicles and industrial mover batteries.</span>
        }


        imageSrc={propietaryimage}


      />
      <Text
        textTitle={
          "Battery Solution International"
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
      <Footer  />

    </div>
  );
}
