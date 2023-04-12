import { useContext } from 'react';
import DataContext from '../context/DataContext';
const Header = () => {
    const { records, totalSum } = useContext(DataContext);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'>
                ${records.reduce((total, record) => total + record.amount, 0)}
            </h1>

            <div className='inc-exp-container'>
                <div>
                    <h4>Income</h4>
                    <p id='money-plus' className='money plus'>
                        $
                        {records.reduce(
                            (income, record) =>
                                record.amount >= 0
                                    ? income + record.amount
                                    : income + 0,
                            0
                        )}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id='money-minus' className='money minus'>
                        $
                        {records.reduce(
                            (expense, record) =>
                                record.amount < 0
                                    ? expense + record.amount
                                    : expense + 0,
                            0
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;
