import React from 'react';
import './Answer.css';

const Answer = (props) => {
    console.log(props)
    let Answerss = Object.keys(props.Answer || {})
    .map((qAnswer, i) => (
        <li 
        className =
        {
            props.correctAnswer === qAnswer ?
            'correct':
            props.clickedAnswer === qAnswer ?
            'incorrect' : ''
        }
        onClick={() => props.checkAnswer(qAnswer)}
        key={qAnswer}>
            {props.Answer[qAnswer]}
        </li>
    ));
     return(
         <>
        <ul disabled={props.clickedAnswer ? true : false} className="Answers">
        {Answerss}
        </ul>
        <div>
            {
                props.correctAnswer ?
                'Correcct Answer!' :
                props.clickedAnswer ? 'Incorrect Answer!' : ''
            }
            
        </div>
        </>
    );
}

export default Answer;