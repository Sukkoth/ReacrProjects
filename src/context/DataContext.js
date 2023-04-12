import { useState, createContext } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [records, setRecords] = useState([
        {
            id: 1,
            text: 'Buy Shoes',
            amount: -500,
        },
        {
            id: 2,
            text: 'Salary',
            amount: 4000,
        },
        {
            id: 3,
            text: 'Households',
            amount: -240,
        },
    ]);
    const handleInsertRecord = (record) => {
        const id = records.length > 0 ? records[records.length - 1].id + 1 : 1;
        const newRecord = { id, ...record };
        setRecords([...records, newRecord]);
    };

    const handleRemoveRecord = (recordId) => {
        setRecords(records.filter((record) => record.id != recordId));
    };

    return (
        <DataContext.Provider
            value={{
                records,
                handleInsertRecord,
                handleRemoveRecord,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
