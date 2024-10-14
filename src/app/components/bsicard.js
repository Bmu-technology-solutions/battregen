// components/Card.js
import React from 'react';

const BsiCard = ({ header, paragraph }) => {
    return (
        <div className="w-full  bg-bsicard bg-opacity-50 px-4  rounded-lg border border-greenbutton overflow-hidden">
            <div className="py-4">
                <h2 className="text-sm font-medium text-textgreen">{header}</h2>
                <p className="text-xs text-white">{paragraph}</p>
            </div>
        </div>
    );
};

export default BsiCard;
