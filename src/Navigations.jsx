import React from 'react';

const Navigations = ({ index, setIndex, reviews }) => {
    const changeIndex = (num) => {
        if (num == reviews) return setIndex(0);
        if (num <= 0) return setIndex(reviews - 1);
        return setIndex(num);
    };
    return (
        <div className='navigations'>
            <button onClick={() => changeIndex(index - 1)}>
                <i className='fa-sharp fa-regular fa-less-than'></i>
            </button>
            <button onClick={() => changeIndex(index - 1)}>
                <i className='fa-sharp fa-regular fa-greater-than'></i>
            </button>
        </div>
    );
};

export default Navigations;
