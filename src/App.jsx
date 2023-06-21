import Content from './Content';
import Navigation from './Navigation';
import useFetchData from './useFetchData';
import { useState } from 'react';

function App() {
    const { data, isLoading } = useFetchData(
        'https://course-api.com/react-tabs-project'
    );
    const [display, setDisplay] = useState(0);
    return (
        <main className='container'>
            {!isLoading && (
                <>
                    <Navigation
                        data={data}
                        display={display}
                        setDisplay={setDisplay}
                    />
                    <Content
                        basic={data[display]}
                        duties={data[display]?.duties}
                    />
                </>
            )}
        </main>
    );
}
export default App;
