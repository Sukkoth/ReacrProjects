import React from 'react';

const Content = ({ basic, duties }) => {
    const { title, company, dates } = basic || [];
    return (
        <div className='content'>
            <h3>{title}</h3>
            <p className='company'>{company}</p>
            <p className='date'>{dates}</p>
            <div className='duties'>
                {duties?.map((duty, index) => (
                    <p key={index}>
                        <i className='fa-solid fa-angles-right'></i>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis quibusdam optio, illo cupiditate quas
                        eveniet! Hic pariatur ipsam debitis omnis?
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Content;
