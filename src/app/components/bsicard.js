// components/Card.js
import React from 'react';

const BsiCard = ({ header, paragraph }) => {
    return (
        <div className="w-full h-24 bg-bsicard bg-opacity-50 p-4 rounded-lg border border-greenbutton overflow-hidden">
            <div className="p">
                <h2 className="text-sm font-medium text-textgreen">{header}</h2>
                <p className="text-xs py-1 text-white">{paragraph}</p>
            </div>
        </div>
    );
};

export default BsiCard;
