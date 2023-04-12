import React from 'react';
import DataContext from '../context/DataContext';
import { useContext } from 'react';

const Record = ({ record }) => {
    const { handleRemoveRecord } = useContext(DataContext);
    return (
        <li className={record.amount < 0 ? 'minus' : 'plus'}>
            {record.text} <span>${record.amount}</span>
            <button
                className='delete-btn'
                onClick={(e) => {
                    e.preventDefault();
                    handleRemoveRecord(record.id);
                }}
            >
                x
            </button>
        </li>
    );
};

export default Record;
