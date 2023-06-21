import React from 'react';

const Filters = ({ onFilter, filters }) => {
    return (
        <div className='filters'>
            <button className='filterButton' onClick={() => onFilter()}>
                All
            </button>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className='filterButton'
                    onClick={() => onFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Filters;
