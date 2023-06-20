import React, { useState } from 'react';

const Question = ({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className='card'>
            <div className='question'>
                <p>{question.question}</p>
                <i
                    className={`fa-solid ${
                        showAnswer ? 'fa-minus' : 'fa-plus'
                    }`}
                    onClick={() => setShowAnswer(!showAnswer)}
                ></i>
            </div>
            {showAnswer && <p className='answer'>{question.answer}</p>}
        </div>
    );
};

export default Question;
