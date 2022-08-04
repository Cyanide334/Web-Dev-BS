import React from 'react';

const Section = ({ title, children }) => {
    return (
        <div>
            <h5 className='lh-4'>Filter by:</h5>
            {children}
        </div>
    );
};

export default Section;