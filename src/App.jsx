import { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Filters from './Filters';
import Header from './Header';

function App() {
    const [foods, setFoods] = useState(data);

    const onFilter = (category = null) => {
        if (!category) return setFoods(data);
        return setFoods(() =>
            data.filter((item) => item.category === category)
        );
    };

    const filters = [];
    data.forEach(
        (item) =>
            !filters.includes(item.category) && filters.push(item.category)
    );
    return (
        <main className='container'>
            <Header />
            <Filters onFilter={onFilter} filters={filters} />
            <Menu foods={foods} />
        </main>
    );
}

export default App;
