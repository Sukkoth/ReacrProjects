import AddNewRecord from './components/AddNewRecord';
import Header from './components/Header';
import Records from './components/Records';
import { DataProvider } from './context/DataContext';

function App() {
    return (
        <div className='container'>
            <DataProvider>
                <Header />

                <Records />

                <AddNewRecord />
            </DataProvider>
        </div>
    );
}

export default App;
