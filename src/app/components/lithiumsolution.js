import React from 'react';
import Card from './card';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import AnimatedWrapper from './animatedwrapper';

const LithiumSolution = () => {
 const cardsData = [
  {
    image: image1,
    header: 'Advanced Battery Testing',
    paragraph: 'Deliver accurate diagnostics with real-time state-of-charge and health insights for lithium-ion batteries.',
    delay: '0.2',
  },
  {
    image: image2,
    header: 'Efficient Monitoring',
    paragraph: 'Continuously track battery performance and behavior to ensure stability, safety, and optimal usage.',
    delay: '0.4',
  },
  {
    image: image3,
    header: 'Performance Optimization',
    paragraph: 'Identify inefficiencies early and optimize battery output for longer lifespan and improved reliability.',
    delay: '0.6',
  },
  {
    image: image3,
    header: 'Data Analysis',
    paragraph: 'Transform battery data into actionable insights for better decision-making and system improvement.',
    delay: '0.8',
  },
  {
    image: image1,
    header: 'Remote Oversight',
    paragraph: 'Monitor and manage battery systems remotely with centralized control and real-time visibility.',
    delay: '1.0',
  },
  {
    image: image2,
    header: 'Cost Efficiency',
    paragraph: 'Reduce maintenance costs and downtime through predictive monitoring and early fault detection.',
    delay: '1.2',
  },
];

  return (
    <section className="grid grid-rows-1 px-4 my-28 lg:px-12 lg:mx-16 md:mx-22 md:px-20">

      {/* 🔥 TOP HEADING SECTION */}
   <div className="flex flex-col items-center text-center mb-12">

  <AnimatedWrapper delay={0.1}>
    <h2 className="text-3xl md:text-4xl font-bold text-textgreen1">
      Drive Innovation with Battregen Lithium Solutions
    </h2>
  </AnimatedWrapper>

  {/* SECOND HEADING / SUBHEADING */}
  <AnimatedWrapper delay={0.15}>
    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-textgreen1/80">
      Next Generation Battery Testing, Made Effortless
    </h3>
  </AnimatedWrapper>

  <AnimatedWrapper delay={0.2}>
    <p className="mt-4 max-w-[700px] text-sm md:text-base text-black leading-relaxed">
      Discover Battregen Lithium Solutions, a unified lithium-ion battery platform for testing, monitoring, and balancing with accuracy, speed, and control.
    </p>
  </AnimatedWrapper>

</div>

      {/* CARDS GRID */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cardsData.map((card, index) => (
          <AnimatedWrapper key={index} delay={card.delay}>
            <Card
              image={card.image}
              header={card.header}
              paragraph={card.paragraph}
            />
          </AnimatedWrapper>
        ))}
      </div>

    </section>
  );
};

export default LithiumSolution;