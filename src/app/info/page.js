// app/about/page.js
"use client"
import HeroSection2 from "../components/herosection2";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Text from "../components/text";



export default function Career() {
  return (
    <div>
     <Navbar/>
     <HeroSection2
        heroTitle="Accountant"
        paragraph="Come join a team that's redefining the financial experience for millions of people in emerging markets.
"
    
        headercolor="brandblack"
      />
      <Text 
         textTitle={<span className="leading-3 text-xl text-black">  Who we are </span>
        
       }
       paragraph={ <>
        Our Mission is to play a key role in sustainable energy future by
        revitalizing used batteries and promoting environmental responsibility.
        Our Vision is to become Africa foremost provider of battery regeneration solutions.
        Our Core Values are:
        <br />
        <span className="font-medium">Innovation:</span> Constantly striving for technological advancements and creative
        solutions. <br />
        <span className="font-medium">Sustainability:</span> Prioritizing environmental impact reduction and sustainable practices. <br/>
        <span className="font-medium">Integrity:</span> Commitment to honesty, transparency, and ethical practices.
      </>
       
       }
        backgroundcolor="bg-rolebg"
        />
         <Text 
         textTitle={<span className="leading-3 text-xl text-black">  Job Summary </span>
        
       }
       paragraph={ <>
        Lorem ipsum dolor sit amet consectetur. Fringilla consectetur tortor morbi aenean platea pretium. Elementum sociis ornare venenatis velit blandit id feugiat mauris. 
        Vitae nibh est venenatis nunc pellentesque vitae nunc. Non scelerisque sit nisl faucibus penatibus cum dignissim quis neque. Tincidunt turpis nulla netus varius.
        Ante eu ornare magna eget blandit feugiat. Morbi dolor integer vel pretium quis metus nibh. Senectus mi ornare habitasse integer. Velit sollicitudin pharetra eget facilisis.
        Cras nisi porta 
        integer nibh faucibus aliquam sed facilisis. Donec mattis quam aliquam habitant amet tincidunt interdum egestas tellus. Amet adipiscing in risus mi fringilla rhoncus accumsan tortor posuere. Sed diam nunc aliquam feugiat in mattis et odio.
        Amet viverra turpis ullamcorper ipsum sed pulvinar ut. Mollis orci lectus blandit urna eu. Posuere eu nec ipsum blandit elementum. Morbi parturient velit arcu vel eget consectetur elit aenean cras. Tellus nec magna molestie amet phasellus sed eget aenean enim. Sagittis nunc sed congue enim. Pulvinar quis risus consequat nunc venenatis sapien vel. Sapien lacus non tortor mauris sed nisl ante consectetur elementum. Suspendisse tristique ultrices vestibulum purus pretium.
        Interdum eu venenatis tempus sed. Ultrices gravida facilisi mauris urna et faucibus dui sed. Morbi auctor eleifend nibh ornare. Laoreet consectetur odio lectus risus facilisis varius faucibus. Vel massa in neque tristique. Volutpat tellus natoque nulla vel aliquam odio quis ultricies. Odio sagittis enim viverra eget euismod ultricies consequat odio elementum. Neque enim egestas quis ornare elit dolor. Turpis egestas euismod nulla at quis elit et. Massa magna consectetur et vitae vulputate. Parturient enim tellus nunc facilisis tellus fringilla. Ultricies egestas in ipsum sapien mi turpis diam. Diam tristique pellentesque id mattis..
       
      </>
       }
        backgroundcolor="bg-rolebg"
       
        />
           <Text 
         textTitle={<span className="leading-3 text-xl text-black">  What we can offer </span>
        
       }
       paragraph={ <>
        Lorem ipsum dolor sit amet consectetur. Fringilla consectetur tortor morbi aenean platea pretium. Elementum sociis ornare venenatis velit blandit id feugiat mauris. 
        Vitae nibh est venenatis nunc pellentesque vitae nunc. Non scelerisque sit nisl faucibus penatibus cum dignissim quis neque. Tincidunt turpis nulla netus varius.
        Ante eu ornare magna eget blandit feugiat. Morbi dolor integer vel pretium quis metus nibh. Senectus mi ornare habitasse integer. Velit sollicitudin pharetra eget facilisis.
        Cras nisi porta 
        integer nibh faucibus aliquam sed facilisis. Donec mattis quam aliquam habitant amet tincidunt interdum egestas tellus. Amet adipiscing in risus mi fringilla rhoncus accumsan tortor posuere. Sed diam nunc aliquam feugiat in mattis et odio.
        Amet viverra turpis ullamcorper ipsum sed pulvinar ut. Mollis orci lectus blandit urna eu. Posuere eu nec ipsum blandit elementum. Morbi parturient velit arcu vel eget consectetur elit aenean cras. Tellus nec magna molestie amet phasellus sed eget aenean enim. Sagittis nunc sed congue enim. Pulvinar quis risus consequat nunc venenatis sapien vel. Sapien lacus non tortor mauris sed nisl ante consectetur elementum. Suspendisse tristique ultrices vestibulum purus pretium.
        Interdum eu venenatis tempus sed. Ultrices gravida facilisi mauris urna et faucibus dui sed. Morbi auctor eleifend nibh ornare. Laoreet consectetur odio lectus risus facilisis varius faucibus. Vel massa in neque tristique. Volutpat tellus natoque nulla vel aliquam odio quis ultricies. Odio sagittis enim viverra eget euismod ultricies consequat odio elementum. Neque enim egestas quis ornare elit dolor. Turpis egestas euismod nulla at quis elit et. Massa magna consectetur et vitae vulputate. Parturient enim tellus nunc facilisis tellus fringilla. Ultricies egestas in ipsum sapien mi turpis diam. Diam tristique pellentesque id mattis..
       
      </>
       }
       
       buttonOne={{ text: "APPLY FOR THE ROLE", link: "/",}}
       backgroundcolor="bg-rolebg"
       
        />

     
      <Footer />

    </div>
  );
}
