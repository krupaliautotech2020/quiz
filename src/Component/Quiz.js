import React, { Component } from 'react';
// import './assets/style.css';
import './Quiz.css'
import './Question/Question'
import Question from './Question/Question';
import Answer from './Answer/Answer'; 

class Quiz extends Component{
  state = {
    Questions: {
        1: 'What US city is known as the "birthplace of jazz"?',
        2: 'What is the capital of Greece?',
        3: 'What planet gave birth to Superman?'
    },
    Answers: {
      1: {
          1: 'Chicago',
          2: 'New Orleans',
          3: 'New York'
      },
      2: {
        1: 'Athens',
        2: 'Patras',
        3: 'Kalamata'
     },
     3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn'
            }

    },
    correctAnswers: {
      1: '2',
      2: '1',
      3: '1'
  },
  correctAnswer: 0,
  clickedAnswer: 0,
  step: 1,
  score: 0
}

checkAnswer = Answers =>{
  const{ correctAnswers, step, score} = this.state;
  if(Answers === correctAnswers[step]){
    this.setState({
      score: score + 1,
      correctAnswer:correctAnswers[step],
      clickedAnswer: Answers
    });
  }else{
    this.setState({
      correctAnswer:0,
      clickedAnswer: Answers
    });
  }
}

  nextStep = step => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0
    }); 
  }


  render(){
    let{ Questions,correctAnswer,clickedAnswer, Answers,score, step } = this.state;
    return(
      <div className="Content">
      {       
        step <= Object.keys(Questions).length ? 
       (<>
       <Question 
       Question={Questions[step]}
       />
       <Answer 
          Answer={Answers[step]}
          step={step}
          checkAnswer={this.checkAnswer}
          correctAnswer={correctAnswer}
          clickedAnswer={clickedAnswer}
          />
        <button 
          className="NextStep"
          disabled={
            clickedAnswer && Object.keys(Questions).length >= step
              ? false : true
          }
          onClick={() => this.nextStep(step)}
        >
          Next
         </button>
         </>):
     
        (
          <div className="finalPage">
            <p>Quiz Completed</p>
        <p>Your Score is: {score} of {Object.keys(Questions).length}</p>
        <p>Thank You</p>
        </div>
        )
  }
      </div>
    );
  }
}

export default Quiz;