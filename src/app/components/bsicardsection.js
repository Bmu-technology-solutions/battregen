// components/CardSection.js
import React from 'react';
import BsiCard from './bsicard';
import { delay } from 'framer-motion';
import AnimatedWrapper from './animatedwrapper';

const BsiSection = () => {
    const cardsData = [
        {
            
            header: 'Mobility',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay: '0.2'
        },
        {
            
            header: 'Telecom',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay: '0.4'
        },
        {
            
            header: 'Forklift',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay:'0.6'
        },
       
    ];

    return (
        <section className="  w-full  ">
            <div className="w-full flex flex-col   gap-3 border-solid border-zinc-950 ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper delay={card.delay}>
                         <BsiCard
                        key={index}
                       
                        header={card.header}
                        paragraph={card.paragraph}
                    />
                    </AnimatedWrapper>
                   
                ))}
            </div>
        </section>
    );
};

export default BsiSection;
