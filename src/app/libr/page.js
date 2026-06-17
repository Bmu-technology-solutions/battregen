"use client";

import Gallery from "../components/gallery";
import Footer from "../components/footer";
import NavbarTwo from "../components/navbar2";
import LithiumSolution from "../components/lithiumsolution";

export default function Lithium() {
  return (
    <div>
      <NavbarTwo />

      {/* HERO SECTION */}
<section className="relative bg-brandblack overflow-hidden">

  {/* Glow background behind text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[400px] h-[400px] bg-[#AAFD33] opacity-20 blur-[120px] rounded-full" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-28">
    <div className="flex flex-col items-center text-center">

      <h1
        className="
          font-bold text-[38px] md:text-[48px] lg:text-[60px]
          leading-[1.05]
          bg-[linear-gradient(94deg,#AAFD33_0%,#7CFF4F_50%,#2DFF7A_100%)]
          bg-clip-text text-transparent
        "
      >
        LITHIUM{" "}
        <span className="text-white">
          SOLUTION
        </span>
      </h1>

      <p className="mt-5 max-w-[700px] text-white text-[15px] md:text-[17px] leading-[1.8]">
        Innovative lithium battery solutions designed to maximize performance,
        extend lifespan, and support a more sustainable energy future.
      </p>

    </div>
  </div>
</section>

      <LithiumSolution />

      <Gallery buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }} />

      <Footer />
    </div>
  );
}