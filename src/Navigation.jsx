import React from 'react';

const Navigation = ({ data, display, setDisplay }) => {
    return (
        <div className='navigation'>
            {data?.map((category, index) => (
                <button
                    className={`navButton ${index === display ? 'active' : ''}`}
                    key={category?.id}
                    onClick={() => setDisplay(index)}
                >
                    {category?.company}
                </button>
            ))}
        </div>
    );
};

export default Navigation;
