// components/Card.js
import React from 'react';
import Image from 'next/image';

const RoleCard = ({ header, paragraph,Read }) => {
    return (
        <div className="bg-white w-full p-4  rounded-lg  border border-cardoutline overflow-hidden">
            
            <div className="py-4">
                <h2 className="text-sm text-roltext font-medium mb-1">{header}</h2>
                <p className="text-cardtext text-xs py-4">{paragraph}</p>
                <a href='/info' className="text-roletext text-xs pt-12">{Read}</a>
            </div>
        </div>
    );
};

export default RoleCard;
