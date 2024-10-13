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
            
            header: 'Accountant',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '0.6',
        },
        {
            
            header: 'Marketer',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '0.8'
        },
        {
           
            header: 'Developer',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '1.0',
        },
        {
            
            header: 'Manager',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '1.2',
        },
        {
            
            header: 'Designer',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '1.4',
        },
        {
            
            header: 'Customer Service',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '1.6',
        },
        {
            
            header: 'Sales Representative',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '1.8',
        },
        {
            
            header: 'Human Resources Manager',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Read: 'read more',
            delay: '2.0',
        },
    ];

    return (
        <section className=" w-full grid grid-rows-1 px-4 py-14 bg-rolebg lg:px-32  md:px-20">
             <div className="flex flex-col w-full pb-10">
                <AnimatedWrapper delay={0.2}>
                <h1 className="text-3xl text-textgreen1 font-bold leading-normal"> Available Roles</h1>
                </AnimatedWrapper>
                <AnimatedWrapper delay={0.4}>
                <p className="text-sm  leading-5">Our technology monitors and restores industrial battery cells to near original capacity through regular maintenance.
          Each 2v cell is treated as an independent unit, allowing for precise quality.</p>
                </AnimatedWrapper>
         
         
          
         </div>
            <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4  ">
                {cardsData.map((card, index) => (
                    <AnimatedWrapper delay={card.delay}>
                          <RoleCard
                        key={index}
                        
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
