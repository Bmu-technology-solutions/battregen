// components/CardSection.js
import React from 'react';
import Card from './card';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import AnimatedWrapper from './animatedwrapper';

const CardSection = () => {
    const cardsData = [
        {
            id:'0',
            image: image1,
            header: 'Proprietary Revitalization Method',
            paragraph: 'These methods typically involves rebalancing the electrolyte and internal components in various types of batteries.',
            delay:'0.2',
        },
        {
            id:'1',
            image: image2,
            header: 'industrial movers in the west African stored energy sector',
            paragraph: 'catering to an ever-growing market that demands sustainable options for transportation',
            delay:'0.4'
        },
        {
            id:'2',
            image: image3,
            header: 'Eco-friendly Solution',
            paragraph: 'Eliminating waste entirely from the refurbishment process',
            delay:'0.6'
        },
        {
            id:'3',
            image: image4,
            header: 'Cutting-Edge Technology',
            paragraph: 'Employing advanced formulas to extend battery life significantly and performance',
            delay:'0.8'
        },
    ];

    return (
        <section className="  my-28 lg:px-12 lg:mx-16 md:mx-22 md:px-24">
            <div className="w-full px-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-8 gap-3  ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper  key={index} delay={card.delay} >
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

export default CardSection;
