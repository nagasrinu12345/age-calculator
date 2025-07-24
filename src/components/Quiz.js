import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
let questions = [
    {
        question: 'Which of the following is the correct name of React.js?',
        options: ['react', 'reactjs', 'react.js', 'all the above'],
        answer: 'all the above'
    },
    {
        question: 'Which of the following are the advantages of React.js?',
        options: ['a', 'b', 'c', 'd'],
        answer: 'd'
    }
]

function Quiz() {
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [score, setScore] = useState(0)
    let [showResult, setShowResult] = useState(false)
    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const next = currentQuestion + 1;
        if (next < questions.length) {
            setCurrentQuestion(next);
        } else {
            setShowResult(true);
        }
    };
    return (
        <div>
            {
                showResult ? (
                    <div>
                        <h2>Quiz Complete!</h2>
                        <p>Your Score: {score}/{questions.length}</p>
                    </div>
                ) : (
                    <div>
                        <h2>{questions[currentQuestion].question}</h2>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                style={{ display: 'block', margin: '10px 0', padding: 10 }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )
            }
            <Link to='/naga'><button>back</button></Link>
        </div>

    )
}

export default Quiz