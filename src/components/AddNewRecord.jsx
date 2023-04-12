import { useState, useContext } from 'react';
import DataContext from '../context/DataContext';

const AddNewRecord = () => {
    const { handleInsertRecord } = useContext(DataContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleSubmit = () => {
        const newRecord = {
            text,
            amount: Number.parseInt(amount),
        };
        handleInsertRecord(newRecord);
        setText('');
        setAmount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form
                id='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        id='text'
                        placeholder='Enter text...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type='number'
                        id='amount'
                        placeholder='Enter amount...'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    );
};

export default AddNewRecord;
