// components/CardSection.js
import React from 'react';
import BsiCard from './bsicard';

const BsiSection = () => {
    const cardsData = [
        {
            
            header: 'Mobility',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
        },
        {
            
            header: 'Telecom',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
        },
        {
            
            header: 'Forklift',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
        },
       
    ];

    return (
        <section className="  w-full  ">
            <div className="w-full flex flex-col   gap-3 border-solid border-zinc-950 ">
                {cardsData.map((card, index) => (
                    <BsiCard
                        key={index}
                       
                        header={card.header}
                        paragraph={card.paragraph}
                    />
                ))}
            </div>
        </section>
    );
};

export default BsiSection;
