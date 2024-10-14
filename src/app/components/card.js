// components/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ image, header, paragraph }) => {
    return (
        <div className="bg-white min-h-56  w-full p-4 rounded-lg  border border-cardoutline overflow-hidden">
            <Image src={image} alt={header} />
            <div className="py-4">
                <h2 className="text-sm font-medium mb-1">{header}</h2>
                <p className="text-cardtext text-xs py-3">{paragraph}</p>
            </div>
        </div>
    );
};

export default Card;
