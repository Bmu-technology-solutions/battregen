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
            paragraph: 'Ensuring reliable performance and minimizing downtime for mobile equipment, such as electric vehicles, carts, or other machines, rely on batteries for power.',
            delay: '0.2'
        },
        {
           
            id:'1',
            header: 'Telecom',
            paragraph: 'We ensure that backup power solutions such as batteries (e.g, UPS systems), are ready to provide uniterrupted service during power outages or equipment failure.',
            delay: '0.4'
        },
        {
            id:'2',
            header: 'Forklift',
            paragraph: 'Focused on extending the life and improving the performance of forklift batteries.',
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
