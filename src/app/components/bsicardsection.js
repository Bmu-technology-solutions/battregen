// components/CardSection.js
import React from 'react';
import BsiCard from './bsicard';
import { delay } from 'framer-motion';
import AnimatedWrapper from './animatedwrapper';

const BsiSection = () => {
    const cardsData = [
        {
            id:'0',
            header: 'Mobility',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay: '0.2'
        },
        {
           
            id:'1',
            header: 'Telecom',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay: '0.4'
        },
        {
            id:'2',
            header: 'Forklift',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
            delay:'0.6'
        },
       
    ];

    return (
        <section className="  w-full  ">
            <div className="w-full flex flex-col  gap-3 border-solid border-zinc-950 ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper  key={index}  delay={card.delay}>
                         <BsiCard
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
