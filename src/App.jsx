import { useState } from 'react';
import './App.css';
import reviewData from './reviews';
import Card from './Card';
import Navigations from './Navigations';

function App() {
    const [index, setIndex] = useState(0);
    const [reviews, setReviews] = useState(reviewData);

    return (
        <>
            <div>
                <h3 className='header'>Our Reviews</h3>
                <div className='card'>
                    <Card
                        name={reviews[index].name}
                        title={reviews[index].title}
                        reviewText={reviews[index].reviewText}
                        avatar={reviews[index].img}
                    />

                    <Navigations
                        setIndex={setIndex}
                        index={index}
                        reviews={reviews.length}
                    />

                    <button
                        className='surprise'
                        onClick={() => setIndex(Math.floor(Math.random() * 10))}
                    >
                        Surprise Me
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
