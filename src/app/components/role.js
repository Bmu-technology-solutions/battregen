// components/CardSection.js
import React from 'react';
import RoleCard from './rolecard';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import { delay } from 'framer-motion';
import AnimatedWrapper from './animatedwrapper';

const Role = () => {
    const cardsData = [
        {
            
            header: 'Career Growth',
            paragraph: 'We believe in nurturing talent and providing opportunities for advancement. At Battregen Limited, you will have access to professional development programs, mentorship, and clear career progression pathways to help you achieve your full potential.',
           
            delay: '0.6',
        },
        {
            
            header: 'Global Impact',
            paragraph: 'Battregen Limited is a global leader in the energy sector. Your work here will have a far-reaching impact, contributing to critical energy infrastructure and solutions that support communities around the world.',
           
            delay: '0.8'
        },
        {
           
            header: 'Sustainability Focus',
            paragraph: 'Sustainability is at the core of our operations. By joining our team, you will be part of initiatives aimed at reducing environmental impact, promoting renewable energy sources, and ensuring a sustainable future for generations to come.',
           
            delay: '1.0',
        },
      
    ];

    return (
        <section className=" w-full grid grid-rows-1 px-4 py-14 bg-rolebg lg:px-32  md:px-20">
             <div className="flex flex-col w-full pb-2">
                <AnimatedWrapper delay={0.2}>
                <h1 className="text-3xl text-textgreen1 font-bold leading-normal"> Why join Battregen?</h1>
                </AnimatedWrapper>
         </div>
            <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4  ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper   key={index} delay={card.delay}>
                          <RoleCard
                      
                        
                        header={card.header}
                        paragraph={card.paragraph}
                        Read={card.Read}
                    />
                    </AnimatedWrapper>
                  
                ))}
            </div>
            
        </section>
    );
};

export default Role;
