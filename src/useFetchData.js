import { useEffect } from 'react';
import { useState } from 'react';
const useFetchData = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const fetchedData = await response.json();
            setData(fetchedData);
        } catch (error) {
            console.log('ERROR', error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);
    return { data, isLoading };
};

export default useFetchData;
