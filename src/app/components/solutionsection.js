// components/CardSection.js
import React from 'react';
import BsiCard from './bsicard';
import { delay } from 'framer-motion';
import AnimatedWrapper from './animatedwrapper';

const SolutionSection = () => {
    const cardsData = [
        {
            id:'0',
            header: 'Extended battery life guarantee',
            paragraph: 'Batteregen revitalization techniques, such as reconditioning, balancing, or desulfation, help restore or improve the performance of degraded batteries, extending their usable litespan.',
            delay: '0.2'
        },
        {
           
            id:'1',
            header: 'Cost Saving',
            paragraph: 'Revitalized batteries typically require less maintenance as their performance is restored. This reduces costs associated with frequent inspections, repairs, or emergency replacements.',
            delay: '0.4'
        },
        {
            id:'2',
            header: 'Environmental Impact',
            paragraph: 'Batteries that are revitalized instead of discarded contribute to reducing e-waste. Batteries contain materials such as lead, lithium, and other heavy metals that, if improperly disposed of, can pollute the environment.',
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

export default SolutionSection;
