// components/CardSection.js
import React from 'react';
import Card from './card';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import { delay } from 'framer-motion';
import AnimatedWrapper from './animatedwrapper';

const LithiumSolution = () => {
    const cardsData = [
        {
            image: image1,
            header: 'Advanced Battery Testing',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            delay:'0.2',
        },
        {
            image: image2,
            header: 'Efficient Monitoring',
            paragraph: 'catering to an ever-growing market that demands sustainable options for transportation',
            delay:'0.4',
        },
        {
            image: image3,
            header: 'Profitability and Rapid Growth',
            paragraph: 'turn-key franchise model boasts low startup and operational costs for rapid growth',
            delay:'0.6',
        },
        {
            image: image3,
            header: 'Data Analysis',
            paragraph: 'turn-key franchise model boasts low startup and operational costs for rapid growth',
            delay:'0.8',
        },
        {
            image: image1,
            header: 'Remote Oversight',
            paragraph: 'turn-key franchise model boasts low startup and operational costs for rapid growth',
            delay:'1.0',
        },
        {
            image: image2,
            header: 'Save Time & Money',
            paragraph: 'turn-key franchise model boasts low startup and operational costs for rapid growth',
            delay:'1.2',
        },
       
    ];

    return (
        <section className=" grid grid-rows-1 px-2 my-28 lg:px-12 lg:mx-16 md:mx-22 md:px-20">
            <div className="w-full px-2 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper delay={card.delay}>
                          <Card
                        key={index}
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
