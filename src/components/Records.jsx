import Record from './Record';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const Records = () => {
    const { records } = useContext(DataContext);
    return (
        <>
            <h3>History</h3>
            {records.length > 0 && (
                <ul id='list' className='list'>
                    {records.map((record) => (
                        <Record key={record.id} record={record} />
                    ))}
                </ul>
            )}
            {records.length <= 0 && (
                <h3 style={{ color: 'red' }}>No records to display</h3>
            )}
        </>
    );
};

export default Records;
